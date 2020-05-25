import React from 'react';
import '../style/Register.css';

function Register() {
    return (
        <section>
            
            <div id="card-register" className="container contact">
	            <div className="row">
		            <div className="col-md-3">
			            <div className="contact-info">
                        <img src="https://img.icons8.com/ios/50/000000/login-rounded-right.png"/>
				            <h2>WELCOME, LET'S BEGIN!</h2>
				            <h4>We need some basic info from you...</h4>
			            </div>
		            </div>
		            <div className="col-md-9">
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
</section>

    )
};

export default Register;