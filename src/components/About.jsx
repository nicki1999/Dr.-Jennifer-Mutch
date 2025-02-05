import jenniferMutch from "../images/JenniferMutch.jpg";
export default function About(){
    return(
<div className="about row container">
    <div className="leftSection m-8">
        <h1 className="white-text">
Dr. Jennifer Mutch
        </h1>
        <h4>Orthopedic Surgeon</h4>
        <span>Specialized in: </span>
        <br />
        <ul>
            <li><a href="">Surgery of the Shoulder, Elbow</a></li>
            <li><a href="">Nerve Decompression (Carpal Tunnel, Cubital Tunnel)</a></li>
            <li><a href="">Knee Replacement, Partial Knee Replacement, Hip Replacement, Shoulder Replacement</a></li>
            <li><a href="">Ultrasound-Guided joint Injections</a></li>
        </ul>
    </div>
    <div className="rightSection m-4">
        <img src={jenniferMutch} alt="" />
    </div>
</div>
    );
}