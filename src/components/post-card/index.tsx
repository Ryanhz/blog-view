/*
 * Created Date: Sunday, May 12th 2019, 12:35:30 am
 * Author: zy han
 * -----
 * Last Modified: Sunday, 12th May 2019 10:57:15 pm
 * Modified By:zy han (1810022686@qq.com>) 
 * -----
 * Copyright (c) 2019 hzy
 * 
 * All shall be well and all shall be well and all manner of things shall be well.
 * Nope...we're doomed!
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

/*
 * Created Date: Sunday, May 12th 2019, 12:35:30 am
 * Author: zy han
 * -----
 * Last Modified: Sunday, 12th May 2019 12:56:46 am
 * Modified By:zy han (1810022686@qq.com>) 
 * -----
 * Copyright (c) 2019 hzy
 * 
 * All shall be well and all shall be well and all manner of things shall be well.
 * Nope...we're doomed!
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import * as React from "react";
import * as styles from "./index.scss";
import wn from "@Assets/wn.png";

export default class PostCard extends React.Component<any, any> {
  render() {
    return (
      <section>
          <figure>
            <img src={wn} />
          </figure> 
       <header>
          头部
       </header>
       <article>
         简介
       </article>
       <footer>
         
       </footer>
      </section>
    )
  }
  componentDidMount(){

  }
  
  componentWillMount(){

  }

  componentWillUnmount(){
  }

}