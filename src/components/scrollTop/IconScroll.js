import React, { useState, useEffect } from "react";
import ScrollTopIcon from "./images/totop.png";
import "./scrollTop.css";
function IconScroll() {
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [is_visible, set_visible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      set_visible(true);
    } else {
      set_visible(false);
    }
  };

  return (
  
     is_visible &&
        <span className="totopvisible" onClick={scrollToTop}>
          {" "}
          <img className="scrollTopIconImagePng" src={ScrollTopIcon} alt="" />
        </span>
  
  );
}
export default IconScroll;
