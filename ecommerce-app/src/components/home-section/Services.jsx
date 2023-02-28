import notebooks from "../../img/notebooks.jpg";
import printer from "../../img/printer.jpg";
import recycle from "../../img/recycle.png";

import "./services.css";

const Services = () => {
  return (
    <div>
      <div className="service-wrapper">
        <div className="service-box service-1">
          <div className="service-item">
            <div className="service-image">
              <img src={notebooks} alt="notebooks" />
            </div>
            <div className="service-description">
              <h3>Services Provided</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                culpa, odio, qui praesentium dignissimos eaque dolorum porro
                alias neque, eius animi ipsa voluptates.
              </p>
            </div>
          </div>
        </div>
        <div className="service-box service-2">
          <div className="service-item">
            <div className="service-image">
              <img src={printer} alt="notebooks" />
            </div>
            <div className="service-description">
              <h3>Services Provided</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="service-box service-3">
          <div className="service-item">
            <div className="service-image">
              <img src={recycle} alt="notebooks" />
            </div>
            <div className="service-description">
              <h3>Services Provided</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
