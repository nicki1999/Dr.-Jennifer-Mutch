const AboutCard = (props) => {
  return (
    <div className="col l4 aboutCard">
      <a class="waves-effect waves-light btn-large">
        <i class="material-icons center">{props.icon}</i>
      </a>
      <br />
      <div className="title">
        <b>{props.title}</b>
      </div>
      <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
      </ul>
    </div>
  );
};
export default AboutCard;
