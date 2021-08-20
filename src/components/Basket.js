//this component shows the order Summary for the user and will be visible only if theere are any items in the cart
import React from "react";

function Basket(props) {
  return (
    <div class="col-lg-12">
      <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
        Order summary{" "}
      </div>
      <div class="p-4">
        <p class="font-italic mb-4">
          Shipping and additional costs are calculated based on values you have
          entered.
        </p>

        <ul class="list-unstyled mb-4">
          <li class="d-flex justify-content-between py-3 border-bottom">
            <strong class="text-muted">Total Quantity </strong>
            <strong>{props.quantity}</strong>
          </li>

          <li class="d-flex justify-content-between py-3 border-bottom">
            <strong class="text-muted">Order Subtotal </strong>
            <strong>{props.total}</strong>
          </li>
          <li class="d-flex justify-content-between py-3 border-bottom">
            <strong class="text-muted">Shipping and handling</strong>
            <strong>{props.total ? 50 : 0}</strong>
          </li>
          <li class="d-flex justify-content-between py-3 border-bottom">
            <strong class="text-muted">Tax</strong>
            <strong>{Math.floor(props.total * 0.18)}</strong>
          </li>
          <li class="d-flex justify-content-between py-3 border-bottom">
            <strong class="text-muted">Total</strong>
            <h5 class="font-weight-bold">
              Rs{" "}
              {props.total
                ? props.total + 50 + Math.floor(props.total * 0.18)
                : 0}
            </h5>
          </li>
        </ul>
        <a
          href="#"
          className={`${
            props.quantity
              ? "btn btn-outline-dark mt-auto py-2"
              : " btn btn-outline-dark mt-autopy-2 disabled"
          }`}
        >
          Procceed to checkout
        </a>

        <button
          className={`${
            props.quantity
              ? "btn btn-danger mx-3 py-2"
              : "btn btn-danger mx-3 py-2 disabled"
          }`}
          onClick={props.handleReset}
        >
          Empty Cart
        </button>
      </div>
    </div>
  );
}

export default Basket;
