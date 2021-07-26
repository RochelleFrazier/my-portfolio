import React from "react";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import "././contact.css";

function Contact() {
  //   new WOW().init();
  return (
    <>
      <div className="contact-section" id="contact">
        <h1 className="contact-title">Contact Me</h1>

        <form action="mailto:rochellesakura@gmail.com">
          <div className="row">
            <div className="col-md-2 "></div>
            <div className="col-md-4 ">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Send Message"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-text-wrapper">
                <p>
                  <i className="contact-icon">
                    <GoLocation />
                  </i>
                  &nbsp; Harrisburg, Pennsylvania
                </p>
                <p>
                  <i className="contact-icon">
                    <FiPhone />
                  </i>
                  &nbsp; +1-717-829-6497{" "}
                </p>
                <p>
                  <i className="contact-icon">
                    <HiOutlineMail />
                  </i>
                  &nbsp; rochellesakura@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-2 "></div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
