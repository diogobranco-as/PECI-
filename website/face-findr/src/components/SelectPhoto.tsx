import { ChangeEvent, useRef } from "react";

interface SelectPhotoProps {
  checkFileType: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SelectPhoto = ({ checkFileType }: SelectPhotoProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null); // Specify the type as HTMLInputElement

  const handleSelectPhoto = () => {
    // Clear the selected file by setting the value to an empty string
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // No error now
    }
  };

  return (
    <div className="input-group">
      <input
        type="file"
        className="form-control"
        ref={fileInputRef}
        onChange={checkFileType}
      />
      <button className="btn btn-primary" onClick={handleSelectPhoto}>
        Clear
      </button>
    </div>
  );
};

export default SelectPhoto;
