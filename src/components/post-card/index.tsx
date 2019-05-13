/*
 * Created Date: Sunday, May 12th 2019, 12:35:30 am
 * Author: zy han
 * -----
 * Last Modified: Tuesday, 14th May 2019 12:05:47 am
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
import * as styles from "./index.scss";
import wn from "@Assets/wn.png";
import MarkDown from "@Components/markDown";
import { Post_cardable } from "@Types/index";
import {
  Link,
} from 'react-router-dom'

export default class PostCard extends React.Component<Post_cardable, any> {
  render() {
    const { id, title, digest, created, modify } = this.props
    return (
      <section className={styles.container}>
        <figure>
          <a>
            <img src={wn} />
          </a>
        </figure>
        <h3>
          <Link className={styles.hoverActive} to={`/detail/${id}`}>{title}</Link>
        </h3>
        <article >
          <MarkDown content={digest} />
        </article>
        <footer>
          <span>
            <i className="fa fa-calendar-o"> {created}</i>
          </span>
        </footer>
      </section >
    )
  }
  componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillUnmount() {
  }

}