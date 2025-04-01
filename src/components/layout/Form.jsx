import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import M from "materialize-css";

export default function Form() {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [userInsuranceType, setUserInsuranceType] = useState("");
  const [userFile, setUserFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserFile(file); // Save the selected file
    }
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Basic validation to make sure all fields are filled
    if (
      !inputFirstName ||
      !inputLastName ||
      !inputEmail ||
      !inputPhone ||
      !userInsuranceType ||
      !userFile
    ) {
      alert("Please fill out all fields and select a file.");
      return;
    }

    // Convert the file to base64 format (for image)
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const base64String = fileReader.result;

      const emailParams = {
        userFirstname: inputFirstName,
        userLastname: inputLastName,
        userEmail: inputEmail,
        userPhone: inputPhone,
        userInsuranceType: userInsuranceType,
        imageAttachment: base64String, // Base64 string of the file
      };

      // Send the email with the form data and the image attachment
      emailjs
        .send(
          "service_sylfva6",
          "template_zg6o8e8",
          emailParams,
          "43Pwn_Ki0Yy_5yqmE"
        )
        .then(
          (response) => {
            console.log("Email successfully sent:", response);
            alert("Your message has been sent!");
          },
          (error) => {
            console.log("Failed to send email:", error);
            alert("Something went wrong. Please try again later.");
          }
        );
    };

    // Read the image file as a base64 string
    fileReader.readAsDataURL(userFile);
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

    return () => {
      selectInstances.forEach((instance) => instance.destroy());
    };
  }, []);

  return (
    <div className="row form">
      <div className="col s10 offset-s1 center">
        <div className="col l5 12 left-align">
          <h4>Regain Mobility Fast</h4>
          <span>Description</span>
        </div>
        <div className="col l5 s12">
          <form onSubmit={handleFormSubmit} encType="multipart/form-data">
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

            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input
                  name="userFile"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  placeholder="Upload an image"
                  value={userFile ? userFile.name : ""}
                  readOnly
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
