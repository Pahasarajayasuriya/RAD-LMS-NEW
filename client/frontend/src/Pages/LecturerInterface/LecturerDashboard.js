import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './LecturerDashboard.css';
import LecNavSideBar from '../../Components/NavigationBar/LecNavSideBar';

export default function LecturerDashboard() {
  const [sidebar, setSidebar] = useState(' ');
  const [uploadStatus, setUploadStatus] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const showSidebar = () => setSidebar(!sidebar);

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    setUploadStatus(null);
    if (file) {
      setUploadStatus(`Selected File: ${file.name}`);
    } else {
      setUploadStatus('Please select a file to upload.');
    }
  };

  const handleUpload = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      setTimeout(() => {
        setUploadedFiles([...uploadedFiles, file]);
        setUploadStatus('File uploaded successfully!');
        fileInputRef.current.value = null; 
        setTimeout(() => {
          setUploadStatus(null); 
        }, 3000); 
      }, 2000); 
    } else {
      setUploadStatus('Please select a file to upload.');
    }
  };

  const handleDelete = (file) => {
    const updatedFiles = uploadedFiles.filter((uploadedFile) => uploadedFile !== file);
    setUploadedFiles(updatedFiles);
  };

  return (
    <div className={`lecturerdashboard ${sidebar ? 'with-sidebar' : ''}`}>
      <LecNavSideBar sidebar={sidebar} setSidebar={setSidebar} />
      <div>
        <h2>Lecturer Dashboard</h2>
        <Card className="lec_dash_upload-card">
          <Card.Body>
            <input
              type="file"
              accept=".pdf, .mp4"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <Button variant="primary" onClick={handleUpload}>
              Upload
            </Button>
            {uploadStatus && <p>{uploadStatus}</p>}
          </Card.Body>
        </Card>

        <div className="lec_dash_uploaded-files">
          <h3>Uploaded Materials</h3>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                {file.name}{' '}
                <Button variant="danger" onClick={() => handleDelete(file)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
