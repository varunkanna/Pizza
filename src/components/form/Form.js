import React from "react";
import "./Form.css";

const Form = () => {
    const formFun = (formData) => {
        console.log(formData)
    }
  return (
    <div className="form-box">
      <p className="form-hd-text">
        <i className="i-color">Sign up</i> for our update
      </p>
      <div className="sub-div">
        <p className="form-hd-sub-text">
          <i className="i-color">To stay up-to-date</i> on our promotions,
          discounts, sales, special offers and more.
        </p>
      </div>

      <form action={formFun} className="form-div">
        <input className="form-field" type="text" name="user_name" placeholder="Name *" required />
        <input className="form-field" type="emaail" name="email" placeholder="Email *" required />
        <input className="form-field" type="number" name="mobile" placeholder="Phone" />
        <textarea className="form-field" type='text' placeholder="Your Comment Here ..." name="comment" rows={2} cols={40} />
        <button className="submit-btn" type="submit">Send Message</button>
      </form>

      {/* footer part */}
      <div className="footer">
        <p>+1 (123) 123 45-67</p>
        <p>INSTAGRAM YOUTUBE FACEBOOK</p>
      </div>
    </div>
  );
};

export default Form;
