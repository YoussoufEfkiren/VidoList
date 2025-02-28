import { useSelector, useDispatch } from "react-redux"
import { selectVideo } from "../../store/videos-slice"
import VideoCard from "./video-card"

const VideoGrid = () => {
  const dispatch = useDispatch()
  const currentPlaylist = useSelector((state) => state.videos.currentPlaylist)
  const playlists = useSelector((state) => state.videos.playlists)
  const allVideos = useSelector((state) => state.videos.allVideos)

  // Videos to display - either from selected playlist or all videos
  const videosToDisplay = currentPlaylist
    ? playlists.find((p) => p.idPlaylist === currentPlaylist)?.videos || []
    : allVideos.slice(0, 6)

  return (
    <div className="video-grid">
      {videosToDisplay.map((video) => (
        <VideoCard key={video.id} video={video} onClick={() => dispatch(selectVideo(video))} />
      ))}
    </div>
  )
}

export default VideoGrid

