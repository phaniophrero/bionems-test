import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { BiMap } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const containerStyle = {
  width: "50rem",
  height: "30rem",
  borderRadius: "15px",
};

const position = {
  lat: 47.872987687479025,
  lng: -3.5534868739615795,
};

const Map = () => {
  return (
    <div className="map--wrapper">
      <div className="map--address">
        <span className="map--address__icon-wrapper">
          <BiMap />
        </span>
        <h3 className="map--address__text">
          52 Rue de Pont Aven{" "}
          <span className="map--address_text-right">29300, QUIMPERLE</span>
        </h3>
      </div>
      <LoadScript googleMapsApiKey={process.env.MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={18}
        >
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>

      <a href="https://wa.me/0664709183" className="map--phone-nr">
        <span className="map--phone-nr__icon-wrapper">
          <FaPhoneAlt />
        </span>
        06 64 70 91 83
      </a>
    </div>
  );
};

export default Map;
