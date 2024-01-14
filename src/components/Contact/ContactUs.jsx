import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const ContactUs = () => {
    return (
       <div>
        <Navbar/>
  <main>
    <section className="abt-box">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wrapper">
              <h2>Contact Us</h2>
              <ol>
                <li>Home<i className="flaticon-right-arrow" /></li>
                <li>Contact Us</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ------------------------------------------------------------------ */}
    <section className="contact-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading">
              <h2>get in touch</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Asperiores officiis explicabo blanditiis consequuntur fugit 
                fugiat, incidunt totam consectetur veritatis minus corporis
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="wrapper">
              <form>
                <div className="form-group">
                  <input className="form-control" placeholder="Enter Your Name" required="name" role="text" name="name" />
                </div>
                <div className="form-group">
                  <input className="form-control" placeholder="Enter Your Email" required="email" role="text" name="email" />
                </div>
                <div className="form-group">
                  <input className="form-control" placeholder="Enter Your Mobilenumber" required="phone" role="phone" name="phone" />
                </div>
                <div className="form-group">
                  <textarea name id cols={30} rows={8} placeholder="Enter Your Message" defaultValue={""} />
                </div>
                <div className="form-group">
                  <a href="#">send message</a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="wrapper">
              <div className="map">
                <iframe style={{width: '100%'}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107" height={480} frameBorder={0} allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer/>
</div>

    );
}

export default ContactUs;
