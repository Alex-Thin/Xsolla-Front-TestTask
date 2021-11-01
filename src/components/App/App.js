import React, {Component} from 'react';
import './App.css';
import EventService from '../../services/event-service';
import EventTable from '../event-table';
import SelectItems from '../select-items';

class App extends Component {

	eventService = new EventService();

	state = {
		allEventList: [],
		eventList: [],
		City:'Amsterdam',
		Month: '01',
		Favourites: []
	}

	componentDidMount(){
		const favourites = JSON.parse(localStorage.getItem('Favourites'));

		const favs = favourites == null? [] : favourites;
		this.eventService.getEventItems()
		   .then(result => this.setState({
				allEventList: result,
				Favourites: favs
			 }))
	}

	getAllValues(property) {
		const values = [];
		this.state.allEventList.map(item =>
			{
				if (!values.includes(item[property])) {
					values.push(item[property]);
				}
			});
		return values;
	}

	filterEvents = (city, month) => {
		const events = [];
		this.state.allEventList.map(item => {
			if ((item.city===city)&&(item.date.split('.')[1] === this.state.Month)) {
				events.push(item)
			}
		});
		return events;
	}


  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

	addFavourites = (id) => {
		const favourites = this.state.Favourites;
		favourites.push(id);
		this.setState({
			Favourites: favourites
		}, () => {localStorage.setItem('Favourites', JSON.stringify(favourites))})
	}

	deleteFavourites = (id) => {
		const favourites = this.state.Favourites;
		const index = favourites.indexOf(id);
		if (index > -1) {
			favourites.splice(index, 1);
		}
		this.setState({
			Favourites: favourites
		}, () => {localStorage.setItem('Favourites', JSON.stringify(favourites))})
	}


	render () {
		const cities = this.getAllValues('city');
		const months = [{name:'January', id:'01'},{name:'February', id:'02'},{name:'March', id:'03'},{name:'April', id:'04'},{name:'May', id:'05'},{name:'June', id:'06'},{name:'July', id:'07'},{name:'August', id:'08'},{name:'September', id:'09'},{name:'October', id:'10'},{name:'November', id:'11'},{name:'December', id:'12'}];
		const events = cities.length===0? [] : this.filterEvents(this.state.City, this.state.Month);
		return (
			<div className='container'>
				<div className='row align-items-start' style={{marginLeft: '-200px'}}>
					<div className='col'>
						<h1>Event Listing</h1>
						<div className='row'>
							<SelectItems name='City' values = {cities} select={this.handleChange}/>
							<SelectItems name='Month' values = {months} select={this.handleChange}/>
						</div>
							<EventTable eventList = {events} addFavourites={this.addFavourites} deleteFavourites={this.deleteFavourites} favourites = {this.state.Favourites}/>
					</div>
				</div>
			</div>

		);
	}

}

export default App;
