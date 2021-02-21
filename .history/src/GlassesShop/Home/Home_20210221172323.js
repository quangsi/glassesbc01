import React, { Component } from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import Glasses from "../Glasses/Glasses";
import Girls from "../Girls/Girls";

const BodyStyle = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-image: url("./glassesImage/background.jpg");
  background-size: cover;
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
    background-color: rgba(36, 36, 36, 0.356);
    position: absolute;
    z-index: -1;
  }
`;
const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
  flex-direction: column;
`;
export default class Home extends Component {
  state = {
    arrProduct: [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./glassesImage/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./glassesImage/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 4,
        price: 30,
        name: "DIOR D6005U",
        url: "./glassesImage/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 5,
        price: 30,
        name: "PRADA P8750",
        url: "./glassesImage/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 6,
        price: 30,
        name: "PRADA P9700",
        url: "./glassesImage/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 7,
        price: 30,
        name: "FENDI F8750",
        // ${require('../glassesImage/model.jpg')
        url: "./glassesImage/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 8,
        price: 30,
        name: "FENDI F8500",
        url: "./glassesImage/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 9,
        price: 30,
        name: "FENDI F4300",
        url: "./glassesImage/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ],
    // currentChosen: null,
    model: null,
  };

  changeGlassHandler = (item) => {

    const model = item;
    console.log(model);
    this.setState({ model: model});
  };
  render() {
    return (
      <BodyStyle className="body">
        <Header> </Header>
        <ContainerStyle>
          <Girls prod={this.state.model}></Girls>
          <Glasses prods={this.state.arrProduct} changeGlassHandler={this.changeGlassHandler}></Glasses>
        </ContainerStyle>
      </BodyStyle>
    );
  }
}
