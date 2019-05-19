import * as React from "react";
import {
  Route,
  Switch,
  RouteComponentProps
} from 'react-router-dom'
import Home from './../Home'
import Detail from './../Detail'
import NotFound from '../NotFound'
import Mine from "@Components/aside-mine";
import * as styles from "./index.scss"
import Menu from "@Components/memu"
import { zy_log } from "@Units/index";

export default class Front extends React.Component<RouteComponentProps> {
  render() {
    const { url } = this.props.match;
    zy_log(`Fronturl: ${url}`)
    return (
      <div className={styles.container}>
        <aside className={styles.left_container}>
          <Mine />
        </aside>
        <main className={styles.right_container}>
          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route exact path={`/detail/:id`} component={Detail} />
            <Route exact path={`/:tag`} component={Home} />
            <Route exact path={`/page/:page`} component={Home} />
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