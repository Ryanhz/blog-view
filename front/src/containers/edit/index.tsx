import * as React from 'react';
import * as ReactDOMServer from "react-dom/server";
import BASE from "@Components/base";
import *  as styles from './index.scss';
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as GlobalFunc from '@Redux/actions/global'
import * as frontFunc from '@Redux/actions/front'
import { BaseState } from "@Redux/types";
import { User } from "@Types/index";
import { zy_log } from "@Units/index";
import { Post } from "@Types/index";
import MarkDown from "@Components/markDown";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


interface DetailProps {
  postDetail?: Post,
  get_details: (key: number | string) => void
}

interface EditState {
  title?: string,
}


let cover = '';//'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1561433658&di=4884ceecb4c77294820827090165a174&src=http://hbimg.b0.upaiyun.com/458af12108c4da0f1cf4fe8e2713a458898e332b28196-jdjJ3j_fw658'

class Edit extends BASE<DetailProps & RouteComponentProps<{ title: string }, any>, EditState> {
  constructor(props: any) {
    super(props)
    const { match } = this.props
    // this.state = {
    //   title: match.params && match.params.title,
    //   postDetail: this.props.postDetail
    // }
  }
  public componentDidMount() {

    // var ele_textarea = document.getElementById('md_editor');
    // var mditor = Mditor.fromTextarea(ele_textarea);
  }
  componentWillMount() {
    // this.state.title && this.props.get_details(this.state.title)
  }


  componentWillReceiveProps(props: DetailProps) {
    // this.setState({
    //   postDetail: props.postDetail
    // })
  }

  public render() {
    // const { title } = this.state

    return (
      <div className={styles.container}>
        <SimpleMDE
          onChange={this.handleChange}
          options={{
            // hideIcons: ["fullscreen"],
            initialValue: "Hello world!",
            // toolbar: false,
          }}
        />;
      </div>
    );
  }

  handleChange = (value: string) => {
    // this.setState({ mdeValue: value });
  };


}

function mapStateToProps({ frontState, globalState }: BaseState) {
  // console.log(`globalState----------${JSON.stringify(globalState)}`)
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    postDetail: frontState.postDetail
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    clear_msg: bindActionCreators(GlobalFunc.clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_details: bindActionCreators(frontFunc.get_post, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
