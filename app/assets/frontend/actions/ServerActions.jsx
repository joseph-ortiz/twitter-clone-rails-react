import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"
export default {
	receivedTweets(rawTweets){
		console.log(3,"ServerActions.receivedTweets");
		console.log(ActionTypes.RECIEVED_TWEETS);
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECIEVED_TWEETS,
			rawTweets
		}); 
	}
}
