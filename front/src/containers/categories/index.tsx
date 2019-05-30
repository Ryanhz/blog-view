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
import { Post_Row } from "@Components/list-row";
import { zy_log } from '@Units/index';
import { dateStr } from "@Units/index";

interface CategoriesProps {
  user: User
  categories: Category[]
  c_posts: Category_posts[]
  get_category: (userid: number, query?: any) => void
  get_category_posts: (userid: number, cid: number) => void
  get_category_index: (userid: number, query?: any) => void
}

interface CategoriesState {
  segmentItemSource: {
    id: number,
    title: string,
    alias: string,
    count: number,
    selected: boolean
  }[]
  c_post: Category_posts

}

class Categories extends BASE<CategoriesProps, CategoriesState> {

  constructor(props: CategoriesProps) {
    super(props)
    let { segmentItemSource, selected_c_post } = this.initSegmentSource(props)
    this.state = {
      segmentItemSource: segmentItemSource,
      c_post: selected_c_post
    }
  }

  componentDidMount() {
    this.props.get_category_index(this.props.user.id, {
      fields: 'name,id,alias'
    })
  }

  componentWillReceiveProps(props: CategoriesProps) {
    let { segmentItemSource, selected_c_post } = this.initSegmentSource(props)
    this.setState({
      segmentItemSource: segmentItemSource,
      c_post: selected_c_post
    })
  }

  render() {
    const { user } = this.props
    const { segmentItemSource, c_post } = this.state
    zy_log(`segmentItemSource------------${JSON.stringify(segmentItemSource)}`)
    return (<div className={styles.container}>
      <nav>
        <SegmentBar source={segmentItemSource} selected={this.navSelected} />
      </nav>
      {c_post && c_post.posts.length > 0 &&
        <article className={styles.list_container}>
          {c_post && c_post.posts.map(item => {
            return <Post_Row key={item.id} date={dateStr(item.createdAt)} title={item.title} postid={item.id} />
          })}
        </article>
        ||
        <p>无数据</p>
      }
    </div>)
  }

  initSegmentSource = (props: CategoriesProps, selectedIdx: number = 0) => {

    const { categories, c_posts } = props
    let selected_c_post: Category_posts
    let segmentItemSource = categories.map((category, index) => {

      let c_post = c_posts.find(e => e.categoryid == category.id)
      let selected = index == selectedIdx
      selected && (selected_c_post = c_post)
      return {
        id: category.id,
        title: category.name,
        alias: category.alias,
        count: c_post.posts.length,
        selected: selected
      }
    })
    return { segmentItemSource, selected_c_post }
  }

  navSelected = (index: number) => {
    let { segmentItemSource, selected_c_post } = this.initSegmentSource(this.props, index)
    this.setState({
      segmentItemSource: segmentItemSource,
      c_post: selected_c_post
    })
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