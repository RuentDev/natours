import React from 'react'

import HamburgerButton from './HamburgerButton'

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    <div className="navigation">
      <input 
        type="checkbox" 
        id="navi-toggle"
        className="navigation_checkbox hidden" 
      />
      <HamburgerButton />
  </div>
  )
}

export default Nav