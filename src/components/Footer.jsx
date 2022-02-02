import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render(){
        return(
                <div className="card text-center">
                    <div className="card-header">
                             Featured
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">Kobby Group of Companies</h5>
                     <p className="card-text">All rights reserved &copy; 2022.</p>
                         <Link to='/'>
                            <span className="btn btn-primary">HOME</span>
                         </Link>
                     </div>
                    <div className="card-footer text-muted">
                        ECOMMERCE APPLICATION
                    </div>
                </div>
        )
    }
}

export default Footer;