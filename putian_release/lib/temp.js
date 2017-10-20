module.exports = React.createClass({
	onClick: function(e) {
		var id = e.target.getAttribute('data-id');
		var handler = this.props.customHandler;
		if (id && handler) {
			handler({
				data: {
					id: id
				},
				eventType: 'click'
			});
		}
	},
	onChange: function(e) {
		var id = e.target.getAttribute('data-id');
		var value = e.target.value;
		var handler = this.props.customHandler;
		if (id && handler) {
			handler({
				data: {
					id: id,
					value: value
				},
				eventType: 'change'
			});
		}
	},
	render: function() {
    	var data = this.props.data.customData;
    	var self = this;
    	var blocks = [];
    	var items = [];
    	var title = '基本信息';
    	data.forEach(function(d, idx) {
    		switch (d.type) {
       			case 'input': {
       				items.push(<li key={'li-' + idx}>
       					<span className='span-left span-key'>{d.key}</span>
       					<span className='span-right'><input data-id={d.id} onChange={self.onChange}/></span>
       					</li>);
       				break;
       			}
       			case 'textarea': {
       				items.push(<li key={'li-' + idx}>
       					<span className='span-key'>{d.key}</span>
       					<textarea data-id={d.id} onChange={self.onChange}></textarea>
       					</li>);
       				break;
       			}
       			case 'button': {
					items.push(<li key={'li-' + idx}>
       					<span className='span-key'>{d.key}</span>
       					<button data-id={d.id} onClick={self.onClick}>{d.text}</button>
       					</li>);
       				break;
       			}
       			case 'text': {
       				items.push(<li key={'li-' + idx}>
       					<span className='span-left span-key'>{d.key}</span>
       					<span className='span-right'>{d.value || ' '}</span>
       					</li>);
       				break;
       			}
       			case 'title': {
       				blocks.push(<div className='div-container' key={'blocks-' + blocks.length}>
       				<span className='span-title'>{title}</span>
					<ul>
						{items}
					</ul>
       				</div>);
       				items = [];
       				title = d.value;
       				break;
       			}
              	case 'subTitle': {
       				items.push(<li key={'li-' + idx}><span className='span-sub-title'>{d.value}</span></li>);
       			}
       		}   
    	});
      	
        return (<div className='outer-container'>
			{blocks}
        </div>);
    }
});