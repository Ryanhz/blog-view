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
import { User, Category, Category_posts } from "@Types/index";
import SegmentBar from "@Components/segmentBar";

interface CategoriesProps {
  user: User
  categories: Category[]
  c_posts: Category_posts[]
  get_category: (userid: number, query?: any) => void
  get_category_posts: (userid: number, cid: number) => void
  get_category_index: (userid: number, query?: any) => void
}

class Categories extends BASE<CategoriesProps, any> {

  componentDidMount() {
    this.props.get_category_index(this.props.user.id, {
      fields: 'name,id,alias'
    })
  }
  render() {
    const { user } = this.props
    return (<div className={styles.container}>
      <header>
        <SegmentBar source={[{ 'title': '1111', count: 1 }]} />
      </header>
      Categories{user.name}
    </div>)
  }
}

function mapStateToProps({ globalState, frontState }: BaseState) {
  return {
    notification: globalState.msg,
    isFetching: globalState.isFetching,
    user: globalState.user,
    categories: frontState.categories,
    c_posts: frontState.category_posts
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalFunc.Global_Action>) {
  return {
    // clear_msg: bindActionCreators(clear_msg, dispatch),
    // user_auth: bindActionCreators(user_auth, dispatch),
    get_category: bindActionCreators(Front.get_category, dispatch),
    get_category_posts: bindActionCreators(Front.get_category_posts, dispatch),
    get_category_index: bindActionCreators(Front.get_category_index, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)