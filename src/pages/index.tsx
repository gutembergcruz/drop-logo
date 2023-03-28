import { useState } from "react";
import { ErrorInput } from "../Components/ErrorInput";
import { MyDropzone } from "../Components/MyDropzone";
import { MyEditor } from "../Components/MyEditor";

import styles from "./styles.module.css";

export default function Home() {
  const [image, setImage] = useState("");
  const [step, setStep] = useState(1);
  const [preview, setPreview] = useState("");

  function handleClose() {
    if (preview === "") {
      setStep(1);
    } else {
      setStep(3);
    }
  }

  return (
    <section className={styles.box}>
      {step === 1 && (
        <MyDropzone
          changeImage={(v: any) => {
            setImage(v);
            setStep(2);
          }}
          errorUpload={() => setStep(4)}
        />
      )}
      {step === 2 && (
        <MyEditor
          onClose={() => handleClose()}
          img={image}
          changePreview={(v: any) => {
            setPreview(v);
            setStep(3);
          }}
        />
      )}
      {step === 3 && (
        <MyDropzone
          imgPrev={preview}
          prev={true}
          changeImage={(v: any) => {
            setImage(v);
            setStep(2);
          }}
          errorUpload={() => setStep(4)}
        />
      )}

      {step === 4 && <ErrorInput goBack={() => handleClose()} onClose={() => handleClose()} />}
    </section>
  );
}
