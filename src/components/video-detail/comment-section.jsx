"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BiUserCircle } from "react-icons/bi"
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai"
import { addComment } from "../../store/videos-slice"

const CommentSection = ({ videoId }) => {
  const dispatch = useDispatch()
  const videoInteractions = useSelector((state) => state.videos.videoInteractions)
  const [newComment, setNewComment] = useState("")

  const handleAddComment = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      dispatch(
        addComment({
          videoId,
          comment: newComment.trim(),
        }),
      )
      setNewComment("")
    }
  }

  return (
    <div className="comments-section">
      <div className="comments-header">
        <span>{videoInteractions[videoId].comments.length} Comments</span>
        <button className="sort-button">
          <span>SORT BY</span>
        </button>
      </div>

      {/* Add comment */}
      <div className="add-comment">
        <div className="user-avatar">
          <BiUserCircle size={40} />
        </div>
        <form className="comment-form" onSubmit={handleAddComment}>
          <input
            type="text"
            placeholder="Add a public comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="comment-actions">
            <button type="button" onClick={() => setNewComment("")}>
              CANCEL
            </button>
            <button type="submit" disabled={!newComment.trim()}>
              COMMENT
            </button>
          </div>
        </form>
      </div>

      {/* Comments list */}
      <div className="comments-list">
        {videoInteractions[videoId].comments.map((comment, index) => (
          <div key={index} className="comment">
            <div className="comment-avatar">
              <BiUserCircle size={32} />
            </div>
            <div className="comment-content">
              <div className="comment-author">
                <span className="author-name">User {index + 1}</span>
                <span className="comment-date">5 weeks ago</span>
              </div>
              <div className="comment-text">{comment}</div>
              <div className="comment-actions">
                <button className="comment-like">
                  <AiOutlineLike size={16} />
                  <span>{Math.floor(Math.random() * 100)}</span>
                </button>
                <button className="comment-dislike">
                  <AiOutlineDislike size={16} />
                </button>
                <button className="reply-button">REPLY</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection

