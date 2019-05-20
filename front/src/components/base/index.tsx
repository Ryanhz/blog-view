import * as React from 'react';
import { zy_log } from "@Units/index";

export default class Base<P = any, S = any> extends React.Component<any | P, S> {
  constructor(props: any) {
    super(props)
  }

  public componentDidMount() {
    zy_log(this.props.match);
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

