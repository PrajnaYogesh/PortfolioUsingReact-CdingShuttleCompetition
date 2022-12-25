import React from "react";
import "./Resume.css";
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';


 function Resume() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('PrajnaYogeshResume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Prajna_Resume.pdf';
            alink.click();
        })
    })
  }
  return (
    <>
            <center className="resume-section">
                <h1>Download Resume here</h1>
                <h3>Click on below button to download PDF file</h3>
                   <Button className="button-style" type="primary" icon={<DownloadOutlined />} onClick={onButtonClick}>
            Download
          </Button>


            </center>
        </>
  );
}

export default Resume;
