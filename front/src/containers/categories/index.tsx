import * as React from 'react';
import * as styles from "./index.scss";
import BASE from "../../components/base";
import { RouteComponentProps } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux'
import * as Front from '@Redux/actions/front'
import * as GlobalFunc from '@Redux/actions/global'
import { BaseState } from "@Redux/types";
import { User } from "@Types/index";

interface CategoriesProps {
  user: User
  get_category: (userid: number, query?: any) => void
  get_category_posts: (userid: number, cid: number) => void
}

class Categories extends BASE<CategoriesProps, any> {

  componentDidMount() {
    this.props.get_category(this.props.user.id, {
      fields: 'name,id,alias'
    })
  }
  render() {
    const { user } = this.props
    return (<div>
      Categories{user.name}
    </div>)
  }
}

function mapStateToProps({ globalState }: BaseState) {
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    user: globalState.user,
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    // clear_msg: bindActionCreators(clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_category: bindActionCreators(Front.get_category, dispatch),
    get_category_posts: bindActionCreators(Front.get_category_posts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)