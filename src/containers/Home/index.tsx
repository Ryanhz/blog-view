import * as React from "react";
/*
 * Filename: /Users/hzf/Documents/hzy-private/blog-view/src/containers/Home/index.tsx
 * Path: /Users/hzf/Documents/hzy-private/blog-view
 * Created Date: Monday, May 13th 2019, 10:42:41 am
 * Author: hzf
 * 
 * Copyright (c) 2019 Your Company
 */

// import { connect } from "react-redux";
// import { Dispatch } from 'redux'
// import * as actions from "@Redux/actions";
// import { StoreState, Account } from "@Redux/types";


// import Header from "./../comment/header";
// import Singup from "@Components/signup";

// import * as styles from "./index.scss";

// class Item extends React.Component {
//   public render() {
//     return (
//       <div className={styles.item}>
//         <div className={styles.date}>
//           25, dec
//         </div>
//         <div className={styles.content}>
//           <div>
//             <a href="#/details/2222">
//               我们有必要说一下怎么生成微信海报
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// class Section extends React.Component {
//   public render() {
//     return (
//       <div className={styles.section}>
//         <h2 className={styles.header}>2018</h2>
//         <div>
//           <Item />
//           <Item />
//           <Item />
//           <Item />
//         </div>
//       </div>
//     );
//   }
// }


// interface ArticleP {

//   signin: (account: string, password: string) => void
// }


// class Article extends React.Component<Account & ArticleP, any> {

//   constructor(pro: any) {
//     super(pro)
//     console.log(this.props)
//     this.state = { modalShow: false };
//   }

//   public render() {
//     const { didsignIn, user } = this.props
//     return (
//       <div>
//         <Header {...{ user, didsignIn }} loginAction={() => this.showModal(true)} userAction={this.showUser} />
//         <div className={styles.container}>
//           <Section />
//           <Section />
//           <Section />
//           <Section />
//         </div>
//         <Singup show={this.state.modalShow} onHide={() => this.showModal(false)} didsignin={didsignIn} signin={this.props.signin} />
//       </div>

//     );
//   }

//   showModal = (flag: boolean) => {
//     console.log(`llllll_____${flag}`)
//     this.setState({ modalShow: flag })
//   }

//   showUser = () => {

//   }
// }

// export function mapStateToProps({ account }: StoreState) {
//   return account
// }

// export function mapDispatchToProps(dispatch: Dispatch<actions.AccounAction>) {
//   return {
//     signin: (account: string, password: string) => dispatch(actions.signIn(account, password)),
//     signout: () => dispatch(actions.signOut()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Article);

import PostCard from "@Components/post-card";
import * as styles from "./index.scss";
import {
  RouteComponentProps
} from 'react-router-dom'
import { Post_cardable } from "@Types/index";
const post_list: Post_cardable[] = [{
  id: 1,
  cover: "",
  title: "post-title",
  digest: `[jingsam](http://jingsam.github.io/)

  [首页](http://jingsam.github.io/) [归档](http://jingsam.github.io/archives/) [关于](http://jingsam.github.io/about)
  
  # 开发组件库时 Vue 应该放哪儿：devDependencies or peerDependencies？`,
  created: "Dec 12, 2019",
  modify: "Dec 12, 2019"
}]

export default class Home extends React.Component<RouteComponentProps, any> {
  render() {
    return (<div className={styles.container}>
      {post_list.map(item => {
        return <PostCard key={item.id} {...item} />
      })}
    </div>)
  }
}