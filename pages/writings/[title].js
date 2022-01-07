import { getAllPostTitles, getPostData } from '../../utilities/posts.js'

export default function Post({ postData }) {
  return <div className='essay' dangerouslySetInnerHTML={{ __html: postData.postContent }} />
}

export async function getStaticPaths() {
  const paths = getAllPostTitles() // Return a list of possible value for id
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.title) // Fetch necessary data for the blog post
  return {
    props: {
      postData
    }
  }
}
