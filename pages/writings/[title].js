import TableOfContents from '../../components/TableOfContents.js'
import BottomNavigation from '../../components/BottomNavigation.js'
import Tag from '../../components/Tag.js'
import { getAllPostTitles, getPostData } from '../../utilities/posts.js'

const Footnotes = () => {

  /*
    anchor: string
    text: string

  */
  return (
    <>
      <hr />
      <ol>
        <li>
          <a>↩︎</a>
        </li>
      </ol>
    </>
  )
}


export default function Post({ postData }) {
  return (
    <>

      <h1>Post Title</h1>
      <p  style={{ fontSize: 18}}>Post Description</p>
      <div style={{ color: "gray", fontSize: 14}}>Date · Time · Wordcount | ViewCount | translations | Audio Recording</div>
      <TableOfContents />
      <div className='essay' dangerouslySetInnerHTML={{ __html: postData.postContent }} />
      <Footnotes />
      <Tag />
      <BottomNavigation />
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostTitles() // Return a list of possible value for id
  if (!paths) {
    return <div>Loading...</div>
  }
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.title) // Fetch necessary data for the blog post
  if (!postData) {
    return <div>Loading...</div>
  }
  return {
    props: {
      postData
    }
  }
}
