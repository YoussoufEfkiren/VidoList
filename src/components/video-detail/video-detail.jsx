import { useSelector, useDispatch } from "react-redux"
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt, AiOutlineSave } from "react-icons/ai"
import { selectVideo, likeVideo, dislikeVideo } from "../../store/videos-slice"
import { formatViews } from "../../utils/format-utils"
import RelatedVideoCard from "./related-video-card"
import CommentSection from "./comment-section"

const VideoDetail = () => {
  const dispatch = useDispatch()
  const selectedVideo = useSelector((state) => state.videos.selectedVideo)
  const videoInteractions = useSelector((state) => state.videos.videoInteractions)
  const allVideos = useSelector((state) => state.videos.allVideos)

  // Related videos - exclude current video
  const relatedVideos = allVideos.filter((v) => v.id !== selectedVideo.id).slice(0, 6)

  // Handle video interactions
  const handleLike = () => {
    dispatch(likeVideo(selectedVideo.id))
  }

  const handleDislike = () => {
    dispatch(dislikeVideo(selectedVideo.id))
  }

  const getEmbedUrl = (url) => {
    try {
      const videoId = url.includes("v=") ? url.split("v=")[1]?.split("&")[0] : url.split("youtu.be/")[1]?.split("?")[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    } catch (error) {
      console.error("Erreur parsing YouTube URL:", error);
      return url;
    }
  };

  return (
    <div className="video-detail-container">
      <div className="video-player-section">
        {/* Video player */}
        <div className="video-player">
          <iframe
            src={getEmbedUrl(selectedVideo?.lien)}
            title={selectedVideo?.titre}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video info */}
        <div className="video-detail-info">
          <h1 className="video-detail-title">{selectedVideo.titre}</h1>
          <div className="video-detail-metadata">
            <span>{formatViews(videoInteractions[selectedVideo.id].likes * 10)} views </span>
          </div>

          {/* Action buttons */}
          <div className="video-actions">
            <button
              className={`action-button ${videoInteractions[selectedVideo.id].userLiked ? "active" : ""}`}
              onClick={handleLike}
            >
              <AiOutlineLike size={22} />
              <span>{formatViews(videoInteractions[selectedVideo.id].likes)}</span>
            </button>

            <button
              className={`action-button ${videoInteractions[selectedVideo.id].userDisliked ? "active" : ""}`}
              onClick={handleDislike}
            >
              <AiOutlineDislike size={22} />
              <span>{formatViews(videoInteractions[selectedVideo.id].dislikes)}</span>
            </button>

            <button className="action-button">
              <AiOutlineShareAlt size={22} />
              <span>Share</span>
            </button>

            <button className="action-button">
              <AiOutlineSave size={22} />
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Channel info */}
        <div className="channel-info">
          <div className="channel-header">
            <div
              className="channel-avatar"
              style={{
                backgroundImage: `url(${selectedVideo.auteur.photo})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="channel-details">
              <div className="channel-name">
                {selectedVideo.auteur.prenom} {selectedVideo.auteur.nom}
              </div>
              <div className="subscriber-count">12.5K subscribers</div>
            </div>
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>

          <div className="video-description">
            <p>{selectedVideo.description}</p>
            <button className="show-more-button">SHOW MORE</button>
          </div>
        </div>

        {/* Comments section */}
        <CommentSection videoId={selectedVideo.id} />
      </div>

      {/* Up next / related videos */}
      <div className="related-videos">
        <h3>Up next</h3>
        {relatedVideos.map((video) => (
          <RelatedVideoCard key={video.id} video={video} onClick={() => dispatch(selectVideo(video))} />
        ))}
      </div>
    </div>
  )
}

export default VideoDetail

