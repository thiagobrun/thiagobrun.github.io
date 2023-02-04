export default function Social() {
  return (
    <div className="home__social">
      {/* ============= GITHUB =============*/}
      <a
        href="https://github.com/thiagobrun"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>

      {/* ============= LINKEDIN =============*/}
      <a
        href="https://www.linkedin.com/in/thiago-ferreira-2965a924a/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
    </div>
  );
}
