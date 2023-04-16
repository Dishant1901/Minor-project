import React,{useState} from 'react';
import axios from 'axios';

const UploadAudio = () => {
    const [file,setFile] =useState(null);
    
    // function to handle  input change of our form where we'll take .WAV file as input
    const handleFileChange =(e)=>{
        setFile(e.target.files[0]);
    };

    // function to upload .WAV file
    const handleUpload = async ()=> {
        const formData = new FormData();
        formData.append('audio',file);

        try {
            const res =await axios.post('http://localhost:5000/upload-audio',formData);
            console.log(res.data);
        } catch (err)  {
            console.error(err);
        }
    };

    // function to get uploaded .WAV file
    // const handleGet = async()=>{
    //     try{
    //         const res=await axios.get('/audio');
    //         console.log(res.data);
    //     }
    //     catch (err){
    //         console.error(err);
    //     }
    // };


  return (
    <div>
        <div className='' >
            <h2 className='text-5xl'>Upload the audio file</h2>
            <form action="/upload-audio" method="POST" encType="multipart/form-data" >

            <input type="file" onChange={handleFileChange} />
            <div className=' flex gap-8  text-[#009fda]'>
            <button type="submit" name="audio" className=' border px-4 rounded-3xl bg-[#125abc] font-bold ' onClick={handleUpload}>Upload</button>
            {/* <button className='border px-4 rounded-3xl  font-bold' onClick={handleGet}>Get Audio</button> */}
            </div>
            </form>

        </div>
    </div>
  )
}

export default UploadAudio;