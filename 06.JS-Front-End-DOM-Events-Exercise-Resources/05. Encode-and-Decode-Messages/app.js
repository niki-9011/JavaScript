function encodeAndDecodeMessages() {
  let messageText = document.getElementsByTagName("textarea")[0];
  let buttonEncode = document.getElementsByTagName("button")[0];
  let receivedMessage = document.getElementsByTagName("textarea")[1];
  let buttonDecode = document.getElementsByTagName("button")[1];

  buttonEncode.addEventListener("click", encode);
  buttonDecode.addEventListener("click", decode);

  function encode() {
    let textEncode = "";
    message = messageText.value;
    for (let index = 0; index < message.length; index++) {
      textEncode += String.fromCharCode(message.charCodeAt(index) + 1);
    }
    receivedMessage.value = textEncode;
    messageText.value = "";
    buttonDecode.disabled = false;
  }
  function decode() {
    let textDecode = "";
    messageDecode = receivedMessage.value;
    for (let index = 0; index < messageDecode.length; index++) {
      textDecode += String.fromCharCode(messageDecode.charCodeAt(index) - 1);
      receivedMessage.value = textDecode;
      buttonDecode.disabled = true;
    }
  }
}
