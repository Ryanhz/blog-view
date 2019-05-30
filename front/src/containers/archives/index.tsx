import * as React from 'react';
import * as styles from "./index.scss";
import BASE from "../../components/base";
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalAction from '@Redux/actions/global'
import * as FrontAction from '@Redux/actions/front'
import { BaseState } from "@Redux/types";
import { User } from "@Types/index";
class Archives extends BASE<any, any> {
  render() {
    const { user } = this.props
    return (<div>
      Archives{user.name}
    </div>)
  }
}

function mapStateToProps({ globalState }: BaseState) {
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    user: globalState,
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalAction.Global_Action | FrontAction.RequsetAction>) {
  return {
    // clear_msg: bindActionCreators(clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_posts: bindActionCreators(FrontAction.get_posts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Archives)