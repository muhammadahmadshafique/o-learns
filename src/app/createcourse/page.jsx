"use client";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { initializeApp } from "firebase/app";
import "../../components/page-specific-styles.css"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import dynamic from "next/dynamic";
// import ReactHtmlParser from "react-html-parser";
import parse from 'html-react-parser';

import { EditorState } from "draft-js";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false, // Ensure the component is not rendered on the server
  }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { FiX } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { ContentState, convertToRaw } from "draft-js";
import { convertToHTML } from "draft-convert";
import DOMPurify from "isomorphic-dompurify";

import Navbar from "../../components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
export default function Page() {
  const [selectedOption, setSelectedOption] = useState("free");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [check, setCheck] = useState(false);

  const _contentState = ContentState.createFromText("Sample content state");
  const raw = convertToRaw(_contentState); // RawDraftContentState JSON
  const [contentState, setContentState] = useState(raw); // ContentState JSON
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  useEffect(() => {
    setCheck(true);
  }, []);

  console.log(convertedContent, "Ahmad", editorState.getCurrentContent());

  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [completedFiles, setCompletedFiles] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [allFilesUploaded, setAllFilesUploaded] = useState(false);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading1, setUploading1] = useState(false);
  const [uploadTask, setUploadTask] = useState(null);
  const [uploadedFileNames, setUploadedFileNames] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyDl9p1tQfFsSDBu5mZmFMGhAgPXmggR-hw",
    authDomain: "olearn-ff2a9.firebaseapp.com",
    projectId: "olearn-ff2a9",
    storageBucket: "olearn-ff2a9.appspot.com",
    messagingSenderId: "1016133874704",
    appId: "1:1016133874704:web:98e2e51e747ffa5e2a0695",
    measurementId: "G-S8HNWEPZ0B",
  };

  initializeApp(firebaseConfig);
  const storage = getStorage();
  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        id: uuidv4(), // Add a unique ID to each file
        preview: URL.createObjectURL(file),
      })
    );
    setFiles((prevFiles) => [
      ...prevFiles,
      ...newFiles.slice(0, 1 - prevFiles.length),
    ]);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedPrice(0); // Reset selected price when option changes
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(parseInt(event.target.value));
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });
  const renderPriceOptions = () => {
    if (selectedOption === "paid") {
      return (
        <select
          id="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedPrice}
          onChange={handlePriceChange}
        >
          <option value={0}>Choose a price</option>
          {Array.from({ length: 51 }, (_, i) => i).map((price) => (
            <option key={price} value={price}>
              ${price}
            </option>
          ))}
        </select>
      );
    } else {
      return null;
    }
  };

  const uploadFiles = async () => {
    try {
      setTotalFiles(files.length);
      setAllFilesUploaded(false);
      setUploading(true);

      const uploadedFilesArray = [];

      for (const file of files) {
        const isAlreadyUploaded = uploadedFiles.some(
          (uploadedFile) => uploadedFile.id === file.id
        );

        if (isAlreadyUploaded) {
          setCompletedFiles((prevCompletedFiles) => prevCompletedFiles + 1);
          continue;
        }

        const folderName = "user-folder";
        const listName = "list-folder";
        const filePath = `${folderName}/${listName}/${file.id}-${file.name}`;
        const storageRef = ref(storage, filePath);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
          const progressPercentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressPercentage);
        });

        await uploadTask;

        const downloadURL = await getDownloadURL(storageRef);
        const uploadedFile = { id: file.id, name: file.name, url: downloadURL };
        uploadedFilesArray.push(uploadedFile);
        // Push the file name to uploadedFileNames array
        setUploadedFileNames((prevFileNames) => [...prevFileNames, file.name]);
        setCompletedFiles((prevCompletedFiles) => prevCompletedFiles + 1);
        if (completedFiles + 1 === totalFiles) {
          setProgress(0);
          setAllFilesUploaded(true);
          console.log("All files uploaded successfully!");

          // Update formData here
          setFormData((prevData) => {
            return {
              ...prevData,
              imageupload: uploadedFilesArray,
            };
          });
        }
      }

      setUploadedFiles((prevFiles) => [...prevFiles, ...uploadedFilesArray]);
    } catch (error) {
      console.error("Error uploading files:", error);
      setProgress(0);
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (file) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));

    setUploadedFiles((prevFiles) => prevFiles.filter((f) => f.id !== file.id));

    const storageRef = ref(
      storage,
      `user-folder/list-folder/${file.id}-${file.name}`
    );
    deleteObject(storageRef)
      .then(() => {
        console.log("File deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting file:", error);
      });
    // Remove file from uploadedFilesArray
    const updatedUploadedFiles = uploadedFiles.filter(
      (uploadedFile) => uploadedFile.id !== file.id
    );

    // Remove file name from uploadedFileNames array
    const updatedUploadedFileNames = uploadedFileNames.filter(
      (fileName) => fileName !== file.name
    );

    setUploadedFiles(updatedUploadedFiles);
    setUploadedFileNames(updatedUploadedFileNames);
  };

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }
  return (
    <div>
      <Navbar />
      <p class="my-4 p-3 w-fit flex px-16 justify-center items-center  mx-auto payoutbutton">
        Create New Course
      </p>
      <div class="lg:w-[50%] mx-auto">
        <div class="flex flex-col w-[90%] mx-auto ">
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title of the course
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Title of the course"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category of the course
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Category of the course"
              required
            />
          </div>
        </div>
        <div class="w-[90%] space-y-4 mx-auto">
          <select
            id="option"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
          {renderPriceOptions()}
          {selectedOption === "paid" && <div>Price: ${selectedPrice}</div>}
        </div>
        <div
          {...getRootProps()}
          className={`dropzone w-[90%] mx-auto my-4 ${
            isDragActive ? "active" : ""
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag n drop up to 10 images here, or click to select files</p>
          )}
        </div>
        {files.length > 0 && (
          <div class="w-[90%] mx-auto">
            <h2>Selected Files:</h2>
            <ul className="image-list">
              {files.map((file) => (
                <li key={file.id}>
                  <div className="image-container">
                    <img src={file.preview} alt={file.name} />
                    <button
                      className="cancel-button"
                      onClick={() => removeFile(file)}
                    >
                      <FiX />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            {!uploading && !allFilesUploaded && (
              <button
                type="button"
                onClick={uploadFiles}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Upload
              </button>
            )}
            {/* ... */}
            {uploading && (
              <div className="">
                <div
                  className="bg-blue-500 text-black p-2 rounded-md"
                  style={{ width: `${progress}%` }}
                >
                  {progress}%
                </div>
              </div>
            )}
            {allFilesUploaded && (
              <div>
                <p>All files uploaded successfully!</p>
              </div>
            )}
          </div>
        )}
        {uploadedFileNames.length > 0 && (
          <div>
            <h2 className="uploadedfiles">Uploaded Files:</h2>
            <ul className="bg-gray-200 p-4 mt-4 rounded">
              {uploadedFileNames.map((fileName) => (
                <li
                  key={fileName}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {fileName}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Draft js */}
        <div className="App w-[90%] mx-auto">
          <p class="my-4 p-3 w-fit flex px-16 justify-center items-center  mx-auto payoutbutton">
            Write Description of course
          </p>{" "}
          {typeof window !== "undefined" && check && (
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
          )}
        </div>
        <div
          className="prose w-[90%] mx-auto mt-6"
          // dangerouslySetInnerHTML={createMarkup(convertedContent)}
        >
          {parse(convertedContent)}
        </div>
        <button class="my-2 p-3 w-fit flex px-16 justify-center items-center mx-auto bg-[#ffd82f]">
          Save and continue
        </button>{" "}
        
      
      </div>
      <Footer />
    </div>
  );
}
