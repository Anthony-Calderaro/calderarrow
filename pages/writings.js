import Link from 'next/link';
import { useState, useEffect } from 'react';

import { getSortedPostsData } from '../lib/posts.js'

import writingsStyles from '../styles/Writings.module.css'

const ListView = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>;
const CardView = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z" /></svg>;

const formatReadingTime = wordCount => {
  const numberOfMinutes = Math.ceil(wordCount / 200);
  const minOrMins = numberOfMinutes === 1 ? 'min' : 'mins';
  return `${numberOfMinutes} ${minOrMins}`;
};

export default ({ allPostsData }) => {
  const [filteredPosts, setFilteredPosts] = useState(allPostsData);
  const [searchText, setSearchText] = useState('');
  const [cardView, toggleCardView] = useState(false);

  const makeCategoryTags = (categories) => {
    const categoryClick = (e, category) => {
      e.preventDefault();
      setSearchText(category)
    }
    return categories.map(category => <span tabindex="0" onKeyPress={(e) => categoryClick(e, category)} onClick={(e) => categoryClick(e, category)}>#{category}</span>)
  };

  useEffect(() => {
    const searchString = searchText.toLowerCase().trim();

    setFilteredPosts(
      allPostsData.filter(({ title, categories }) => (
        title.toLowerCase().indexOf(searchString) > -1 ||
        categories.find(category => category.toLowerCase().indexOf(searchString) > -1)
      ))
    )
  }, [searchText])

  return (
    <section>
      <div className={writingsStyles.writing_container}>
        <span className={writingsStyles.heading}>Showing {filteredPosts.length} of {allPostsData.length}</span>
        <input type='text' onChange={e => setSearchText(e.target.value)} value={searchText} />
        <span className={writingsStyles.viewToggle} tabIndex="0" onKeyPress={() => toggleCardView(!cardView)} onClick={() => toggleCardView(!cardView)}>{cardView ? <ListView /> : <CardView />}</span>
      </div>
      <ul className={writingsStyles.ul}>
        {filteredPosts.map(({ id, date, title, wordCount, categories }) => (
          <li key={id}>
            <Link href={`/writings/${id}`}>
              <a>
                <div className={writingsStyles.post}>
                  <span>{title}</span>
                  <span>{date}</span>
                </div>
                {cardView && <div className={writingsStyles.post_details}>
                  <div>{makeCategoryTags(categories)}</div>
                  <span>{formatReadingTime(wordCount)}</span>
                </div>}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}