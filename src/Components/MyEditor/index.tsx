import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

import styles from "./box.module.css";

export function MyEditor(props: any) {
  const [zoom, setZoom] = useState(1);
  const cropRef = useRef([]);
  
  function handleChangeRange(v: any) {
    setZoom(v);
  }

  const handleSave = async () => {
    if (cropRef) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      props.changePreview(URL.createObjectURL(blob));
    }
  };

  

  return (
    <div className={styles.box}>
      <AvatarEditor
        ref={cropRef}
        image={props.img}
        width={114}
        height={114}
        border={50}
        color={[242, 245, 248, 1]} // RGBA
        scale={zoom}
        rotate={0}
        borderRadius={999}
        className={styles.image}
      />
      <div className={styles.range}>
        <p className={inter.className}>Crop</p>
        <input
          type="range"
          value={zoom}
          step={0.1}
          name="rangeInput"
          min="1"
          max="5"
          onChange={(e: any) => handleChangeRange(e.target.value)}
        />
        <button className={inter.className} onClick={() => handleSave()}>Save</button>
      </div>
      <button className={styles.close} type="button" onClick={() => props.onClose()}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.7625 7L12.875 2.8875C13.1125 2.6625 13.25 2.35 13.25 2C13.25 1.3125 12.6875 0.75 12 0.75C11.65 0.75 11.3375 0.8875 11.1125 1.1125L7 5.2375L2.8875 1.1125C2.6625 0.8875 2.35 0.75 2 0.75C1.3125 0.75 0.75 1.3125 0.75 2C0.75 2.35 0.8875 2.6625 1.1125 2.8875L5.2375 7L1.125 11.1125C0.8875 11.3375 0.75 11.65 0.75 12C0.75 12.6875 1.3125 13.25 2 13.25C2.35 13.25 2.6625 13.1125 2.8875 12.8875L7 8.7625L11.1125 12.875C11.3375 13.1125 11.65 13.25 12 13.25C12.6875 13.25 13.25 12.6875 13.25 12C13.25 11.65 13.1125 11.3375 12.8875 11.1125L8.7625 7Z"
            fill="#677489"
          />
        </svg>
      </button>
    </div>
  );
}
