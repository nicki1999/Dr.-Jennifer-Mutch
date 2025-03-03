const ExpertiesCard = (props) => {
  return (
    <div className="col s12 l3 card offset-l1">
      <div className="card-image waves-effect waves-block waves-light center">
        <img className="activator" src={props.image} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {props.title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a href="#">
            <b>Read More...</b>
          </a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {props.title}
          <i className="material-icons right">close</i>
        </span>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default ExpertiesCard;
