/*
 * Created Date: Sunday, April 7th 2019, 9:53:45 am
 * Author: zy han
 * -----
 * Last Modified: Sunday, 12th May 2019 1:04:49 am
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
import * as styles from "./section.scss";

const tags = [
  { num: 12, name: "archives", herf: "" },
  { num: 2, name: "Categories", herf: "" },
  { num: 9, name: "Tags", herf: "" }
]

const navs = [
  { name: "Home", herf: "" },
  { name: "Private", herf: "" },
  { name: "About", herf: "" },
]

export default class Content extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.content}>
        <section className={styles.section}>
          {
            tags.map((tag, index) => {
              return <a href={tag.herf} className={styles.item} key={index}>
                <span>{tag.num}</span>
                <span>{tag.name}</span>
              </a>
            })
          }
        </section>

        <nav className={styles.nav}>
          {
            navs.map((nav, index) => {
              return <a href={nav.herf} className={styles.nav_item} key={index}>
                {nav.name}
              </a>
            })
          }
        </nav>
      </div>
    )
  }
}