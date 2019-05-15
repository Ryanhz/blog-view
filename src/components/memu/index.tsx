import * as React from 'react'
import * as styles from "./index.scss";
import {
  Link,
} from 'react-router-dom'
const item = {
  title: 1,
  path: "p",
  search: "?page=1"
}
const items = [item, item, item, item, item]

export default class Memu extends React.Component {
  render() {
    return (
      <div className={styles.control}>
        <div>

        </div>
        <div className={styles.memu}>
          <span className="fa-stack fa-lg">
            {/* // fa-flip-horizontal */}
            <i className="fa fa-themeisle fa-pulse"></i>
          </span>
        </div>
      </div>
    )
  }
}