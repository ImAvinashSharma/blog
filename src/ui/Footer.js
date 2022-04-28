import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created with ❤️ by <a href="http://avinash-sharma.com/">Avinash Sharma</a>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Follow <a href="https://twitter.com/imAvinashDev">@imAvinashDev</a>
    </Text>
  </Box>
)

export default Footer
