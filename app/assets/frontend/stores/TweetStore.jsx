import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetsEventEmitter extends EventEmitter {
	getAll() {
		return _tweets.map( tweet => {
			tweet.formattedDate = moment(tweet.created_at).fromNow();
			return tweet
		});
	} 
	emitChange() {
	  this.emit(CHANGE_EVENT);
	}
	addChangeListener(callback){
	  this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
	  this.removeListener(CHANGE_EVENT, callback);
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
