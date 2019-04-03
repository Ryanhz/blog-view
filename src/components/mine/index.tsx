import * as React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default class Mine extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}