import * as React from 'react';
import * as styles from './index.scss';
import headerImage from "@Assets/yjtp.png";

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";

// class Header extends React.Component {
//   public render() {
//     return (
//       <div className={styles.container}>
//         <a href="#">
//           <div className={styles.avatar}>
//             <img src={headerImage} />
//           </div>
//           <h1>Ryan</h1>
//         </a>
//       </div>
//     );
//   }
// }

interface HeaderP {
  username?: string
  loginAction: () => void
  userAction: () => void
}

class Header extends React.Component<HeaderP> {
  public render() {
    return (
      <Navbar bg="light" sticky="top" expand="sm">
        <Navbar.Brand href="#home">
          <img
            src={headerImage}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          {'   blog '}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {this.loginState()}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  loginState() {
    const { username, loginAction, userAction } = this.props;

    if (username) {
      return <p>Signed in as: <a onClick={userAction}>{username!}</a>;</p>
    } else {
      return <a onClick={loginAction}>Signed</a>
    }
  }
}

export default Header;