import './Tag.css'

const Tag = ({ name }) => {
  return (
    <div className="tag">
      <span className="tag_name">{name}</span>
      <span className="tag_trail"></span>
    </div>
  )
}

export default Tag
