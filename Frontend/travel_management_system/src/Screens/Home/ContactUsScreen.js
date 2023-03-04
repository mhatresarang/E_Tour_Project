import React from 'react'
import Header from '../../Components/Header'

const ContactUsScreen = (props) => {
  return (
    <div className="ctn-jumbotron">
      <div className="Screen">
        <div className="contact-title-color">
          <Header title="Contact Us" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 btn-holder">
              <div className="col-sm-12 ">
                <h4 className="contact-title-color">WhatsApp US</h4>
                <p className="contact-us-details-color">
                  Indrajit Nikam : 855285XXXX
                  <br />
                  Sushil Rane : 988131XXXX
                  <br />
                  Shreekant Veer : 940302XXXX
                  <br />
                  Aadesh Pakale : 982233XXXX
                  <br />
                  Atul Suryavanshi : 721941XXXX
                  <br />
                  Akshay Yadav : 996775XXXX
                  <br />
                  <hr />
                </p>
                <h4 className="contact-title-color">Email US</h4>
                <p className="contact-us-details-color">
                  indranikam5354@gmail.com
                  <br />
                  srane324@gmail.com
                  <br />
                  shreekantveer247@gmail.com
                  <br />
                  pakaleaadesh@gmail.com
                  <br />
                  atulsuryavanshi20@rediffmail.com
                  <br />
                  akshayyadav179@gmail.com
                  <br />
                  <br />
                  <hr />
                </p>
                <h4 className="contact-title-color">Contact US</h4>
                <p className="contact-us-details-color">
                  1800 890 1222 <br />
                  7:00 AM to 8:00 PM,365 Days
                  <hr />
                </p>
                <h4 className="contact-title-color">Concerns Not Address</h4>
                <p className="contact-us-details-color">
                  It is our priority to positively respond and address any concerns you may have at the earliest.To ensure this,
                  our team is conti nuously working to provide you the best of support,through a few concern/issues that are complex in nature 
                  may require additional time to resolve.In unlikely event that your concerns are not addressed satisfactorily,you could communicate directly to higher authority
                  to facilate and better manage this we have aligned a structure to aid communication. 
                  <hr />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsScreen
