import React, { Component } from 'react';
import { RegisterStyle } from '../style/index.js';

class Register extends Component {
	render() {
    return (
        <RegisterStyle>
            
            <div id="card-register" className="container contact-register">
	            <div className="row">
		            <div className="col-md-3 col3">
			            <div className="contact-info">
                        <img className="img-register" src="https://img.icons8.com/ios/50/000000/login-rounded-right.png"/>
				            <h3 id="welcome-text">WELCOME, LET'S BEGIN!</h3>
				            <h4>We need some basic info from you...</h4>
			            </div>
		            </div>
		            <div className="col-md-9 col9">
			            <div className="contact-form">
				            <div className="form-group">
				            <label className="control-label col-sm-2" for="fname">First Name:</label>
				    <div className="col-sm-10">          
					    <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
				    </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="lname">Last Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"></input>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="email">Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>
</RegisterStyle>

    )
};
}

export default Register;