// this is the root file 
//the components have been imported here
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useState } from "react";
import Basket from "./components/Basket";
import Cart from "./components/Cart";
import CartHeader from "./components/CartHeader";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//the root component 
function App() {
  //array of objects for showing product list
  const productList = [
    {
      id: 1,
      description: "Product 1",
      mutePrice: "20.00",
      discountPrice: "18.00",
      ratings: 3,
    },
    {
      id: 2,
      description: "Product 2",
      mutePrice: "50.00",
      discountPrice: "25.00",
      ratings: 4,
    },
    {
      id: 3,
      description: "Product 3",
      mutePrice: "70.00",
      discountPrice: "35.00",
      ratings: 2,
    },
    ,
    {
      id: 4,
      description: "Product 4",
      mutePrice: "85.00",
      discountPrice: "55.00",
      ratings: 4.5,
    },
  ];

  //the cartitem (state) has been declared as array 
  const [cartItem, setCartItem] = useState([]);
  //the total (state) has been declared with initial set to zero
  const [total, setTotal] = useState(0);
  //the quantity (state) has been declared with initial set to zero
  const [quantity, setQuantity] = useState(0);

  //this function or method is called whenever the user hits "Add to Cart" button it takes in product (an object)
  function handleAdd(product) {

//if the product is already in cart the quantity is only changed  but the total and quantity will be updated 
    if (product) {
      const newItem = cartItem.find((x) => x.id === product.id);
      if (newItem) {
        setCartItem(
          cartItem.map((x) =>
            x.id === product.id ? { ...newItem, qty: newItem.qty + 1 } : x
          )
        );
      } else {
        setCartItem([...cartItem, { ...product, qty: 1 }]);
      }
      //here we can updating the total and quantity
      setTotal(parseInt(total) + parseInt(product.discountPrice));
      setQuantity(quantity + 1);
    }
  }

  //this function or method is called whenever the user hits "-" button it takes in product (an object)
  //the "-" button will be only visible when there is item in the cart

  const handleRemove = (product) => {
    //user will asked to confirm
    let result = window.confirm("Are you sure do you want to remove?");

      //if the product is already in cart the quantity is only changed  but the total and quantity will be updated 
    if (result) {

      const newItem = cartItem.find((x) => x.id === product.id);
      if (newItem.qty === 1) {
        setCartItem(cartItem.filter((x) => x.id !== product.id));
      } else {
        setCartItem(
          cartItem.map((x) =>
            x.id === product.id ? { ...newItem, qty: newItem.qty - 1 } : x
          )
        );
      }
       //here we can updating the total and quantity
      setTotal(parseInt(total) - parseInt(product.discountPrice));
      setQuantity(quantity - 1);
    }
  };

  //the method is called whever the user hits "Empty Cart" button 
  //the "Empry Cart" button will be only visible when there is item in the cart
  function handleReset() {
    //user will asked to confirm
    let confirm = window.confirm("Do you want to reset the Cart?");
    //initializing the state of all states
    if (confirm) {
      setCartItem([]);
      setTotal(0);
      setQuantity(0);
    }
  }
  return (
    <div>
      <Router>
        <NavBar cartItem={quantity}></NavBar>
        <Switch>
          <Route path="/" exact={"true"}>
            <Header></Header>
            <section className="py-5">
              <div className="container px-4 px-lg-5 ">
                <div className="row gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {productList.map((item) => {
                    return (
                      <Card key={item.id} data={item} handleAdd={handleAdd} />
                    );
                  })}
                </div>
              </div>
            </section>
            <Footer></Footer>
          </Route>

          <Route path="/cart" exact={true}>
            <div className="row"> 
            <div className={ cartItem.length == 0 ? "col-lg-12":"col-lg-6 mt-3"}>
            <div className="table-responsive">
              <table className="table">
                {cartItem.length == 0 ? (
                  <h3 class="fs-3 text-center mt-5">
                    Looks Like you haven't added anything in Cart!!
                  </h3>
                ) : (
                  <CartHeader />
                )}
                <tbody>
                  {cartItem.map((item) => {
                    return (
                      <Cart
                        data={item}
                        handleRemove={handleRemove}
                        handleAdd={handleAdd}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
            </div>
            <div className="col-lg-6 mt-3">
            {cartItem.length == 0 ? null : (
              <Basket
                total={total}
                handleReset={handleReset}
                quantity={quantity}
              ></Basket>
            )}
            </div>
            </div>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
