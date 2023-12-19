import "./Destinationstyle.css"
import DestinationDataitems from "../const/DestinationdataItems"
const Destinationdata = () => {

    return (

        <div>
            {
                DestinationDataitems.map((item, index) => {
                    return (
                        <div className={item.cName} key={Math.random()}>
                            <div className="des-text">
                                <h2>{item.heading}</h2>
                                <p> {item.text} </p>
                            </div>
                            <div className="image">
                                <img alt="imag" src={item.img1} />
                                <img alt="imag" src={item.img2} />

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Destinationdata;