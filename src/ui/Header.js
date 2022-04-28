import config from "../../blog.config"
import { MDXProvider } from "@mdx-js/react"
import { Box, Heading } from "theme-ui"
import Nav from "./Nav"

const Header = (props) => (
  <MDXProvider>
    <Box as="header" sx={{ textAlign: "center", pt: 5 }}>
      <Heading sx={{ fontSize: 6, pb: 2, px: 3 }} as="h1">
        {config.title}
      </Heading>
      <Nav />
    </Box>
  </MDXProvider>
)

export default Header
