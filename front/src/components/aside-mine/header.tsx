/*
 * Created Date: Sunday, April 7th 2019, 9:53:45 am
 * Author: zy han
 * -----
 * Last Modified: Sunday, 12th May 2019 1:04:41 am
 * Modified By:zy han (1810022686@qq.com>) 
 * -----
 * Copyright (c) 2019 hzy
 * 
 * All shall be well and all shall be well and all manner of things shall be well.
 * Nope...we're doomed!
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

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