import React, { useState } from 'react'

export const QrCode = () => {
  const [img,setImg]=useState("");
  const [loading,setLoading]=useState(false);
  const [qrData,setQrData]=useState("https://www.linkedin.com/in/kalaiselvi-s/");
  const [qrSize,setQrSize]=useState("150");

  function generateQR() {
     setLoading(true);
     try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&&data=${encodeURIComponent(qrData)}`;
      setImg(url);
     }catch(error){
      console.error("Error generating QR code",error);
     }finally{
      setLoading(false);
     }
   }
   function downloadQR() {
    fetch(img)
    .then((response)=>response.blob())
    .then((blob)=>{
      const link=document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download="qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) =>{
      console.error("Error downloading QR code",error);
    });
   }

  return (
    <>
        <div className='app-container'>
            <h1>QR CODE GENERATOR</h1>
            {loading&&<p>Please wait....</p>}
            {img&&<img src={img} alt="" className='qr-code-image'/>}
           
           
            <div >
                <label htmlFor="dataInput" className='input-label'>Data for QR code:</label>
                <input type="text" id="dtaInput" value={qrData} onChange={(e)=>setQrData(e.target.value)} className='Generate-Input' placeholder='Enter the data for QR code'/>
                <label htmlFor="sizeInput" className='input-label'>Image size (eg., 150):</label>
                <input type="text" id='sizeInput' value={qrSize} onChange={(e) => setQrSize (e.target.value)} placeholder='Enter Image Size'/>
                <button className='Generate-button' disabled={loading} onClick={generateQR}>Generate QR Code</button>
                <button className='Download-button'onClick={downloadQR}>Download QR Code</button>
            </div>
            <p>Designed By <a href="https://www.linkedin.com/in/kalaiselvi-s-8b827b29b/">Kalaiselvi</a></p>
        </div>
    </>
  )
}
