const stopRecordButtonFunc = async () => {
    try {
      mediaRecorder.onstop = function(e) {
        var blob = new Blob(chunks, { 'type' : 'video/mp4' });
        chunks = [];
        var videoURL = URL.createObjectURL(blob);
        video.src = videoURL;
      };
      mediaRecorder.stop();

      //remote One
      mediaRecorder1.onstop = function(e) {
        var blob1 = new Blob(chunks1, { 'type' : 'video/mp4' });
        chunks1 = [];
        var videoURL1 = URL.createObjectURL(blob1);
        video1.src = videoURL1;
      };
      mediaRecorder1.stop();

      recordButton.disabled = false;

    } catch (error) {
        console.log(error)
    }
 }

 