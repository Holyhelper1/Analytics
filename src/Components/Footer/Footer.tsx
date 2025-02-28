import Logo from "../../assets/icons/logo-gray.svg";
import facebook from "../../assets/icons/Facebook.svg";
import twitter from "../../assets/icons/Twitter.svg";
import instagram from "../../assets/icons/Instagram.svg";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
        <footer className="footer-menu wrap-padding" id="FAQ">
      <div className="footer-menu_wrapper wrap">
        <div className="footer-menu_logo">
          <img src={Logo} alt="footer logo" />
          <p>ANALYTICS</p>
        </div>
        <ul className="footer-menu_list">
          <li className="footer-menu_item">
            <a onClick={() => scrollToSection('products')} className="footer-menu_link">Product</a>
          </li>
          <li className="footer-menu_item">
            <a onClick={() => scrollToSection('pricing-plans')} className="footer-menu_link">Pricing Plans</a>
          </li>
          <li className="footer-menu_item">
            <a onClick={() => scrollToSection('FAQ')} className="footer-menu_link">FAQ</a>
          </li>
          <li className="footer-menu_item">
            <a onClick={() => scrollToSection('blog')} className="footer-menu_link">Blog</a>
          </li>
        </ul>
        <div className="footer-menu_links">
          <a href="/">
            <img
              className="footer-menu_link-icon"
              width="10"
              height="20"
              src={facebook}
              alt="facebook" />
          </a>
          <a href="/">
            <img className="footer-menu_link-icon" width="25" height="20" src={twitter} alt="twitter" />
          </a>
          <a href="/">
            <img
              className="footer-menu_link-icon"
              width="21"
              height="20"
              src={instagram}
              alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
    )
}