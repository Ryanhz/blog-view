import * as React from "react";
import * as types from "./header.scss";
import logeSource from "@Assets/hzy-logo-1.svg";
export default class Header extends React.Component<any, any> {
  render() {
    return (
      <header className={types.header}>
        <div className={types.avatarBox}>
          <img className={types.avatar} src={logeSource} />
        </div>
        <h2>
          <a>hzy</a>
        </h2>
        <p className={types.say}>
          The whole problem with the world is that fools and fanatics are always so certain of themselves, but wiser people so full of doubts.
        </p>
      </header>
    )
  }
}