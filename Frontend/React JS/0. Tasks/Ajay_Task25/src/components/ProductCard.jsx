function ProductCard({product, addToCart}) {
  return (
    <article className='w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
      <div className='flex h-48 items-center justify-center bg-gray-100 p-4'>
        <img className='h-full w-full object-contain transition duration-300 hover:scale-105'
          src={product.image} alt={product.name} />
      </div>
      <div className='flex min-h-40 flex-col p-4'>
        <h2 className='line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-gray-800'>
          {product.name}
        </h2>
        <p className='mt-3 text-lg font-bold text-gray-900'>${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className='mt-auto w-full rounded-lg border border-emerald-600 px-3 py-2 text-sm font-semibold text-emerald-700 transition duration-300 hover:bg-emerald-600 hover:text-white'
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard