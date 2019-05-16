/*
 * Created Date: Sunday, April 7th 2019, 9:53:45 am
 * Author: zy han
 * -----
 * Last Modified: Sunday, 12th May 2019 1:04:35 am
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