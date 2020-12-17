import Head from 'next/head';
import writingsStyles from '../styles/Writings.module.css'
import { useState, useEffect } from 'react';

import { essays, essayCategories } from '../public/staticText';

const ListView = () => <svg className={writingsStyles.viewOption} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>;
const CardView = () => <svg className={writingsStyles.viewOption} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"/></svg>;
const Descending = () => <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><rect fill="none" height="24" width="24"/><path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z"/></svg>;
const Ascending = () => <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><rect fill="none" height="24" width="24"/><path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z"/></svg>;


const SortMenu = ({ selectOption }) => {
  const options = ['Category', 'Date', 'Title']
  return (
    <div className={writingsStyles.sortMenu}>
      {options.map(option => <div onClick={(e) => selectOption(e.target.innerText)}>{option}</div>)}
    </div>
  )
}
const ShortBlog = ({ essay }) => {
  const { title, date, categories } = essay;
  return (
    <div className={writingsStyles.shortBlog}>
      <div className={writingsStyles.shortBlogTitleContainer}>
        <div className={writingsStyles.shortBlogTitle}>{title}</div>
        <div className={writingsStyles.categories}>
          {categories.map(cat => <div className={`${writingsStyles.category} ${writingsStyles[cat]}`}>{cat}</div>)}
        </div>
      </div>
      <div>{date}</div>
    </div>
  );
}

const BlogCard = ({ essay }) => {
  const { title, date, categories, tldr } = essay;
  return (
    <div className={writingsStyles.blogCard}>
      <div className={writingsStyles.blogCardTopLine}>
        <div className={writingsStyles.title}>{title}</div>
        <div className={writingsStyles.date}>{date}</div>
      </div>
      <div className={writingsStyles.categories}>{categories.map(cat => <div className={`${writingsStyles.category} ${writingsStyles[cat]}`}>{cat}</div>)}</div>
      <div className={writingsStyles.tldr}>{tldr}</div>
    </div>
  );
};

export default function writings() {
  // Todo: combine filters into one object

  // { Searchbox text, categories, sort by, sort direction, view } 
  const [searchBoxText, updateSearchText] = useState('');
  const [sortBy, updateSortBy] = useState('title');
  const [sortAscending, toggleSortDirection] = useState(true);
  const [categoryFilters, updateCategoryFilters] = useState(essayCategories.map(c => c));

  const [filteredEssays, updateEssays] = useState(essays);
  const [listView, toggleListView] = useState(false);
  const [sortMenuVisible, toggleSortMenu] = useState(false);

  const essayCategoryIsSelected = categories => categories.filter(category => categoryFilters.includes(category)).length > 0;

  const filterEssays = () => {
    return filteredEssays.filter(({ title, tldr, date, categories, paragraphs }) => {
      return (
        title.includes(searchBoxText) ||
        tldr.includes(searchBoxText) ||
        date.includes(searchBoxText) ||
        paragraphs.join(' ').includes(searchBoxText) ||
        essayCategoryIsSelected(categories)
      )
    });
  }

  const sortEssays = essays => essays.sort((essayA, essayB) => sortAscending ? essayA[sortBy] - essayB[sortBy] : essayB[sortBy] - essayA[sortBy]);

  useEffect(() => updateEssays(sortEssays(filterEssays())), [searchBoxText, sortBy, sortAscending, categoryFilters])

  const selectSortOption = sortOption => {
    updateSortBy(sortOption);
    toggleSortMenu(false);
  }

  const toggleFilter = category => {
    const currentCategoryFilters = categoryFilters.slice();
    const categoryIndex = currentCategoryFilters.indexOf(category);
    categoryIndex === -1 ? currentCategoryFilters.push(category) : currentCategoryFilters.splice(categoryIndex, 1);
    updateCategoryFilters(currentCategoryFilters);
  };

  console.log('essays: ', essays);
  return (
    <div className={writingsStyles.writingList} >
      <div className={writingsStyles.searchOptions}>
        <input
          className={writingsStyles.search}
          onChange={(e) => updateSearchText(e.target.value)}
          placeholder={'Search by title, text, or category'}
          value={searchBoxText !== '' ? null : searchBoxText}
        />
        
        <div className={writingsStyles.categories}>
          {essayCategories.map(category => {
            return (
            <div
              className={`${writingsStyles.category} ${writingsStyles[category]} ${categoryFilters.includes(category) ? '' : `${writingsStyles.opaque}`}`}
              onClick={() => toggleFilter(category)}
            >{category}
            </div>
          )})}
        </div>

        <div className={writingsStyles.sortBy}>
          <div className={writingsStyles.sortCategory} onClick={() => toggleSortMenu(!sortMenuVisible)}>{sortBy}</div>
          <div onClick={() => toggleSortDirection(!sortAscending)}>{sortAscending ? <Ascending /> : <Descending />}</div>
        </div>
        {sortMenuVisible && <SortMenu selectOption={selectSortOption} />}

        <div className={writingsStyles.viewToggle} onClick={() => toggleListView(!listView)}>
          {listView ? <ListView /> : <CardView />}
        </div>
      </div>

      {filteredEssays.map(essay => listView ? <ShortBlog essay={essay} /> : <BlogCard essay={essay} />)}

    </div>
  )
}
