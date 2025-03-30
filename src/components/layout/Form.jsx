import React, { useEffect } from "react";
import M from "materialize-css"; // ✅ Import MaterializeCSS
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Form() {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [userInsuranceType, setUserInsuranceType] = useState("");
  const [userFile, setUserFile] = useState(null);

  const handleContactFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      userFirstname: formData.get("userFirstname"),
      userLastname: formData.get("userLastname"),
      userEmail: formData.get("userEmail"),
      userPhone: formData.get("userPhone"),
      userInsuranceType: formData.get("userInsuranceType"),
    };

    // If a file is uploaded, add it to the data object
    if (userFile) {
      data.userFile = userFile;
    }

    sendEmail(data);
  };

  const sendEmail = (data) => {
    const serviceId = "service_sylfva6";
    const templateId = "template_zg6o8e8";
    const userId = "43Pwn_Ki0Yy_5yqmE";

    const emailParams = {
      userFirstname: data.userFirstname,
      userLastname: data.userLastname,
      userEmail: data.userEmail,
      userPhone: data.userPhone,
      userInsuranceType: data.userInsuranceType,
      userFile: data.userFile ? data.userFile.name : "", // Only send the file name if it exists
    };

    if (data.userFile) {
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        // Ensure the file is a Blob (and hence can be read as a Data URL)
        if (data.userFile instanceof Blob) {
          emailParams.userFileContent = fileReader.result; // Add file content as base64

          // Send the email with the file attachment
          emailjs
            .send(serviceId, templateId, emailParams, userId)
            .then((response) => {
              console.log("Email successfully sent:", response);
              alert("Your message has been sent!");
            })
            .catch((error) => {
              console.log("Failed to send email:", error);
              alert("Something went wrong. Please try again later.");
            });
        } else {
          console.error("The file is not a valid Blob object.");
        }
      };

      // Check if the file is an actual `Blob` (file object) before reading it
      if (data.userFile instanceof Blob) {
        fileReader.readAsDataURL(data.userFile); // Convert the file to base64
      } else {
        console.error("File is not valid or has not been selected correctly.");
      }
    } else {
      // If no file, just send the form data
      emailjs
        .send(serviceId, templateId, emailParams, userId)
        .then((response) => {
          console.log("Email successfully sent:", response);
          alert("Your message has been sent!");
        })
        .catch((error) => {
          console.log("Failed to send email:", error);
          alert("Something went wrong. Please try again later.");
        });
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files; // Get the selected files
    if (files.length > 0) {
      setUserFile(files[0]); // Set the first file selected
    }
  };

  useEffect(() => {
    const elems = document.querySelectorAll(
      "input#input_text, textarea#textarea2"
    );
    if (window.M) {
      window.M.CharacterCounter.init(elems);
    }
  }, []);

  useEffect(() => {
    const selectElems = document.querySelectorAll("select");
    const selectInstances = M.FormSelect.init(selectElems);

    // Cleanup function to destroy instances on unmount
    return () => {
      selectInstances.forEach((instance) => instance.destroy());
    };
  }, []);

  return (
    <div className="row form">
      <div className="col s10 offset-s1 center">
        <div className="col l5 12">
          <h4>Title</h4>
          <span>Description</span>
        </div>
        <div className="col l5 s12">
          <form onSubmit={handleContactFormSubmit}>
            <div className="input-field">
              <input
                name="userFirstname"
                id="name"
                type="text"
                className="validate"
                value={inputFirstName}
                onChange={(e) => setInputFirstName(e.target.value)}
              />
              <label htmlFor="name">First Name</label>
            </div>
            <div className="input-field">
              <input
                name="userLastname"
                id="name"
                type="text"
                className="validate"
                value={inputLastName}
                onChange={(e) => setInputLastName(e.target.value)}
              />
              <label htmlFor="name">Last Name</label>
            </div>
            <div className="input-field">
              <input
                name="userEmail"
                id="email"
                type="email"
                className="validate"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                name="userPhone"
                id="phone"
                type="tel"
                className="validate"
                value={inputPhone}
                onChange={(e) => setInputPhone(e.target.value)}
              />
              <label htmlFor="phone">Phone</label>
            </div>

            <div className="input-field col s12">
              <select
                name="userInsuranceType"
                id="insuranceType"
                value={userInsuranceType}
                onChange={(e) => setUserInsuranceType(e.target.value)}
              >
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Please select your insurance type</label>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input
                  name="userFile"
                  type="file"
                  onChange={handleFileChange}
                  multiple
                />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  placeholder="Upload one or more files"
                  value={userFile ? userFile.name : ""}
                />
              </div>
            </div>

            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
