import Link from 'next/link';
import { getAllPostTitles, getPostData } from '../../lib/posts.js'
import blog_post_styles from './blog_post.module.css';

export default function Post({ postData }) {
  const { title, id, date, wordCount, contents, postContent, component } = postData;
  console.log('contnets: ', contents);
  console.log('component', component);

  return (
    <div>
      <Link href={'/writings'}><a className={blog_post_styles.title}>{title}</a></Link>
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
    </div>
  )
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
