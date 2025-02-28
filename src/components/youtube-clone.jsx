import { useSelector } from "react-redux"
import Header from "./header/header"
import Sidebar from "./sidebar/sidebar"
import VideoGrid from "./video-grid/video-grid"
import VideoDetail from "./video-detail/video-detail"

const YoutubeClone = () => {
  const selectedVideo = useSelector((state) => state.videos.selectedVideo)

  return (
    <div className="app-container">
      <Header />

      <div className="main-container">
        <Sidebar />

        <main className={`content ${selectedVideo ? "video-detail-view" : ""}`}>
          {selectedVideo ? <VideoDetail /> : <VideoGrid />}
        </main>
      </div>
    </div>
  )
}

export default YoutubeClone

