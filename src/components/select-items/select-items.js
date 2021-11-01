import React, {Component} from 'react';
import './select-items.css'

class SelectItems extends Component {


	handleChange = (e) => {
		this.props.select(this.props.name, e.target.value)
  }

	render() {
		const {name, values} = this.props;
		if (values.lenght === 0) values =[];
		var options ='';
		if (name==='City') {
			options = <select onChange={this.handleChange}>{values.map((value) => { return <option value={value}>{value}</option> })} </select>
		} else {
			  options = <select onChange={this.handleChange}>
					{values.map((value, id) => {
						return <option value={value.id}>{value.name}</option>
					})}
				</select>
		}
		return(
			<>
			<div className='col-auto text'>
				<p>{name}:</p>
			</div>
			<div className='col-auto text'>
				{options}
			</div>
			</>
		)
	}
}
export default SelectItems;