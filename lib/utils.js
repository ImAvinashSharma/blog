export async function getAllPostsWithFrontMatter(dataType) {
  const files = fs.readdirSync(path.join(root, "data", dataType))
  console.log(files)

  //   return files.reduce((allPosts, postSlug) => {
  //     const source = fs.readFileSync(
  //       path.join(root, "data", dataType, postSlug),
  //       "utf8"
  //     )
  //     const { data } = matter(source)
  //     return [
  //       {
  //         frontMatter: data,
  //         slug: postSlug.replace(".md", ""),
  //       },
  //       ...allPosts,
  //     ]
  //   }, [])
}

export async function cachedPostData(dataType) {
  const posts = await getAllPostsWithFrontMatter(dataType)
  return `export const cachedPosts = ${JSON.stringify(posts)}`
}
