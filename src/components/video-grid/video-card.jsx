/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { formatViews } from "../../utils/format-utils"

const VideoCard = ({ video, onClick }) => {
  const videoInteractions = useSelector((state) => state.videos.videoInteractions)

  return (
    <div className="video-card" onClick={onClick}>
      <div
        className="video-thumbnail"
        style={{
          backgroundImage: `url(${video.miniature})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#e5e5e5",
        }}
      >
        <div className="video-duration">{video.duree}</div>
      </div>
      <div className="video-info">
        <div className="author-row">
          <div
            className="author-avatar"
          >
            <img src={video.auteur.photo} alt="sa" style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%"}}/>
          </div>
          <div className="video-title">{video.titre}</div>
        </div>
        <div className="channel-name">
          {video.auteur.prenom} {video.auteur.nom}
        </div>
        <div className="video-metadata">
          {formatViews(videoInteractions[video.id].likes * 10)} views • {Math.floor(Math.random() * 12) + 1} months ago
        </div>
      </div>
    </div>
  )
}

export default VideoCard

