import * as React from 'react'
import BASE from "@Components/base";
import * as styles from "./index.scss";
import { withRouter, RouteComponentProps } from 'react-router-dom' //引入withRouter

import {
  Link,
} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPaw, faChevronDown, faChevronUp, IconDefinition } from '@fortawesome/free-solid-svg-icons'

import { zy_log, eventProxy } from '@Units/index';

export enum MenueType {
  up, down, left, center
}

interface MemuProps {
  menuItemDidClick?: (type: MenueType) => boolean
  upIcon?: IconDefinition
  leftIcon?: IconDefinition
  downIcon?: IconDefinition
  centerIcon?: IconDefinition
}
class Memu extends BASE<MemuProps & RouteComponentProps, { isOpen: boolean }>{

  constructor(props: any) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { isOpen } = this.state;
    const { upIcon, leftIcon, downIcon, centerIcon } = this.props

    return (
      <div className={styles.meum_container}>
        <div className={[styles.dock, isOpen && styles.open || styles.close].join(' ')}>

          <div className={styles.up} onClick={(e) => {
            this._menuDidClick(e, MenueType.up)
          }}>
            <FontAwesomeIcon icon={upIcon || faChevronUp} size='lg' />
          </div>

          <div className={styles.left} onClick={(e) => {
            this._menuDidClick(e, MenueType.left)
          }}>
            <FontAwesomeIcon icon={leftIcon || faEdit} size='lg' />
          </div>

          <div className={styles.down} onClick={(e) => {
            this._menuDidClick(e, MenueType.down)
          }}>
            <FontAwesomeIcon icon={downIcon || faChevronDown} size='lg' />
          </div>
        </div>

        <div className={styles.front}>
          <div className={styles.item} onClick={(e) => {
            this._menuDidClick(e, MenueType.center)
          }}>
            <FontAwesomeIcon icon={centerIcon || faPaw} size='lg' />
          </div>
        </div>
      </div>
    )
  }

  _menuDidClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, type: MenueType) => {
    const { menuItemDidClick, history } = this.props
    if (menuItemDidClick && menuItemDidClick(type)) {

      return;
    }

    zy_log('type:' + type);
    if (type == MenueType.left) {
      history.push('/edit')
    }
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    })
  }
}

export default withRouter(Memu);