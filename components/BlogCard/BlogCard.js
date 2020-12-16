import blogCardStyles from './BlogCard.module.css';

const BlogCard = () => {
  const categories = ['red', 'blue', 'green'] 
  return (
    <div className={blogCardStyles.blogCard}>
      <div className={blogCardStyles.date}>December 2020</div>
      <div className={blogCardStyles.title}>Some Interesting Title, With Some Pizazz and possibly some sass to go to the second line hopefully this breaks</div>
      <div className={blogCardStyles.categories}>{categories.map(cat => <div className={`${blogCardStyles.category} ${blogCardStyles[cat]}`}>{cat}</div>)}</div>
      <div>TL;DR</div>
    </div>
  );
};

export default BlogCard;