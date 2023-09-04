import React, { useState, useRef } from 'react';
import './LecturerAddAss.css';
import LecNavSideBar from '../../Components/NavigationBar/LecNavSideBar';

export default function LecturerAddAss() {
  const [sidebar, setSidebar] = useState(' ');
  const [pdfFile, setPdfFile] = useState(null);
  const [instructions, setInstructions] = useState('');
  const [uploadedAssignments, setUploadedAssignments] = useState([]);
  const [viewAssignmentIndex, setViewAssignmentIndex] = useState(null);
  const fileInputRef = useRef(null); // Create a ref for the file input

  const showSidebar = () => setSidebar(!sidebar);

  const handleFileUpload = (file) => {
    setPdfFile(file);
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  const handleUploadAssignment = () => {
    if (pdfFile || instructions) {
      const newAssignment = { pdfFile, instructions };
      setUploadedAssignments([...uploadedAssignments, newAssignment]);
      setPdfFile(null);
      setInstructions('');
      fileInputRef.current.value = ''; // Clear the file input value
    }
  };

  const handleViewAssignment = (index) => {
    setViewAssignmentIndex(index);
  };

  const handleDeleteAssignment = (index) => {
    const updatedAssignments = [...uploadedAssignments];
    updatedAssignments.splice(index, 1);
    setUploadedAssignments(updatedAssignments);
    setViewAssignmentIndex(null);
  };

  return (
    <div className={`lecturerdashboard ${sidebar ? 'with-sidebar' : ''}`}>
      <LecNavSideBar sidebar={sidebar} setSidebar={setSidebar} />
      <div>
        <h2>Lecturer Dashboard</h2>

        <div className="lec_add_ass_assignment-form">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            rows="4"
            value={instructions}
            onChange={handleInstructionsChange}
          ></textarea>

          <input
            type="file"
            accept=".pdf"
            ref={fileInputRef}
            onChange={(e) => handleFileUpload(e.target.files[0])}
          />
          {pdfFile && (
            <span className="lec_add_ass_selected-file-name">{pdfFile.name}</span>
          )}
          <button onClick={handleUploadAssignment}>Upload Assignment</button>
        </div>

        <div className="lec_add_ass_assignment-list">
          <h3>Uploaded Assignments:</h3>
          <ul>
            {uploadedAssignments.map((assignment, index) => (
              <li key={index}>
                <button onClick={() => handleViewAssignment(index)}>View</button>
                {assignment.pdfFile && (
                  <span className="lec_add_ass_assignment-file-name">
                    {assignment.pdfFile.name}
                  </span>
                )}
                {assignment.instructions && (
                  <span className="lec_add_ass_assignment-instructions">
                    {assignment.instructions}
                  </span>
                )}
                <button className='upload_button' onClick={() => handleDeleteAssignment(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        {viewAssignmentIndex !== null && (
          <div className="lec_add_ass_view-assignment">
            <h3>Viewing Assignment:</h3>
            {uploadedAssignments[viewAssignmentIndex].pdfFile ? (
              <div className="lec_add_ass_pdf-viewer">
                <p>Uploaded PDF File:</p>
                <p>{uploadedAssignments[viewAssignmentIndex].pdfFile.name}</p>
                {/* Add PDF viewer component here */}
              </div>
            ) : null}
            {uploadedAssignments[viewAssignmentIndex].instructions ? (
              <div className="lec_add_ass_instructions-viewer">
                <p>Instructions:</p>
                <p>{uploadedAssignments[viewAssignmentIndex].instructions}</p>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
