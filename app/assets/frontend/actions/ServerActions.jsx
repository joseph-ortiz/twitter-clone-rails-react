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
	},
	receivedOneTweet(rawTweet) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECIEVED_ONE_TWEET,
			rawTweet
		});
	},
	receivedUsers(rawUsers){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_USERS,
			rawUsers	
		}); 
	},
	receivedOneFollower(rawFollower){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
			rawFollower
		}); 

	}
}
