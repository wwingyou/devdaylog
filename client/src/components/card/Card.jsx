import TagStack from "../tag/TagStack"
import './Card.css'

const Card = ({ date, title, tags, desc, url }) => {
  return (
    <div className="card">
      <a href={url}>
        <img className="card_image" alt="card_image" src="https://www.waveon.io/_ipx/f_webp,w_700,size_100vw+md:700px/static/img/blog/_posting/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"/>
        <div className="card_inner">
          <p className="card_date">{date}</p>
          <TagStack tags={tags}></TagStack>
          <h3 className="card_title">{title}</h3>
          <p className="card_content">{desc}</p>
        </div>
      </a>
    </div>

  )
}

export default Card
