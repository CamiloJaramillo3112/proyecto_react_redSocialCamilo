import { useState } from "react";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className="w3-top" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
        <div
          className="w3-bar w3-white"
          style={{ padding: "8px 16px", borderBottom: "1px solid #dddfe2" }}
        >
          <button
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-round-large"
            onClick={() => setOpenNav(!openNav)}
          >
            <i className="fa fa-bars"></i>
          </button>

          <a href="#" className="w3-bar-item w3-button w3-round-large topbar-logo">
            <i
              className="fa fa-facebook-official"
              style={{ color: "#1877f2", marginRight: "8px", fontSize: "22px" }}
            ></i>
            Facebook UI
          </a>

          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-round-large">
            <i className="fa fa-home"></i>
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-round-large">
            <i className="fa fa-user"></i>
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-round-large">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-round-large">
            <i className="fa fa-bell"></i>
          </a>

          <div className="w3-right w3-hide-small" style={{ paddingTop: "6px" }}>
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Avatar"
              className="w3-circle"
              style={{ width: "34px", height: "34px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {openNav && (
        <div
          className="w3-bar-block w3-white w3-hide-large w3-hide-medium"
          style={{ marginTop: "58px", borderBottom: "1px solid #dddfe2" }}
        >
          <a href="#" className="w3-bar-item w3-button">Inicio</a>
          <a href="#" className="w3-bar-item w3-button">Perfil</a>
          <a href="#" className="w3-bar-item w3-button">Mensajes</a>
          <a href="#" className="w3-bar-item w3-button">Notificaciones</a>
        </div>
      )}
    </>
  );
}

export default Navbar;