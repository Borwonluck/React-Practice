import Logo from "../image/logo.png";
import "./Header.css";



function Header(props) {
  // const {title} = props
  return (
    <nav>
      <img src={Logo} alt="Logo" className="logo" />
      <a href="/">{props.title}</a>
    </nav>
  );
}

export default Header 

// const Header = () => {
//   return (
//     <>
//       <h1>WonRukSiam</h1>
//     </>
//   );
// };
// export default Header;
