import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";

let _tweets = [];

class TweetsEventEmitter extends AppEventEmitter {
	getAll() {
		return _tweets.map( tweet => {
			tweet.formattedDate = moment(tweet.created_at).fromNow();
			return tweet
		});
	} 
}

let TweetStore = new TweetsEventEmitter();

AppDispatcher.register( action =>  {
	switch(action.actionType){
		case ActionTypes.RECIEVED_TWEETS:
			console.log(4, "TweetStore");
			_tweets = action.rawTweets;
			TweetStore.emitChange();
			break;
		default:
			console.log(4, "Could not recognize actiontype of: " + action.actionTypee);
				    break;
			
  }
});

export default  TweetStore;
