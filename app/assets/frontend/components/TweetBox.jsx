export default class Tweetbox extends React.Component {
	render() {
		return (
			<form>
			  <div className="input field">
			  <textarea className="materialize-textarea"/>
			<label> What's happenning? </label>
			<button className="btn right">Tweet</button>
			</div>
			</form>
		)
	}
}
