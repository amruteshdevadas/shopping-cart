//this component is the card with which we are able to view the products with its image , Price and user can hit the "Add to Cart" button.
import React from "react";

function Card(props) {
  return (
    <div className="col mb-5 ">
      <div className="card h-100 card">
        <div className="badge bg-dark text-white position-absolute">Sale</div>
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.data.description}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              {props.data.ratings}
              <div className="bi-star-fill"></div>
            </div>
            Rs
            <span className="text-muted text-decoration-line-through">
              {props.data.mutePrice}
            </span>
            {props.data.discountPrice}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto add_button"
              onClick={() => {
                props.handleAdd(props.data);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
