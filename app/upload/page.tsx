"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicID, setPublicID] = useState("");

  return (
    <>
    {publicID && 
    <CldImage src={publicID} width={300} height={300} alt="squidward"/>}
      <CldUploadWidget
      options={{
        sources: ['local'],
        multiple: false,
        maxFiles: 5,
        styles: {
            
        }
      }}
        uploadPreset="fnvsl2br"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicID(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
