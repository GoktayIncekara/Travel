import logo from "../images/obss.png"

export default function Header() {
    return (
      <header>
        <nav className="nav">
            <div className="header-infos">
                <img className="nav-logo" src={logo}/>
                <h1 className="company-name">OBSS</h1>
            </div>
            <ul className="nav-items">
                <li>Pricing </li>
                <li>About </li>
                <li>Contact </li>
            </ul>
        </nav>
      </header>
    )
}