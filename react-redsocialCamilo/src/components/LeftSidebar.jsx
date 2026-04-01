import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function LeftSidebar() {
  const [openSection, setOpenSection] = useState("");
  const [showAlert, setShowAlert] = useState(true);
  const { currentUser } = useContext(UserContext);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <>
      <div className="profile-card">
        <div className="w3-center">
          <h4>{currentUser.name}</h4>
          <img
            src={currentUser.avatar}
            className="w3-circle"
            style={{ width: "106px", height: "106px", objectFit: "cover" }}
            alt="Avatar"
          />
        </div>

        <div className="divider"></div>

        <p>
          <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>
          {currentUser.role}
        </p>
        <p>
          <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>
          {currentUser.city}
        </p>
        <p>
          <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
          {currentUser.birthday}
        </p>
      </div>

      <div className="profile-card">
        <button onClick={() => toggleSection("groups")} className="section-btn">
          <i className="fa fa-users fa-fw w3-margin-right"></i> Mis grupos
        </button>
        {openSection === "groups" && (
          <div className="w3-container">
            <p>Frontend Team</p>
            <p>React Lovers</p>
          </div>
        )}

        <button onClick={() => toggleSection("events")} className="section-btn">
          <i className="fa fa-calendar fa-fw w3-margin-right"></i> Mis eventos
        </button>
        {openSection === "events" && (
          <div className="w3-container">
            <p>Clase de React</p>
            <p>Entrega final</p>
          </div>
        )}

        <button onClick={() => toggleSection("photos")} className="section-btn">
          <i className="fa fa-image fa-fw w3-margin-right"></i> Mis fotos
        </button>
        {openSection === "photos" && (
          <div className="w3-container">
            <div className="w3-row-padding">
              <div className="w3-half">
                <img
                  src="https://www.w3schools.com/w3images/lights.jpg"
                  alt=""
                  style={{ width: "100%" }}
                  className="w3-margin-bottom"
                />
              </div>
              <div className="w3-half">
                <img
                  src="https://www.w3schools.com/w3images/nature.jpg"
                  alt=""
                  style={{ width: "100%" }}
                  className="w3-margin-bottom"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {showAlert && (
        <div className="profile-card" style={{ background: "#fff4d6" }}>
          <button
            onClick={() => setShowAlert(false)}
            className="w3-button w3-right"
            style={{ background: "transparent" }}
          >
            <i className="fa fa-remove"></i>
          </button>
          <p><strong>Hey!</strong></p>
          <p className="soft-muted">People are looking at your profile. Find out who.</p>
        </div>
      )}
    </>
  );
}

export default LeftSidebar;