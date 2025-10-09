import React from "react";
import "./CartCard.css";
import image1 from "../../assets/image1.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RemoveItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function CartCard({ name, image, price, id }) {
  const dispatch = useDispatch();
  return (
    <div className="Cartcard">
      <div className="left-card">
        <img src={image} alt="" />
        <div className="name-price">
          <span>{name}</span>
          <span>Rs {price}/-</span>
        </div>
      </div>
      <div className="right-card">
        <button
          onClick={() => {
            dispatch(RemoveItem(id));
            toast("Item Removed");
          }}
        >
          Remove <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default CartCard;
