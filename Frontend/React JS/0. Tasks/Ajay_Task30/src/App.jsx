import { useEffect, useState } from 'react'
import './App.css'

const pieces = {
  white: {
    king: '♔',
    queen: '♕',
    rook: '♖',
    bishop: '♗',
    knight: '♘',
    pawn: '♙'
  },

  black: {
    king: '♚',
    queen: '♛',
    rook: '♜',
    bishop: '♝',
    knight: '♞',
    pawn: '♟'
  }
}

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function createBoard() {

  const board = Array(64).fill(null)

  const backRank = [
    'rook',
    'knight',
    'bishop',
    'queen',
    'king',
    'bishop',
    'knight',
    'rook'
  ]

  for (let i = 0; i < 8; i++) {

    board[i] = {
      type: backRank[i],
      color: 'black'
    }

    board[i + 8] = {
      type: 'pawn',
      color: 'black'
    }

    board[48 + i] = {
      type: 'pawn',
      color: 'white'
    }

    board[56 + i] = {
      type: backRank[i],
      color: 'white'
    }
  }

  return board
}

function getRow(index) {
  return Math.floor(index / 8)
}

function getCol(index) {
  return index % 8
}

function getIndex(row, col) {

  if (row < 0 || row > 7 || col < 0 || col > 7) {
    return -1
  }

  return row * 8 + col
}

function getSquareName(index) {

  const row = getRow(index)
  const col = getCol(index)

  return files[col] + (8 - row)
}

function oppositeColor(color) {
  return color === 'white' ? 'black' : 'white'
}


/* ---------------------------------------------------
   ATTACK CHECK
--------------------------------------------------- */

function isSquareAttacked(board, square, byColor) {

  const row = getRow(square)
  const col = getCol(square)

  // Pawn attacks
  const pawnRow = byColor === 'white' ? row + 1 : row - 1

  for (const pawnCol of [col - 1, col + 1]) {

    const index = getIndex(pawnRow, pawnCol)

    if (index !== -1) {

      const piece = board[index]

      if (
        piece &&
        piece.color === byColor &&
        piece.type === 'pawn'
      ) {
        return true
      }
    }
  }


  // Knight attacks
  const knightMoves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1]
  ]

  for (const [dr, dc] of knightMoves) {

    const index = getIndex(row + dr, col + dc)

    if (index !== -1) {

      const piece = board[index]

      if (
        piece &&
        piece.color === byColor &&
        piece.type === 'knight'
      ) {
        return true
      }
    }
  }


  // King attacks
  for (let dr = -1; dr <= 1; dr++) {

    for (let dc = -1; dc <= 1; dc++) {

      if (dr === 0 && dc === 0) {
        continue
      }

      const index = getIndex(row + dr, col + dc)

      if (index !== -1) {

        const piece = board[index]

        if (
          piece &&
          piece.color === byColor &&
          piece.type === 'king'
        ) {
          return true
        }
      }
    }
  }


  // Rook and Queen attacks
  const rookDirections = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  for (const [dr, dc] of rookDirections) {

    let r = row + dr
    let c = col + dc

    while (r >= 0 && r < 8 && c >= 0 && c < 8) {

      const index = getIndex(r, c)
      const piece = board[index]

      if (piece) {

        if (
          piece.color === byColor &&
          (piece.type === 'rook' || piece.type === 'queen')
        ) {
          return true
        }

        break
      }

      r += dr
      c += dc
    }
  }


  // Bishop and Queen attacks
  const bishopDirections = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
  ]

  for (const [dr, dc] of bishopDirections) {

    let r = row + dr
    let c = col + dc

    while (r >= 0 && r < 8 && c >= 0 && c < 8) {

      const index = getIndex(r, c)
      const piece = board[index]

      if (piece) {

        if (
          piece.color === byColor &&
          (piece.type === 'bishop' || piece.type === 'queen')
        ) {
          return true
        }

        break
      }

      r += dr
      c += dc
    }
  }

  return false
}


/* ---------------------------------------------------
   CHECK
--------------------------------------------------- */

