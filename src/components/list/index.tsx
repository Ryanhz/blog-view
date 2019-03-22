import * as React from "react";
import Header from "./../comment/header";
import Singup from "@Components/signup";

import * as styles from "./index.scss";

class Item extends React.Component {
  public render() {
    return (
      <div className={styles.item}>
        <div className={styles.date}>
          25, dec
        </div>
        <div className={styles.content}>
          <div>
            <a href="#/details/2222">
              我们有必要说一下怎么生成微信海报
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class Section extends React.Component {
  public render() {
    return (
      <div className={styles.section}>
        <h2 className={styles.header}>2018</h2>
        <div>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}

class Article extends React.Component<any, any> {

  constructor(pro: any) {
    super(pro)
    this.state = { modalShow: false };
  }

  public render() {

    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <Header username={null} loginAction={this.showLogin} userAction={this.showUser} />
        <div className={styles.container}>
          <Section />
          <Section />
          <Section />
          <Section />
        </div>
        <Singup show={this.state.modalShow} onHide={modalClose} />
      </div>

    );
  }

  showLogin = () => {
    this.setState({ modalShow: true })
  }

  showUser = () => {

  }




}
export default Article;