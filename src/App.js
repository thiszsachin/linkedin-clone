import { Container } from "@material-ui/core";
import About from "./About/About";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav/MainNav";
import Pages from "./components/Pages/Pages";
import Profile from "./components/Profile/Profile";
import ProfileNav from "./components/ProfileNav/ProfileNav";

function App() {
  return (
    <Container className="App">
      <Header />
      <MainNav />
      <div
        style={{
          backgroundColor: "#dae0eb",
          padding: "20px 50px",
        }}
      >
        <div className="main-container" style={{ display: "flex" }}>
          <div
            className="profile-container"
            style={{ width: "70%", paddingRight: "15px" }}
          >
            <div className="profile">
              <div style={{ paddingBottom: "10px" }}>
                <Profile />
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <ProfileNav />
              </div>
              <div>
                <About />
              </div>
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <div>
              <Pages />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
