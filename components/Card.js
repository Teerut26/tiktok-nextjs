import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function Card(props) {
  const [show, setShow] = useState(false);

  const openPopup = (url) => {
    window.open(url);
  };

  const nFormatter = (num, digits) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  };

  return (
    <>
      <div
        className="card h-100 position-relative border-0"
        onClick={() => openPopup(props.obj.webVideoUrl)}
      >
        <div className="w-100 position-absolute p-2 d-flex justify-content-between">
          <span class="badge shadow bg-light border-0 text-dark fs-6">
            <i class="fas fa-play"></i>{" "}
            {/* {props.obj.playCount.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })} */}
            {nFormatter(props.obj.playCount, 1)}
          </span>
          <span class="badge shadow bg-light border-0 text-dark fs-6">
            <i class="fas fa-heart red"></i>{" "}
            {nFormatter(props.obj.diggCount, 1)}
          </span>
        </div>

        <img
          style={{
            objectFit: "cover",
            objectPosition: "center",
            height: "500px",
          }}
          src={props.obj.covers.dynamic}
          classname="card-img-top"
          alt="..."
          width="100%"
        />
        {/* <div  /> */}

        <div
          style={{
            background:
              "linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 90%) 100%)",
          }}
          className="card-body shadow border-0 position-absolute bottom-0 w-100 text-light"
        >
          <h5 className="card-title">{props.obj.authorMeta.name}</h5>
          <p style={{ height: "70px" }} className="card-text overflow-auto">
            {props.obj.text}
          </p>
        </div>
        {/* <div className="card-body shadow border-0 position-absolute bottom-0 w-100 text-light end-0">
          <h5 className="card-title">{props.obj.authorMeta.name}</h5>
        </div> */}
      </div>
    </>
  );
}
