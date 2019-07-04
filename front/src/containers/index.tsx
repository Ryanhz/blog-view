import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GlobalActionCreator } from '@Redux/global'
import { BaseState } from "@Redux/storeMix";
import { User } from "@Types/index";

import Front from './Front';
import NotFound from './NotFound';
import { zy_log } from "@Units/index";
let Router: any;
if (process.env.NODE_ENV == 'production') {
  Router = BrowserRouter
} else {
  Router = HashRouter
}


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
    if (this.props.user.id == 0 || !this.props.user.nickName) {
      this.props.get_mainInfo(5000);
    }
  }
  _getUserConfirmation = (message: string, callback: (ok: boolean) => void) => {
    zy_log(`==========_getUserConfirmation:${message}`);
    // callback(true);
  }

  render() {
    return (
      <Router getUserConfirmation={this._getUserConfirmation}>
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    clear_msg: bindActionCreators(GlobalActionCreator.clear_msg, dispatch),
    user_auth: bindActionCreators(GlobalActionCreator.user_auth, dispatch),
    get_user: bindActionCreators(GlobalActionCreator.getUser, dispatch),
    get_mainInfo: bindActionCreators(GlobalActionCreator.get_main_info, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppIndex)
