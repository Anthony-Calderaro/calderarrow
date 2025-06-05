import Link from 'next/link';
import { useState } from 'react';
import { footerIcons, createFontAwesomeIcon } from '../public/staticText';

// Todo: Refactor all the module styles
import tocStyles from '../styles/TableOfContents.module.css';

const CollapsedArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="currentColor"
  >
    <polygon points="2,0 8,4 2,8" />
  </svg>
)

const ExpandedArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="8"
    viewBox="0 0 10 8"
    fill="currentColor"
  >
    <polygon points="0,2 4,8 8,2" />
  </svg>
)

const TableOfContents = ({ lightTheme }) => {
  // Todo: Fix theme  
  const [collapseTableOfContents, toggleTableOfContents] = useState(false);
  return (
    <div  onClick={() => toggleTableOfContents(!collapseTableOfContents)} className={`${tocStyles.toc_container} ${collapseTableOfContents && tocStyles.collapsed}`}>
      <h4>
        {collapseTableOfContents ? <CollapsedArrow /> : <ExpandedArrow />}
        Table of Contents
      </h4>
      <ul className={`${tocStyles.expanded_contents} ${collapseTableOfContents && tocStyles.hide}`}>
        <li><a href="#anchor1">Item 1</a></li>
        <li><a href="#anchor2">Item 2</a></li>
      </ul>

    </div>
  );
};

export default TableOfContents;