import * as React from 'react'
import BASE from "@Components/base";
import * as styles from "./index.scss";
import {
  Link,

} from 'react-router-dom'
// import { connect } from 'react-redux';
import { zy_log, eventProxy } from '@Units/index';
const item = {
  title: 1,
  path: "p",
  search: "?page=1"
}
// import { BaseState } from "@Redux/types";
const items = [item, item, item, item, item]

export default class Memu extends BASE<any, { isOpen: boolean }>{

  constructor(props: any) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { isOpen } = this.state;
    // const { location, history } = this.props
    // zy_log(`location:${JSON.stringify(location)},---${JSON.stringify(history)}`)
    return (
      <div className={styles.meum_container}>
        <div className={[styles.dock, isOpen && styles.open || styles.close].join(' ')}>

          <div className={styles.up} onClick={this._menuDidClick}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-chevron-up"></i>
            </span>
          </div>

          <div className={styles.left}>
            <Link to={'/edit'}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-edit"></i>
              </span>
            </Link>
          </div>

          <div className={styles.down} onClick={this._menuDidClick}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-chevron-down"></i>
            </span>
          </div>
        </div>

        <div className={styles.front}>
          <div className={styles.item} onClick={this._menuDidClick}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-paw"></i>
            </span>
          </div>
        </div>
      </div>
    )
  }

  _menuDidClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    })
  }
}
// function mapStateToProps({ globalState }: BaseState) {

//   return {
//     // isFetching: globalState.isFetching,
//     categoryCount: globalState.categoryCount,
//     postCount: globalState.postCount,
//     tagCount: globalState.tagCount,
//   }
// }

// export default connect(
//   mapStateToProps,
// )(Memu)
