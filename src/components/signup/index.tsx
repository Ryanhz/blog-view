import * as React from "react";
import * as styles from "./index.scss";
import { Modal, Button } from "react-bootstrap";
interface NormalLoginProps { }

interface TextFiledP {
  show: boolean
  onHide?: () => void
}
//https://www.liangjucai.com/article/144
// https://react-bootstrap.github.io/components/modal/
class Signup extends React.Component<TextFiledP> {

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Button onClick={this.props.onHide}>Close</Button>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Dialog >
          ss
        </Modal.Dialog>

      </Modal>
    );
  }
}

export default Signup;

