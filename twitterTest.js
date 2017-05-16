

var twitter = require('twitter');
var util = require('util');

var client = new twitter({
    consumer_key:        '',
    consumer_secret:     '',
    access_token_key:    '
    access_token_secret: '',
	//request_url = 'https://api.twitter.com/1.1/statuses/user_timeline.json' ;		// エンドポイント
	//request_method = 'GET' ;

});


//var params = {screen_name: 'nodejs'};

/*
client.post('statuses/update',
        {status: 'あさかかす (このツイートはテストです)'},
        function(error, tweet, response) {
        if (!error) {
            console.log(tweet)
        }
        });

		*/
		/*
client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;

  console.log(tweets);  // The favorites. 

 // console.log(response);  // Raw response object. 
});*/

client.get('/statuses/user_timeline.json', function(error,tweets,response) {
    console.log(util.inspect(tweets));
	// console.log(data);
});