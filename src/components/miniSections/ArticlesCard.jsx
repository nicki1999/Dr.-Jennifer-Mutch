const ArticlesCard = (props) => {
  return (
    <div class="col s12 l3 card offset-l1">
      <div class="card-image">
        <img src={props.image} />
        <div className="indigo title-container">
          <span class="card-title">
            <b>{props.title}</b>
          </span>
        </div>
      </div>
      <div class="card-content">
        <p>{props.description}</p>
      </div>
      <div class="card-action">
        <a href={props.link} className="blue-text">
          Read more...
        </a>
      </div>
    </div>
  );
};
export default ArticlesCard;
