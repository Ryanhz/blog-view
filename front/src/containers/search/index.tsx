import * as React from 'react';
import BASE from "../../components/base";
import *  as styles from './index.scss';
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalFunc from '@Redux/actions/global'
import * as frontFunc from '@Redux/actions/front'
import { User, BaseState } from "@Redux/types";
import { zy_log } from "@Units/index";

interface SearchProps extends RouteComponentProps {
  // postDetail?: Post_Details,
  get_details: (id: string) => void
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

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    clear_msg: bindActionCreators(GlobalFunc.clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_details: bindActionCreators(frontFunc.get_post_detail, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
