import { CSSProperties } from "react";

export function Footer() {
  return(
    <footer style={footerStyle}>
      <h2>This is the footer!</h2>
    </footer>
  )
}

const footerStyle: CSSProperties = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
}