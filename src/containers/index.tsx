import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as GlobalFunc from '@Redux/actions/global'
import { BaseState } from "@Redux/types";

import Front from './Front';
import NotFound from './NotFound';

const { clear_msg, user_auth } = GlobalFunc;

interface AppIndexProps {
  clear_msg: () => void
  user_auth: () => void
}

class AppIndex extends React.Component<AppIndexProps> {

  constructor(props: any) {
    super(props)
    console.log(JSON.stringify(this.props))
  }

  componentDidMount() {
    // this.props.user_auth();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/404' component={NotFound} />
            <Route component={Front} />
          </Switch>
        </div>
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

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.GlobalAction>) {
  return {
    clear_msg: bindActionCreators(clear_msg, dispatch),
    user_auth: bindActionCreators(user_auth, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppIndex)
