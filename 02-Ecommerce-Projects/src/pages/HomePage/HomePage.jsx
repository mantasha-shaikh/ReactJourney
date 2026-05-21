import "./HomePage.css";
import axios from "axios";
import Header from "../../Components/Header";
import { useEffect, useState } from "react";

import CheckmarkIcon from "../../assets/images/icons/checkmark.png";
export function HomePage({cart}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });



  }, []);

  return (
    <>
      <Header cart={cart}/>

      <div className="home-page">
        <div className="products-grid">
          {products.map((data) => {
            return (
              <div key={data.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={data.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {data.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${data.rating.stars * 10}.png`}
                  />
                  <div className="product-rating-count link-primary">
                    {data.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  {(data.priceCents / 100).toFixed(2)}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src={CheckmarkIcon} />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
