import React, { useState } from "react";
import "./Shop.css";
import { category } from "../../Category";
import { dummydata } from "../../dummydata";
import Product from "../../components/Product/Product";
import { FaShopify } from "react-icons/fa6";

function Shop() {
  const [cate, setCat] = useState(dummydata);

  function filterProducts(category) {
    if (category === "All") {
      setCat(dummydata);
    } else {
      const updatedata = dummydata.filter((item) => item.category === category);
      setCat(updatedata);
    }
  }

  return (
    <div className="shop">
      <div className="heading">
        <span>Shop</span>
        <FaShopify />
      </div>
      <div className="category-section">
        {category.map((item) => (
          <div
            className="category-card"
            key={item.id}
            onClick={() => filterProducts(item.name)}
          >
            <img src={item.image} alt="" />
            <span> {item.name} </span>
          </div>
        ))}
      </div>

      <div className="product-section">
        {cate.map((item) => (
            <Product
                key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
