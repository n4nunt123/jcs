import './App.css';
import { useDispatch, useSelector } from 'react-redux'

// redux
// import { legacy_createStore as createStore, combineReducers } from 'redux'
// import { Provider } from 'react-redux'
// const DataReducer = () => {
//   return [
//     {
//       name: 'Blue Denim Shirt',
//       type: 'Shirt',
//       color: 'Blue',
//       size: 'M',
//       price: '50',
//     },
//     {
//       name: 'Red Hoodie',
//       type: 'Hoodie',
//       color: 'Red',
//       size: 'L',
//       price: '49',
//     }
//   ]
// }
// const rootReducer = combineReducers({
//   data: DataReducer
// })
// let store = createStore(rootReducer)

function Card(props) {
  const dispatch = useDispatch()
  const decrement = () => {
    dispatch({ type: 'decrement', index: props.data.index })
  }
  const increment = () => {
    dispatch({ type: 'increment', index: props.data.index })
  }
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.data.product.img} className="img-fluid rounded-start" alt={props.data.product.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.data.product.name}</h5>
            <p className="card-text">Type: {props.data.product.type}</p>
            <p className="card-text">Color: {props.data.product.color}</p>
            <p className="card-text">Size: {props.data.product.size}</p>
            <p className="card-text">
              <span 
                onClick={decrement} 
                className="mark">-</span>
              {props.data.product.amount}
              <span 
                onClick={increment}
                className="mark">+</span>
            </p>
            <p className="card-text"><strong className="price mb-2">Price: ${props.data.product.price}</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const data = useSelector((state) => state)
  const temporaryAmount = () => {
    let result = 0
    data.forEach(el => {
      result = +result + (+el.price * +el.amount)
    })
    return result
  }
  const shipping = () => {
    let result = temporaryAmount() * (5/100)
    return result.toFixed(2)
  }
  return (
    <div className="App">
      <h1 className="title">Shopping Cart</h1>
      <div className="container">

        <div className="main">
          <h4 className="total-item">Cart ({data.length} Items)</h4>
          {data && data.map((el, i) => {
            return <Card key={i} data={{product: el, index: i}} />
            })
          }
        </div>

        <div className="right">
          <div className="right-top">
            <p>Temporary Amount: <span className="money">${temporaryAmount()}</span></p>
            <p>Shipping: <span className="money">${shipping()}</span></p>
          </div>
          <div className="right-bottom">
            <p>the Total Amount of (Including VAT): <span className="money">${+temporaryAmount() + +shipping()}</span></p>
            <button type="button" class="btn btn-primary checkout">GO TO CHECKOUT</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
