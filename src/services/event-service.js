export default class EventService {

	getEventItems = async () => {
		const response = await fetch('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json')
		const result = await response.json();
		return result;
	}
}