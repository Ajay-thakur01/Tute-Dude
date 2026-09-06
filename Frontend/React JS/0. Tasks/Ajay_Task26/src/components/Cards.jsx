function Cards({card, link}){
    return(
        <div className='rounded-xl  bg-[linear-gradient(90deg,#ff0080,#7928ca,#00d4ff,#ff0080)]
            bg-[length:300%_100%] animate-gradient flex flex-col p-1 items-center justify-center'>
          <div className='bg-black text-white rounded-xl p-6'>
            <img className='size-40 object-cover rounded' src={link} alt="" />
          <h1 className='text-center pt-4'>{card || "Card"}</h1>
          <p className='text-xs text-gray-400 p-3'>This is {card || "Card"} Discription</p>
          </div>
        </div>
    )
}

export default Cards