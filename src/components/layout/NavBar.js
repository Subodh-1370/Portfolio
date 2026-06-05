import { useScroll } from "../../hooks/useScroll";

export const NavBar = () => {
  const scrolled = useScroll(50);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          &lt;Subodh<span>Singh</span> /&gt;
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};
