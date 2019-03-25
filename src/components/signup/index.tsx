import * as React from "react";
import * as styles from "./index.scss";
import "./index.css"
import { Modal, Form, Button } from "react-bootstrap";
interface NormalLoginProps { }
const login_left = require("@Assets/login_left.png")

interface TextFiledP {
  show: boolean
  onHide?: () => void
}
//https://www.liangjucai.com/article/144
// https://react-bootstrap.github.io/components/modal/

interface state {
  isInvalid_username: boolean
  isInvalid_password: boolean
}

class AccountContent extends React.Component<any, state> {

  constructor(props: any) {
    super(props)
    this.state = {
      isInvalid_username: false,
      isInvalid_password: false
    }
  }

  handerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);

  }
  InvalidEmail = (value: string) => {
    return true;
  }

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={login_left} ></img>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <button className={styles.close}>X</button>
            <h4 className={styles.title}>进入口令</h4>
          </div>
          <div className={styles.content}>
            <Form validated onSubmit={this.handerSubmit}>
              <Form.Group controlId="formBasicEmail" >
                <Form.Control required type="email" placeholder="输入你的邮箱" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control required type="password" placeholder="密码" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="记主吧！" />
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
  show: boolean
  onHide?: () => void
}
class Signup extends React.Component<TextFiledP> {

  render() {
    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-custom"
      >
        <AccountContent />

      </Modal>
    );
  }
}

export default Signup;

