
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
import BASE from "../../components/base";
import PageControl from "@Components/page-control";
import PostCard from "@Components/post-card";
import * as styles from "./index.scss";
import {
  RouteComponentProps
} from 'react-router-dom'

import { Post_cardable } from "@Types/index";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalFunc from '@Redux/actions/global'
import * as frontFunc from '@Redux/actions/front'
import { User, BaseState } from "@Redux/types";
import { zy_log } from "@Units/index";

interface HomeProps extends RouteComponentProps {
  list?: Post_cardable[],
  get_list: (tag: string, pageNum: string) => void
}

class Home extends BASE<HomeProps, any> {

  constructor(prop: HomeProps) {
    super(prop)
    this.state = {
      list: prop.list,
    }
  }

  componentWillMount() {
    this.props.get_list(null, "1")
  }

  componentWillReceiveProps(prop: HomeProps) {
    this.setState({
      list: prop.list
    })
  }
  render() {
    const post_list: Post_cardable[] = this.state.list
    zy_log(`-post_list--------------${post_list}`)
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

function mapStateToProps({ frontState, globalState }: BaseState) {
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    // user: globalState.userInfo,
    list: frontState.postList
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    clear_msg: bindActionCreators(GlobalFunc.clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_list: bindActionCreators(frontFunc.get_post_list, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
