import blogCardStyles from './BlogCard.module.css';

const BlogCategories = ({ category }) => {

  switch(category) {
    case 'red':
      return <div>red</div>;
    case 'blue':
      return <div>blue</div>;
    case 'green':
      return <div>green</div>;
    default:
      return <div>Default</div>;
  }
}

const BlogCard = () => {
  const categories = ['red', 'blue', 'green', 'test']
  return (
    <div className={blogCardStyles.blogCard}>
      <div className={blogCardStyles.title}>Some Interesting Title, With Some Pizazz and possibly some sass to go to the second line hopefully this breaks</div>
      <div>TL;DR</div>
      <div className={blogCardStyles.blogFooter}>
        <img className={blogCardStyles.headshot} />
        <div className={blogCardStyles.categories}>{categories.map(cat => <BlogCategories category={cat} />)}</div>
        <div>Date</div>
      </div>
    </div>
  );
};

export default BlogCard;