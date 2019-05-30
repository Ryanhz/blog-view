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
import { Post } from "@Types/index";
import {
  Link,
} from 'react-router-dom'

export default class PostCard extends React.Component<Post & { username: string }, any> {
  render() {
    const { id, title, digest, created, createdAt, cover, username } = this.props
    return (
      <section className={styles.container}>
        {cover && <figure>
          <Link to={{ pathname: `/posts/${title}`, state: { id: id } }}>
            <img className={styles.cover} src={cover} />
          </Link>
        </figure>}
        <Link className={styles.title} to={{ pathname: `/posts/${title}`, state: { id: id } }}>{title}</Link>
        <article >
          <MarkDown content={digest} />
        </article>
        <footer>
          <span>
            <i className="fa fa-calendar-o"> {createdAt}</i>
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