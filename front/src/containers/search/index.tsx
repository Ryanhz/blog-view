import * as React from 'react';
import BASE from "../../components/base";
import *  as styles from './index.scss';
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import { GlobalActionCreator } from '@Redux/global'
import { } from '@Redux/front'
import { BaseState } from "@Redux/storeMix";
import { User } from "@Types/index";
import { zy_log } from "@Units/index";

interface SearchProps extends RouteComponentProps {
  // postDetail?: Post_Details,
  // get_details: (id: string) => void
}

class Search extends BASE<SearchProps, any> {
  constructor(props: any) {
    super(props)
  }
  public componentDidMount() {
    // console.log(this.props.match);
  }
  componentWillMount() {
  }

  componentWillReceiveProps(props: any) {

  }

  public render() {
    return (
      <div>
        search
      </div>
    );
  }
}

function mapStateToProps({ frontState, globalState }: BaseState) {
  // console.log(`globalState----------${JSON.stringify(globalState)}`)
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    // user: globalState.userInfo,
    postDetail: frontState.postDetail
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    clear_msg: bindActionCreators(GlobalActionCreator.clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    // get_details: bindActionCreators(frontFunc.get_post_detail, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
