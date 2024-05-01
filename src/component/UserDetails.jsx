import Userskill from "./Userskill";

export default function UserDetails({name,city,profil,feild,status,skills}) {
  const changecolor= status ? "greenyellow":"#febb0b";
    return (
    <div className="container">
        <span className="status" style={{backgroundColor:changecolor}}>{status ?"online" : "offline"}</span>
        <img src={profil} alt="No images" className="image" />
        <h3 className="name">{name}</h3>
        <h3 className="city">{city}</h3>
        <p className="feild">{feild}</p>
        <div className="btn">
            <button className="pry">Message</button>
            <button className="pry outline">Following</button>
        </div>
        <div className="skill">
            <h6>Skills</h6>
            <ul>
              {skills.map((sk,idx)=>(
                <li key={idx}>{sk}</li>
              ))}
             
            </ul>
        </div>
    
    </div>
  )
}
