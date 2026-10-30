import { useState } from "react"

function AddForm(props) {

  const [nameValue, setNameValue] = useState("")
  const [priceValue, setPriceValue] = useState(0)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNameValue(event.target.value)

    // let initialUserInput = event.target.value
    // let replacedInput = initialUserInput
    // if (replacedInput === "potato") {
    //   replacedInput = "·$%&$"
    // }
    // setNameValue(replacedInput)
  }

  const handlePriceChange = (e) => setPriceValue(e.target.value)

  const handleAddProduct = (e) => {
    e.preventDefault()
    console.log("trying to add a product")

    if (!nameValue || !priceValue) {
      return
    }

    const newProduct = {
      name: nameValue,
      price: priceValue,
      isPurchased: false
    }

    // const cloneState = [...props.allProducts]
    // cloneState.push(newProduct)
    // props.setAllProducts(cloneState)

    props.setAllProducts((state) => {
      // return the new value of the state
      // const cloneState = [...state]
      // cloneState.push(newProduct)
      // return cloneState
      return [...state, newProduct]
    })

    // revert inputs to default by updating the states
    setNameValue("")
    setPriceValue(0)

  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={handleNameChange} value={nameValue} />
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" onChange={handlePriceChange} value={priceValue}/>
        </div>

        <button type="submit" disabled={!nameValue || !priceValue}>Add</button>

      </form>

    </div>
  )
}

export default AddForm