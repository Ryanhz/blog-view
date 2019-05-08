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