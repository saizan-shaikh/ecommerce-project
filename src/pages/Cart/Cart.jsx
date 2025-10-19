import "./Cart.css";
import CartCard from "../../components/CartCard/CartCard";
import ec from "../../assets/emptycart.png";
import { useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state) => state);
  const total = items.cart.reduce((a, b) => a + b.price, 0);
  return (
    <div className="cart">
      {items.cart.length <= 0 ? (
        <div className="empty-cart">
          <img src={ec} alt="" />
          <h1>Empty Card</h1>
        </div>
      ) : (
        <div className="CartCard-section">
          {items.cart.map((item) => (
            <CartCard
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
          <div className="price-section">
            <span>Total Products :{items.cart.length} </span>
            <span>Total Price : {total} </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
