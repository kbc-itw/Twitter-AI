// twitter���W���[����ǂݍ���
var twitter = require('twitter');

// �A�v���o�^���Ɏ擾����key������OAuth�F�؂��A������
var client = new twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

client.stream('user', {},  function(stream) {
    stream.on( 'data', function( data ) {
        var text = data.text; // �c�C�[�g�̃e�L�X�g
        console.log( text );
    });
});