import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="ImageHeader">
        <img
          src="https://lereacteur-marvel-api.netlify.app/static/media/logo.ad6c786b.svg"
          alt="Marvel"
          style={{ height: 70, width: 100 }}
        />
      </div>
      <div className="Buttons">
        <Link to="/Comics">
          <button>Comics</button>
        </Link>
        <Link to="/Character">
          <button>Characters</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
