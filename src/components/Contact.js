import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
                    </div>
                    <div>
                      <form
                        method="post"
                        role="form"
                        className="php-email-form"
                      >
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required=""
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">
                              Your message has been sent. Thank you!
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                              onClick={(e)=>{e.preventDefault()}}
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Email us with any questions or inquiries or clall us on
                        our no. We would be happy to answer your questions and
                        set up a meeting with you.
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="bi bi-geo-alt"></span> 
                           Babatpur airport,Varanasi
                        </li>
                        <li>
                          <span className="bi bi-phone"></span> 945226****82
                        </li>
                        <li>
                          <span className="bi bi-envelope"></span>
                          Abhishek*****@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/profile.php?id=100041800362383">
                            <span className="ico-circle">
                              <i className="bi bi-facebook"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://instagram.com/abhishekgoswami979?igshid=ZDdkNTZiNTM=">
                            <span className="ico-circle">
                              <i className="bi bi-instagram"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/Abhishe87156156?t=ismOYjmT1n2TB3u6sMn7GA&s=08">
                            <span className="ico-circle">
                              <i className="bi bi-twitter"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span className="ico-circle">
                              <i className="bi bi-linkedin"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
