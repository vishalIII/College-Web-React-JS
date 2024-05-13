import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "72e2cbb1-89f3-4911-8fde-bf554d22887f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
         <div className="contact-col">
            <h3>Send us a massage <img src={msg_icon} alt="" /></h3>
            <p>para --------------------</p>
            <ul>
                 <li><img src={mail_icon} alt="" />VIIT@gmail.com</li>
                 <li><img src={phone_icon} alt="" />+1 939-333-2242</li>
                 <li><img src={location_icon} alt="" />Katraj <br />
                     pune</li>
            </ul>
         </div>
         <div className='contact-col'>
              <form onSubmit={onSubmit}>
                   <label htmlFor="">Your name</label>
                   <input type="text" name="name" id="" placeholder='Enter name' required/>
                   <label htmlFor="">Phone no.</label>
                   <input type="tel" name='phone' placeholder='Enter mobile numder'/>
                   <label htmlFor="">Write your message</label>
                   <textarea name="message" rows='6' placeholder='Enter yout message' required></textarea>
                   <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
              </form>

              <span>{result}</span>
         </div>
    </div>
  )
}

export default Contact
