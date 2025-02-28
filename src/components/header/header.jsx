import { useSelector, useDispatch } from "react-redux"
import { AiOutlineBars, AiOutlineYoutube } from "react-icons/ai"
import { BsSearch, BsBell, BsMic } from "react-icons/bs"
import { RiVideoLine } from "react-icons/ri"
import { BiUserCircle } from "react-icons/bi"
import { toggleSidebar, setSearchQuery } from "../../store/ui-slice"
import { showAllVideos } from "../../store/videos-slice"

const Header = () => {
  const dispatch = useDispatch()
  const searchQuery = useSelector((state) => state.ui.searchQuery)

  return (
    <header className="header">
      {/* Left section */}
      <div className="header-left">
        <button onClick={() => dispatch(toggleSidebar())} className="menu-button">
          <AiOutlineBars size={20} />
        </button>
        <div className="logo" onClick={() => dispatch(showAllVideos())}>
          <AiOutlineYoutube size={28} className="youtube-icon" />
          <span className="youtube-text">VidoList</span>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="header-center">
        <form className="search-container" onSubmit={(e) => e.preventDefault()}>
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
          </div>
          <button type="submit" className="search-button">
            <BsSearch size={18} />
          </button>
        </form>
        <button className="mic-button" type="button">
          <BsMic size={18} />
        </button>
      </div>

      {/* Right section */}
      <div className="header-right">
        <button className="icon-button">
          <RiVideoLine size={20} />
        </button>
        <button className="icon-button">
          <BsBell size={20} />
        </button>
        <button className="user-button">
          <BiUserCircle size={24} />
        </button>
      </div>
    </header>
  )
}

export default Header

