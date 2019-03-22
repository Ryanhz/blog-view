import * as React from 'react';
import './index.scss';
import { RouteComponentProps } from "react-router-dom";


import * as Marked from "marked";
import Header from './../comment/header';

class Details extends React.Component<RouteComponentProps> {
  constructor(props: any) {
    super(props)
  }
  public componentDidMount() {
    console.log(this.props.match);
  }

  public render() {
    return (
      <div>
        {/* <Header /> */}
        <div className="details-container" dangerouslySetInnerHTML={{ __html: Marked("# Marked in the browser\n\nRendered by **marked**.") }} />
      </div>
    );
  }
}
export default Details;