function isKingInCheck(board, color) {

  const kingIndex = board.findIndex(
    piece => piece &&
      piece.color === color &&
      piece.type === 'king'
  )

  if (kingIndex === -1) {
    return true
  }

  return isSquareAttacked(
    board,
    kingIndex,
    oppositeColor(color)
  )
}


/* ---------------------------------------------------
   PSEUDO LEGAL MOVES
--------------------------------------------------- */

function getPseudoMoves(
  board,
  from,
  color,
  castlingRights,
  enPassant
) {

  const piece = board[from]

  if (!piece || piece.color !== color) {
    return []
  }

  const row = getRow(from)
  const col = getCol(from)

  const moves = []


  // PAWN
  if (piece.type === 'pawn') {

    const direction = color === 'white' ? -1 : 1
    const startRow = color === 'white' ? 6 : 1

    const oneStep = getIndex(row + direction, col)

    if (
      oneStep !== -1 &&
      !board[oneStep]
    ) {

      moves.push({
        from,
        to: oneStep
      })

      const twoStep = getIndex(
        row + direction * 2,
        col
      )

      if (
        row === startRow &&
        twoStep !== -1 &&
        !board[twoStep]
      ) {

        moves.push({
          from,
          to: twoStep,
          pawnDouble: true
        })
      }
    }


    for (const dc of [-1, 1]) {

      const captureIndex = getIndex(
        row + direction,
        col + dc
      )

      if (captureIndex === -1) {
        continue
      }

      const target = board[captureIndex]

      if (
        target &&
        target.color !== color &&
        target.type !== 'king'
      ) {

        moves.push({
          from,
          to: captureIndex,
          capture: true
        })
      }


      if (
        captureIndex === enPassant
      ) {

        moves.push({
          from,
          to: captureIndex,
          capture: true,
          enPassant: true
        })
      }
    }
  }


  // KNIGHT
  if (piece.type === 'knight') {

    const knightMoves = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1]
    ]

    for (const [dr, dc] of knightMoves) {

      const to = getIndex(
        row + dr,
        col + dc
      )

      if (to === -1) {
        continue
      }

      if (
        !board[to] ||
        (
          board[to].color !== color &&
          board[to].type !== 'king'
        )
      ) {

        moves.push({
          from,
          to,
          capture: Boolean(board[to])
        })
      }
    }
  }


  // ROOK
  if (
    piece.type === 'rook' ||
    piece.type === 'queen'
  ) {

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]

    for (const [dr, dc] of directions) {

      let r = row + dr
      let c = col + dc

      while (r >= 0 && r < 8 && c >= 0 && c < 8) {

        const to = getIndex(r, c)
        const target = board[to]

        if (!target) {

          moves.push({
            from,
            to
          })

        } else {

          if (
            target.color !== color &&
            target.type !== 'king'
          ) {

            moves.push({
              from,
              to,
              capture: true
            })
          }

          break
        }

        r += dr
        c += dc
      }
    }
  }


  // BISHOP
  if (
    piece.type === 'bishop' ||
    piece.type === 'queen'
  ) {

    const directions = [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1]
    ]

    for (const [dr, dc] of directions) {

      let r = row + dr
      let c = col + dc

      while (r >= 0 && r < 8 && c >= 0 && c < 8) {

        const to = getIndex(r, c)
        const target = board[to]

        if (!target) {

          moves.push({
            from,
            to
          })

        } else {

          if (
            target.color !== color &&
            target.type !== 'king'
          ) {

            moves.push({
              from,
              to,
              capture: true
            })
          }

          break
        }

        r += dr
        c += dc
      }
    }
  }


  // KING
  if (piece.type === 'king') {

    for (let dr = -1; dr <= 1; dr++) {

      for (let dc = -1; dc <= 1; dc++) {

        if (dr === 0 && dc === 0) {
          continue
        }

        const to = getIndex(
          row + dr,
          col + dc
        )

        if (to === -1) {
          continue
        }

        if (
          !board[to] ||
          (
            board[to].color !== color &&
            board[to].type !== 'king'
          )
        ) {

          moves.push({
            from,
            to,
            capture: Boolean(board[to])
          })
        }
      }
    }


    // CASTLING

    if (!isKingInCheck(board, color)) {

      // White king side
      if (
        color === 'white' &&
        castlingRights.whiteKingSide &&
        board[61] === null &&
        board[62] === null &&
        board[63]?.type === 'rook' &&
        board[63]?.color === 'white' &&
        !isSquareAttacked(board, 61, 'black') &&
        !isSquareAttacked(board, 62, 'black')
      ) {

        moves.push({
          from,
          to: 62,
          castle: 'kingSide'
        })
      }


      // White queen side
      if (
        color === 'white' &&
        castlingRights.whiteQueenSide &&
        board[57] === null &&
        board[58] === null &&
        board[59] === null &&
        board[56]?.type === 'rook' &&
        board[56]?.color === 'white' &&
        !isSquareAttacked(board, 59, 'black') &&
        !isSquareAttacked(board, 58, 'black')
      ) {

        moves.push({
          from,
          to: 58,
          castle: 'queenSide'
        })
      }


      // Black king side
      if (
        color === 'black' &&
        castlingRights.blackKingSide &&
        board[5] === null &&
        board[6] === null &&
        board[7]?.type === 'rook' &&
        board[7]?.color === 'black' &&
        !isSquareAttacked(board, 5, 'white') &&
        !isSquareAttacked(board, 6, 'white')
      ) {

        moves.push({
          from,
          to: 6,
          castle: 'kingSide'
        })
      }


      // Black queen side
      if (
        color === 'black' &&
        castlingRights.blackQueenSide &&
        board[1] === null &&
        board[2] === null &&
        board[3] === null &&
        board[0]?.type === 'rook' &&
        board[0]?.color === 'black' &&
        !isSquareAttacked(board, 3, 'white') &&
        !isSquareAttacked(board, 2, 'white')
      ) {

        moves.push({
          from,
          to: 2,
          castle: 'queenSide'
        })
      }
    }
  }

  return moves
}


