import React,{ Component } from 'react';

//const apiUrl="https://evening-headland-35314.herokuapp.com/";

class Register extends Component {
	constructor(props) {
	    super(props);
	    this.state= {
	    	email: '',
	    	password: '',
	    	name: ''
	    }
	}

    onEmailChange = (event) => {
    	this.setState({email : event.target.value})
    	// console.log(this.state.signInEmail)
    }

    onPasswordChange = (event) => {
    	this.setState({password: event.target.value})
    	// console.log(this.state.signInPassword)
    }

    onNameChange = (event) => {
    	this.setState({name: event.target.value})
    	// console.log(this.state.signInPassword)
    }

    onSubmitRegister= (event) => {
	    fetch('https://evening-headland-35314.herokuapp.com/register', {
	    	method: 'post',
	    	headers: {'Content-Type': 'application/json'},
	    	body: JSON.stringify({
	    		email: this.state.email,
	    		password: this.state.password,
	    		name: this.state.name
	    	})
	    })
	      .then(response => response.json())
	      .then(user => {
	      	if(user.id) {
	      		this.props.loadUser(user);
	      		this.props.onRouteChange('home');
	      	}
	      })
    	
    }

    render() {
    	const {onRouteChange}=this.props
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80 w-100 mh2">
				  <div className="measure">
				    <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">Register</legend>
	  			      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
				        <input 
					        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="text" 
					        name="user"  
					        id="user"
					        onChange={this.onNameChange}
				        />
				      </div>	
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address"
					        onChange={this.onEmailChange}
					    />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
					        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        type="password" 
					        name="password"  
					        id="password"
					        onChange={this.onPasswordChange} 
				       	/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input
						onClick={this.onSubmitRegister}
				       	className="b ph3 pv2 br3 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
				    </div>
				  </div>
				</main>
			</article>
		);
	}
}
export default Register;
