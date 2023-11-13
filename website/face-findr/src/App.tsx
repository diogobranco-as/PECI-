import { useState, ChangeEvent } from "react";
import Alert from "./components/PhotoAlert";
import ProcessPhoto from "./components/ProcessPhoto";
import SelectPhoto from "./components/SelectPhoto";
import Photo from "./components/Photo";

function App() {
  const [fileType, setFileType] = useState(""); // State to track file type

  // Function to check the file type
  const checkFileType = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]; // Check if files exist
    if (file && file.type !== "image/jpeg") {
      setFileType(file.type); // Set the file type
    } else {
      setFileType(""); // Reset file type if valid
    }
  };

  return (
    <>
      {fileType &&
        fileType !== "image/jpeg" && ( // Show the alert for invalid file types
          <div className="alert alert-danger">
            <Alert>Wrong type of file selected</Alert>
          </div>
        )}
      <Photo />
      <SelectPhoto checkFileType={checkFileType} />
      <ProcessPhoto disabledState={fileType !== ""} />
    </>
  );
}

export default App;
