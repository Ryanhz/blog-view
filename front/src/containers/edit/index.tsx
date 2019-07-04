import * as React from 'react';
import BasePage from "@Components/base/basePage";
import Menu, { MenueType } from "@Components/memu";
import *  as styles from './index.scss';
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import { GlobalActionCreator } from '@Redux/global'
import { FrontActionCreator } from '@Redux/front'
import { BaseState } from "@Redux/storeMix";
import { User } from "@Types/index";
import { zy_log } from "@Units/index";
import { Post } from "@Types/index";
import MarkDown from "@Components/markDown";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { faDog, faLeaf } from '@fortawesome/free-solid-svg-icons';
import From, { FormData } from './form'

interface DetailProps {
  postDetail?: Post,
  get_details: (key: number | string) => void
}

interface EditState {
  showMode: boolean,
}


let cover = '';//'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561433658&di=4884ceecb4c77294820827090165a174&src=http://hbimg.b0.upaiyun.com/458af12108c4da0f1cf4fe8e2713a458898e332b28196-jdjJ3j_fw658'

class Edit extends BasePage<DetailProps & RouteComponentProps<{ title: string }, any>, EditState> {

  src?: any
  title?: string
  intro?: string
  psot_detail?: string

  constructor(props: any) {
    super(props)
    const { match } = this.props
    this.state = {
      showMode: true
    }

  }
  public componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillReceiveProps(props: DetailProps) {

  }

  _menu() {
    return <Menu leftIcon={faLeaf} menuItemDidClick={this._menuItemDidClick} />
  }

  _menuItemDidClick = (type: MenueType) => {

    const { showMode } = this.state

    switch (type) {
      case MenueType.left: {
        this.setState({
          showMode: !showMode
        })
      }
    }
    return false;
  }

  _render() {
    return <div className={styles.container}>
      <From show={this.state.showMode} onChange={this._formOnchange} />
      <SimpleMDE
        onChange={this.handleChange}
        options={{
          // hideIcons: ["fullscreen"],
          initialValue: "# Hello world!",
          // toolbar: false,
        }}
      />
    </div>
  }

  handleChange = (value: string) => {
    this.psot_detail = value
  };

  _formOnchange = (data: FormData) => {
    this.intro = data.intro
    this.title = data.title
    this.src = data.cover
    zy_log(data.cover)
  }
}

function mapStateToProps({ frontState, globalState }: BaseState) {
  // console.log(`globalState----------${JSON.stringify(globalState)}`)
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    postDetail: frontState.postDetail
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    clear_msg: bindActionCreators(GlobalActionCreator.clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_details: bindActionCreators(FrontActionCreator.get_post, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
