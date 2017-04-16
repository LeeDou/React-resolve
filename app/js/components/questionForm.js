var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<form className='clearfix' name='addQuestion'>
						<div className='form-group'>
							<label for='qtitle'>问答</label>
							<input type='text' className='form-control' id='qtitle' placeholder='您的问题是' />
						</div>
						<textarea className='form-control' rows='3' placeholder='问题的描述'></textarea>
						<button className='btn btn-success pull-right'>确认</button>
						<button className='btn btn-success pull-right'>取消</button>
			</form>
			)
	}
});