import siteData from "../../siteData"
import Heading from "../../components/heading"
import { fetchBlogPosts } from "../../utils/contentful"
import Link from "next/link"

const Blogs = ({ posts }) => {
  console.log({ posts })
  return (
    <>
      <Heading large>Blog</Heading>
      <ul className="list-none ml-0">
        {posts.map((post) => (
          <li key={post.title} className="mb-16">
            <Link href={`/blog/${post.slug}`}>
              <div className="cursor-pointer">
                <h3 className="text-xl font-bold text-black">{post.title}</h3>
                <p className="text-gray-500 text-sm font-light mb-4">
                  By {post.author || siteData.title}
                </p>
                <img
                  className="w-full md:w-2/3 mb-4"
                  src={post.posterImages?.[0]?.fields.file.url}
                />
                <p className="mb-4">{post.previewText}</p>
              </div>
            </Link>
            <Link href={`/blog/${post.slug}`} className="underline">
              Read More →
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetchBlogPosts()
  const posts = res.map((post) => {
    return post.fields
  })

  return {
    props: {
      posts,
    },
  }
}

export default Blogs
