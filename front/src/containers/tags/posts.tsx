import * as React from 'react';
import BASE from "../../components/base";
import * as styles from "./index.scss";
import {
  Link,
  RouteComponentProps
} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalAction from '@Redux/actions/global'
import * as FrontAction from '@Redux/actions/front'
import { BaseState } from "@Redux/types";
import { User, Post, Tag } from "@Types/index";
import { zy_log } from '@Units/index';
import { Post_Row } from "@Components/list-row";
import { dateStr } from "@Units/index";

interface TagsProps {
  user: User
  posts?: Post[]
  get_posts: (tname: string) => void
  get_tag:(tid: number)=>void
}

class Tags_Posts extends BASE<TagsProps & RouteComponentProps<{ tname: string }, any, {tid?: string}>, any> {

  componentDidMount() {
    const { user, get_posts,match,location} = this.props
    if (match.params && match.params.tname) {
      let tname = match.params.tname
      tname && get_posts(tname)
    }
  }
  render() {
    const {posts, match} = this.props

    return (<div className={styles.container}>
      <div className={styles.content}>
        <h3>{ match.params && match.params.tname} </h3>
        <div className={styles.tagContent}>
          {posts && posts.map(item => {
            return <Post_Row key={item.id} date={dateStr(item.createdAt)} title={item.title} postid={item.id} />
          })}
        </div>
      </div>

    </div >)
  }
}

function mapStateToProps({ globalState, frontState }: BaseState) {
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    user: globalState.user,
    posts: frontState.tag_posts,
  }
}

function mapDispatchToProps(dispatch: Dispatch<FrontAction.FrontAction | GlobalAction.Global_Action>) {
  return {
    // clear_msg: bindActionCreators(clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_posts: bindActionCreators(FrontAction.get_tag_posts, dispatch),
    get_tag: bindActionCreators(FrontAction.get_tag, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags_Posts)