const recordButtonFunc = async () => {
    try {
        mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
          };
          recordButton.disabled = true;
          mediaRecorder.start();

          //remote Stream
          mediaRecorder1.ondataavailable = function(e) {
            chunks1.push(e.data);
          };                   
          mediaRecorder1.start();


    } catch (error) {
        console.log(error)
    }
 }

 

