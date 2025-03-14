import './NavBar.css';

export const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token
    window.location.reload(); // Refrescar la vista
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Evaluación Front-End</div>
      <ul className="navbar-links">
        <li>Jordi Fiallos Desarrollo</li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};
