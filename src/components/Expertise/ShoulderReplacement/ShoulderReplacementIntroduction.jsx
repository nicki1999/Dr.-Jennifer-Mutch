import KneeReplacementRealLife from "../../../images/Knee/KneeReplacementRealLife.png";

export default function ShoulderReplacementIntroduction() {
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
              In this page you will read the following about shoulder
              replacement :
            </b>
          </h5>
          <ul>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; Who should get a
                shoulder replacement?
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; What is a shoulder
                replacement?
              </a>
            </li>
            <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; Are there
                different types of shoulder replacements?
              </a>
            </li>
            {/* <li>
              <a href="">
                <i className="material-icons">link</i> &nbsp; What are the steps
                to your knee replacement?
              </a>
            </li> */}
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
                of shoulder replacement?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
