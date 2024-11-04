import React from "react";
import { Link } from "react-router-dom";
import "./blocksOfOfferes.scss";
import ShortPara from "../ShortPara";
import { BACKEND_URL } from "../../../dynamicInfo";
import AnimatedBackground1 from "../animatedBackground1";

function BlocksOfOfferes({ obj }) {
  const getOfferPrice = (discount) => {
    const oldPrice = JSON.parse(JSON.parse(obj.items[0].pricePerPerson))[0]
      .priceTaka;
    const newPrice = oldPrice - (oldPrice / 100) * discount;
    return newPrice;
  };
  const getSavedPrice = (discount) => {
    const oldPrice = JSON.parse(JSON.parse(obj.items[0].pricePerPerson))[0]
      .priceTaka;
    const offerPrice = getOfferPrice(discount);
    const savedAmount = oldPrice - offerPrice;
    return savedAmount;
  };
  const getOldPrice = () =>
    JSON.parse(JSON.parse(obj.items[0].pricePerPerson))[0].priceTaka;

  return (
    <div className="card packagesBlock" id="blockOfOffers">
      <AnimatedBackground1 color1="#E6E6FA" color2="#CBC3E3" color3="#CF9FFF" />
      <h2>{obj.title}</h2>
      <div className="blockOfOffers">
        {obj.items.map((i) => (
          <Link to={"/packages/" + i.id}>
            <div className="item" key={i.id}>
              {i.discount && (
                <span className="save number">{`Saved ${getSavedPrice(
                  i.discount
                )}৳`}</span>
              )}
              <img src={`${BACKEND_URL}/uploads/${i.profileImg}`} alt="" />
              <ShortPara len={24}>{i.name}</ShortPara>
              {i?.duration && (
                <p>
                  <span className="number">{i.duration}</span> days
                </p>
              )}
              {i.discount && (
                <div className="price">
                  <span className="price-new number">{`${getOfferPrice(
                    i.discount
                  )}৳`}</span>
                  <span className="price-old number">{`${getOldPrice()}৳`}</span>
                </div>
              )}
              <Link to={"/packages/" + i.id}>
                <button className="button full">Semore</button>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlocksOfOfferes;
//pricePerPerson[0].priceTaka
