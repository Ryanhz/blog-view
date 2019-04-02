import * as React from "react";
import {
  Route,
  Switch,
  RouteComponentProps
} from 'react-router-dom'
import Home from './../Home'
import Detail from './../Detail'
import NotFound from '../NotFound'

import * as styles from "./index.scss"

export default class Front extends React.Component<RouteComponentProps> {
  render() {
    const { url } = this.props.match;
    console.log(`Fronturl: ${url}`)
    return (
      <div className={styles.main}>
        <div className={styles.left_container}>
          left
       </div>
        <div className={styles.right_container}>
          <Switch>
            <Route exact path={url} component={Home} />
            <Route path={`/detail/:id`} component={Detail} />
            <Route path={`/:tag`} component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div >
    )
  }
}