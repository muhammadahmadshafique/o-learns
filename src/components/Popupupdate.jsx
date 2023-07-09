"use client";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { FiX } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

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
const Popup = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [lessonFile, setLessonFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [localVideo, setLocalVideo] = useState(null);
  const [uploadTask, setUploadTask] = useState(null);
  const [uploading1, setUploading1] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState("");
  const [videoupload, setvideoupload] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setLessonFile(file);
  };

  const handleSave = () => {
    // Perform save action here
    console.log("Title:", title);
    console.log("Lesson File:", lessonFile);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };
  const handleLocalVideoChange = (e) => {
    const file = e.target.files[0];
    setLocalVideo(file);
  };

  const handleLocalVideoUpload = async () => {
    if (localVideo) {
      try {
        const storageRef = ref(storage, `videos/${localVideo.name}`);
        const uploadTask = uploadBytesResumable(storageRef, localVideo);
        setUploadTask(uploadTask);
        setUploading1(true);

        uploadTask.on("state_changed", (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        });

        await uploadTask;

        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUploadedVideoUrl(downloadURL);
        setvideoupload(downloadURL);

        console.log("Video uploaded successfully!", videoupload);
      } catch (error) {
        console.error("Error uploading video:", error);
      } finally {
        setUploading1(false);
        setUploadProgress(0);
      }
    }
  };

  const handleCancelUpload = async () => {
    if (uploadTask) {
      await uploadTask.cancel();
      setUploadProgress(0);
      setUploading1(false);
      setUploadTask(null);
      console.log("Video upload canceled!");
    }
  };
  const handleRemoveUploadedVideo = async () => {
    if (uploadedVideoUrl) {
      const storageRef = ref(storage, `videos/${localVideo.name}`);
      await deleteObject(storageRef);
      setUploadedVideoUrl("");
      console.log("Video removed from Firebase Storage!");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-white overflow-y-scroll rounded-lg shadow-lg p-6 w-96 popup-overlay">
        <h2 className="text-xl font-bold mb-4">Create a Lesson</h2>
        <div className="mb-4">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>

          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description of lesson
          </label>
          <textarea
            className="border-gray-300 rounded-md w-full px-3 py-2"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">
            Upload Video from Local Computer
          </h2>
          <input
            type="file"
            onChange={handleLocalVideoChange}
            className="border rounded px-2 py-1 w-full"
          />
          {!uploading1 && (
            <button
              onClick={handleLocalVideoUpload}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-2"
            >
              Upload
            </button>
          )}
          {uploading1 && (
            <div className="relative w-full bg-gray-200 rounded mt-2">
              <div
                className="bg-blue-500 text-black p-2 rounded-md absolute left-0 top-0 h-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <div className="flex items-center justify-center py-2">
                <div className="text-black z-50 ">{`${uploadProgress.toFixed(
                  0
                )}%`}</div>
              </div>
              <button
                onClick={handleCancelUpload}
                className="absolute right-0 top-0 p-2"
              >
                <FaTimes className="text-red-500 " />
              </button>
            </div>
          )}
          {uploadedVideoUrl && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Uploaded Video</h2>

              <div className="relative">
                <video width="400" controls>
                  <source src={uploadedVideoUrl} type="video/mp4" />
                </video>
                <button
                  onClick={handleRemoveUploadedVideo}
                  className="absolute  top-0 p-2"
                >
                  <FaTimes className="text-red-500" />
                </button>
              </div>
            </div>
          )}
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Preview
          </span>
        </label>
        <div className="mb-4">
          <progress className="w-full" value={progress} max="100"></progress>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg mr-2"
            onClick={handleSave}
          >
            Update
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
