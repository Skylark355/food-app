import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <img src={assets.logo} alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            nisi consequuntur hic aspernatur omnis consectetur eius unde cumque
            veniam similique, aliquam, nemo blanditiis incidunt rerum quis ad
            voluptas sint neque.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+233594995855</li>
            <li>adzesi.chris@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">Copyright &copy; Skylark.dev</div>
    </div>
  );
};

export default Footer;
