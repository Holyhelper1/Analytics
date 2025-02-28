import monitoring from "../../assets/icons/monitoring.svg";
import performance from "../../assets/icons/performance.svg";
import widgetSystem from "../../assets/icons/widgetSystem.svg";
export const MainFeatures = () => {
  return (
    <div className="main-features" id="blog">
      <div className="wrap">
        <h2 className="main-features_title">Main features</h2>
        <p className="main-features_text-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </p>
        <div className="main-features_advantages">
          <div className="main-features_advantage-item">
            <img
              src={monitoring}
              alt="monitoring"
              className="main-features_advantage-icon"
            />
            <h3 className="main-features_advantage_title" id="blog">Monitoring 24/7</h3>
            <p className="main-features_advantage-desc">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Elementum nisi aliquet volutpat.
            </p>
          </div>

          <div className="main-features_advantage-item">
            <img
              src={performance}
              alt="performance"
              className="main-features_advantage-icon"
            />
            <h3 className="main-features_advantage-title">Widget System</h3>
            <p className="main-features_advantage-desc">
              Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae
              et, tortor pulvinar risus pulvinar.
            </p>
          </div>

          <div className="main-features_advantage-item">
            <img
              src={widgetSystem}
              alt="widgetSystem"
              className="main-features_advantage-icon"
            />
            <h3 className="main-features_advantage-title">Best Performance</h3>
            <p className="main-features_advantage-desc">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Elementum nisi aliquet volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
