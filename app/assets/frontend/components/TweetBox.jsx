import TweetActions from "../actions/TweetActions";

export default class Tweetbox extends React.Component {
  sendTweet(event){
	TweetActions.sendTweet(this.refs.tweetTextArea.value);
	}
	render() {
		return (
		<div className="row">
		<form onSubmit={this.sendTweet.bind(this)}>
		  <div className="input field">
		  <textarea ref="tweetTextArea" className="materialize-textarea"/>
		<label> What's happenning? </label>
		<button type="submit" className="btn right">Tweet</button>
			</div>
			</form>
			</div>
		)
	}
}
