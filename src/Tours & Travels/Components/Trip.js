import "./Tripstyle.css";
import Tripdata from "./Tripdata";
import TripDataitems from "../const/Tripdataitems";
const Trip = () => {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique
                destinations using Google maps.
            </p>
            <div className="tripcard">
                {
                    TripDataitems.map((item) => {
                        return (<Tripdata
                            key={Math.random()}
                            imag={item.imag}
                            heading={item.heading}
                            text={item.text}

                        />)
                    })
                }
            </div>
        </div>
    )
}
export default Trip;