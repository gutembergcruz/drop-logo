import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

import styles from "./box.module.css";

export function ErrorInput(props: any) {
  return (
    <div className={styles.box}>
      <svg
        width="113"
        height="113"
        viewBox="0 0 113 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="113" height="113" rx="56.5" fill="#C3CBD5" />
        <g clip-path="url(#clip0_0_1)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M56.9875 46.9875C51.4625 46.9875 46.9875 51.4625 46.9875 56.9875C46.9875 62.5125 51.4625 66.9875 56.9875 66.9875C62.5125 66.9875 66.9875 62.5125 66.9875 56.9875C66.9875 51.4625 62.5125 46.9875 56.9875 46.9875ZM58.2375 63.2375H55.7375V60.7375H58.2375V63.2375ZM58.2375 59.4875H55.7375V50.7375H58.2375V59.4875Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_1">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(47 47)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.text}>
        <p className={inter.className}>Sorry, the upload failed.</p>
        <button onClick={() => props.goBack()}>Try again</button>
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
