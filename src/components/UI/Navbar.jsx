//This section creates the nave bar to be imported into the header
export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg  fullNavbar">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
        <h1 className="sawyer">Sawyer Baldwin</h1>
      </div>
      
    </nav>
  );
}
