import * as React from 'react';
import { zy_log } from "@Units/index";
import Menu from "../memu";
import * as Styles from "./menu.scss";
import {
  RouteComponentProps
} from 'react-router-dom'
interface Menuable {
  _menu?(): JSX.Element | void
  _render?(): JSX.Element | void
}


export default class BasePage<P = {}, S = {}> extends React.Component<P, S> implements Menuable {

  _menu(): JSX.Element {
    return <Menu />
  }

  constructor(props: any) {
    super(props)
  }


  public componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillReceiveProps(props: any) {

  }

  _render() {

  }

  public render() {
    return (
      <div>
        {this._render()}
        <div className={Styles.memu}>
          {this._menu()}
        </div>

      </div>
    );
  }


}

