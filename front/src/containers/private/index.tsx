import * as React from 'react';
import BASE from "../../components/base";
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalFunc from '@Redux/actions/global'
import { User, BaseState } from "@Redux/types";

class Private extends BASE<any, any> {
  render() {
    const { user } = this.props
    return (<div>
      private{user.name}
    </div>)
  }
}

function mapStateToProps({ globalState }: BaseState) {
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    user: globalState.user,
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    // clear_msg: bindActionCreators(clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    // get_user: bindActionCreators(get_user_info, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Private)