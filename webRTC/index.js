let localStream;
let remoteStream;
let roomId;
let roomIdData = [];
let peerConnection;

// let mediaRecorder;
// let recordedBlobs;


let configuration = {
    'iceServers': [
      {'urls': 'stun:stun.services.mozilla.com'},
      {'urls': 'stun:stun.l.google.com:19302'},
    ]
  }

//Reference to the Buttons
let openButton = document.getElementById("open");
let createButton = document.getElementById("create");
let joinButton = document.getElementById("join");
let hangupButton = document.getElementById("hangup");
createButton.disabled = true;
joinButton.disabled = true;
hangupButton.disabled = true;


let recordButton = document.getElementById("record");
let stopRecordButton = document.getElementById("stopRecord");



let video = document.querySelector('video#recorded');
let video1 = document.querySelector('video#recorded1');




// Reference to the Video Tags
let localVideo = document.getElementById("localVideo");
let remoteVideo = document.getElementById("remoteVideo");



var videoStream = localVideo.captureStream(30);
var mediaRecorder = new MediaRecorder(videoStream);

var videoStream1 = remoteVideo.captureStream(30);
var mediaRecorder1 = new MediaRecorder(videoStream1);

var chunks = [];
var chunks1 = [];