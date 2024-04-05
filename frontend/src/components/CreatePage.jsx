import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { storage } from "../utils/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useDispatch } from "react-redux";
import { postCreation } from "../../features/post/postSlice";
/*
THIS COMPONENT SOULD BE PROTECTED 
in the server side too
*/

export default function CreatePost() {
  const [done, setDone] = useState(false);
  const [post, setPost] = useState({});
  const [files, setFiles] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const dispatch = useDispatch();
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const handleInputs = (e) => {
    setPost((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(post);
  };
  const uploadingToFireBase = async (files) => {
    if (!files) return;
    // const storageRef = ref(storage, `files/${files.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, files);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     console.log("progress ", progress);
    //     setProgresspercent(progress);
    //   },
    //   (error) => {
    //     alert(error);
    //   },
    //   async() => {
    //     await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       console.log("image url",downloadURL);
    //       setPost((prev) => {
    //         return { ...prev, imgUrl: downloadURL };
    //       });
    //     });
    //   }
    // );await
    const storageRef = ref(storage, `/images/${files.name}`);
    const response = await uploadBytesResumable(storageRef, files);
    const url = await getDownloadURL(response.ref);
    setPost((prev) => {
      {
        return { ...prev, imgUrl: url };
      }
    });
    setDone(true);
  };
  const dispatchFiles = async (e) => {
    e.preventDefault();
    console.log("all the data in the dispatch funtion", post);
    dispatch(postCreation(post))
  };
  const handleSubmit = async (e) => {
    console.log("button clicked");
    e.preventDefault();
    uploadingToFireBase(files);
  };
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => handleInputs(e)}
        />
        <input
          type="text"
          name="summary"
          placeholder="Summary"
          onChange={(e) => handleInputs(e)}
        />
        <input
          type="file"
          name="postPic"
          onChange={(e) => {
            setFiles(e.target.files[0]);
          }}
        />
        <ReactQuill
          modules={modules}
          formats={formats}
          onChange={(newValue) =>
            setPost((prev) => {
              return { ...prev, content: newValue };
            })
          }
        />
        {done ? (
          <>
            <button
              className="bg-red-500"
              onClick={(e) => {
                dispatchFiles(e);
              }}
            >
              Upload
            </button>
            
          </>
        ) : (
          <>
            <button
              className="bg-red-500"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </button>
          </>
        )}
        {/* will add a progress bar to this */}
        {/* {!imgUrl && (
          <div className="outerbar">
            <div className="innerbar" style={{ width: `${progresspercent}%` }}>
              {progresspercent}%
            </div>
          </div>
        )} */}
      </form>
    </>
  );
}
