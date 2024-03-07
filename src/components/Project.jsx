//The following using props to inject the values from the portfolio into each project card
export default function Project(props) {
  return (
    <div className="card ">
      <a href={props.deploy} target="_blank">
        <img className="projectImage overlay"
          src={props.img}
          alt={props.alt}
        ></img>
      </a>
      <h3>{props.title}</h3>
      <a href={props.repo} target="_blank">
        <p className='repository'>-Git Hub Repositiory-</p>

      </a>
    </div>
  );
}