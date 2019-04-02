import * as React from 'react';
import * as styles from './index.scss';
import IconReact from "@Assets/hzy-logo-2.svg";
// import { Account } from "@Redux/types";

import { Navbar } from "react-bootstrap";

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
  loginAction: () => void
  userAction: () => void
}

class Header extends React.Component<HeaderP> {
  public render() {

    const { loginAction, userAction } = this.props
    // console.log(`-------${user}`)
    return (
      <Navbar bg="light" sticky="top" expand="sm">
        <Navbar.Brand href="#home">
          <img
            src={IconReact}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          {' \'s  blog '}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            111
            {/* {didsignIn ? <p>Signed in as: <a onClick={userAction}>{user.nickname}</a>;</p> : <a onClick={loginAction}>Signed</a>} */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar >
    );
  }
}

export default Header;