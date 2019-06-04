import * as React from "react";
import BASE from "../../components/base";
import {
  Route,
  Switch,
  RouteComponentProps
} from 'react-router-dom'
import List from '../list'

import Search from "../search";
import Tags from "../tags"
import About from "../about"
import Archives from "../archives";
import Categories from "../categories";
import Private from "../private";
import Detail from './../Detail'
import NotFound from '../NotFound'
import Tag_Posts from "../tags/posts"
import Mine from "@Components/aside-mine";

import * as styles from "./index.scss"
import Menu from "@Components/memu"
import { zy_log } from "@Units/index";

export default class Front extends BASE<RouteComponentProps, any> {
  render() {
    const { path } = this.props.match;
    zy_log(`Fronturl: ${JSON.stringify(this.props.match)}`)
    return (
      <div className={styles.container}>
        <aside className={styles.left_container}>
          <Mine />
        </aside>
        <main className={styles.right_container}>
          <Switch>
            <Route exact path={`/`} component={List} />
            <Route exact path={`/posts`} component={List} />
            < Route exact path={`/archives`} component={Archives} />
            < Route exact path={`/categories`} component={Categories} />
            < Route exact path={`/tags`} component={Tags} />
            <Route exact path={`/tags/:tid/posts`} component={Tag_Posts} />
            < Route exact path={`/about`} component={About} />
            < Route exact path={`/private`} component={Private} />
            < Route exact path={`/search`} component={Search} />
            <Route exact path={`/posts/:pid`} component={Detail} />
            <Route component={NotFound} />
          </Switch>
          <div className={styles.memu}>
            <Menu />
          </div>
        </main>
      </div >
    )
  }
}