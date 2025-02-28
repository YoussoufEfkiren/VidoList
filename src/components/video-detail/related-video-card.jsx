/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { formatViews } from "../../utils/format-utils"

const RelatedVideoCard = ({ video ,onClick }) =>  {
  const videoInteractions = useSelector((state) => state.videos.videoInteractions)

  return (
    <div className="related-video-card" onClick={onClick}>
      <div
        className="related-video-thumbnail"
        style={{
          backgroundImage: `url(${video.miniature})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#e5e5e5", 
        }}
      >
        <div className="video-duration">{video.duree}</div>
      </div>
      <div className="related-video-info">
        <div className="related-video-title">{video.titre}</div>
        <div className="related-channel-name">
          {video.auteur.prenom} {video.auteur.nom}
        </div>
        <div className="related-video-metadata">
          {formatViews(videoInteractions[video.id].likes * 10)} views • {Math.floor(Math.random() * 12) + 1} months ago
        </div>
      </div>
    </div>
  )
}

export default RelatedVideoCard;

