import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Products from './products';
import CartItems from './CartItems';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "SAMSUNG",
      rate: 55000,
      ratecut: 75000,
      url: "",
    },
    {
      id: 2,
      name: "MONTBLANC",
      rate: 65000,
      ratecut: 85000,
      sale: "sale",
      star: true,
    },
    {
      id: 3,
      name: "APPLE",
      rate: 85000,
      ratecut: 125000,
      sale: "sale",
    },
    {
      id: 4,
      name: "LENOVO",
      rate: 60000,
      ratecut: 75000,
      star: true,
    },
    {
      id: 5,
      name: "HP",
      rate: 72000,
      ratecut: 87000,
      sale: "sale",
    },
    {
      id: 6,
      name: "ASUS",
      rate: 55000,
      ratecut: 65000,
    },
    {
      id: 7,
      name: "ONEPLUS",
      rate: 55000,
      ratecut: 76000,
      sale: "sale",
      star: true,
    },
    {
      id: 8,
      name: "ACER",
      rate: 70000,
      ratecut: 86000,
      star: true,
    }
  ]);


  const [cartitems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState("none")

  let shopCart = (item) => {
    setCartItems([...cartitems, item])
    setTotal(total + item.rate)
  }

  let removeCart = (item) => {
    let index = cartitems.findIndex(obj => item.id === obj.id);
    cartitems.splice(index, 1)
    setCartItems([...cartitems])
    setTotal(total - item.rate)
    if (cartitems.length == 0) {
      setOpen("none")
    }
  }


  let openCart = (a) => {
    a == "none" ? setOpen("block") : setOpen("none")
  }


  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#!">All Products</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <div class="d-flex">
              <button onClick={() => openCart(open)} class="btn btn-outline-dark" type="submit">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">{cartitems.length}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div class="container" id="cart" style={{ display: open }}>
        <div class="row">
          <div id="cart" class="col-8">
            <h1>Cart</h1>
            <ol class="list-group list-group-numbered">
              {
                cartitems.map((item) => {
                  return <CartItems item={item} removeCart={removeCart} openCart={openCart} />
                })
              }

            </ol>
          </div>
          {
            cartitems.length > 0 ? <div id="cart" class="col-4">
              <h1>Total : {total} </h1>
            </div> : <div id="cart" class="col-4 container">
              <h3>No items in cart</h3>
            </div>
          }
        </div>
      </div>

      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              products.map((card) => {
                return <Products items={card} shopCart={shopCart} cartItems={cartitems} />
              })
            }
          </div>
        </div>
      </section>
      <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
      </footer>
    </div>
  );
}

export default App;