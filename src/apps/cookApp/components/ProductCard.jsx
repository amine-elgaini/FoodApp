function ProductCard({product}) {
  return (
    <div className="w-fit cursor-pointer rounded-lg overflow-hidden relative after:content-[''] after:left-0 after:top-0 after:absolute after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:to-black/50 after:z-1">
      <img className="object-cover w-56 h-56" src={product.image} alt="" />
      <p className="px-1 z-10 absolute text-white bottom-2 w-full text-center">{product.title}</p>
    </div>
  )
}

export default ProductCard