import React, { Component } from "react";
import styled from "styled-components";
import GlassItem from "./GlassItem";

const GlassesStyle = styled.div`
  width: 1100;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  padding: 0 20px;
`;
export default class Glasses extends Component {
  renderItem = () => {
    console.log("hit");
    return this.props.prods.map((item) => (
      <GlassItem
        prod={item}
        changeGlassHandler={this.props.changeGlassHandler}
      ></GlassItem>
    ));
  };
  render() {
    return <GlassesStyle>{this.renderItem()}</GlassesStyle>;
  }
}
