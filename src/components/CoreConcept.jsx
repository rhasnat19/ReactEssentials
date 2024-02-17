export default function CoreConcept({image, title, description}){
    return (
      <li>
        <img src={image} atl={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
