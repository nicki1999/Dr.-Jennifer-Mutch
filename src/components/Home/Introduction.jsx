import jenniferMutch from "../../images/JenniferMutch.png";
export default function Introduction() {
  return (
    <div className="row introduction">
      <div className="container">
        <div className="col s12 l6 white-text left leftSection">
          <h1 className="white-text">
            <b>Dr. Jennifer Mutch</b>
          </h1>
          <h5>Orthopedic Surgeon</h5>
          <br />
          <span>Specialized in: </span>
          <ul>
            <li>
              <a href="">- Surgery of the Shoulder, Elbow</a>
            </li>
            <li>
              <a href="">
                - Nerve Decompression (Carpal Tunnel, Cubital Tunnel)
              </a>
            </li>
            <li>
              <a href="">
                - Knee Replacement, Partial Knee Replacement, Hip Replacement,
                Shoulder Replacement
              </a>
            </li>
            <li>
              <a href="">- Ultrasound-Guided joint Injections</a>
            </li>
          </ul>
        </div>
        <div className="col s12 l4 rightSection">
          <img src={jenniferMutch} alt="" className="right" />
        </div>
        <div className="col s12">
          <a className="waves-effect waves-light btn-large white black-text btn-appointment">
            <i className="material-icons left">schedule</i>Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
