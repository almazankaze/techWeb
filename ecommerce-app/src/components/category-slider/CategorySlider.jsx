import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import MouseIcon from "@mui/icons-material/Mouse";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import PrintIcon from "@mui/icons-material/Print";
import LaptopIcon from "@mui/icons-material/Laptop";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletIcon from "@mui/icons-material/Tablet";
import MonitorIcon from "@mui/icons-material/Monitor";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import StorageIcon from "@mui/icons-material/Storage";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EightKIcon from "@mui/icons-material/EightK";
import MemoryIcon from "@mui/icons-material/Memory";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SaveIcon from "@mui/icons-material/Save";
import "./category-slider.css";

const CategorySlider = () => {
  return (
    <div className="category-container">
      <div className="my-custom-pagination-div"></div>

      <Swiper
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
          renderBullet: (index, className) => {
            return "<span class=" + className + "></span>";
          },
        }}
        modules={[Pagination]}
        className="categoriesSwiper"
      >
        <SwiperSlide>
          <div className="category-slide">
            <div className="category-cell">
              <EightKIcon className="category-cell-icon" />
              <p>Video Cards</p>
            </div>
            <div className="category-cell">
              <ElectricalServicesIcon className="category-cell-icon" />
              <p>Power Supplies</p>
            </div>
            <div className="category-cell">
              <StorageIcon className="category-cell-icon" />
              <p>Motherboard</p>
            </div>
            <div className="category-cell">
              <PsychologyIcon className="category-cell-icon" />
              <p>Processors</p>
            </div>
            <div className="category-cell">
              <MemoryIcon className="category-cell-icon" />
              <p>Memory Ram</p>
            </div>
            <div className="category-cell">
              <SaveIcon className="category-cell-icon" />
              <p>Hard Drives</p>
            </div>
            <div className="category-cell">
              <SportsEsportsIcon className="category-cell-icon" />
              <p>Games</p>
            </div>
            <div className="category-cell">
              <HeadphonesIcon className="category-cell-icon" />
              <p>HeadPhones</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="category-slide">
            <div className="category-cell">
              <MouseIcon className="category-cell-icon" />
              <p>Mice</p>
            </div>
            <div className="category-cell">
              <KeyboardIcon className="category-cell-icon" />
              <p>Keyboards</p>
            </div>
            <div className="category-cell">
              <PrintIcon className="category-cell-icon" />
              <p>Printers</p>
            </div>
            <div className="category-cell">
              <LaptopIcon className="category-cell-icon" />
              <p>Notebooks</p>
            </div>
            <div className="category-cell">
              <SmartphoneIcon className="category-cell-icon" />
              <p>Phones</p>
            </div>
            <div className="category-cell">
              <TabletIcon className="category-cell-icon" />
              <p>Tablets</p>
            </div>
            <div className="category-cell">
              <MonitorIcon className="category-cell-icon" />
              <p>Monitors</p>
            </div>
            <div className="category-cell">
              <SaveAsIcon className="category-cell-icon" />
              <p>Pendrives</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySlider;
