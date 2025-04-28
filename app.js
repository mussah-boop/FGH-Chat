```javascript
function sendMessage() {
    var chatBox = document.getElementById("chat-box");
    var messageInput = document.getElementById("message");
    var message = messageInput.value;

    if (message.trim() !== "") {
        var newMessage = document.createElement("div");
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        messageInput.value = ""; // Clear input after sending
        chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll down
    }
}
