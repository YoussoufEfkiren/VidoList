/* eslint-disable react/prop-types */
// Sidebar item component
const SidebarItem = ({ icon, text, collapsed, onClick, active }) => {
    return (
      <div className={`sidebar-item ${collapsed ? "collapsed" : ""} ${active ? "active" : ""}`} onClick={onClick}>
        <div className="sidebar-icon">{icon}</div>
        {!collapsed && <span className="sidebar-text">{text}</span>}
      </div>
    )
  }
  
  export default SidebarItem
  
  