import React from 'react';
import Logo from "../../assets/icons/Logo.svg";
import dashboard from "../../assets/img/dashboard-small.png";
export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="intro-analytics">
      <div className="wrap wrap_padding">
        <header className="header">
          <a href="#" className="header_logo">
            <img src={Logo} alt="Logo" />
            <p>Analytics</p>
          </a>
          <nav className="header_menu header_menu--adaptive">
            <ul className="header_menu-list">
              <li className="header_menu-item">
                <a onClick={() => scrollToSection('products')}>Products</a>
              </li>
              <li className="header_menu-item">
                <a  onClick={() => scrollToSection('pricing-plans')}>Pricing</a>
              </li>
              <li className="header_menu-item">
                <a  onClick={() => scrollToSection('FAQ')}>FAQ</a>
              </li>
              <li className="header_menu-item">
                <a onClick={() => scrollToSection('blog')}>Blog</a>
              </li>
              <li className="header_menu-item">
                <a href="#">Analytics</a>
              </li>
            </ul>
          </nav>
          <div className="header_btns">
            <button className="header_btn">Sign in</button>
            <button className="header_btn header_menu--adaptive">Sign up</button>
          </div>
          <div className="header-menu-btn">
            <input type="checkbox" />
            <nav className="header_menu header_menu--side">
              <ul className="header_menu-list">
                <li className="header_menu-item">
                  <a onClick={() => scrollToSection('products')}>Products</a>
                </li>
                <li className="header_menu-item">
                  <a onClick={() => scrollToSection('pricing-plans')}>Pricing</a>
                </li>
                <li className="header_menu-item">
                  <a onClick={() => scrollToSection('FAQ')}>FAQ</a>
                </li>
                <li className="header_menu-item">
                  <a onClick={() => scrollToSection('blog')}>Blog</a>
                </li>
                <li className="header_menu-item">
                  <a href="/">Analytics</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="dashboard">
          <div className="dashboard_info">
            <h1 className="dashboard_title">
              Monitor your business on real-time dashboard
            </h1>
            <p className="dashboard-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam.
            </p>
            <button className="dashboard_btn">Try for free</button>
          </div>
          <div className="dashboard_pictures">
            <img src={dashboard} alt="dashboard picture" />
          </div>
        </div>
      </div>
    </div>
  );
};
