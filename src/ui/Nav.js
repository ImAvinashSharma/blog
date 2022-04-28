import { useRouter } from "next/router"
import { Box } from "theme-ui"
import NavLink from "./NavLink"

const Nav = (props) => {
  const router = useRouter()
  return (
    <Box
      as="nav"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <NavLink href="/about" active={router.pathname === "/about"}>
        About
      </NavLink>
      <NavLink
        href="/"
        active={router.pathname === "/" || router.pathname.includes("/blog")}
      >
        Blog
      </NavLink>
      <NavLink href="/coding" active={router.pathname === "/coding"}>
        Coding
      </NavLink>
    </Box>
  )
}

export default Nav
