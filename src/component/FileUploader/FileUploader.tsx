import React, { ReactNode } from "react";
import styles from './FileUploader.module.css';

interface FileUploaderProps {
  accept?: string;
  maxSize?: number;
  onUpload?: (files: HTMLInputElement["files"]) => void;
  FileWrapper: React.ComponentType<{ children: React.ReactNode }>;
  inputStyle?: string,
  inputLabel?: ReactNode
}
const FileUploader = ({
  accept,
  maxSize,
  onUpload,
  FileWrapper,
  inputStyle,
  inputLabel
}: FileUploaderProps) => {
  function validateFileSize(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      if (maxSize) {
        if (e.target.files[0].size > maxSize) {
          alert("you are exceeding the limit!");
          e.target.value = "";
        }
      }
      if (accept) {
        const acceptableTypes = accept.split(",").map((type) => type.trim());
        if (
          !acceptableTypes.includes(
            "." + e.target.files[0].name.split(".").pop()
          )
        ) {
          alert("Can't accept your file. Check the type carefully!");
          e.target.value = "";
        } else {
          if (onUpload) onUpload(e.target.files);
        }
      }
    }
  }
  
  return (
    <FileWrapper>
      <input
        type="file"
        id="file"
        className={styles.inputFile}
        accept={accept}
        onChange={(e) => validateFileSize(e)}
      />
      <label htmlFor="file" className={inputStyle}>{inputLabel ? inputLabel : "upload file"}</label>
    </FileWrapper>
  );
};

export default FileUploader;
