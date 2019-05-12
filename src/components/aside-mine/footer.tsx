/*
 * Created Date: Sunday, April 7th 2019, 9:53:45 am
 * Author: zy han
 * -----
 * Last Modified: Sunday, 12th May 2019 12:59:32 am
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
import * as styles from "./footer.scss";

export default class Footer extends React.Component<any, any> {
  render() {
    return (
      <footer className={styles.footer_box} id="left-footer">
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
  componentDidMount(){

  }
  
  componentWillMount(){

  }

  componentWillUnmount(){
  }

}