import * as React from "react";

class ResizeTextarea extends React.Component<any, any> {
  render() {
    return (
      <div className={style['comp-textarea-with-ghost']}>
        <textarea // 这个是真的
          ref={this.bindRef}
          className={style['textarea'] + ' ' + className}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          style={{ height }}
        />
        <textarea // 这个是 ghostTextarea
          className={style['textarea-ghost']}
          ref={this.bindGhostRef}
          onChange={noop}
        />
      </div>


    )
  }
}