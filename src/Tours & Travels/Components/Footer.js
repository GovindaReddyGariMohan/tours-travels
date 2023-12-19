import { Link } from "react-router-dom";
import "./Footerstyle.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div >
                    <h1 className="head">Trippy</h1>
                    <p className="head">choose your favorate destination.</p>
                </div>
                <div>
                    <Link to="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </Link>
                    <Link to="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </Link>

                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4 className="head">Project</h4>
                    <Link to="/">Changelog</Link>
                    <Link to="/">Status</Link>
                    <Link to="/">Licence</Link>
                    <Link to="/">All Versions</Link>
                </div>
                <div>
                    <h4 className="head">Community</h4>
                    <Link to="/">Github</Link>
                    <Link to="/">Issues</Link>
                    <Link to="/">Project</Link>
                    <Link to="/">Twitter</Link>
                </div>
                <div>
                    <h4 className="head">Help</h4>
                    <Link to="/">Support</Link>
                    <Link to="/">TrobuleShooting</Link>
                    <Link to="/">Contact us</Link>
                </div>
                <div>
                    <h4 className="head">Others</h4>
                    <Link to="/">Terms of Services</Link>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Licence</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer;