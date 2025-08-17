import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode === "dark" || props.mode === "green" ? "dark" : "light"} bg-${props.mode === "dark" || props.mode === "green" ? "dark" : "light"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">{props.about}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${(props.mode === "green" || props.mode === "dark") ? "light" : "dark"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={() => props.toggleMode("dark")} />
            <label className="form-check-label" htmlFor="switchCheckDefault" ><b>Switch</b></label>
          </div>
          {/* <div className={`form-check form-switch text-${props.mode === "green" || props.mode === "dark" ? "light" : "dark"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="switchDefault" onClick={() => props.toggleMode("green")} />
            <label className="form-check-label" htmlFor="switchCheckDefault" >Switch</label>
          </div> */}
        </div>
      </nav>
    </>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};