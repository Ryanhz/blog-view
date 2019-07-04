import * as React from 'react';
import BASE from "../../components/base";
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import { } from '@Redux/global'
import { BaseState } from "@Redux/storeMix";
import { User } from "@Types/index";
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // clear_msg: bindActionCreators(clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    // get_user: bindActionCreators(get_user_info, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Private)