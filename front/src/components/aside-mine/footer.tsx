/*
 * Created Date: Sunday, April 7th 2019, 9:53:45 am
 * Author: zy han
 * -----
 * Last Modified: Sunday, 12th May 2019 12:59:32 am
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
import * as styles from "./footer.scss";
import BASE from "../base";
import {
  RouteComponentProps
} from 'react-router-dom'

import { connect } from 'react-redux';
import {  BaseState } from "@Redux/types";
import { zy_log } from "@Units/index";
import { User,Social } from "@Types/index";
interface FooterProps   {
  username: string
  socials?: Social[]
}

class Footer<P extends FooterProps,> extends BASE<P, any> {

  render() {
    const {username, socials } = this.props
    return (
      <footer className={styles.footer_box} id="left-footer">
        <div className={styles.social_box}>
          {socials&& socials.map(social => {
           return <a key={social.id} className={social.icon} href={social.link}></a>
          })}
        </div>
        <p className={styles.auther}>
          <i className="fa fa-at"></i>
          2019
        <span>❤</span>
          <a>{username}</a>
        </p>
      </footer>
    )
  }
  componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillUnmount() {
  }

}

function mapStateToProps({ globalState }: BaseState) {

  return {
    // isFetching: globalState.isFetching,
    username: globalState.user.name,
    socials: globalState.socials
  }
}

export default connect(
  mapStateToProps,
)(Footer)