/* ---------------------------------------------------
   MAKE MOVE
--------------------------------------------------- */

function makeMove(
  board,
  move,
  promotion = 'queen'
) {

  const newBoard = [...board]

  const movingPiece = {
    ...newBoard[move.from]
  }

  newBoard[move.to] = movingPiece
  newBoard[move.from] = null


  // En passant capture
  if (move.enPassant) {

    const direction =
      movingPiece.color === 'white'
        ? 1
        : -1

    const capturedPawn = getIndex(
      getRow(move.to) + direction,
      getCol(move.to)
    )

    newBoard[capturedPawn] = null
  }


  // Castling
  if (move.castle === 'kingSide') {

    const rookFrom =
      movingPiece.color === 'white'
        ? 63
        : 7

    const rookTo =
      movingPiece.color === 'white'
        ? 61
        : 5

    newBoard[rookTo] = newBoard[rookFrom]
    newBoard[rookFrom] = null
  }


  if (move.castle === 'queenSide') {

    const rookFrom =
      movingPiece.color === 'white'
        ? 56
        : 0

    const rookTo =
      movingPiece.color === 'white'
        ? 59
        : 3

    newBoard[rookTo] = newBoard[rookFrom]
    newBoard[rookFrom] = null
  }


  // Promotion
  if (
    movingPiece.type === 'pawn' &&
    (
      getRow(move.to) === 0 ||
      getRow(move.to) === 7
    )
  ) {

    newBoard[move.to] = {
      type: promotion,
      color: movingPiece.color
    }
  }

  return newBoard
}


/* ---------------------------------------------------
   LEGAL MOVES
--------------------------------------------------- */

function getLegalMoves(
  board,
  from,
  color,
  castlingRights,
  enPassant
) {

  const pseudoMoves = getPseudoMoves(
    board,
    from,
    color,
    castlingRights,
    enPassant
  )

  return pseudoMoves.filter(move => {

    const newBoard = makeMove(board, move)

    return !isKingInCheck(
      newBoard,
      color
    )
  })
}


/* ---------------------------------------------------
   ALL LEGAL MOVES
--------------------------------------------------- */

