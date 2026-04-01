import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <div
        className="w3-container w3-content"
        style={{ maxWidth: "1400px", marginTop: "88px" }}
      >
        <div className="w3-row-padding">
          <div className="w3-col l3 m4 w3-hide-small">
            <LeftSidebar />
          </div>

          <div className="w3-col l6 m8 s12">
            <Feed />
          </div>

          <div className="w3-col l3 w3-hide-medium w3-hide-small">
            <RightSidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;