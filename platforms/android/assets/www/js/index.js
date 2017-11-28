var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        $(document).ready(function(){
            $('#tabs-swipe-demo').tabs({ 'swipeable': true });
        });
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        $.get('https://forest-home.herokuapp.com/api', function(res){
            console.log(res)
            var ul = $('ul#tabs-swipe-demo');
            var contents = $('#tab-contents');
            ul.empty();
            contents.empty();
            for(var k in res.groups){
                ul.append($('<li>',{class: 'tab col s3'}).append($('<a>',{href:'#'+res.groups[k].id}).text(res.groups[k].title)));
                contents.append($('<div>',{id: res.groups[k].id, class:'col s12 tab-content'})
                    .append($('<div>',{class:'row'})
                        .append($('<div>',{class:'col s12 m7'}).text(res.groups[k].title))
                    )
                )
            }
            $('#tabs-swipe-demo').tabs({ 'swipeable': true });
        })

        console.log('Received Event: ' + id);
    }
};

app.initialize();