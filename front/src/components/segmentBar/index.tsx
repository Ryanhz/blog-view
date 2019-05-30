/*
 * Filename: /Users/hzf/Documents/hzy-private/blog-view/front/src/components/segments/index.tsx
 * Path: /Users/hzf/Documents/hzy-private/blog-view/front
 * Created Date: Tuesday, May 28th 2019, 4:26:11 pm
 * Author: hzf
 * 
 * Copyright (c) 2019 Your Company
 */
import * as React from "react";
import * as styles from "./index.scss";
import { Post } from "@Types/index";
import BASE from "@Components/base";
import {
  Link,
} from 'react-router-dom'
import { type } from "os";
import { number } from "prop-types";

interface SegmentBarItemProps {
  title: string
  count?: number
  selected?: boolean
  index: number
  onClick?: (e: React.MouseEvent) => void
}

export class SegmentBarItem extends BASE<SegmentBarItemProps, any> {
  render() {
    const { title, count, selected, onClick, index } = this.props
    return <a
      data-index={index}
      className={[styles.segmentBarItem, selected && styles.selected].join(" ")}
      onClick={onClick}
    >
      <span className={styles.title}>{title}</span>
      {count > 0 && <span className={styles.count}>{count}</span>}
    </a>
  }
}

interface Item {

  //id: number // category.id,
  title: string//category.name,
  //alias: string//category.alias,
  count: number//c_post.posts.length,
  selected: boolean//selected
}

interface SegmentBarProps {
  source: Item[]
  selectedIndex?: number
  selected?: (index: number) => void
}

export default class SegmentBar extends BASE<SegmentBarProps, { selectedIndex?: number }> {

  constructor(props: SegmentBarProps) {
    super(props)
    this.state = {
      selectedIndex: props.selectedIndex
    }
  }

  render() {
    const { source, selectedIndex } = this.props
    return (
      <div className={styles.container}>
        {source.map((item, index) => {
          return <SegmentBarItem title={item.title}
            key={index}
            index={index}
            count={item.count}
            selected={item.selected}
            onClick={this.itemClick}
          />
        })}
      </div>
    )
  }

  itemClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log(e.currentTarget.getAttribute('data-index'))
    let index = parseInt(e.currentTarget.getAttribute('data-index'))
    this.setState({
      selectedIndex: index
    })
    this.props.selected && this.props.selected(index)

  }
  componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillUnmount() {
  }

}