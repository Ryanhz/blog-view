/*
 * Created Date: Sunday, April 7th 2019, 9:53:45 am
 * Author: zy han
 * -----
 * Last Modified: Sunday, 12th May 2019 1:04:49 am
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
import * as styles from "./section.scss";
import BASE from "../base";
import {
  Link,
  RouteComponentProps
} from 'react-router-dom'

import { connect } from 'react-redux';
import { BaseState } from "@Redux/storeMix";

const tags = [
  { num: 0, name: "archives", herf: "/archives" },
  { num: 0, name: "Categories", herf: "/categories" },
  { num: 0, name: "Tags", herf: "/tags" }
]

const navs = [
  { name: "Home", herf: "/" },
  { name: "Private", herf: "/private" },
  { name: "About", herf: "/about" },
  { name: "search", herf: "/search" },
]

interface ContentProps {
  categoryCount: number,
  postCount: number,
  tagCount: number,
}

class Content extends BASE<ContentProps, any> {

  render() {
    const { categoryCount, postCount, tagCount } = this.props
    return (
      <div className={styles.content}>
        <section className={styles.section}>
          {
            tags.map((tag, index) => {
              return <Link to={tag.herf} className={styles.item} key={index}>
                <span>{index == 0 && postCount || index == 1 && categoryCount || tagCount}</span>
                <span>{tag.name}</span>
              </Link>
            })
          }
        </section>
        <nav className={styles.nav}>
          {
            navs.map((nav, index) => {
              return <Link to={nav.herf} className={[styles.nav_item].join(' ')} key={index}>
                {nav.name}
              </Link>
            })
          }
        </nav>
      </div>
    )
  }
}

function mapStateToProps({ globalState }: BaseState) {
  return {
    // isFetching: globalState.isFetching,
    categoryCount: globalState.categoryCount,
    postCount: globalState.postCount,
    tagCount: globalState.tagCount,
  }
}

export default connect(
  mapStateToProps,
)(Content)
