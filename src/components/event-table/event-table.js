import React, {Component} from 'react';
import EventBlock from '../event-block';


class EventTable extends Component {


	render() {
		const {eventList} = this.props;

		if (eventList.length===0) {
			return (<></>)
		}

		return (
			<div className="row">
				{eventList.map((event, id) => {
					return <>
					<div className="col-auto">
						<EventBlock event={event} addFavourites={this.props.addFavourites} deleteFavourites={this.props.deleteFavourites} favourites = {this.props.favourites}/>
						</div>
					</>
				})}
			</div>
		)
	}
}
export default EventTable;
//{
//	id % 2 === 0 && <div className="col-1"></div>
//}