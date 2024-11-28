import React from "react";
import "./HomePage.scss";
import { FaFacebook, FaVideo, FaRegSmile, FaUserCircle, FaHome } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />

      <div className="dashboard">
        {/* Sidebar */}
        <div className="sidebar">
          
          <ul className="menu">
            <li><FaHome /> Bảng Feed</li>
            <li><FaVideo /> Video</li>
            <li>Marketplace</li>
            <li>Nhóm</li>
            <li>Xem thêm</li>
          </ul>
          <div className="shortcuts">
            <h4>Lối tắt của bạn</h4>
            <ul>
              <li>CLB HÍT HÀ DRAMA FU</li>
              <li>FUOverflow</li>
              <li>Tổ Rắn</li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="main">
          <div className="header">
            <FaUserCircle size={32} />
            <input type="text" placeholder="Cường ơi, bạn đang nghĩ gì thế?" />
            <div className="actions">
              <button><FaVideo /> Video trực tiếp</button>
              <button><FaRegSmile /> Cảm xúc</button>
            </div>
          </div>
          <div className="stories">
            <div className="story">Tạo tin</div>
            <div className="story">An Nhiệt</div>
            <div className="story">Thúy Hiền</div>
          </div>
          <div className="post">
            <h4>Troll Bóng Rổ</h4>
            <p>TIỂU HỌC đấu với TIỂU HỌC...</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <div className="ads">
            <p>Sponsored</p>
            <div>Try MongoDB Atlas</div>
          </div>
          <div className="contacts">
            <h4>Người liên hệ</h4>
            <ul>
              <li>Từ Nguyễn Đức Cường</li>
              <li>Nguyen Ngoc Toan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
