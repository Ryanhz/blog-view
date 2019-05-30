import * as React from "react";
import BASE from "@Components/base";
import * as styles from "./index.scss";
import {
  Link,
  RouteComponentProps
} from 'react-router-dom'

export class Post_Row extends BASE<{ date: string, title: string, postid: number }, any> {
  render() {
    const { date, title, postid } = this.props
    return (
      <div className={styles.container}>
        <Link className={styles.row} to={{ pathname: `/posts/${title}`, state: { id: postid } }}>
          {"  " + date + "  "}
          <span className={styles.title}>{title}</span>
        </Link>
      </div>
    )
  }
}