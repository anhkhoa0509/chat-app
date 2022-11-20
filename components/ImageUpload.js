import { openUploadWidget } from "../utils/CloudinaryService";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../config/firebase'
import PhotoIcon from '@mui/icons-material/Photo';
import MovieIcon from '@mui/icons-material/Movie';
import {
    addDoc,
    deleteDoc,
    deleteField,
    updateDoc,
    collection,
    doc,
    serverTimestamp,
    setDoc
} from 'firebase/firestore'
import {
    convertFirestoreTimestampToString,
    generateQueryGetMessages,
    transformMessage
} from '../utils/getMessagesInConversation'
import { useRouter } from 'next/router'
import {
    KeyboardEventHandler,
    MouseEventHandler,
    useRef,
    useState
} from 'react'


const ImageUpload = (props) => {
    const [loggedInUser, _loading, _error] = useAuthState(auth)
    const router = useRouter()

    const conversationId = router.query.id // localhost:3000/conversations/:id

    const queryGetMessages = generateQueryGetMessages(conversationId)

    const endOfMessagesRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const addMessageToDbAndUpdateLastSeen = async (newMessage) => {
        // update last seen in 'users' collection
            console.log('newMessage',newMessage)
       let video = newMessage.indexOf("mp4") != -1 || newMessage.indexOf("mkv") != -1  ? true: false
        if(video){
            await addDoc(collection(db, 'messages'), {
                conversation_id: conversationId,
                sent_at: serverTimestamp(),
                media: newMessage,
                user: loggedInUser?.email,
            })
        }
        else{
            await addDoc(collection(db, 'messages'), {
                conversation_id: conversationId,
                sent_at: serverTimestamp(),
                url: newMessage,
                user: loggedInUser?.email,
            })
        }

        // reset input field

        // scroll to bottom
        scrollToBottom()
    }
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: props.cloud_name,
        uploadPreset: props.upload_preset,
      },
      function (error, result) {
        console.log('result',result)
        if (!error && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info.url);
        result.info.url && addMessageToDbAndUpdateLastSeen(result.info.url.toString());
          props.onImageUpload(result.info.public_id);
        }
      }
    );
    myUploadWidget.open();
  };
 

  return (
    <>
    <PhotoIcon onClick={uploadImageWidget}/>
    <MovieIcon onClick={uploadImageWidget} /> 
    </>
   
  );
};

export default ImageUpload;
