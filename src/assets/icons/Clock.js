import React from 'react';

function Clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#232632"
        fillRule="evenodd"
        d="M10 18a8 8 0 110-16 8 8 0 010 16zm0-1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm.75-7H14V11H9.25V5h1.5v4.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Clock;
