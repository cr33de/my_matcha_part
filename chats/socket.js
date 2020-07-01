$(function() {
    var socket = io.connect();
    socket.on('error', function(reason) {
        console.error('Unable to connect Socket.IO', reason)
    });
    socket.on('notif', function(data) {
        alert(data)
        addNotif(data)
    });
    socket.on('message', function(data) {
        if (location.pathname == "/u/" + data.username) {
            addChatMessage(data)
            openChat()
        } else {
            alert("you have received a message from " + data.username)
            addNotif(data.username + " sent u a message")
        }
    });
})
