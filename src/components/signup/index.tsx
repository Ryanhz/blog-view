import * as React from "react";
import * as styles from "./index.scss";
import "./index.css"
import { Modal, Form, Button } from "react-bootstrap";
import { HtmlAttributes } from "csstype";
import { string } from "prop-types";
import { StoreState, Account } from "@Redux/types";

interface NormalLoginProps { }
const login_left = require("@Assets/login_left.png")


interface TextFiledP {
  show: boolean
  onHide?: () => void
}
//https://www.liangjucai.com/article/144
// https://react-bootstrap.github.io/components/modal/

interface state {
  validated: boolean
}

interface Props {
  post: (username: string, password: string) => any;
  onClose: () => void
}

class AccountContent extends React.Component<Props, state> {

  username: string
  password: string
  constructor(props: any) {
    super(props)
    this.state = {
      validated: false
    }
  }

  handerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.props.post(this.username, this.password);
    }
    this.setState({ validated: true });

  }
  render() {
    const { validated } = this.state
    const { onClose } = this.props
    return (
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={login_left} ></img>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <button className={styles.close} onClick={onClose}>X</button>
            <h4 className={styles.title}>进入口令</h4>
          </div>
          <div className={styles.content}>
            <Form noValidate validated={validated} onSubmit={this.handerSubmit} >
              <Form.Group controlId="formBasicEmail" >
                <Form.Control required type="email" placeholder="输入你的邮箱" onChange={(e: any) => { this.username = e.target.value }} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="密码" onChange={(e: any) => { this.password = e.target.value }} />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="记住我！" />
              </Form.Group>
              <Button variant="primary" block type="submit">
                登 陆
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

interface TextFiledP {
  show: boolean,
  didsignin: boolean,
  onHide?: () => void
  signin: (account: string, password: string) => void
}
class Signup extends React.Component<TextFiledP> {

  render() {
    const { onHide, show } = this.props
    console.log(`onHide:${onHide}`)
    return (
      <Modal
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-custom"
      >
        <AccountContent post={this.post} onClose={onHide} />
      </Modal>
    );
  }

  post = (username: string, password: string) => {
    console.log(`username: ${username}, password: ${password}`)
    this.props.signin(username, password)
    return true;
  }
}

export default Signup;

