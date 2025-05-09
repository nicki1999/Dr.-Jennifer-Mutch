import KneeReplacementRealLife from "../../../images/Knee/KneeReplacementRealLife.png";
export default function KneeReplacementIntroduction() {
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
              In this page you will read the following about knee replacement :
            </b>
          </h5>
          <ul>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; Who should get a
                knee replacement?
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; What is a "knee"
                replacement?
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; Are there
                different types of knee replacements?
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; What are the steps
                to your knee replacement?
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
                of knee replacement?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
