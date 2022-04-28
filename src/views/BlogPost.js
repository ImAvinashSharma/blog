import MDX from "@mdx-js/runtime"
import config from "../../blog.config"
import { DiscussionEmbed } from "disqus-react"
import { Box, Text, Heading } from "theme-ui"
import Image from "next/image"
import Container from "../ui/Container"
import CodeBlock from "../ui/CodeBlock"
import DraftBadge from "../ui/DraftBadge"

const BlogPost = ({ post }) => {
  const components = {
    Box: (props) => <Box {...props} />,
    pre: (props) => <div {...props} />,
    code: CodeBlock,
  }

  return (
    <Container>
      <>
        <Box sx={{ pb: [3, 4] }}>
          <Heading as="h1" sx={{ fontSize: [5, 6], position: "relative" }}>
            {post.draft && (
              <Box sx={{ top: "10px", right: 1, position: "relative" }}>
                <DraftBadge />
              </Box>
            )}
            {post.title}
          </Heading>
          {config.showDate && (
            <Text sx={{ fontStyle: "italic" }}>
              published on {new Date(post.date).toLocaleDateString()}
            </Text>
          )}
        </Box>
        {post.coverImage && (
          <Box
            sx={{
              mb: 3,
              border: "1px solid",
              borderColor: "rgba(0,0,0,.1)",
            }}
          >
            <Image
              height={post.coverImageHeight}
              width={post.coverImageWidth}
              src={post.coverImage}
              alt={post.coverImageAlt || ""}
            />
          </Box>
        )}
        <MDX components={components}>{post.content}</MDX>
        {typeof config.disqus === "string" && config.disqus !== "" && (
          <Box
            sx={{
              p: 4,
              mt: 5,
              borderTop: "2px solid",
              borderColor: "rgba(0,0,0,.1)",
              bg: "#eee",
              borderRadius: "8px",
            }}
          >
            <DiscussionEmbed
              shortname={config.disqus}
              config={{
                url: config.url + post.slug,
                identifier: post.slug,
                title: post.title,
                language: "en",
              }}
            />
          </Box>
        )}
      </>
    </Container>
  )
}

export default BlogPost
