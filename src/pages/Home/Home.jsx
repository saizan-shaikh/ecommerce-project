import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import bg from "../../assets/bg0.gif";
import "./Home.css";
import { category } from "../../Category";
import Product from "../../components/Product/Product";
import { dummydata } from "../../dummydata";

function Home() {
  const [cate, setCat] = useState(dummydata);

  function filterProducts(category) {
    const updatedata = dummydata.filter((item) => item.category === category);
    setCat(updatedata);
  }

  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>

      <div className="category-section">
        {category.slice(0, 5).map((item) => (
          <div className="category-card" key={item.id} onClick={() => filterProducts(item.name)}>
            <img src={item.image} alt="" />
            <span> {item.name} </span>
          </div>
        ))}
      </div>
      <h1>Trending Products</h1>
      <div className="product-section">
        {cate.slice(0, 7).map((item) => (
          <Product
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

export default Home;
