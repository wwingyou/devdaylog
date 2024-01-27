import Tag from './Tag';
import './Tag.css'

const TagStack = ({ tags }) => {
  return (
    <div className="tagstack">
      {tags.map((t, i) => <Tag key={i} name={t}></Tag>)}
    </div>
  )
}

export default TagStack
