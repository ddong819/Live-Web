var socket = io.connect();
			
			socket.on('connect', function() {
				console.log("Connected");
			});

			// Receive from any event
			socket.on('chatmessage', function (data) {
				console.log(data);
				document.getElementById('typename').innerHTML = "" + data + 
 + "" + document.getElementById('typename').innerHTML;
			});
			
			var sendmessage = function(message) {
				console.log("chatmessage: " + message);
				socket.emit('chatmessage', message);
			};



const emojiBtn = document.getElementById('emoji-btn');

const emojis = [
    "😍" ,
    "😘" ,
    "😗" ,
    "🥰" ,
    "😋" ,
    "😛" ,
    "😝" ,
    "🤪" ,
    "🤨" ,
    "😎" ,
    "🥸" ,
    "🤩" ,
    "🥳" ,
    "🥺" ,
    "🤯" ,
    "🤥" ,
    "🙄" , 
    "💩" ,
];

emojiBtn.onmouseover = () => {
    emojiBtn.innerText = emojis[Math.floor(Math.random() * emojis.length)];

}