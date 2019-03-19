import * as React from 'react';

import style from "./style.css";


const image = require('./../yjtp.png')


export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1, onDecrement, onIncrement } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    console.log(`onDecrement: ${onDecrement}`);

    return (

      <div className={style.hello}>
        <div className={style.greeting}>
          Hello11111 {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <img src={image} alt="imagex" />
        <button onClick={onDecrement}> - </button>
        <button onClick={onIncrement}> + </button>
      </div>
    );
  }
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}