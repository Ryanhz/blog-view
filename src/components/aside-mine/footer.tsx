import * as React from "react";
import * as styles from "./footer.scss";

export default class Footer extends React.Component<any, any> {
  render() {
    return (
      <footer className={styles.footer_box}>
        <div className={styles.social_box}>
          <a className="fa  fa-envelope fa-2x" href="#"></a>
          <a className="fa fa-github fa-2x" href="#"></a>
        </div>
        <p className={styles.auther}>
          <i className="fa fa-at"></i>
          2019
        <span>❤</span>
          <a>Zy Han</a>
        </p>
      </footer>
    )
  }
}