import React, { useState, useEffect } from "react";
import "../HomeCard/Card.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import "../HomeCard/Card.css";
import CardModal from "../Model/CardModel";

function Cards(props) {
  const [show, setShow] = useState(false);
  const [hotelId, setHotelId] = useState("");

  const handleClick = () => {
    setShow(true);
  };
  const getHotelId = () => {
    setHotelId(props.card.id);
  };

  var height = 400;
  var width = 400;
  var imageUrl = props.card.cardPhotos[0].sizes.urlTemplate;
  imageUrl = imageUrl.replace("{width}", width).replace("{height}", height);

  return (
    <>
      <div
        onClick={() => {
          handleClick();
          getHotelId();
        }}
        className="card-box"
      >
        <img
          src={imageUrl}
          alt="image not availabe"
          className="card-img"
          style={{ borderRadius: "1rem" }}
        />
        <div className="card-info">
          <h6>{props.card.title}</h6>
          <div className="card-rating">
            <StarRateIcon
              style={{ fontSize: "20px", marginBottom: "10.5px" }}
            />
            <p style={{ marginTop: "7px" }}>{props.card.bubbleRating.rating}</p>
          </div>
        </div>
        <p style={{ marginTop: "0px", fontWeight: "600" }}>
          {props.card.priceForDisplay} night
        </p>
      </div>
      <CardModal
        show={show}
        setShow={setShow}
        title={props.card.title}
        price={props.card.priceForDisplay}
        hotelId={hotelId}
      />
    </>
  );
}
export default Cards;
