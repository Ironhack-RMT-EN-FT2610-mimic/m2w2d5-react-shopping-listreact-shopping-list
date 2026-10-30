function SearchBar(props) {

  const handleSearch = (e) => {
    props.setSearchValue(e.target.value)

    // const filteredProducts = props.allProducts.filter((products) => {
    //   return products.name.includes(e.target.value)
    // })
    // props.setAllProducts(filteredProducts)

  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input type="text" onChange={handleSearch} value={props.searchValue}/>

    </div>
  )
}

export default SearchBar