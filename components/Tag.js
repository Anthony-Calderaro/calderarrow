import tagStyles from '../styles/Tag.module.css';

const Tag = ({ label = "tag", optionalClasses, optionalStyles, click, tagKey }) => {
  return (
    <li key={tagKey} className={`${tagStyles.tag_container} ${optionalClasses}`} style={optionalStyles} onClick={click}>
      <a>{label}</a>
    </li>
  )
}

export default Tag;