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
import { zy_log } from '@Units/index';

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
  c_post: Category_posts[]

}

class Categories extends BASE<CategoriesProps, CategoriesState> {

  constructor(props: CategoriesProps) {
    super(props)

    this.state = {
      segmentItemSource: this.initSegmentSource(props),
      c_post: props.c_posts
    }
  }

  componentDidMount() {
    this.props.get_category_index(this.props.user.id, {
      fields: 'name,id,alias'
    })
  }

  componentWillReceiveProps(props: CategoriesProps) {
    this.setState({
      segmentItemSource: this.initSegmentSource(props),
      c_post: props.c_posts
    })


  }

  render() {
    const { user } = this.props
    const { segmentItemSource, c_post } = this.state
    zy_log(`segmentItemSource------------${JSON.stringify(segmentItemSource)}`)
    return (<div className={styles.container}>
      <header>
        <SegmentBar source={segmentItemSource} />
      </header>
      Categories{user.name}
    </div>)
  }

  initSegmentSource = (props: CategoriesProps, selectedId?: number) => {

    const { categories, c_posts } = props

    let segmentItemSource = categories.map((category, index) => {

      let count = c_posts.find(e => e.categoryid == category.id).posts.length
      let selected = selectedId && (category.id == selectedId) || (index == 0)
      return {
        id: category.id,
        title: category.name,
        alias: category.alias,
        count: count,
        selected: selected
      }
    })
    return segmentItemSource
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