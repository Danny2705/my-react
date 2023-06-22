import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsTextCenter} from 'react-icons/bs';
import {HiChat} from 'react-icons/hi'
 
const Contact = () => {
  return (
    <section className="contact-wrapper padding">
      <div className="contact-container innerWidth">
        <div className="con-left">
          <div className="orange-text">Our Contact Us</div>
          <span>Easy to contact us</span>
          <p>
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </p>

          <div className="con-info">
            <div className="category">
              <div className="cate-info">
                <div className="acc-icon">
                  <MdCall size={25} />
                </div>

                <div className="cate-block">
                  <span>Call</span>
                  <span>021 123 145 14</span>
                </div>
              </div>
              <button className="btn">Call now</button>
            </div>

            <div className="category">
              <div className="cate-info">
                <div className="acc-icon">
                  <HiChat  size={25}/>
                </div>
                
                <div className="cate-block">
                  <span>Chat</span>
                  <span>021 123 145 14</span>
                </div>
              </div>
              <button className="btn">Chat now</button>
            </div>
            <div className="category">
              <div className="cate-info">
                <div className="acc-icon">
                  <HiChat size={25}/>
                </div>
                
                <div className="cate-block">
                  <span>Video Call</span>
                  <span>021 123 145 14</span>
                </div>
              </div>
              <button className="btn">Video Call now</button>
            </div>

            <div className="category">
              <div className="cate-info">
                <div className="acc-icon">
                  <BsTextCenter size={25} />
                </div>
                
                <div className="cate-block">
                  <span>Message</span>
                  <span>021 123 145 14</span>
                </div>
              </div>
              <button className="btn">Message now</button>
            </div>
          </div>
        </div>

        <div className="con-right">
          <div className="image-container">
            <img
              src="https://real-estate-web.pages.dev/contact.jpg"
              alt="Contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
