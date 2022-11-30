import React, { Fragment } from 'react'
import "./Navbar.css"

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  }
  return (
    <Fragment>
      <input type="checkbox" id="menu" />
      <label for="menu" class="icon">
          <div class="menu"></div>
      </label>
      <nav>
          <ul>
              <li>
                  <a href="/home"><i class="material-icons">dashboard</i>Dashboard</a>
              </li>
              <li>
                <a href="/profile"><i class="material-icons">account_circle</i>Profile</a> 
              </li>
              <li>
                <a href="/data-penduduk"><i class="material-icons">view_list</i>Masyarakat</a>
              </li>
              <li>
                <a href="/kas-masjid"><i class="material-icons">request_page</i>Kas Masjid</a>
              </li>
              <li onClick={handleLogout}>
                <p><i class="material-icons">logout</i>Logout</p>
              </li>
          </ul>
      </nav>
      {/* END NAVBAR */}
    </Fragment>
  )
}

export default Navbar