import { useState } from "react"
import FileUploader from "../FileUploader/FileUploader"
import avatar from '../../assets/avatar.svg';
import plus from '../../assets/plus.svg';
import styles from './Avatar.module.css';
import OfflineHOC from "../../DesignPattens/HOC/OfflineHOC";

const Avatar = () => {
    const [profile,setProfile] = useState(avatar)
    function handleUpload(files:FileList | null){
        if(files){
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setProfile(reader.result as string);
            }
        }
    }
  return (
    <FileUploader 
        FileWrapper={({children})=><button className={styles.avatarBtn}>{children}<img className={styles.plus} src={plus} alt="plus"/></button>}
        accept=".jpeg,.jpg,.png"
        onUpload={(files)=>handleUpload(files)}
        inputLabel={<img src={profile} className={styles.avatar} alt="profile picture"/>}
    />
  )
}

const OfflineAvatar = OfflineHOC(Avatar);
export default OfflineAvatar;

