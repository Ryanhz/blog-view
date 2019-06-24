import * as React from 'react'
import BASE from "@Components/base";
import * as styles from "./index.scss";
import {
  Link,
} from 'react-router-dom'
import { zy_log } from '@Units/index';
const item = {
  title: 1,
  path: "p",
  search: "?page=1"
}
const items = [item, item, item, item, item]

export default class Memu extends BASE {

  constructor(props: any) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }


  render() {
    return (
      <div className={styles.meum_container}>
        <div className={styles.dock}>

          <div className={styles.up} onClick={this._menuDidClick}>
            <span className="fa-stack fa-lg">
              <i className="fa f-hand-o-up"></i>
            </span>
          </div>

          <div className={styles.left} onClick={this._menuDidClick}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-edit"></i>
            </span>
          </div>

          <div className={styles.down} onClick={this._menuDidClick}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-hand-o-down"></i>
            </span>
          </div>
        </div>

        <div className={styles.front}>
          <div className={styles.item} onClick={this._menuDidClick}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-paw"></i>
            </span>
          </div>
        </div>


      </div>
    )
  }

  _menuDidClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    zy_log('----------')
  }


}