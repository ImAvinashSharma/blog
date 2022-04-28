import { Button as Btn } from "theme-ui"

const Button = (props) => (
  <Btn
    sx={{
      fontSize: 3,
      bg: "black",
      boxShadow: "none",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    }}
    {...props}
  />
)

export default Button
