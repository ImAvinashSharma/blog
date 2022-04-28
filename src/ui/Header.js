import config from "../../blog.config"
import { MDXProvider } from "@mdx-js/react"
import { Box, Heading } from "theme-ui"
import Nav from "./Nav"
import { motion } from "framer-motion"
const Header = (props) => (
  <MDXProvider>
    <Box as="header" sx={{ textAlign: "center", pt: 5 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.5,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.6,
            },
          },
        }}
      >
        <Heading sx={{ fontSize: 6, pb: 2, px: 3 }} as="h1">
          {config.title}
        </Heading>
      </motion.div>
      <Nav />
    </Box>
  </MDXProvider>
)

export default Header
