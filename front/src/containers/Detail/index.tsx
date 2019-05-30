import * as React from 'react';
import BASE from "@Components/base";
import *  as styles from './index.scss';
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalFunc from '@Redux/actions/global'
import * as frontFunc from '@Redux/actions/front'
import { BaseState } from "@Redux/types";
import { User } from "@Types/index";
import { zy_log } from "@Units/index";
import { Post } from "@Types/index";
import MarkDown from "@Components/markDown";

interface DetailProps {
  postDetail?: Post,
  user: User,
  get_details: (id: number) => void
}

class Detail extends BASE<DetailProps & RouteComponentProps<{ postTitle: string }, any, { id: number }>, any> {
  constructor(props: any) {
    super(props)
    const { location } = this.props
    this.state = {
      id: location.state && location.state.id,
      userid: this.props.user.id,
      postDetail: this.props.postDetail
    }
  }
  public componentDidMount() {
    // console.log(this.props.match);
  }
  componentWillMount() {
    this.props.get_details(this.state.id)
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
    user: globalState.user,
    postDetail: frontState.postDetail
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    clear_msg: bindActionCreators(GlobalFunc.clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_details: bindActionCreators(frontFunc.get_post, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
