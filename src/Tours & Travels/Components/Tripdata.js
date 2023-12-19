import "./Tripstyle.css";
const Tripdata = (props) => {
    return (
        <div className="t-card">
            <div className="t-imag">
                <img alt="t-imag" src={props.imag} />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default Tripdata;