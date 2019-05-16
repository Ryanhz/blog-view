import * as React from "react";
import * as Marked from "marked";

interface MarkDownProps {
  content?: string
  options?: MarkDownProps
}

export default class MarkDown extends React.Component<MarkDownProps, any> {

  render() {
    const { content } = this.props
    return (
      <div className=""
        dangerouslySetInnerHTML={{ __html: Marked(`${content || ""}`) }}
      />
    )
  }
}