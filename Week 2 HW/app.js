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
    "๐" ,
    "๐" ,
    "๐" ,
    "๐ฅฐ" ,
    "๐" ,
    "๐" ,
    "๐" ,
    "๐คช" ,
    "๐คจ" ,
    "๐" ,
    "๐ฅธ" ,
    "๐คฉ" ,
    "๐ฅณ" ,
    "๐ฅบ" ,
    "๐คฏ" ,
    "๐คฅ" ,
    "๐" , 
    "๐ฉ" ,
];

emojiBtn.onmouseover = () => {
    emojiBtn.innerText = emojis[Math.floor(Math.random() * emojis.length)];

}