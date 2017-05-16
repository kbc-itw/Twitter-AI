// twitterモジュールを読み込み
var twitter = require('twitter');

// アプリ登録時に取得したkeyを入れてOAuth認証し、初期化
var client = new twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

client.stream('user', {},  function(stream) {
    stream.on( 'data', function( data ) {
        var text = data.text; // ツイートのテキスト
        console.log( text );
    });
});