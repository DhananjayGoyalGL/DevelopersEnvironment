import "./index.scss";
import Loader from "react-loaders";
import { useEffect, useRef, useState } from "react";
import gmail from "../../assets/images/gmail.webp";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Us</h1>
          <p>
            Welcome to our contact page! We are always here to address any
            questions or concerns you may have. Please don't hesitate to get in
            touch with us using the form below. We will do our best to respond
            as quickly as possible and assist you in any way we can.{" "}
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />{" "}
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
      <img className="gmail" src={gmail} alt="mail" />
    </>
  );
};

export default Contact;
