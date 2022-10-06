import { useState } from 'react'
import NavButton from './NavButton';

import './Navigator.css';

function Navigator(props) {
  const { logined, userName } = props;
  const [ isOpen, setIsOpen ] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigator">
      <ul 
        className={`navigator__menu ${isOpen
          ? 'navigator__menu_opened'
          : ''}`}
      >
        {
          logined 
          ? <>
              <li className="navigator__link"> {userName} </li>
              <li className="navigator__link"> SignOut </li>
            </>
          : <>
              <li className="navigator__link"> SignUp </li>
              <li className="navigator__link"> SignIn </li>
            </>
        }
      </ul>
      <NavButton
        handleToggle={handleToggle}
        isOpen={isOpen}
      />
    </div>
  );
}

export default Navigator;
