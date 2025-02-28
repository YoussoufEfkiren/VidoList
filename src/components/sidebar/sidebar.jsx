import { useSelector, useDispatch } from "react-redux"
import {
  AiFillHome,
  AiOutlineCompass,
  AiOutlineHistory,
  AiOutlinePlaySquare
} from "react-icons/ai"
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md"
import SidebarItem from "./sidebar-item"
import { selectPlaylist, showAllVideos } from "../../store/videos-slice"

const Sidebar = () => {
  const dispatch = useDispatch()
  const sidebarCollapsed = useSelector((state) => state.ui.sidebarCollapsed)
  const currentPlaylist = useSelector((state) => state.videos.currentPlaylist)
  const selectedVideo = useSelector((state) => state.videos.selectedVideo)
  const playlists = useSelector((state) => state.videos.playlists)

  return (
    <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-content">
        {/* Sidebar items */}
        <SidebarItem
          icon={<AiFillHome size={22} />}
          text="Home"
          collapsed={sidebarCollapsed}
          onClick={() => dispatch(showAllVideos())}
          active={currentPlaylist === null && !selectedVideo}
        />
        <SidebarItem icon={<AiOutlineCompass size={22} />} text="Explore" collapsed={sidebarCollapsed} />
        <SidebarItem icon={<MdSubscriptions size={22} />} text="Subscriptions" collapsed={sidebarCollapsed} />

        {!sidebarCollapsed && <div className="divider"></div>}

        <SidebarItem icon={<MdVideoLibrary size={22} />} text="Library" collapsed={sidebarCollapsed} />
        <SidebarItem icon={<AiOutlineHistory size={22} />} text="History" collapsed={sidebarCollapsed} />

        {!sidebarCollapsed && (
          <>
            <div className="divider"></div>
            <h3 className="sidebar-heading">PLAYLISTS</h3>
            {playlists.map((playlist) => (
              <SidebarItem
                key={playlist.idPlaylist}
                icon={<AiOutlinePlaySquare size={22} />}
                text={playlist.titre}
                collapsed={sidebarCollapsed}
                onClick={() => dispatch(selectPlaylist(playlist.idPlaylist))}
                active={currentPlaylist === playlist.idPlaylist}
              />
            ))}

            <div className="divider"></div>

            
          </>
        )}
      </div>
    </aside>
  )
}

export default Sidebar

