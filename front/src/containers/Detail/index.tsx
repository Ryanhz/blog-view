import * as React from 'react';
import BASE from "@Components/base";
import *  as styles from './index.scss';
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import { GlobalActionCreator } from '@Redux/global'
import { FrontActionCreator } from '@Redux/front'
import { BaseState } from "@Redux/storeMix";
import { User } from "@Types/index";
import { zy_log } from "@Units/index";
import { Post } from "@Types/index";
import MarkDown from "@Components/markDown";

interface DetailProps {
  postDetail?: Post,
  get_details: (key: number | string) => void
}

interface DetailState {
  title?: string,
  postDetail: Post
}

class Detail extends BASE<DetailProps & RouteComponentProps<{ title: string }, any, { pid: string }>, DetailState> {
  constructor(props: any) {
    super(props)
    const { location, match } = this.props
    this.state = {
      title: match.params && match.params.title,
      postDetail: this.props.postDetail
    }
  }
  public componentDidMount() {
    // console.log(this.props.match);
  }
  componentWillMount() {
    this.state.title && this.props.get_details(this.state.title)
  }


  componentWillReceiveProps(props: DetailProps) {
    this.setState({
      postDetail: props.postDetail
    })
  }

  public render() {
    const { postDetail } = this.state

    return (
      <div className={styles.container}>
        {postDetail &&
          <div className={styles.container}>
            <h2>{postDetail.title}</h2>
            <MarkDown className={styles.content} content={postDetail.content} />
          </div>}
      </div>
    );
  }
}

function mapStateToProps({ frontState, globalState }: BaseState) {
  // console.log(`globalState----------${JSON.stringify(globalState)}`)
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    postDetail: frontState.postDetail
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    clear_msg: bindActionCreators(GlobalActionCreator.clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_details: bindActionCreators(FrontActionCreator.get_post, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
