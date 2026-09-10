import './App.css'
import Nav from "./components/Nav";
import Cart from './components/Cart';
import ProductCard from './components/ProductCard'
import Payment from './components/Payment';
import { useCart } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'ASIAN Mens Thor-13 Sneaker',
      price: 120,
      image: 'https://placehold.co/300x300?text=Shoe+1',
    },

    {
      id: 2,
      name: 'ASIAN AIRWEAVE Sports Shoes',
      price: 40,
      image: 'https://placehold.co/300x300?text=Shoe+2',
    },

    {
      id: 3,
      name: 'Running Sports Shoes',
      price: 80,
      image: 'https://placehold.co/300x300?text=Shoe+3',
    },

    {
      id: 4,
      name: 'Casual Sneakers',
      price: 60,
      image: 'https://placehold.co/300x300?text=Shoe+4',
    },

    {
      id: 5,
      name: 'Classic Walking Shoes',
      price: 90,
      image: 'https://placehold.co/300x300?text=Shoe+5',
    },

    {
      id: 6,
      name: 'Premium Sports Shoes',
      price: 150,
      image: 'https://placehold.co/300x300?text=Shoe+6',
    },
  ];

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Nav />

              <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row">

                <div className="min-w-0 flex-1">

                  <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">

                    {products.map((product) => (

                      <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                      />

                    ))}

                  </div>

                </div>

                <Cart />

              </main>
            </>
          }
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App