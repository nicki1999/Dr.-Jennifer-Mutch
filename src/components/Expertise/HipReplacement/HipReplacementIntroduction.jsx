import KneeReplacementRealLife from "../../../images/Knee/KneeReplacementRealLife.png";
export default function HipReplacementIntroduction() {
  return (
    <div className="row KneeReplacementIntroduction">
      <div className="">
        <img
          src={KneeReplacementRealLife}
          className="KneeReplacementRealLife"
          alt=""
        />
        <div className="col s10 m6 offset-s6 offset-m6 white-text description">
          <h5>
            <b>
              In this page you will read the following about hip replacement :
            </b>
          </h5>
          <ul>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; Who should get a
                hip replacement?
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; What is a hip
                replacement?
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; Are there
                different types of hip replacements?
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; How can I prepare
                for surgery?
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; What can I expect
                during recovery?
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; What are the risks
                of hip replacement?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
