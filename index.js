new YT.Player("yt_element", {
    videoId: your_video_id,
    events: {
        'onStateChange': function(event){
            if(event.data == YT.PlayerState.ENDED){
                alert("tali");
            }
        }
    }
});
