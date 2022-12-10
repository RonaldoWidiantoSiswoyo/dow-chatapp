import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Dow App Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14616881/pexels-photo-14616881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="profile gambar"
        />
        <span>John</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
