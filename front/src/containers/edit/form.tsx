import * as React from 'react';
import BASE from "@Components/base";
import ASTextarea from "@Components/autosize-textarea";
import *  as styles from './form.scss';
import { RouteComponentProps } from "react-router-dom";
import { zy_log } from "@Units/index";
import { Post } from "@Types/index";
import SimpleMDE from "react-simplemde-editor";
import "./form.css";

import wn from "@Assets/wn.png";

export interface FormData {
  cover?: any
  title?: string
  intro?: string
}

interface FromProps {
  show?: boolean,
  container?: any
  src?: any
  title?: string
  intro?: string
  onChange?: (data: FormData) => void
}

interface EditState {
  show: boolean,
  container?: any
  src?: any
}

export default class From extends BASE<FromProps, EditState> {

  title?: string
  intro?: string

  constructor(props: any) {
    super(props)
    this.state = {
      show: this.props.show,
      container: this.props.container,
      src: this.props.src

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
    const { title, intro } = this.props;
    const { src } = this.state
    zy_log(src);
    return (
      <div>
        <ASTextarea className={styles.title} defaultValue={title} placeholder='title' onChange={this._titleValueChange} />
        <div className={styles['img-prev-container']} onDragOver={this._dragover} onDrop={this._drop}>
          {src ? this._img(src) : this._label()}
          <input className={styles['img-pick-input']} type='file' id={'fileSelecter'} accept="image/*" onChange={this.imagePick} />
        </div>
        {/* <div className={styles['categories']}>
          <label htmlFor="form-categories">categories</label>
          <input id='form-categories' type='text' placeholder='categories'></input>
        </div>
        <div className={styles['tags']}>
          <label htmlFor="form-tags">tags</label>
          <input id='form-tags' type='text' placeholder='tags'></input>
        </div> */}
        <div className={styles['intro']}>
          <SimpleMDE className={'form'}
            onChange={this.handleChange}
            value={intro}
            options={{
              placeholder: "简介",
              toolbar: false,
              status: false,
            }} />
        </div>
      </div>
    );
  }

  _callonChange = () => {
    const { onChange } = this.props
    onChange && onChange({
      cover: this.state.src,
      title: this.title,
      intro: this.intro
    })
  }

  _titleValueChange = (value: string) => {
    this.title = value
    this._callonChange();
  }

  _label = () => {
    return <label className={styles['img-pick-input-label']} htmlFor='fileSelecter'>请选择封面 </label>
  }

  _img = (src: any) => {
    return <div className={styles['prev-img-item']}>
      <img className={styles['prev-img']} src={src}></img>
      <a className={styles['img-delete']} onClick={this._delete}>x</a>
    </div>
  }

  imagePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = document.querySelector('input')
    console.log(input.files);
    let reads = new FileReader()
    reads.readAsDataURL(input.files[0])
    let self = this;
    reads.onload = function () {
      self.setState({
        src: this.result
      })
      self._callonChange()
    }
  }

  handleChange = (value: string) => {
    this.intro = value;
    this._callonChange()
  };

  _dragover = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  _drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(e.dataTransfer.files[0])
    let self = this;
    reader.onload = function (this, ev) {
      let img_src = this.result;
      self.setState({
        src: img_src
      })
      self._callonChange()
    }
  }

  _delete = () => {
    this.setState({
      src: null
    })
  }
}