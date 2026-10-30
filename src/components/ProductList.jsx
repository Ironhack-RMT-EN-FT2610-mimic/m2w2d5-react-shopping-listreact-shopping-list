import ProductCard from "./ProductCard";

function ProductList(props) {
  
  return (
    <div className="product-list container">
      
      <h2>Product List</h2>

      {/* //* the list of the products will be here */}
      {/* //* it will render a ProductCard for each product in the list */}
      {props.allProducts
      .filter((product) => {
        return product.name.includes(props.searchValue)
      })
      .map((eachProduct, index) => {
        return (
          // <ProductCard eachProduct={eachProduct} key={index}/>
          <ProductCard {...eachProduct} key={index} setAllProducts={props.setAllProducts} index={index}/>
        )
      })}

    </div>
  )
}

export default ProductList