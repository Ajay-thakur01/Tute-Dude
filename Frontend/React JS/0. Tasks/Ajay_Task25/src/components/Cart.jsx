import React from 'react'

function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity
}) {

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-64 bg-gray-50 rounded-lg p-5 h-fit shadow-sm">

      <h2 className="font-semibold text-sm mb-5">
        Cart
      </h2>


      {/* Cart Items */}
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

              {/* Product name */}
              <p className="text-sm font-medium mb-2">
                {item.name}
              </p>


              <div className="flex items-center justify-between">

                {/* Price */}
                <p className="text-sm">
                  ${item.price}
                </p>


                {/* Quantity buttons */}
                <div className="flex items-center gap-2">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
                  >
                    -
                  </button>

                  <span className="text-sm font-medium w-5 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
                  >
                    +
                  </button>

                </div>

              </div>


              {/* Subtotal */}
              <p className="text-xs text-gray-500 text-right mt-2">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>

            </div>

          ))

        )}

      </div>


      {/* Total */}
      <div className="border-t pt-4 mt-4 flex justify-between">

        <p className="text-xs font-semibold">
          Total:
        </p>

        <p className="text-sm font-semibold">
          ${total.toFixed(2)}
        </p>

      </div>

    </div>
  )
}

export default Cart