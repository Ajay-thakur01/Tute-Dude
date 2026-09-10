import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Payment() {

  const {
    cartItems,
    total,
    increaseQuantity,
    decreaseQuantity
  } = useCart();

  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  function handlePayment(e) {

    e.preventDefault();

    alert("Payment successful!");

  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-gray-800">
            Payment
          </h1>

          <button
            onClick={() => navigate('/')}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Continue Shopping
          </button>

        </div>


        <div className="grid gap-8 lg:grid-cols-2">


          {/* Cart */}

          <div className="rounded-xl bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-lg font-semibold">
              Your Cart
            </h2>

            {cartItems.length === 0 ? (

              <div>

                <p className="mb-4 text-sm text-gray-500">
                  Your cart is empty.
                </p>

                <button
                  onClick={() => navigate('/')}
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Go Shopping
                </button>

              </div>

            ) : (

              <div>

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="mb-5 flex items-center justify-between border-b pb-5"
                  >

                    <div>

                      <h3 className="text-sm font-semibold text-gray-800">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>

                    </div>


                    <div className="flex items-center gap-3">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="h-7 w-7 rounded-full bg-gray-200 font-bold hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="text-sm font-medium">
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

                ))}


                <div className="flex justify-between pt-3">

                  <p className="font-semibold">
                    Total
                  </p>

                  <p className="font-bold">
                    ${total.toFixed(2)}
                  </p>

                </div>

              </div>

            )}

          </div>


          {/* Payment Form */}

          <div className="rounded-xl bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-lg font-semibold">
              Card Details
            </h2>

            <form
              onSubmit={handlePayment}
              className="space-y-5"
            >

              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Card Holder Name
                </label>

                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="Enter card holder name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-emerald-500"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Card Number
                </label>

                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-emerald-500"
                />

              </div>


              <div className="grid grid-cols-2 gap-4">

                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>

                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-emerald-500"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    CVV
                  </label>

                  <input
                    type="password"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    maxLength="3"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-emerald-500"
                  />

                </div>

              </div>


              <button
                type="submit"
                disabled={cartItems.length === 0}
                className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Pay ${total.toFixed(2)}
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Payment