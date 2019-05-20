import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as GlobalFunc from '@Redux/actions/global'
import { BaseState, User } from "@Redux/types";

import Front from './Front';
import NotFound from './NotFound';

const { clear_msg, user_auth, get_user_info } = GlobalFunc;

interface AppIndexProps {
  userInfo: User
  clear_msg: () => void
  user_auth: () => void
  get_user: (id: string) => void
}

class AppIndex extends React.Component<AppIndexProps> {

  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    if (this.props.userInfo.userId.length == 0) {
      this.props.get_user("1");
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route component={Front} />
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps({ globalState }: BaseState) {

  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    userInfo: globalState.userInfo,
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    clear_msg: bindActionCreators(clear_msg, dispatch),
    user_auth: bindActionCreators(user_auth, dispatch),
    get_user: bindActionCreators(get_user_info, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppIndex)
