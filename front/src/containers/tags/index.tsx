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
import { User, Tag } from "@Types/index";

interface TagsProps {
  user: User
  tags: Tag[]
  get_tags: (userid: number, query?: any) => void
}

class Tags extends BASE<TagsProps & RouteComponentProps, any> {

  componentDidMount() {
    const { user, get_tags } = this.props
    get_tags(user.id || 5000)
  }

  render() {
    const { user, tags } = this.props
    return (<div className={styles.container}>
      <div className={styles.content}>
        <h3>{tags && tags.length || 0}  tags in total</h3>
        <div className={styles.tagContent}>
          {tags && tags.map(item => {
            return < Link className={styles.tag}
              key={item.id}
              to={{
                pathname: `/tags/${item.name}/posts`,
                state: { tid: item.id }
              }}
            ># {item.name}</Link>
          })}
        </div>
      </div>

    </div>)
  }
}

function mapStateToProps({ globalState, frontState }: BaseState) {
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    user: globalState.user,
    tags: frontState.tags
  }
}

function mapDispatchToProps(dispatch: Dispatch<FrontAction.FrontAction | GlobalAction.Global_Action>) {
  return {
    // clear_msg: bindActionCreators(clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_tags: bindActionCreators(FrontAction.get_tags, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags)