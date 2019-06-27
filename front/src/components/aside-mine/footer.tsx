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
import { connect } from 'react-redux';
import { BaseState } from "@Redux/types";
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faAt)

import { zy_log } from "@Units/index";
import { Social } from "@Types/index";
interface FooterProps {
  username: string
  socials?: Social[]
}

const icons: Map<string, IconDefinition> = new Map()

icons.set('git', faGithub)
icons.set('email', faPaperPlane)

class Footer<P extends FooterProps,> extends BASE<P, any> {

  render() {
    const { username, socials } = this.props
    return (
      <footer className={styles.footer_box} id="left-footer">
        <div className={styles.social_box}>
          {socials && socials.map(social => {
            return <a key={social.id} href={social.link}>
              <FontAwesomeIcon icon={icons.get(social.name) || faPaperPlane} />
            </a>
          })}
        </div>
        <p className={styles.auther}>
          <FontAwesomeIcon icon={faAt} />
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

