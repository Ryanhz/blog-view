import * as React from 'react';
import { zy_log } from "@Units/index";

export default class Base<P = {}, S = {}> extends React.Component<P, S> {
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
