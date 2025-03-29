export default function Footer() {
  return (
    <div className="row footer white-text">
      <div className="s10 offset-s1 center">
        <div className="col l4 s12 resources">
          <div className="contactUs real-contact-us">
            <br />
            <h4 className="center">
              <u>Contact Us</u>
            </h4>
            <ul>
              {/* <li style={{ marginTop: "20px" }}>
              <a href="">
                <i class="material-icons">location_on</i>
                <b>Address: </b>
                blah blaj
              </a>
            </li> */}
              {/* <li>
                <a href="">
                  <i class="material-icons">timelapse</i>
                  <b>Opening hours: </b>
                  blah blaj
                </a>
              </li> */}
              <li>
                <a href="https://wssurgical.com/">
                  <i class="material-icons">link</i>
                  <b>Westmount square: </b> &nbsp; https://wssurgical.com/
                </a>
              </li>
              <li>
                <a href="https://www.mtlortho.com/">
                  <i class="material-icons">link</i>
                  <b>St-Mary’s hospital: </b> &nbsp; https://www.mtlortho.com/
                </a>
              </li>
            </ul>
          </div>
          <br />
          <h4 className="center">
            <u>Resources</u>
          </h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#expertise">Surgeries</a>
            </li>
            <li>
              <a href="#articles">News Article</a>
            </li>
            <li>
              <a href="">EN|FR</a>
            </li>
          </ul>
          <div className="col s10 offset-s1">
            <a class="waves-effect waves-light btn-large white black-text btn-appointment">
              <i class="material-icons left">local_phone</i>Contact Us
            </a>
          </div>
        </div>

        <div className="col l4 s12 private-clinic">
          <div className="contactUs">
            <br />
            <h4 className="center">
              <u>Private Clinics</u>
            </h4>
            <ul>
              {/* <li style={{ marginTop: "20px" }}>
              <a href="">
                <i class="material-icons">location_on</i>
                <b>Address: </b>
                blah blaj
              </a>
            </li> */}
              {/* <li>
                Location 1: Westmount Square <br />
              </li> */}
              <li>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.138529182722!2d-73.5903631228673!3d45.4871550710744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a0cd365900f%3A0x8e1a76c2544839be!2sWestmount%20Square!5e0!3m2!1sen!2sca!4v1740963526152!5m2!1sen!2sca"
                  style={{ border: 0 }} // FIXED
                  allowFullScreen // FIXED
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" // FIXED
                ></iframe>
              </li>
              <li>
                <a href="">
                  <i class="material-icons left">location_on</i>
                  Westmount Square C190, Westmount, Quebec, Canada H3Z 2P9
                </a>
              </li>
              <li>
                <a href="">
                  <i class="material-icons left">phone</i>Tel: 514-932-6455
                </a>
              </li>
              <li>
                {" "}
                <a href="">
                  <i class="material-icons left">email</i> Email:
                  info@orthowestmount.com
                </a>
              </li>
              <br />
              {/* <li>
                Location 2: Kinatex (245 Victoria ave) <br />
              </li> */}

              {/* <li>
                {" "}
                <a href="">
                  <i class="material-icons left">local_printshop</i> Fax:
                  514-399-9991
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col l4 s12 private-clinic">
          <div className="contactUs">
            <br />
            <h4 className="center">
              <u>Public Clinic</u>
            </h4>
            <ul>
              {/* <li style={{ marginTop: "20px" }}>
              <a href="">
                <i class="material-icons">location_on</i>
                <b>Address: </b>
                blah blaj
              </a>
            </li> */}

              <li>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11186.894873932868!2d-73.61183966934745!3d45.49550806156899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc919e55dca2f29%3A0xeac5a75a92a72b8a!2sSt.%20Mary&#39;s%20Hospital!5e0!3m2!1sen!2sca!4v1740964086246!5m2!1sen!2sca"
                  style={{ border: 0 }} // FIXED
                  allowFullScreen // FIXED
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" // FIXED"
                ></iframe>
              </li>
              <li>
                <a href="">
                  <i class="material-icons left">location_on</i>
                  3830 Lacombe Ave, 7th floor (clinic) + 2nd floor (surgery),
                  Montreal, Quebec, Canada, H3T 0A2
                </a>
              </li>
              <li>
                <a href="">
                  <i class="material-icons left">phone</i>Tel: 514-734-2728
                </a>
              </li>
              <li>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4240.409920647865!2d-73.60097980915386!3d45.47731148103681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91144c02460f1%3A0x4ce70accd18154e0!2sKinatex%20Sports%20Physio%20Westmount!5e0!3m2!1sen!2sca!4v1740963913952!5m2!1sen!2sca"
                  style={{ border: 0 }} // FIXED
                  allowFullScreen // FIXED
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" // FIXED
                ></iframe>
              </li>
              <li>
                <a href="">
                  <i class="material-icons left">location_on</i>
                  245 Victoria ave #110, Westmount, Quebec, Canada, H3Z 2M5
                </a>
              </li>
              <li>
                <a href="">
                  <i class="material-icons left">phone</i>Tel: 514-254-7963
                </a>
              </li>
              <li>
                {" "}
                <a href="">
                  <i class="material-icons left">local_printshop</i> Fax:
                  514-399-9991
                </a>
              </li>
              <br />
              {/* <li>
                Location 3: Clinique Médicale St. Jacques <br />
              </li> */}
              <li>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5596.18418935593!2d-73.60705301367669!3d45.467946373490214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc910bc72febc85%3A0x32f043d9fecd3c73!2s5515%20Rue%20Saint-Jacques%20%23200%2C%20Montreal%2C%20QC%20H4A%202E3!5e0!3m2!1sen!2sca!4v1741970571189!5m2!1sen!2sca"
                  style={{ border: 0 }} // FIXED
                  allowFullScreen // FIXED
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" // FIXED
                ></iframe>
              </li>
              <li>
                <a href="">
                  <i class="material-icons left">location_on</i>
                  5515 St-Jacques Ouest #200, Montreal, Quebec, H4A 2E3
                </a>
              </li>
              <li>
                <a href="">
                  <i class="material-icons left">phone</i>Tel: 514-489-8216
                </a>
              </li>
              {/* <li>
                {" "}
                <a href="">
                  <i class="material-icons left">local_printshop</i> Fax:
                  514-399-9991
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
