import MailButton from "../Main/MailButton";
import PhoneButton from "../Main/PhoneButton";
import React, { useState, useEffect } from "react";

export default function Footer() {
  const thumb = "thumb";
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <footer id="footer" className={isVisible ? "show-footer" : "hide-footer"}>
        <div className="inner">
          <div className="btn">
            <PhoneButton />
            <MailButton thumb={thumb} />
          </div>
        </div>
      </footer>
    </>
  );
}
