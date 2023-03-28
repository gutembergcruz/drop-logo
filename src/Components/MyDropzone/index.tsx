import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

import styles from "./box.module.css";

export function MyDropzone(props: any) {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        if (file.type === "image/jpeg") {
          props.changeImage(file);
        } else if (file.type === "image/png") {
          props.changeImage(file);
        } else {
          props.errorUpload();
        }
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={styles.box} {...getRootProps()}>
      <input {...getInputProps()} />
      {props.prev && (
        <div className={styles.prev}>
          <img src={props.imgPrev} alt="" />
        </div>
      )}
      <div className={styles.text}>
        <p className={inter.className}>
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.99 5.99002C12.54 5.99002 12.99 5.54002 12.99 4.99002C12.99 4.44002 12.54 3.99002 11.99 3.99002C11.44 3.99002 10.99 4.44002 10.99 4.99002C10.99 5.54002 11.44 5.99002 11.99 5.99002ZM14.99 0.990021H0.990036C0.440036 0.990021 -0.00996399 1.44002 -0.00996399 1.99002V11.99C-0.00996399 12.54 0.440036 12.99 0.990036 12.99H14.99C15.54 12.99 15.99 12.54 15.99 11.99V1.99002C15.99 1.44002 15.54 0.990021 14.99 0.990021ZM13.99 9.99002L8.99004 6.99002L7.99004 8.99002L4.99004 4.99002L1.99004 9.99002V2.99002H13.99V9.99002Z"
              fill="#495567"
            />
          </svg>
          Organization Logo
        </p>
        <span className={inter.className}>
          Drop the image here or click to browse.
        </span>
      </div>
    </div>
  );
}
