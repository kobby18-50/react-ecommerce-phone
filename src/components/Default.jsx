import { Component } from "react";

class Default extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>
                            the requested url <span className="text-danger text-lowercase">{this.props.location.pathname}</span> was not found
                        </h3>
                        <img src="https://th.bing.com/th/id/OIP.jwGLi5l5MrnK37-9nRCSBgHaD4?w=301&h=180&c=7&r=0&o=5&pid=1.7" alt="" />


                    </div>
                </div>
            </div>
        )
    }
}

export default Default;