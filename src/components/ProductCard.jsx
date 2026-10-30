function ProductCard({name, price, isPurchased, setAllProducts, index}) {

  const handleBuy = () => {

    setAllProducts((state) => {
      // const cloneState = [...state] // shallow clone only create a new reference of the first level
      const cloneState = structuredClone(state) // deep clone will create new references for ALL nested elements
      cloneState[index].isPurchased = true
      return cloneState
    })

  }

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{price}€</p>
      <p>{isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default ProductCard;




// create a data structure for 5 products with the following properties: name, price, isPurchased
const products = [
  { name: "Laptop", price: 999, isPurchased: false },
  { name: "Mouse", price: 25, isPurchased: false },
  { name: "Keyboard", price: 75, isPurchased: false },
  { name: "Monitor", price: 200, isPurchased: false },
  { name: "Headphones", price: 150, isPurchased: false }
];  
