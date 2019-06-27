
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
import BasePage from "@Components/base/basePage";
import PageControl from "@Components/page-control";
import PostCard from "@Components/post-card";
import * as styles from "./index.scss";
import {
  RouteComponentProps
} from 'react-router-dom'

import { Post } from "@Types/index";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalFunc from '@Redux/actions/global'
import * as frontFunc from '@Redux/actions/front'
import { BaseState } from "@Redux/types";
import { User } from "@Types/index";
import { zy_log } from "@Units/index";

interface HomeProps extends RouteComponentProps {
  postList: Post[],
  user: User
  total: number
}

class Home extends BasePage<HomeProps, { list: Post[], username: string }> {

  constructor(prop: HomeProps) {
    super(prop)
    this.state = {
      list: prop.postList,
      username: prop.user.name
    }
  }

  componentWillMount() {
    // this.props.get_list(this.props.user.id) 
  }

  componentWillReceiveProps(prop: HomeProps) {
    this.setState({
      list: prop.postList,
      username: prop.user.name,
    })
  }

  _render() {
    const { list, username } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.listTable}>
          {list.map(item => {
            return <PostCard key={item.id} {...item} username={username} />
          })}
        </div>
        <footer className={styles.footer}>
          <PageControl></PageControl>
        </footer>
      </div>)
  }
}

function mapStateToProps({ frontState, globalState }: BaseState) {
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    user: globalState.user,
    postList: frontState.postList,
    total: frontState.total,
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    clear_msg: bindActionCreators(GlobalFunc.clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_list: bindActionCreators(frontFunc.get_posts, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
