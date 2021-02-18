import React, { Component } from "react";
import styled from "styled-components";
// import img from './glassesImage/v3.png'
// import img from `this.props.`
const GlassStyle = styled.div`
  width: 95px;
  height: 50px;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 12px;
  border: 1px solid silver;
  margin: 5px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  &:hover {
    transform:scale(1.1);
  }
`
export default class GlassItem extends Component {
  render() {
    let { url } = this.props.prod;
    return (
      <GlassStyle
        onClick={() => this.props.changeGlassHandler(this.props.prod)}
      >
        <img
          src={url}
          style={{ width: "100%", padding: "10px", cursor: "pointer" }}
          alt=""
        />
      </GlassStyle>
    );
  }
}
