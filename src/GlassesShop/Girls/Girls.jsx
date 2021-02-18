import React, { Component } from "react";
import styled from "styled-components";

const ModelStyle = styled.div`
  display: block;
  width: 200px;
  height: 250px;
  background-image: url("./glassesImage/model.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 50px;
  position: relative;
`;
export default class Girls extends Component {
  renderModel = (prod) => {
    if (!prod) return " ";
    let { name, desc, url } = prod;
    console.log("adfafsadfsa");
    return (
      <div>
        <img
          src={url}
          style={{
            width: "55%",
            position: "absolute",
            left: "51%",
            transform: "translateX(-50%)",
            top: 65,
            opacity: "0.6",
          }}
          alt=""
        />
        <div
          className="content"
          style={{
            backgroundColor: "rgba(249, 176, 106, 0.75)",
            width: "100%",
            position: "absolute",
            bottom: 0,
            height: "80px",
          }}
        >
          <h1 style={{ fontSize: "15px" }}>{name}</h1>
          <p style={{ color: "black", fontSize: "13px", width: "100%" }}>
            {desc}
          </p>
        </div>
      </div>
    );
  };
  render() {
    console.log("12345");
    return <ModelStyle>{this.renderModel(this.props.prod)}</ModelStyle>;
  }
}
