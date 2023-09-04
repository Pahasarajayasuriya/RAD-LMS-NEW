import React, { useState } from 'react';

export default function FileUpload({ onFileUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Simulate file upload.
      setTimeout(() => {
        onFileUpload(selectedFile); // Send the selected file to the parent component.
        setSelectedFile(null); // Clear the selected file.
      }, 2000); // Simulate a 2-second delay for the upload process.
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf, .mp4"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        ref={(fileInput) => (this.fileInput = fileInput)}
      />
      <button onClick={() => this.fileInput.click()}>Choose File</button>
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
