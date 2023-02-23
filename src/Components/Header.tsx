import { CSSProperties } from "react";

function Header() {
  return(
    <header style={headerStyle}>
      <h1>This is the header!</h1>
    </header>
  )
}

const headerStyle: CSSProperties = {
  textAlign: 'center',
}


export default Header;