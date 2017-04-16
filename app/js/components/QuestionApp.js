var React = require('react');
var ShowAddButton = require('./showAddButton.js');
var questionForm = require('./questionForm.js');
var questionList = require('./questionList.js');
module.exports = React.createClass({
	render :function(){
		return (
			<div>
				<div className='jumbotron text-center'>
					<div className='container'>
						<h1>问答</h1>
						<ShowAddButton />
					</div>
				</div>
				<div className='main container'>
					<questionForm />
					<questionList />
				</div>
			</div>	
			)
	}
});