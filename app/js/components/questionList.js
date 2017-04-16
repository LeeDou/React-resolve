var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<div id='questions' className=''>
					<div className='media'>
						<div className='media-left'>
							<button className='media-left'>
								<button className='btn btn-default'>
									<span className='glyphicon glyphicon-chevron-up'></span>
									<span className='vote-count'>22</span>
								</button>
								<button className='btn btn-default'>
									<span className='glyphicon glyphicon-chevron-down'>22</span>
								</button>	
							</button>
						</div>
						<div className='media-body'>
							<h4 className='media-heading'>产品经理和程序员的矛盾本质是什么？</h4>
							<p>理性探讨，请勿撕逼。产品经理的主要工作是产品设计，接收来自其他部门的需求。</p>
						</div>
					</div>
					<div className='media'>
						<div className='media-left'>
							<button className='media-left'>
								<button className='btn btn-default'>
									<span className='glyphicon glyphicon-chevron-up'></span>
									<span className='vote-count'>12</span>
								</button>
								<button className='btn btn-default'>
									<span className='glyphicon glyphicon-chevron-down'>22</span>
								</button>	
							</button>
						</div>
						<div className='media-body'>
							<h4 className='media-heading'>产品经理和程序员的矛盾本质是什么？</h4>
							<p>理性探讨，请勿撕逼。产品经理的主要工作是产品设计，接收来自其他部门的需求。</p>
						</div>
					</div>
						
			</div>
			)
	}
});