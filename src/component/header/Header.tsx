import '../header/Header.css'

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <i className="bi bi-list fs-1 fw-bold"></i>
        </span>
      </button>
      <div
        className="collapse navbar-collapse py-4 py-lg-0 col-xl-11"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav  d-flex justify-content-between col-12 p-0">
          <div className="d-flex align-items-center col">
            <li className="nav-item">
              <img
                className="logo"
                src={require('../../asset/EDYODA.png')}
                alt="EDYODA LOGO"
              />
            </li>
            <li className="nav-item dropdown">
              <a
                href="#edyoda"
                className="nav-link dropdown-togle"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                Courses
                <img
                  className="arrow"
                  src={require('../../asset/Vector.png')}
                  alt="dropdown arrow"
                />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a href="#edyoda" className="dropdown-item">
                  HTML
                </a>
                <a href="#edyoda" className="dropdown-item">
                  CSS
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#edyoda"
                className="nav-link dropdown-togle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
              >
                Programs
                <img
                  className="arrow"
                  src={require('../../asset/Vector.png')}
                  alt="dropdown arrow"
                />
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a href="#edyoda" className="dropdown-item">
                  AI Learning
                </a>
                <a href="#edyoda" className="dropdown-item">
                  WEB development
                </a>
              </div>
            </li>
          </div>
          <div className="d-flex align-items-center col justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <input className="input-field form-control" />
            </li>
            <li className="nav-item">
              <a href="#edyoda" className="nav-link">
                Log in
              </a>
            </li>
            <li className="nav-item">
              <button className="bt join-btn">JOIN NOW</button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  )
}
