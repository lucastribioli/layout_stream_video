import React from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

  }, []);
  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img className='nav-logo' src='https://cdn-icons-png.flaticon.com/512/4661/4661573.png' alt='logo'></img>
      <img className='nav-avatar' src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' alt='avatar'></img>
    </div>
  )
}

export default Nav
