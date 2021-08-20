//this component shows user information about the product which the user has added and it also shows the how quantity of same product has been added
import React from "react";

function Cart(props) {
  return (
    <tr>
      <th scope="row" className="border-0">
        <div className="p-2">
          <div className="ml-3 d-inline-block align-middle">
            <h5 className="mb-0">
              <p className="text-dark d-inline-block align-middle">
                {props.data.description}
              </p>
            </h5>
          </div>
        </div>
      </th>
      <td className="border-0 align-middle">
        <h5>{props.data.discountPrice}</h5>
      </td>
      <td className="border-0 align-middle">
        <h5>{props.data.qty}</h5>
      </td>
      <td className="border-0 align-middle">
        <button
          onClick={() => {
            props.handleAdd(props.data);
          }}
          className=" btn btn-warning mx-2"
        >
          +
        </button>
        <button
          onClick={() => {
            props.handleRemove(props.data);
          }}
          className="btn btn-danger"
        >
          -
        </button>
      </td>
    </tr>
  );
}

export default Cart;
