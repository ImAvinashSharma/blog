import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/coding.mdx"
import Container from "../ui/Container"

const Coding = (props) => {
  return (
    <MDXProvider>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default Coding
