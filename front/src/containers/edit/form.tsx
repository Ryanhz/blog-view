import * as React from 'react';
import BASE from "@Components/base";
import *  as styles from './form.scss';
import { RouteComponentProps } from "react-router-dom";
import { zy_log } from "@Units/index";
import { Post } from "@Types/index";

interface FromProps {
  show?: boolean,
  container?: any
}

interface EditState {
  show: boolean,
  container?: any
}

export default class From extends BASE<FromProps, EditState> {
  constructor(props: any) {
    super(props)
    this.state = {
      show: this.props.show,
      container: this.props.container
    }
  }

  getInitialState() {
    return { show: false };
  }

  public componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillReceiveProps(props: FromProps) {
    this.setState({
      show: props.show
    })
  }

  render() {
    let close = () => this.setState({ show: false });
    const { show } = this.state;
    zy_log(`----------` + this.props.container)
    return (
      <div className={[styles.container, show && styles.show || ''].join(' ')}>
        <div className={[styles.form, show && styles.show_anima || ''].join(' ')}>
          {this._form()}
        </div>
      </div>
    );
  }

  _form = () => {
    return (
      <div>
        <textarea className={styles.title} />
      </div>
    );

  }


  handleChange = (value: string) => {

  };
}

