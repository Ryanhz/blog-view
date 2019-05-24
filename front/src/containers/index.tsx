import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as GlobalFunc from '@Redux/actions/global'
import { BaseState, User } from "@Redux/types";

import Front from './Front';
import NotFound from './NotFound';

const { clear_msg, user_auth, get_user } = GlobalFunc;

interface AppIndexProps {
  user: User
  clear_msg: () => void
  user_auth: () => void
  get_user: (id: number) => void,
  get_mainInfo: (id: number) => void,
}

class AppIndex extends React.Component<AppIndexProps> {

  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    if (this.props.user.id == 0) {
      this.props.get_mainInfo(5000);
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
    user: globalState.user,
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    clear_msg: bindActionCreators(clear_msg, dispatch),
    user_auth: bindActionCreators(user_auth, dispatch),
    get_user: bindActionCreators(get_user, dispatch),
    get_mainInfo: bindActionCreators(GlobalFunc.get_main_info, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppIndex)
