import Link from 'next/link';
import writingsStyles from '../styles/Writings.module.css'
import { useState, useEffect } from 'react';

import { essays, essayCategories } from '../public/staticText';

// Todo: Make dates numeric, and a switch statement for converting to month
// Todo: make category colors align with ND
const ListView = () => <svg className={writingsStyles.viewOption} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>;
const CardView = () => <svg className={writingsStyles.viewOption} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z" /></svg>;
const Descending = () => <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><rect fill="none" height="24" width="24" /><path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" /></svg>;
const Ascending = () => <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><rect fill="none" height="24" width="24" /><path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" /></svg>;


const SortMenu = ({ selectOption }) => {
  const options = ['title', 'date', 'summary'] // move to static
  return (
    <div className={writingsStyles.sortMenu}>
      {options.map((option, i) => <div key={i} className={writingsStyles.sortOption} onClick={(e) => selectOption(e.target.innerText)}>{option}</div>)}
    </div>
  )
}

// Todo: Combine shortblog and blogcard into a switch or a single component
const ShortBlog = ({ essay }) => {
  const { title, date, categories } = essay;
  return (
    <div className={writingsStyles.shortBlog}>
      <div className={writingsStyles.shortBlogTitleContainer}>
        <div className={writingsStyles.shortBlogTitle}>{title}</div>
        <div className={writingsStyles.categories}>
          {categories.map((category, i) => <div key={i} className={`${writingsStyles.category} ${writingsStyles[category]}`}>{category}</div>)}
        </div>
      </div>
      <div>{date}</div>
    </div>
  );
}

const BlogCard = ({ essay, categoryFilters }) => {
  const { title, date, categories, summary, url } = essay;

  return (
    <Link href={`${url ? `/writings/${url}` : ''}`}>
      <a className={writingsStyles.blogCard}>
        <div className={writingsStyles.blogCardTopLine}>
          <div className={writingsStyles.title}>{title}</div>
          <div className={writingsStyles.date}>{date}</div>
        </div>
        <div className={writingsStyles.categories}>{categories.map((category, i) => <div key={i} className={`${writingsStyles.category} ${writingsStyles[category]} ${categoryFilters.includes(category) ? '' : `${writingsStyles.opaque}`}`}>{category}</div>)}</div>
        <div className={writingsStyles.summary}>{summary}</div>
      </a>
    </Link>
  );
};

// export default function writings() {
//   const [searchBoxText, updateSearchText] = useState();
//   const [sortBy, updateSortBy] = useState('date');
//   const [sortAscending, toggleSortDirection] = useState(true);
//   const [categoryFilters, updateCategoryFilters] = useState(essayCategories.map(c => c));

//   const sortEssays = essays => essays.sort((essayA, essayB) => {
//     if (sortAscending) {
//       return essayA[sortBy] > essayB[sortBy] ? -1 : 1;
//     } else {
//       return essayB[sortBy] > essayA[sortBy] ? -1 : 1
//     }
//   });

//   const [filteredEssays, updateEssays] = useState(sortEssays(essays));
//   const [listView, toggleListView] = useState(false);
//   const [sortMenuVisible, toggleSortMenu] = useState(false);

//   const essayCategoryIsSelected = categories => categories.filter(category => categoryFilters.includes(category)).length > 0;

//   const essayMatchesSearchText = ({ title, summary, date }) => {
//     if (searchBoxText) {
//       return (
//         title.toLowerCase().includes(searchBoxText.toLowerCase()) ||
//         summary.toLowerCase().includes(searchBoxText.toLowerCase()) ||
//         date.toLowerCase().includes(searchBoxText.toLowerCase())
//       );
//     } else {
//       return true;
//     }
//   }

//   const filterEssays = () => essays.filter(essay => essayMatchesSearchText(essay) && essayCategoryIsSelected(essay.categories));



//   const selectSortOption = sortOption => {
//     updateSortBy(sortOption);
//     toggleSortMenu(false);
//   }

//   const toggleFilter = category => {
//     const currentCategoryFilters = categoryFilters.slice();
//     const categoryIndex = currentCategoryFilters.indexOf(category);
//     categoryIndex === -1 ? currentCategoryFilters.push(category) : currentCategoryFilters.splice(categoryIndex, 1);
//     updateCategoryFilters(currentCategoryFilters);
//   };

//   useEffect(() => updateEssays(sortEssays(filterEssays())), [searchBoxText, sortBy, sortAscending, categoryFilters])

//   return (
//     <div className={writingsStyles.writingList} >
//       <div className={writingsStyles.searchOptions}>
//         <input
//           className={writingsStyles.search}
//           onChange={(e) => updateSearchText(e.target.value)}
//           placeholder={'Search by title, date, or text'}
//           // Todo: Make placeholder text static
//           value={searchBoxText && searchBoxText}
//         />

//         <div className={writingsStyles.categories}>
//           {essayCategories.map((category, i) => {
//             return (
//               <div
//                 className={`${writingsStyles.category} ${writingsStyles[category]} ${categoryFilters.includes(category) ? '' : `${writingsStyles.opaque}`}`}
//                 onClick={() => toggleFilter(category)}
//                 key={i}
//               >{category}
//               </div>
//             )
//           })}
//         </div>

//         <div className={writingsStyles.sortBy}>
//           <div className={writingsStyles.sortCategory} onClick={() => toggleSortMenu(!sortMenuVisible)}>{sortBy}</div>
//           <div onClick={() => toggleSortDirection(!sortAscending)}>{sortAscending ? <Ascending /> : <Descending />}</div>
//         </div>
//         {sortMenuVisible && <SortMenu selectOption={selectSortOption} />}

//         <div className={writingsStyles.viewToggle} onClick={() => toggleListView(!listView)}>
//           {listView ? <ListView /> : <CardView />}
//         </div>
//       </div>

//       {filteredEssays.map((essay, i) => listView ? <ShortBlog categoryFilters={categoryFilters} key={i} essay={essay} /> : <BlogCard key={i} essay={essay} categoryFilters={categoryFilters} />)}

//     </div>
//   )
// }


export default function writings() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <ul>
        {arr.map(i => <div>{i}</div>)}
    </ul>
  )
}