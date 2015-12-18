import ServerActions from "./actions/ServerActions"

export default {
    getAllTweets() {
      console.log(2, "API.getAllTweets");
      $.get("/tweets")
       .success( rawTweets => ServerActions.receivedTweets(rawTweets))
       .error( e => console.log(e));
    },
    createTweet(body) {
	  $.post("/tweets", { body })
	  .success( rawTweet => SearchActions.receivedOneTweet(rawTweet) )
	  .error( e => console.log(e));
    }
}
