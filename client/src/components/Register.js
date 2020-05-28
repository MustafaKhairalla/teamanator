import React, { Component } from 'react';
import { HeaderStyle, RegisterStyle } from '../style/index.js';
import Header from './Header';

function Register (props) {
	
	  
    const [user, setUser] = React.useState({});

    function handleInputChange(event) {
		const { name, value } = event.target;
		console.log(event.target)
     
        setUser({ ...user, [name]: value })
    };
    const handleFormSubmit = async (e) => {
		e.preventDefault();
		const newUser = await Axios.post("api/users/register", user);
		console.log(newUser) 

  //    props.setState({ userId: token.data})
	}

	
    return (
		<>
		<HeaderStyle>
		<Header />
		</HeaderStyle>
        <RegisterStyle>
            <div id="card-register" className="container contact-register">
	            <div className="row">
		            <div className="col-md-10 col3">
			            <div className="contact-info">
                        <img className="img-register" src="https://img.icons8.com/ios/50/000000/login-rounded-right.png"/>
				            <h3 id="welcome-text">WELCOME, LET'S BEGIN!</h3>
				            <h4>We need some basic information from you...</h4>
			            </div>
			            <div className="contact-form">
				            <div className="form-group">
				            <label className="control-label col-sm-2" for="fname">First Name:</label>
				    <div className="col-sm-10">          
					    <input value={user.firstName} onChange={handleInputChange} name="firstName" type="text" className="form-control" id="fname" placeholder="Enter First Name"  />
				    </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-5" for="lname">Last Name:</label>
				  <div className="col-sm-10">          
					<input value={user.lastName} onChange={handleInputChange}  name="lastName" type="text" className="form-control" id="lname" placeholder="Enter Last Name"></input>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-5" for="email">Email:</label>
				  <div className="col-sm-10">
					<input value={user.email} onChange={handleInputChange} name="email" type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-5" for="password">Password:</label>
				  <div className="col-sm-10">
					<input type="password" className="form-control" id="password" placeholder="Enter password" name="password"></input>
				  </div>
				</div>
				
			</div>
			<div className="form-group">        
				  <div className="col-sm-10">
					<button type="submit" id="register-submit" className="btn btn-default">Submit</button>
				  </div>
				</div>
		            </div>
		            
	</div>
</div>
</RegisterStyle>
</>

    )
}

export default Register;