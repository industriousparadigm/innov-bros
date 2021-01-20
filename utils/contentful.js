import { createClient } from "contentful"

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENFUL_DELIVERY_TOKEN

console.log({ accessToken })

const client = createClient({
  space: space,
  accessToken: accessToken,
})

export const fetchBlogPosts = async () => {
  try {
    const contentfulResponse = await client.getEntries({
      content_type: "blogPost",
    })
    return contentfulResponse.items
  } catch (error) {
    console.error({
      message: "Error getting blog posts from Contentful.",
      error,
    })
    return []
  }
}

export const fetchBlogPost = async (slug) => {
  try {
    const contentfulResponse = await client.getEntries({
      content_type: "blogPost",
      "fields.slug[in]": slug,
    })
    return contentfulResponse.items
  } catch (error) {
    console.error({
      message: `Error getting blog post "${slug}" from Contentful.`,
      error,
    })
    return []
  }
}
