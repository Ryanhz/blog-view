import * as React from 'react';
import { zy_log } from "@Units/index";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalFunc from '@Redux/actions/global'
import { BaseState } from "@Redux/types";
import {
  RouteComponentProps
} from 'react-router-dom'

export default class Base<P={}, S={} > extends React.Component<P, S> {
  constructor(props: any) {
    super(props)
  }

  public componentDidMount() {
  }
  componentWillMount() {

  }
  componentWillReceiveProps(props: any) {
  }
  public render() {
    return (
      <div>
        search
      </div>
    );
  }
}

