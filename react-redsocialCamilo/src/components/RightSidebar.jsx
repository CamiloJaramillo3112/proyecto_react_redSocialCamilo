function RightSidebar() {
  return (
    <>
      <div className="right-card">
        <p><strong>Upcoming Events</strong></p>
        <img
          src="https://www.w3schools.com/w3images/forest.jpg"
          alt="Forest"
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <p className="w3-margin-top"><strong>Holiday</strong></p>
        <p className="soft-muted">Friday 15:00</p>
        <button className="w3-button w3-block w3-light-grey w3-round-large">
          Info
        </button>
      </div>

      <div className="right-card">
        <p><strong>Friend Request</strong></p>
        <img
          src="https://www.w3schools.com/w3images/avatar6.png"
          alt="Avatar"
          style={{ width: "60%", borderRadius: "12px" }}
        />
        <p className="w3-margin-top">Jane Doe</p>

        <div className="w3-row-padding">
          <div className="w3-half">
            <button className="w3-button w3-green w3-block w3-round-large">
              <i className="fa fa-check"></i>
            </button>
          </div>
          <div className="w3-half">
            <button className="w3-button w3-red w3-block w3-round-large">
              <i className="fa fa-remove"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="right-card w3-center">
        <p><strong>ADS</strong></p>
      </div>

      <div className="right-card w3-center">
        <i className="fa fa-bug w3-xxlarge soft-muted"></i>
      </div>
    </>
  );
}

export default RightSidebar;