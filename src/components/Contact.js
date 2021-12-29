import React, { useRef, useState } from "react";
import "./Contact.css";
import contactImg from "../assets/images/contact.png";
import Fade from "react-reveal/Fade";

function Contact() {
  const [start, setStart] = useState(false);
  const secRef = useRef();

  window.addEventListener("scroll", function () {
    if (secRef.current) {
      const secTop = secRef.current.offsetTop;
      if (window.scrollY >= secTop - 400) {
        setStart(true);
      }
    }
  });

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div ref={secRef} className={start ? "main-title start" : "main-title"}>
          Contact
        </div>
        <Fade>
          <div className="contact__content">
            <div className="contact__left">
              <img src={contactImg} alt="contactImg" />
            </div>
            <div className="contact__right">
              <form
                action="https://formsubmit.co/iadelndf@gmail.com"
                method="POST"
              >
                {/* other stuff */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Message from your web site.!"
                ></input>
                <input type="hidden" name="_captcha" value="false"></input>
                {/* End other stuff */}
                <div className="input_container">
                  <input type="email" name="email" required />
                  <p className="placeholder">Email</p>
                </div>
                <div className="input_container">
                  <textarea
                    name="text"
                    id=""
                    cols="30"
                    rows="5"
                    required
                  ></textarea>
                  <p className="placeholder">Your Message</p>
                </div>
                <button className="btn" type="submit">
                  Send
                </button>
              </form>
              <h2 className="contact__rightOr">OR</h2>
              <a
                className="contact__whatsapp"
                target="_blank"
                href="https://wa.me/+966538040776"
                rel="noreferrer"
              >
                Whatsapp
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Contact;
