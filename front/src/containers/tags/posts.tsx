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
  tag?: Tag
  get_posts: (tid: number) => void
  get_tag:(tid: number)=>void
}

class Tags_Posts extends BASE<TagsProps & RouteComponentProps<{ tid: string }, any, {tname?: string}>, any> {

  componentDidMount() {
    const { user, get_posts, get_tag,match,location} = this.props
    if (match.params && match.params.tid) {
      let tid = match.params.tid
      zy_log(`---------------------------${tid}`)
      tid && get_posts(parseInt(tid))
      let name = location.state&&location.state.tname
      name|| get_tag(parseInt(tid))
    }
  }
  render() {
    const { user, posts, match, tag, location} = this.props

    let name = location.state&&location.state.tname
    name =name||tag&&tag.name

    return (<div className={styles.container}>
      <div className={styles.content}>
        <h3>{ name} </h3>
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
    tag: frontState.tag
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