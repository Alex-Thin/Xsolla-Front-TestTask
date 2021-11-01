import React, {Component} from "react";
import './event-block.css';
class EventBlock extends Component {

	state = {
		favourite: false
	}

	componentDidMount() {
		const favs = this.props.favourites;
		if (favs.includes(this.props.event.id)) {
			this.setState({
				favourite: true
			})
		}
	}

	toggleFavourites = () => {
		if (this.state.favourite===false) {
			this.props.addFavourites(this.props.event.id)
		}else {
			this.props.deleteFavourites(this.props.event.id)
		}
		this.setState({
			favourite: !this.state.favourite
		})
	}

	render() {
		const event = this.props.event;
		if (!event) {
			return (<></>)

		}

		const icon = this.state.favourite? <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
		<path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
	</svg></> : <><svg  width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></>;

		const date = event.date.split('.');
		return(
			<div className='block' style={{background: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("+event.image+")"}} >
				<div className='date'>
					<div className='date-text'>
						{date[0]}
					</div>
				</div>
				<div className='name'>{event.name}</div>
				<button type='button' className='icon' onClick={this.toggleFavourites}>
					{icon}
				</button>
			</div>


		)
	}
}
export default EventBlock;

