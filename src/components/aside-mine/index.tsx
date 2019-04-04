import * as React from "react";
import Header from "./header";
import Section from "./section";
import Footer from "./footer";

import * as styles from "./index.scss";
export default class Mine extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.main}>
        <Header />
        <Section />
        <Footer />
      </div>
    )
  }
}