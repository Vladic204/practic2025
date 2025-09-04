import vk from "../../img/icons/vk-svgrepo-com.svg";
import instagram from "../../img/icons/instagram-svgrepo-com (1).svg";
import twitter from "../../img/icons/twitter-color-svgrepo-com.svg";
import gitHub from "../../img/icons/github-color-svgrepo-com.svg";
import linkedIn from "../../img/icons/linkedin-svgrepo-com.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!"><img src={vk} alt="Link" /></a>
            </li>
            <li className="social__item">
              <a href="#!"><img src={instagram} alt="Link" /></a>
            </li>
            <li className="social__item">
              <a href="#!"><img src={twitter} alt="Link" /></a>
            </li>
            <li className="social__item">
              <a href="#!"><img src={gitHub} alt="Link" /></a>
            </li>
            <li className="social__item">
              <a href="#!"><img src={linkedIn} alt="Link" /></a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;