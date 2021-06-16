import { getAllPostTitles, getPostData } from '../../../lib/posts'

export default function Post() {
  const { title, id, date, wordCount, contents, postContent, component } = postData;
  console.log('contnets: ', contents);
  console.log('component', component);

  return (
    <div>
      <Head>
        <title>{title} | Bank Rank Blog</title>
        {/* Todo: blog favicon */}
      </Head>
      </div>
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