function hasAnyLegalMove(
  board,
  color,
  castlingRights,
  enPassant
) {

  for (let i = 0; i < 64; i++) {

    if (
      board[i] &&
      board[i].color === color
    ) {

      const moves = getLegalMoves(
        board,
        i,
        color,
        castlingRights,
        enPassant
      )

      if (moves.length > 0) {
        return true
      }
    }
  }

  return false
}


/* ---------------------------------------------------
   UPDATE CASTLING RIGHTS
--------------------------------------------------- */

function updateCastlingRights(
  rights,
  piece,
  from,
  to
) {

  const newRights = {
    ...rights
  }

  if (piece.type === 'king') {

    if (piece.color === 'white') {
      newRights.whiteKingSide = false
      newRights.whiteQueenSide = false
    }

    if (piece.color === 'black') {
      newRights.blackKingSide = false
      newRights.blackQueenSide = false
    }
  }


  if (piece.type === 'rook') {

    if (from === 63) {
      newRights.whiteKingSide = false
    }

    if (from === 56) {
      newRights.whiteQueenSide = false
    }

    if (from === 7) {
      newRights.blackKingSide = false
    }

    if (from === 0) {
      newRights.blackQueenSide = false
    }
  }


  // If rook is captured
  if (to === 63) {
    newRights.whiteKingSide = false
  }

  if (to === 56) {
    newRights.whiteQueenSide = false
  }

  if (to === 7) {
    newRights.blackKingSide = false
  }

  if (to === 0) {
    newRights.blackQueenSide = false
  }

  return newRights
}


/* ---------------------------------------------------
   CHESS NOTATION
--------------------------------------------------- */

function getMoveNotation(
  board,
  move,
  promotion,
  check,
  mate,
  castlingRights,
  enPassant
) {

  const piece = board[move.from]

  if (move.castle === 'kingSide') {
    return mate ? 'O-O#' : check ? 'O-O+' : 'O-O'
  }

  if (move.castle === 'queenSide') {
    return mate ? 'O-O-O#' : check ? 'O-O-O+' : 'O-O-O'
  }

  let notation = ''

  const pieceLetters = {
    king: 'K',
    queen: 'Q',
    rook: 'R',
    bishop: 'B',
    knight: 'N',
    pawn: ''
  }

  notation += pieceLetters[piece.type]


  // Pawn capture
  if (
    piece.type === 'pawn' &&
    (move.capture || move.enPassant)
  ) {

    notation += files[getCol(move.from)]
  }


  // Capture
  if (move.capture || move.enPassant) {
    notation += 'x'
  }


  notation += getSquareName(move.to)


  // Promotion
  if (
    piece.type === 'pawn' &&
    (
      getRow(move.to) === 0 ||
      getRow(move.to) === 7
    )
  ) {

    const promotionLetters = {
      queen: 'Q',
      rook: 'R',
      bishop: 'B',
      knight: 'N'
    }

    notation += '=' + promotionLetters[promotion]
  }


  if (mate) {
    notation += '#'
  } else if (check) {
    notation += '+'
  }

  return notation
}

