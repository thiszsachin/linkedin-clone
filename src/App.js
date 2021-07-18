import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav/MainNav";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Container className="App">
      <Header />
      <MainNav />
      <div className="main-container" style={{ backgroundColor: "grey" }}>
        <div className="profile-container">
          <div className="profile">
            <Profile />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
