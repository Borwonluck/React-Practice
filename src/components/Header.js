import Logo from "../image/logo.png";
import "./Header.css";

function Header() {
  return (
    <nav>
      <img src={Logo} alt="Logo" className="logo" />
      <a href="/">หน้าแรก</a>
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
