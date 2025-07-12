import { useEffect } from 'react'
import './styles.css'

function App() {
  useEffect(() => {
    // Initialize Instagram functionality after component mounts
    const script = document.createElement('script')
    script.src = '/script.js'
    script.onload = () => {
      // Initialize the Instagram clone functionality
      if (window.initializeInstagramClone) {
        window.initializeInstagramClone()
      }
      // Add loading animation
      if (window.addLoadingAnimation) {
        setTimeout(() => {
          window.addLoadingAnimation()
        }, 100)
      }
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="instagram-desktop">
      {/* Desktop Header */}
      <header className="desktop-header">
        <div className="header-container">
          <div className="header-left">
            <div className="instagram-logo">Instagram</div>
          </div>
          <div className="header-center">
            <div className="search-bar">
              <input type="text" placeholder="Search" className="search-input" />
              <div className="search-icon">🔍</div>
            </div>
          </div>
          <div className="header-right">
            <div className="nav-icons">
              <div className="nav-icon">🏠</div>
              <div className="nav-icon">💬</div>
              <div className="nav-icon">➕</div>
              <div className="nav-icon">🧭</div>
              <div className="nav-icon">❤️</div>
              <div className="nav-icon profile-icon">👤</div>
            </div>
          </div>
        </div>
      </header>

      <div className="desktop-main">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-content">
            <div className="sidebar-item active">
              <div className="sidebar-icon">🏠</div>
              <span className="sidebar-text">Home</span>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-icon">🔍</div>
              <span className="sidebar-text">Search</span>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-icon">🧭</div>
              <span className="sidebar-text">Explore</span>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-icon">🎬</div>
              <span className="sidebar-text">Reels</span>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-icon">💬</div>
              <span className="sidebar-text">Messages</span>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-icon">❤️</div>
              <span className="sidebar-text">Notifications</span>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-icon">➕</div>
              <span className="sidebar-text">Create</span>
            </div>
            <div className="sidebar-item">
              <div className="sidebar-icon">👤</div>
              <span className="sidebar-text">Profile</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          {/* Stories Section */}
          <div className="stories-section">
            <div className="stories-container">
              <div className="story-item">
                <div className="story-ring">
                  <div className="story-avatar">📖</div>
                </div>
                <div className="story-label">Studio setup</div>
              </div>
              <div className="story-item">
                <div className="story-ring">
                  <div className="story-avatar">🌧️</div>
                </div>
                <div className="story-label">Rainy playlist</div>
              </div>
              <div className="story-item">
                <div className="story-ring">
                  <div className="story-avatar">🎵</div>
                </div>
                <div className="story-label">Band outtakes</div>
              </div>
              <div className="story-item">
                <div className="story-ring">
                  <div className="story-avatar">🥁</div>
                </div>
                <div className="story-label">Practice</div>
              </div>
              <div className="story-item">
                <div className="story-ring">
                  <div className="story-avatar">🎹</div>
                </div>
                <div className="story-label">Keys</div>
              </div>
              <div className="story-item">
                <div className="story-ring">
                  <div className="story-avatar">🦉</div>
                </div>
                <div className="story-label">Sketches</div>
              </div>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="feed-container">
            {/* Post 1 */}
            <article className="post">
              <div className="post-header">
                <div className="post-author">
                  <div className="author-avatar">🥁</div>
                  <div className="author-info">
                    <div className="author-name">milo_beats</div>
                    <div className="post-location">Market District Studio</div>
                  </div>
                </div>
                <div className="post-menu">⋯</div>
              </div>
              <div className="post-media">
                <div className="media-placeholder">
                  <span className="media-emoji">🥁</span>
                  <div className="media-text">Drum practice closeup</div>
                  <div className="media-caption">"Rainy morning groove"</div>
                </div>
              </div>
              <div className="post-actions">
                <div className="action-buttons">
                  <div className="action-btn">❤️</div>
                  <div className="action-btn">💬</div>
                  <div className="action-btn">📤</div>
                </div>
                <div className="bookmark-btn">🔖</div>
              </div>
              <div className="post-stats">
                <div className="likes-count">47 likes</div>
              </div>
              <div className="post-content">
                <div className="post-caption">
                  <span className="username">milo_beats</span>
                  Finding my rhythm in the rain 🌧️ Sometimes the best beats come
                  from the quietest moments.
                </div>
                <div className="post-time">2 hours ago</div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="post">
              <div className="post-header">
                <div className="post-author">
                  <div className="author-avatar">🥁</div>
                  <div className="author-info">
                    <div className="author-name">milo_beats</div>
                    <div className="post-location">Home Studio</div>
                  </div>
                </div>
                <div className="post-menu">⋯</div>
              </div>
              <div className="post-media">
                <div className="media-placeholder">
                  <span className="media-emoji">🎹</span>
                  <div className="media-text">Synth jam at sunset</div>
                  <div className="media-caption">
                    "Soundtrack for a quiet night"
                  </div>
                </div>
              </div>
              <div className="post-actions">
                <div className="action-buttons">
                  <div className="action-btn">❤️</div>
                  <div className="action-btn">💬</div>
                  <div className="action-btn">📤</div>
                </div>
                <div className="bookmark-btn">🔖</div>
              </div>
              <div className="post-stats">
                <div className="likes-count">32 likes</div>
              </div>
              <div className="post-content">
                <div className="post-caption">
                  <span className="username">milo_beats</span>
                  Golden hour sessions hit different ✨ When the light is
                  perfect and the sounds just flow.
                </div>
                <div className="post-time">5 hours ago</div>
              </div>
            </article>

            {/* Post 3 */}
            <article className="post">
              <div className="post-header">
                <div className="post-author">
                  <div className="author-avatar">🥁</div>
                  <div className="author-info">
                    <div className="author-name">milo_beats</div>
                    <div className="post-location">Wildfire Veil Studio</div>
                  </div>
                </div>
                <div className="post-menu">⋯</div>
              </div>
              <div className="post-media">
                <div className="media-placeholder">
                  <span className="media-emoji">🎵</span>
                  <div className="media-text">Band photo</div>
                  <div className="media-caption">"Steady heart, wild friends"</div>
                </div>
              </div>
              <div className="post-actions">
                <div className="action-buttons">
                  <div className="action-btn liked">❤️</div>
                  <div className="action-btn">💬</div>
                  <div className="action-btn">📤</div>
                </div>
                <div className="bookmark-btn">🔖</div>
              </div>
              <div className="post-stats">
                <div className="likes-count">128 likes</div>
              </div>
              <div className="post-content">
                <div className="post-caption">
                  <span className="username">milo_beats</span>
                  The crew that makes the magic happen 🎶 @wildfireveil forever
                  grateful for these amazing humans.
                </div>
                <div className="post-time">1 day ago</div>
              </div>
            </article>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          {/* User Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-pic">
                <div className="profile-pic-inner">🥁</div>
              </div>
              <div className="profile-info">
                <div className="profile-username">milo_beats</div>
                <div className="profile-name">Milo Dray</div>
              </div>
              <button className="switch-btn">Switch</button>
            </div>
          </div>

          {/* Suggestions */}
          <div className="suggestions-section">
            <div className="suggestions-header">
              <span>Suggestions for you</span>
              <button className="see-all-btn">See All</button>
            </div>
            <div className="suggestion-item">
              <div className="suggestion-avatar">🎸</div>
              <div className="suggestion-info">
                <div className="suggestion-username">guitar_zen</div>
                <div className="suggestion-reason">Follows you</div>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
            <div className="suggestion-item">
              <div className="suggestion-avatar">🎤</div>
              <div className="suggestion-info">
                <div className="suggestion-username">vocal_vibes</div>
                <div className="suggestion-reason">New to Instagram</div>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
            <div className="suggestion-item">
              <div className="suggestion-avatar">🎺</div>
              <div className="suggestion-info">
                <div className="suggestion-username">brass_beats</div>
                <div className="suggestion-reason">Suggested for you</div>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <div className="footer-text">
              About · Help · Press · API · Jobs · Privacy · Terms<br />
              Locations · Language · Meta Verified
            </div>
            <div className="footer-copyright">© 2024 Instagram from Meta</div>
          </div>
        </aside>
      </div>

      {/* Secret Highlight */}
      <div className="secret-highlight" title="Owl beats - secret instrumental">
        🦉
      </div>
    </div>
  )
}

// Add type declaration for window functions
declare global {
  interface Window {
    initializeInstagramClone: () => void
    addLoadingAnimation: () => void
  }
}

export default App