import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="header-container">
          <ul className="header-list">
          <li><NavLink to='/'>All</NavLink></li>
          <li><NavLink to='/fsd'>FULL STACK DEVELOPMENT</NavLink></li>
          <li><NavLink to='/datascience'>DATA SCIENCE</NavLink></li>
          <li><NavLink to='/cyber'>CYBER SECURITY</NavLink></li>
        <li><NavLink to='/blockchain'>BLOCKCHAIN</NavLink></li>  </ul>
    </div>
  )
}

export default Header