function App() {

  const [board, setBoard] = useState(createBoard)

  const [turn, setTurn] = useState('white')

  const [selectedSquare, setSelectedSquare] =
    useState(null)

  const [legalMoves, setLegalMoves] =
    useState([])

  const [message, setMessage] =
    useState('White to move')

  const [moveHistory, setMoveHistory] =
    useState([])

  const [capturedWhite, setCapturedWhite] =
    useState([])

  const [capturedBlack, setCapturedBlack] =
    useState([])

  const [whiteTime, setWhiteTime] =
    useState(600000)

  const [blackTime, setBlackTime] =
    useState(600000)

  const [moveTime, setMoveTime] =
    useState(30000)

  const [gameOver, setGameOver] =
    useState(false)

  const [winner, setWinner] =
    useState(null)

  const [promotionMove, setPromotionMove] =
    useState(null)

  const [effect, setEffect] = useState(null)
  const [effectId, setEffectId] = useState(0)

  const [castlingRights, setCastlingRights] =
    useState({
      whiteKingSide: true,
      whiteQueenSide: true,
      blackKingSide: true,
      blackQueenSide: true
    })

  const [enPassant, setEnPassant] =
    useState(null)

  const [history, setHistory] =
    useState([])


  /* TIMER */

  useEffect(() => {

    if (gameOver) {
      return
    }

    const timer = setInterval(() => {

      setMoveTime(time => {
        if (time <= 100) {
          setSelectedSquare(null)
          setLegalMoves([])
          setMessage(`${oppositeColor(turn)} to move`)
          setTurn(oppositeColor(turn))
          return 30000
        }

        return time - 100
      })

      if (turn === 'white') {

        setWhiteTime(time => {

          if (time <= 100) {

            clearInterval(timer)
            setGameOver(true)
            setWinner('Black')
            setMessage('Time over! Black wins.')

            return 0
          }

          return time - 100
        })

      } else {

        setBlackTime(time => {

          if (time <= 100) {

            clearInterval(timer)
            setGameOver(true)
            setWinner('White')
            setMessage('Time over! White wins.')

            return 0
          }

          return time - 100
        })
      }

    }, 100)

    return () => clearInterval(timer)

  }, [turn, gameOver])


  function formatTime(milliseconds) {

    const minutes = Math.floor(milliseconds / 60000)
    const secs = Math.floor(milliseconds / 1000) % 60
    const millis = milliseconds % 1000

    return (
      `${String(minutes).padStart(2, '0')}:` +
      `${String(secs).padStart(2, '0')}:` +
      `${String(millis).padStart(3, '0')}`
    )
  }

  function timerClass(milliseconds) {
    return milliseconds <= 10000
      ? 'timer-danger'
      : milliseconds <= 20000
        ? 'timer-warning'
        : ''
  }


  function handleSquareClick(index) {

    if (gameOver || promotionMove) {
      return
    }


    const clickedPiece = board[index]


    // Select own piece
    if (
      clickedPiece &&
      clickedPiece.color === turn
    ) {

      const moves = getLegalMoves(
        board,
        index,
        turn,
        castlingRights,
        enPassant
      )

      setSelectedSquare(index)
      setLegalMoves(moves)
      setMessage(
        `${turn === 'white' ? 'White' : 'Black'} selected ${clickedPiece.type}`
      )

      return
    }


    // No selected piece
    if (selectedSquare === null) {

      setMessage(
        `It is ${turn}'s turn`
      )

      return
    }


    const selectedMove =
      legalMoves.find(
        move => move.to === index
      )


    // Illegal move
    if (!selectedMove) {

      setMessage('Illegal move!')
      return
    }


    const movingPiece =
      board[selectedSquare]


    // Save state for undo
    setHistory(previous => [
      ...previous,
      {
        board: [...board],
        turn,
        whiteTime,
        blackTime,
        moveHistory: [...moveHistory],
        capturedWhite: [...capturedWhite],
        capturedBlack: [...capturedBlack],
        castlingRights: { ...castlingRights },
        enPassant
      }
    ])


    // Promotion
    if (
      movingPiece.type === 'pawn' &&
      (
        getRow(index) === 0 ||
        getRow(index) === 7
      )
    ) {

      setPromotionMove(selectedMove)
      return
    }


    completeMove(
      selectedMove,
      'queen'
    )
  }


  function completeMove(
    move,
    promotion
  ) {

    const movingPiece =
      board[move.from]

    const capturedPiece =
      board[move.to]

    const newBoard =
      makeMove(
        board,
        move,
        promotion
      )


    // Captured pieces
    if (capturedPiece) {

      if (capturedPiece.color === 'white') {

        setCapturedWhite(
          previous => [
            ...previous,
            capturedPiece
          ]
        )

      } else {

        setCapturedBlack(
          previous => [
            ...previous,
            capturedPiece
          ]
        )
      }
    }


    // New castling rights
    const newRights =
      updateCastlingRights(
        castlingRights,
        movingPiece,
        move.from,
        move.to
      )


    // En passant square
    let newEnPassant = null

    if (
      movingPiece.type === 'pawn' &&
      Math.abs(
        getRow(move.to) -
        getRow(move.from)
      ) === 2
    ) {

      newEnPassant = (
        move.from + move.to
      ) / 2
    }


    // Check opponent
    const nextTurn =
      oppositeColor(turn)

    const opponentInCheck =
      isKingInCheck(
        newBoard,
        nextTurn
      )

    const opponentHasMoves =
      hasAnyLegalMove(
        newBoard,
        nextTurn,
        newRights,
        newEnPassant
      )


    const isMate =
      opponentInCheck &&
      !opponentHasMoves

    const isStalemate =
      !opponentInCheck &&
      !opponentHasMoves


    const notation =
      getMoveNotation(
        board,
        move,
        promotion,
        opponentInCheck,
        isMate,
        castlingRights,
        enPassant
      )


    setBoard(newBoard)

    setMoveTime(30000)

    setEffect({
      from: move.from,
      to: move.to,
      capture: Boolean(capturedPiece || move.enPassant),
      id: effectId
    })
    setEffectId(id => id + 1)

    setCastlingRights(newRights)

    setEnPassant(newEnPassant)

    setSelectedSquare(null)

    setLegalMoves([])

    setPromotionMove(null)

    setMoveHistory(previous => [
      ...previous,
      notation
    ])


    if (isMate) {

      setGameOver(true)
      setWinner(
        turn === 'white'
          ? 'White'
          : 'Black'
      )

      setMessage(
        `Checkmate! ${turn === 'white' ? 'White' : 'Black'} wins.`
      )

      return
    }


    if (isStalemate) {

      setGameOver(true)
      setMessage('Stalemate! Draw.')

      return
    }


    if (opponentInCheck) {

      setMessage(
        `${nextTurn === 'white' ? 'White' : 'Black'} is in check!`
      )

    } else {

      setMessage(
        `${nextTurn === 'white' ? 'White' : 'Black'} to move`
      )
    }


    setTurn(nextTurn)
  }

  function handlePromotion(piece) {

    if (!promotionMove) {
      return
    }

    completeMove(
      promotionMove,
      piece
    )
  }


  function undoMove() {

    if (history.length === 0 || gameOver) {
      return
    }

    const previous =
      history[history.length - 1]

    setBoard(previous.board)

    setTurn(previous.turn)

    setWhiteTime(previous.whiteTime)

    setBlackTime(previous.blackTime)

    setMoveTime(30000)

    setMoveHistory(
      previous.moveHistory
    )

    setCapturedWhite(
      previous.capturedWhite
    )

    setCapturedBlack(
      previous.capturedBlack
    )

    setCastlingRights(
      previous.castlingRights
    )

    setEnPassant(
      previous.enPassant
    )

    setHistory(
      history.slice(0, -1)
    )

    setSelectedSquare(null)

    setLegalMoves([])

    setGameOver(false)

    setWinner(null)

    setMessage(
      `${previous.turn === 'white' ? 'White' : 'Black'} to move`
    )
  }


  function resetGame() {

    setBoard(createBoard())

    setTurn('white')

    setSelectedSquare(null)

    setLegalMoves([])

    setMessage('White to move')

    setMoveHistory([])

    setCapturedWhite([])

    setCapturedBlack([])

    setWhiteTime(600000)

    setBlackTime(600000)

    setMoveTime(30000)

    setEffect(null)

    setGameOver(false)

    setWinner(null)

    setPromotionMove(null)

    setHistory([])

    setCastlingRights({
      whiteKingSide: true,
      whiteQueenSide: true,
      blackKingSide: true,
      blackQueenSide: true
    })

    setEnPassant(null)
  }


  const whiteInCheck =
    isKingInCheck(board, 'white')

  const blackInCheck =
    isKingInCheck(board, 'black')


  return (
    <div className="chess-app min-h-screen px-4 py-8 text-white">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="mb-8 text-center">

          <h1 className="chess-title text-4xl font-bold">
            Chess
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            React Chess Game
          </p>

        </div>


        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          <div>

            {/* BLACK PLAYER */}

            <div className={`player-card mb-4 ${turn === 'black' ? 'player-card--active' : ''}`}>
              <div className="player-identity">
                <span className="player-avatar player-avatar--black">♞</span>
                <div>
                  <span className="player-kicker">Black player</span>
                  <strong>Black</strong>
                </div>
              </div>
              <div className="timer-stack">
                <span className="timer-label">Game</span>
                <strong>{formatTime(blackTime)}</strong>
                <span className={`timer-move ${turn === 'black' ? timerClass(moveTime) : ''}`}>
                  Move {turn === 'black' ? formatTime(moveTime) : '--:--:---'}
                </span>
              </div>

            </div>


            {/* CHESS BOARD */}

            <div className="chess-board-frame mx-auto aspect-square w-full max-w-[720px] overflow-hidden rounded-lg border-4 shadow-2xl">

              <div className="grid h-full w-full grid-cols-8">

                {board.map((piece, index) => {

                  const row = getRow(index)
                  const col = getCol(index)

                  const isLight =
                    (row + col) % 2 === 0

                  const isSelected =
                    selectedSquare === index

                  const isLegal =
                    legalMoves.some(
                      move => move.to === index
                    )

                  const isCapture =
                    isLegal &&
                    board[index] !== null

                  const isKingCheck =
                    piece?.type === 'king' &&
                    (
                      piece.color === 'white'
                        ? whiteInCheck
                        : blackInCheck
                    )


                  return (
                    <button
                      key={index}
                      onClick={() =>
                        handleSquareClick(index)
                      }
                      className={`
                        chess-square
                        relative flex aspect-square
                        items-center justify-center
                        text-4xl sm:text-5xl md:text-6xl
                        transition
                        ${
                          isLight
                            ? 'chess-square--light'
                            : 'chess-square--dark'
                        }
                        ${
                          isSelected
                            ? 'ring-4 ring-inset ring-yellow-400'
                            : ''
                        }
                        ${
                          isKingCheck
                            ? 'bg-red-500'
                            : ''
                        }
                        ${effect?.to === index ? 'square-arrival' : ''}
                        ${effect?.capture && effect.to === index ? 'capture-burst' : ''}
                      `}
                    >

                      {/* Square name */}

                      {col === 0 && (
                        <span
                          className={`
                            absolute left-1 top-1
                            text-[10px] font-bold
                            ${
                              isLight
                                ? 'text-[#b58863]'
                                : 'text-[#f0d9b5]'
                            }
                          `}
                        >
                          {8 - row}
                        </span>
                      )}


                      {row === 7 && (
                        <span
                          className={`
                            absolute bottom-1 right-1
                            text-[10px] font-bold
                            ${
                              isLight
                                ? 'text-[#b58863]'
                                : 'text-[#f0d9b5]'
                            }
                          `}
                        >
                          {files[col]}
                        </span>
                      )}


                      {/* Legal move */}

                      {isLegal && !isCapture && (
                        <span className="absolute h-4 w-4 rounded-full bg-black/30" />
                      )}


                      {isCapture && (
                        <span className="absolute inset-1 rounded-full border-4 border-black/30" />
                      )}


                      {/* Piece */}

                      {piece && (
                        <span
                          key={`${index}-${piece.color}-${piece.type}-${effect?.id || 0}`}
                          className={`
                            chess-piece chess-piece--${piece.color}
                            relative z-10
                            select-none
                            ${effect?.to === index ? 'piece-arrival' : ''}
                            ${
                              piece.color === 'white'
                                ? 'text-white'
                                : 'text-black'
                            }
                            ${
                              piece.color === 'white'
                                ? '[text-shadow:0_2px_2px_#000]'
                                : ''
                            }
                          `}
                        >
                          {pieces[piece.color][piece.type]}
                        </span>
                      )}

                    </button>
                  )
                })}

              </div>

            </div>


            {/* WHITE PLAYER */}

            <div className={`player-card mt-4 ${turn === 'white' ? 'player-card--active' : ''}`}>
              <div className="player-identity">
                <span className="player-avatar player-avatar--white">♙</span>
                <div>
                  <span className="player-kicker">White player</span>
                  <strong>White</strong>
                </div>
              </div>
              <div className="timer-stack">
                <span className="timer-label">Game</span>
                <strong>{formatTime(whiteTime)}</strong>
                <span className={`timer-move ${turn === 'white' ? timerClass(moveTime) : ''}`}>
                  Move {turn === 'white' ? formatTime(moveTime) : '--:--:---'}
                </span>
              </div>

            </div>


            {/* MESSAGE */}

            <div className="mt-4 rounded-xl bg-zinc-900 p-4 text-center">

              <p
                className={
                  message.includes('check')
                    ? 'font-semibold text-red-400'
                    : 'text-zinc-300'
                }
              >
                {message}
              </p>

              {winner && (
                <p className="mt-2 font-bold text-green-400">
                  Winner: {winner}
                </p>
              )}

            </div>

          </div>


          {/* SIDE PANEL */}

          <div className="space-y-5">


            {/* CONTROLS */}

            <div className="rounded-xl bg-zinc-900 p-5">

              <div className="flex gap-3">

                <button
                  onClick={undoMove}
                  disabled={history.length === 0 || gameOver}
                  className="flex-1 rounded-lg bg-zinc-700 px-4 py-2 text-sm font-semibold hover:bg-zinc-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Undo
                </button>

                <button
                  onClick={resetGame}
                  className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold hover:bg-green-700"
                >
                  New Game
                </button>

              </div>

            </div>


            {/* CAPTURED PIECES */}

            <div className="rounded-xl bg-zinc-900 p-5">

              <h2 className="mb-4 font-semibold">
                Captured Pieces
              </h2>

              <div className="mb-3">

                <p className="mb-1 text-xs text-zinc-500">
                  White captured
                </p>

                <div className="min-h-8 text-2xl">
                  {capturedWhite.map(
                    (piece, index) => (
                      <span key={index}>
                        {pieces[piece.color][piece.type]}
                      </span>
                    )
                  )}
                </div>

              </div>


              <div>

                <p className="mb-1 text-xs text-zinc-500">
                  Black captured
                </p>

                <div className="min-h-8 text-2xl">
                  {capturedBlack.map(
                    (piece, index) => (
                      <span key={index}>
                        {pieces[piece.color][piece.type]}
                      </span>
                    )
                  )}
                </div>

              </div>

            </div>


            {/* MOVE LIST */}

            <div className="rounded-xl bg-zinc-900 p-5">

              <h2 className="mb-4 font-semibold">
                Moves
              </h2>

              <div className="max-h-80 overflow-y-auto">

                {moveHistory.length === 0 ? (

                  <p className="text-sm text-zinc-500">
                    No moves yet
                  </p>

                ) : (

                  <div className="space-y-2">

                    {Array.from({
                      length:
                        Math.ceil(
                          moveHistory.length / 2
                        )
                    }).map((_, index) => {

                      const whiteMove =
                        moveHistory[index * 2]

                      const blackMove =
                        moveHistory[index * 2 + 1]

                      return (
                        <div
                          key={index}
                          className="grid grid-cols-[35px_1fr_1fr] gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm"
                        >

                          <span className="text-zinc-500">
                            {index + 1}.
                          </span>

                          <span>
                            {whiteMove}
                          </span>

                          <span>
                            {blackMove || ''}
                          </span>

                        </div>
                      )
                    })}

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* PROMOTION POPUP */}

      {promotionMove && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

          <div className="w-full max-w-sm rounded-xl bg-zinc-900 p-6">

            <h2 className="mb-5 text-center text-xl font-bold">
              Choose Promotion
            </h2>

            <div className="grid grid-cols-4 gap-3">

              {[
                'queen',
                'rook',
                'bishop',
                'knight'
              ].map(piece => (

                <button
                  key={piece}
                  onClick={() =>
                    handlePromotion(piece)
                  }
                  className="rounded-lg bg-zinc-800 p-4 text-4xl hover:bg-zinc-700"
                >
                  {pieces[turn][piece]}
                </button>

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default App