interface ProcessPhotoProps {
  disabledState: boolean;
}

function ProcessPhoto({ disabledState }: ProcessPhotoProps) {
  const handleProcessPhoto = async () => {
    const fileInput = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    if (fileInput && !disabledState) {
      const formData = new FormData();
      formData.append("image", fileInput.files?.[0] || "");

      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/upload-photo/",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          console.log("Photo uploaded and saved successfully");
          // Add any additional logic here
        } else {
          console.error("Failed to upload and save photo");
        }
      } catch (error) {
        console.error("Error uploading and saving photo:", error);
      }
    }
  };

  return (
    <button
      className="btn btn-primary"
      disabled={disabledState}
      onClick={handleProcessPhoto}
    >
      Process Photo
    </button>
  );
}

export default ProcessPhoto;
