import React from 'react';

class ReviewForm extends React.Component {  
	constructor(props) {
		super(props)
		this.state = {
			myRating: 0
		}

		// this.onClick = this.onClick(this)
	}

	// onClick(event) {
	// 	this.setState()
	// }

	render(){ 
		return (
		    <form onSubmit={ this.props.onSubmit }>
		      <div className="form-group">
		        <textarea
		        name={this.props.description}
		        type="text"
		        className="form-control"
		        />
		      </div>
		      <div className="form-group ratings">
		      	<span value="1" className="glyphicon glyphicon-star" ></span>
		      	<span value="2" className="glyphicon glyphicon-star" ></span>
				<span value="3" className="glyphicon glyphicon-star" ></span>
				<span value="4" className="glyphicon glyphicon-star" ></span>
				<span value="5" className="glyphicon glyphicon-star" ></span>
		      </div>
		      <div className="text-center">
		        <button type="submit" className="btn btn-default">Submit</button>
		      </div>
		    </form>
	  );
	};
}
// //validation
// form.propTypes = {
//   onSubmit: React.PropTypes.func.isRequired,
//   first: React.PropTypes.string,
//   second: React.PropTypes.string,
//   fieldOne: React.PropTypes.string,
//   fieldTwo: React.PropTypes.string,
//   required: React.PropTypes.bool
// };

export default ReviewForm;