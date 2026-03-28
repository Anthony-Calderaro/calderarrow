import Link from 'next/link';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons';

import Tag from '../components/Tag.js';

import { postTags, tagColors, sortByMapping } from '../public/staticText.js';
import { getSortedPostsData } from '../utilities/posts.js'
import { formatDatesForSearching } from '../utilities/dates.js';
import writingsStyles from '../styles/Writings.module.css'

const formatReadingTime = wordCount => {
  const numberOfMinutes = Math.ceil(wordCount / 200);
  const minOrMins = numberOfMinutes === 1 ? 'min' : 'mins';
  return `${numberOfMinutes} ${minOrMins}`;
};

const makeCategoryTags = (categories) => {
  const categoryClick = (e, category) => {
    e.preventDefault();
    setSearchText(category)
  }
  return categories.map((category, i) => <span key={i} tabIndex="0" style={{ fontSize: "12px", color: "black", padding: "6px 12px", borderRadius: "8px", marginRight: "4px", backgroundColor: tagColors[category] }} onKeyDown={(e) => categoryClick(e, category)} onClick={(e) => categoryClick(e, category)}>{category}</span>)
};

const PostCard = ({ id, title, description, date, wordCount, categories }) => {
  return (
    <li key={id} className={writingsStyles.postcard}>
      <Link href={`/writings/${id}`}>
        <h2>{title}</h2>
        <p>Post Description: {description}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "gray", fontSize: 14 }}>{formatDatesForSearching(date)} · {formatReadingTime(wordCount)}</span>
          {/* Todo: Add View Count */}
          <div style={{ textAlign: "right" }}>{makeCategoryTags(categories)}</div>
        </div>
      </Link>
    </li>
  )
}

export default ({ allPostsData }) => {
  const [filteredPosts, setFilteredPosts] = useState(allPostsData);
  const [searchText, setSearchText] = useState('');
  const [filterByTags, setTagFilters] = useState([]);
  const [sortBy, updateSortBy] = useState(0);

  const tagClick = (tag) => {
    const updatedTags = [...filterByTags];
    if (updatedTags.includes(tag)) {
      updatedTags.splice(updatedTags.indexOf(tag), 1);
    } else {
      updatedTags.push(tag);
    }

    setTagFilters(() => updatedTags);
  }

  useEffect(() => {
    const searchString = searchText.toLowerCase().trim();
    if (searchString.length === 0 && filterByTags.length === 0) {
      setFilteredPosts(allPostsData); // Show All
    } else if (searchString.length > 0 && filterByTags.length === 0) {
      // Filter by search string
      setFilteredPosts(
        allPostsData.filter(({ title }) => (
          title.toLowerCase().indexOf(searchString) > -1
        ))
      )
    } else if (searchString.length === 0 && filterByTags.length > 0) {
      // Filter by tag
      setFilteredPosts(
        allPostsData.filter(({ categories }) => (
          categories.some(category => filterByTags.includes(category.toLowerCase()))
        ))
      )
    } else {
      // Filter by tag and search string
      setFilteredPosts(
        allPostsData.filter(({ title, categories }) => (
          title.toLowerCase().indexOf(searchString) > -1 &&
          categories.some(category => filterByTags.includes(category.toLowerCase()))
        ))
      )
    }
  }, [searchText, filterByTags])

  useEffect(() => {
    const isAscending = sortByMapping[sortBy].isAscending;
    const sortedPosts = [...filteredPosts].sort((a, b) => {
      if (a[sortByMapping[sortBy].key] < b[sortByMapping[sortBy].key]) {
        return isAscending ? 1 : -1;
      } else if (a[sortByMapping[sortBy].key] === b[sortByMapping[sortBy].key]) {
        return 0;
      } else {
        return isAscending ? -1 : 1;
      }
    })
    setFilteredPosts(() => sortedPosts)
  }, [sortBy])

  return (
    <section>
      <h1>
        All Writings
        <Link href="/rss.xml">
          <FontAwesomeIcon style={{ height: 18, cursor: "pointer", marginLeft: 10 }} icon={faRss} />
        </Link>
      </h1>
      <input className={writingsStyles.writing_container} id='search' type='text' placeholder="Search by title, text, or tag" onChange={e => setSearchText(e.target.value)} value={searchText} />
      <label htmlFor='search' description='Search Writings' />
      <div className={writingsStyles.sort_and_tag_container}>
        <ul className={writingsStyles.tag_container}>
          {postTags.map((tag, i) => (
            <Tag
              label={tag}
              tagKey={tag + i}
              optionalStyles={{ backgroundColor: tagColors[tag], opacity: filterByTags.includes(tag) ? 1 : .5 }}
              optionalClasses={filterByTags.includes(tag) && writingsStyles.selected_tag}
              click={() => tagClick(tag)}
            />))}
        </ul>
        <select
          className={writingsStyles.sort_by_container}
          onChange={(e) => updateSortBy(e.target.value)}
        >
          <option value={0}>Date &darr;</option>
          <option value={1}>Date &uarr;</option>
          <option value={2}>Time &darr;</option>
          <option value={3}>Time &uarr;</option>
        </select>
      </div>
      <ul className={writingsStyles.ul}>
        {filteredPosts.map(({ id, date, title, wordCount, categories }) => (
          <PostCard id={id} title={title} date={date} wordCount={wordCount} categories={categories} />
        ))}
      </ul>
    </section>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  if (!allPostsData) {
    return {
      noFound: true,
    }
  }
  return {
    props: {
      allPostsData
    }
  }
}

<div>
  {/* Make global abckground rgb(245, 245, 245) */}
  make writing post background white
  Fuzzy Search
  Multi Select Tags           translations           Total Post Count            Total Word Count           Total View Count         </div>          