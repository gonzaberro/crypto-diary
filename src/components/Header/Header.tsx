import "./Header.css";

interface HeaderProps {
    headerTitle : string
}

const Header = ({headerTitle} : HeaderProps) => {


    return <div className="header">{headerTitle}</div>


}

export default Header;