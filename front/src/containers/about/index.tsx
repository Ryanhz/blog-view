import * as React from 'react';
import BASE from "../../components/base";
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalFunc from '@Redux/global'
import { BaseState } from "@Redux/storeMix";
import { User } from "@Types/index";
class About extends BASE<any, any> {
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

export default connect(mapStateToProps, mapDispatchToProps)(About)