import React, { useState, useRef, useEffect } from 'react';

export const CameraCapture = () => {
  const [image, setImage] = useState(null); // Store the captured image
  const [isCameraActive, setIsCameraActive] = useState(false); // Manage camera state (active or not)
  const videoRef = useRef(null); // Reference to the video element
  const canvasRef = useRef(null); // Reference to the canvas element for capturing image

  
  useEffect(() => {
    let stream;

    const getCamera = async () => {
      try {
      
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Error accessing the camera: ", err);
      }
    };

    if (isCameraActive) {
      getCamera();
    } else {
    
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    }

    
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isCameraActive]);

  
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const capturedImage = canvas.toDataURL('image/png'); 
    setImage(capturedImage); 
    setIsCameraActive(false); 


    console.log('Captured Image URL:', capturedImage);
  };

  return (
    <div style={{ textAlign: 'center' ,width:'100%' }}>
    
    
      {isCameraActive ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
              width: '100%',
              height:'100vh',// Full screen on desktop and mobile
              objectFit: 'cover',
              position: 'absolute', // Position video as background
              top: 0,
              left: 0
            }}
          />
         
         
          <button
            onClick={captureImage}
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '10px 20px',
              fontSize: '18px',
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Capture Photo
          </button>
        </>
      ) : (
       
        <button
          onClick={() => setIsCameraActive(true)}
          style={{
            padding: '15px 30px',
            fontSize: '20px',
            background: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
          }}
        >
          Open Camera
        </button>
      )}

    
      <canvas ref={canvasRef} style={{ display: 'none' }} width={640} height={480} />

      {image && (
        <div style={{ marginTop: '20px' }}>
          <h3>Captured Image:</h3>
          <img src={image} alt="Captured" style={{ maxWidth: '100%' }} />
        
        </div>
      )}
    </div>
  );
};


// const camera=()=>{
//   const [image, setImage] = useState(null); 
//   const [isCameraActive, setIsCameraActive] = useState(false); 
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null); 
 
//     return(
//         <button onClick={cameraactive}>button</button>
//     )
// }
// const cameraloguic=()=>{

// }

// const rendercamera=()=>{
//     return(
//         <div>
//         {isCameraActive&&<div></div>}
//         </div>
//     )
// }

