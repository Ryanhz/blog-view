import * as React from "react";
import * as types from "./header.scss";
import logeSource from "@Assets/hzy-logo-1.svg";
export default class Header extends React.Component<any, any> {
  render() {
    return (
      <header>
        <img className={types.header} src={logeSource}>
        </img>
      </header>
    )
  }
}