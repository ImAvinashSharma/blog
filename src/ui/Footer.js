import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#5c5c5c",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>
      Created with ❤️ by <a href="https://avinash-sharma.com">Avinash Sharma</a>
    </Text>
  </Box>
)

export default Footer
