import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    total
  } = useCart();

  const navigate = useNavigate();

  function proceedToPayment() {

    if (cartItems.length === 0) {
      return;
    }

    navigate('/payment');
  }

  return (
    <div className="w-64 h-fit rounded-lg bg-gray-50 p-5 shadow-sm">

      <h2 className="mb-5 text-sm font-semibold">
        Cart
      </h2>

      <div>

        {cartItems.length === 0 ? (

          <p className="text-sm text-gray-500">
            Cart is empty
          </p>

        ) : (

          cartItems.map((item) => (

            <div
              key={item.id}
              className="mb-5"
            >

              <p className="mb-2 text-sm font-medium">
                {item.name}
              </p>

              <div className="flex items-center justify-between">

                <p className="text-sm">
                  ${item.price}
                </p>

                <div className="flex items-center gap-2">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="h-7 w-7 rounded-full bg-gray-200 font-bold hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="w-5 text-center text-sm font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="h-7 w-7 rounded-full bg-gray-200 font-bold hover:bg-gray-300"
                  >
                    +
                  </button>

                </div>

              </div>

              <p className="mt-2 text-right text-xs text-gray-500">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>

            </div>

          ))

        )}

      </div>

      <div className="mt-4 flex justify-between border-t pt-4">

        <p className="text-xs font-semibold">
          Total:
        </p>

        <p className="text-sm font-semibold">
          ${total.toFixed(2)}
        </p>

      </div>

      <button
        onClick={proceedToPayment}
        disabled={cartItems.length === 0}
        className="mt-5 w-full rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Proceed to Payment
      </button>

    </div>
  )
}

export default Cart