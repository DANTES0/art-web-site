import React from "react"
import "../DescriptionArts/DescriptionArts.css"
const DescriptionArts = ({ active, isActive }) => {
  return (
    <div
      className={active ? "descriptionArts active" : "descriptionArts"}
      onClick={() => isActive(!active)}
    >
      <div
        className="descriptionArts__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="title">Название</div>
        <div className="author">DANTES</div>
        <img
          src={require("../../utils/images/firstArt.jpg")}
          alt=""
          className="image"
        />

        <div className="description">
          <div className="description__title">Описание</div>
          <div className="description__text">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов
          </div>
        </div>
        <div className="tags">
          <div className="tag">Аниме</div>
          <div className="tag">Аниме</div>
          <div className="tag">Аниме</div>
          <div className="tag">Аниме</div>
          <div className="tag">Аниме</div>
          <div className="tag">Аниме</div>
          <div className="tag">Аниме</div>
        </div>
      </div>
    </div>
  )
}
export default DescriptionArts
