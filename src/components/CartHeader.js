//this component is rendered with the Cart Items
import React from "react";

function CartHeader() {
  return (
    <thead>
      <tr>
        <th scope="col" className="border-0 bg-light">
          <div className="p-2 px-3 text-uppercase">Product</div>
        </th>
        <th scope="col" className="border-0 bg-light">
          <div className="py-2 text-uppercase">Price</div>
        </th>
        <th scope="col" className="border-0 bg-light">
          <div className="py-2 text-uppercase">Qty</div>
        </th>
        <th scope="col" className="border-0 bg-light">
          <div className="py-2 text-uppercase">Action</div>
        </th>
      </tr>
    </thead>
  );
}

export default CartHeader;
