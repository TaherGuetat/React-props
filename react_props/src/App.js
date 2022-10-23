import PropTypes from "prop-types";
import "./App.css";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./Navigationbar";
import { Profile } from "./Profile/profile";
import image from "./photo_de_profil.jpg";

function App() {
  const like = (x) => alert(` Hey! it's me ${x}`);
  return (
    <div className="App">
      <Navigation />
      
     
                
                <Profile
                  fullName={"Taher GUETAT"}
                  bio={"Mining Engineer & Web Developer Enthusiast"}
                  profession={"Engineer"}
                  like={like}
                >
                  <img src={image} alt="" style={{width:'18rem'}}/>
                </Profile>
        

      <footer className="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">
            Copyright &copy; My Profile website 2021
          </p>
        </Container>
      </footer>
    </div>
  );
}

// Setting defaultProps
Profile.defaultProps = {
  fullName: "name not written",
  bio: "write bio",
};

// Setting propTypes
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default App;
