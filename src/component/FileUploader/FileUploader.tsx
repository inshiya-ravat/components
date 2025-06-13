interface FileUploaderProps {
  accept: string;
  maxSize: number;
  onUpload: (files:HTMLInputElement["files"]) => void;
}
const FileUploader = ({ accept, maxSize, onUpload }: FileUploaderProps) => {
  function validateFileSize(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      if (e.target.files[0].size > maxSize) {
        alert("you are exceeding the limit!");
        e.target.value = ""
      }
      const acceptableTypes = accept.split(",").map((type) => type.trim());
      if(!acceptableTypes.includes("."+e.target.files[0].name.split(".").pop())){
        alert("Can't accept your file. Check the type carefully!")
        e.target.value = ""
      }
      else{
        onUpload(e.target.files);
      }
    }
  }
  return (
    <div>
      <input
        type="file"
        accept={accept}
        onChange={(e) => validateFileSize(e)}
      />
    </div>
  );
};

export default FileUploader;
