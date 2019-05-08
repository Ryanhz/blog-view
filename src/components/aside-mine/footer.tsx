import * as React from "react";
import * as styles from "./footer.scss";

export default class Footer extends React.Component<any, any> {
  render() {
    return (
      <footer className={styles.footer_box} id="left-footer">
        <div className={styles.social_box}>
          <a className="fa  fa-envelope fa-2x" href="#"></a>
          <a className="fa fa-github fa-2x" href="#"></a>
        </div>
        <p className={styles.auther}>
          <i className="fa fa-at"></i>
          2019
        <span>❤</span>
          <a>Zy Han</a>
        </p>
      </footer>
    )
  }
  componentDidMount(){
    this.resetFooterClass()
  }
  componentWillMount(){
    window.addEventListener('resize',this.handleResize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize',this.handleResize)
  }

  handleResize=(e: UIEvent)=>{
    this.resetFooterClass()
  }

  resetFooterClass=()=>{
    const bodyHeight =  document.querySelector('body').clientHeight    
    if (bodyHeight>820) {
      document.querySelector("#left-footer").classList.add('bottom')
     } else {
       document.querySelector("#left-footer").classList.remove('bottom')
     }
  }
}