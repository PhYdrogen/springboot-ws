const stompClient = new StompJs.Client({
  brokerURL: 'ws://localhost:8080/ws'
});

stompClient.onConnect = (frame) => {
  setConnect(true);
  console.log("Connected: " + frame);
  stompClient.subscribe("/topic/worker", (data) => {
    console.log(data);
    showG(JSON.parse(data.body).content);
  })
}

stompClient.onWebSocketError = (error) => {
  console.error("Error with websocket", error);
}

stompClient.onStompError = (frame) => {
  console.error('Broker reported error: ' + frame.headers['message']);
  console.error('Additional details: ' + frame.body);
}

function setConnect(connected) {
  $("#connect").prop("disabled", connected);
  $("#disconnect").prop("disabled", !connected);
  if (connected) {
    $("#conversation").show();
  } else {
    $("#conversation").hide();
  }
  $("#greetings").html("");
}

function connect() {
  stompClient.activate();
}

function disconnect() {
  stompClient.deactivate();
  setConnect(false);
  console.log("Déco");
}
function sendName() {
  stompClient.publish({
    destination: "/app/test",
    body: JSON.stringify({ 'author': $("#name").val(), 'id': 1 })
  });
}

function showG(message) {
  $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
  $("form").on("submit", (e) => e.preventDefault());
  $("#connect").click(() => connect());
  $("#disconnect").click(() => disconnect());
  $("#send").click(() => sendName());
})