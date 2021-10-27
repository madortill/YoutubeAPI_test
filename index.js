var iframe = document.querySelector('iframe');
        var player = new Vimeo.Player(iframe);
    
        player.on('play', function() {
            alert('You have played the video')
        });
            player.on('ended', function(){
            alert('Video play completed');
        });
    
        player.getVideoTitle().then(function(title) {
            console.log('title:', title);
        });