
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

import * as React from "react";
import PageControl from "@Components/page-control";
import PostCard from "@Components/post-card";
import * as styles from "./index.scss";
import {
  RouteComponentProps
} from 'react-router-dom'
import { Post_cardable } from "@Types/index";

const item = {
  id: 1,
  cover: "",
  title: "post-title",
  digest: `[jingsam](http://jingsam.github.io/)

  [首页](http://jingsam.github.io/) [归档](http://jingsam.github.io/archives/) [关于](http://jingsam.github.io/about)
  
  ### 开发组件库时 Vue 应该放哪儿：devDependencies or peerDependencies？`,
  created: "Dec 12, 2019",
  modify: "Dec 12, 2019"
}

const post_list: Post_cardable[] = [item,]

export default class Home extends React.Component<RouteComponentProps, any> {
  render() {
    return (<div className={styles.container}>
      <div className={styles.listTable}>
        {post_list.map(item => {
          return <PostCard key={item.id} {...item} />
        })}
      </div>
      <footer className={styles.footer}>
        <PageControl></PageControl>
      </footer>
    </div>)
  }
}