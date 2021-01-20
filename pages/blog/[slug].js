import Heading from "../../components/heading"
import { fetchBlogPost, fetchBlogPosts } from "../../utils/contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const renderBlogContent = (content) => {
  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: function imageRenderer(node) {
        const { title, file, description } = node.data.target.fields
        return (
          <>
            <img className="mx-auto lg:w-3/4" src={file.url} alt={title} />
            {description && (
              <p className="text-center italic text-sm">{description}</p>
            )}
          </>
        )
      },
      [BLOCKS.HEADING_2]: function h2Renderer(node) {
        return (
          <h3 className="text-xl font-bold py-5">{node.content[0].value}</h3>
        )
      },
      [BLOCKS.HEADING_3]: function h3Renderer(node) {
        return (
          <h3 className="text-lg font-bold py-4">{node.content[0].value}</h3>
        )
      },
    },
  }

  return documentToReactComponents(content, renderOptions)
}

function BlogPost({ post }) {
  return (
    <>
      <Heading>{post.title}</Heading>
      {renderBlogContent(post.content)}
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetchBlogPost(context.params.slug)
  const post = res?.[0]?.fields

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetchBlogPosts()
  const posts = res.map((post) => post.fields)
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export default BlogPost
