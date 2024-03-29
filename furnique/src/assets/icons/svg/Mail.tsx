import React from "react";
import styles from "../icon.module.scss";

const Mail = () => {
  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M17.5 2.12701C19.125 2.28701 20.22 2.64801 21.035 3.46501C22.5 4.92901 22.5 7.28601 22.5 12C22.5 16.714 22.5 19.071 21.035 20.536C19.572 22 17.214 22 12.5 22C7.786 22 5.429 22 3.964 20.536C2.5 19.07 2.5 16.714 2.5 12C2.5 7.28601 2.5 4.93001 3.964 3.46501C4.781 2.64801 5.874 2.28701 7.5 2.12701"
        stroke="CurrentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5 10V2M12.5 2L15.5 5M12.5 2L9.5 5"
        stroke="CurrentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 13H5.66C6.565 13 7.018 13 7.416 13.183C7.814 13.366 8.108 13.71 8.697 14.397L9.303 15.103C9.892 15.79 10.186 16.134 10.584 16.317C10.982 16.5 11.434 16.5 12.34 16.5H12.66C13.565 16.5 14.018 16.5 14.416 16.317C14.814 16.134 15.108 15.79 15.697 15.103L16.303 14.397C16.892 13.71 17.186 13.366 17.584 13.183C17.982 13 18.434 13 19.34 13H22.5"
        stroke="CurrentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Mail;
