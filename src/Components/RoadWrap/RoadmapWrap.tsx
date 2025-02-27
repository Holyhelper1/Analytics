import roadmapPicture_1 from "../../assets/img/screen-01.png";
import roadmapPicture_2 from "../../assets/img/screen-02.png";
import roadmapPicture_3 from "../../assets/img/screen-03.png";
export const RoadmapWrap = () => {
  return (
    <div className="roadmap wrap">
      <div className="roadmap_item">
        <div className="roadmap_description">
          <h3 className="roadmap_title">Automated Reports & Widget Alerts</h3>
          <p className="roadmap_text-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </p>
        </div>
        <div className="roadmap_picture">
          <img src={roadmapPicture_1} alt="picture roadmap" />
        </div>
      </div>
      <div className="roadmap_item roadmap_item--right">
        <div className="roadmap_description">
          <h3 className="roadmap_title">
            Fully customizable to address your needs{" "}
          </h3>
          <p className="roadmap_text-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </p>
        </div>
        <div className="roadmap_picture">
          <img src={roadmapPicture_2} alt="picture roadmap" />
        </div>
      </div>
      <div className="roadmap_item">
        <div className="roadmap_description">
          <h3 className="roadmap_title">Pre-built Dashboard Templates</h3>
          <p className="roadmap_text-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </p>
        </div>
        <div className="roadmap_picture">
          <img src={roadmapPicture_3} alt="picture roadmap" />
        </div>
      </div>
    </div>
  );
};
