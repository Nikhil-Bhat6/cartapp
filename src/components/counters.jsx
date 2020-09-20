import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		const {onReset,onDelete,onIncrement,counters} = this.props;
		return (
		<div>
			<button 
			className= "button btn-primary btn-sm m-2"
			onClick={onReset}
			>Reset
			</button>
			{this.props.counters.map(counter => (
				 <Counter 
				 	key={counter.id} 
				 	onDelete={onDelete}
				 	counter = {counter}
				 	onIncrement = {onIncrement}
				 />
			))}
		</div>
		);
	}
}

export default Counters;