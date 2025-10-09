import React from "react";
import image1 from "../../assets/image1.jpg";
import "./Product.css";
import { useDispatch } from "react-redux";
import { AddItem } from "../../redux/cartSlice";
import { toast } from "react-toastify";

function Product({ name, image, price, id }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-details">
        <span className="name">{name}</span>
        <span className="price">Rs {price}/-</span>
        <button
          onClick={() => {
            dispatch(
              AddItem({ name: name, image: image, price: price, id: id })
            );
            toast("Item Added");
          }}
        >
          Add +
        </button>
      </div>
    </div>
  );
}

export default Product;
