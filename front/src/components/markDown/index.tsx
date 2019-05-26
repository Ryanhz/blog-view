import * as React from "react";
import * as Marked from "marked";

interface MarkDownProps {
  content?: string
  className?: string
  options?: MarkDownProps
}

export default class MarkDown extends React.Component<MarkDownProps, any> {

  render() {
    const { content, className } = this.props
    return (
      <div className={className}
        dangerouslySetInnerHTML={{ __html: Marked(`${content || ""}`) }}
      />
    )
  }
}