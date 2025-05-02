import Logo from "../image/logo.png";

function Header() {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
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
