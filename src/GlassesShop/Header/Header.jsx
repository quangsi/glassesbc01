import React, {Component} from 'react'
import styled from 'styled-components'
const Tittle = styled.p `
            color:#fff;
            width:100%;
            text-align:center;
            font-size:50px;
            line-height:15vh;
            height:15vh;
            background: rgba(36, 36, 36, 0.637);
            position:relative;
            z-index:2;
            `;
export default class Header extends Component {
  render() {

    return (
      <div>
            <Tittle>TRY GLASSES APP ONLINE</Tittle>
            
      </div>
    )
  }
}
