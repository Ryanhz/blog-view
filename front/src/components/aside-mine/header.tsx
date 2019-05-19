/*
 * Created Date: Sunday, April 7th 2019, 9:53:45 am
 * Author: zy han
 * -----
 * Last Modified: Sunday, 12th May 2019 1:04:41 am
 * Modified By:zy han (1810022686@qq.com>) 
 * -----
 * Copyright (c) 2019 hzy
 * 
 * All shall be well and all shall be well and all manner of things shall be well.
 * Nope...we're doomed!
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import * as React from "react";
import * as types from "./header.scss";
import logeSource from "@Assets/hzy-logo-1.svg";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalFunc from '@Redux/actions/global'
import { User ,BaseState} from "@Redux/types";
import { zy_log } from "@Units/index";

interface UserProps  {
  user?: User
}

class Header extends React.Component <UserProps, any> {

  constructor(prop: any){
    super(prop)
    this.state = {
      user:this.props.user,
    }
  }

  componentWillReceiveProps(prop: UserProps) {
    this.setState({
      user: prop.user
    })
  }

  render() {
    const {user} = this.state
    zy_log(`globalState----------${JSON.stringify(user.avatar)}`)

    return (
      <header className={types.header}>
        <div className={types.avatarBox}>
          <img alt={"头像"} className={types.avatar} src={ user&&user.avatar || logeSource} />
        </div>
        <h2>
          <a>{user&&user.nickName}</a>
        </h2>
        <p className={types.say}>
        {user.signature}
        </p>
      </header>
    )
  }
}

function mapStateToProps({ globalState }: BaseState) {
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    user: globalState.userInfo,
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    // clear_msg: bindActionCreators(clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    // get_user: bindActionCreators(get_user_info, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
