//Global
import { FC } from "react";

//Types
import { ISVG } from "../../types/types";

export const SVG: FC<ISVG> = ({ id, onClick, width, height }) => {
  switch (id) {
    case "close":
      return (
        <svg
          style={{ cursor: "pointer" }}
          onClick={onClick}
          width={`${width}px`}
          height={`${height}px`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Menu / Close_SM">
            <path
              id="Vector"
              d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case "attention":
      return (
        <svg
          width={`${width}px`}
          height={`${height}px`}
          viewBox="0 0 36 36"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>attention</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="linearGradient-1"
            >
              <stop stopColor="#FFF200" offset="0%"></stop>
              <stop stopColor="#FFE100" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g
            id="icons"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="ui-gambling-website-lined-icnos-casinoshunter"
              transform="translate(-2422.000000, -1903.000000)"
              fillRule="nonzero"
            >
              <g id="4" transform="translate(50.000000, 1871.000000)">
                <g id="attention" transform="translate(2372.000000, 32.000000)">
                  <path
                    d="M18,0 C27.9411255,0 36,8.0588745 36,18 C36,27.9411255 27.9411255,36 18,36 C8.0588745,36 0,27.9411255 0,18 C0,8.0588745 8.0588745,0 18,0 Z"
                    fill="url(#linearGradient-1)"
                  ></path>
                  <path
                    d="M18,10 C18.5522847,10 19,10.4477153 19,11 L19,21 C19,21.5522847 18.5522847,22 18,22 C17.4477153,22 17,21.5522847 17,21 L17,11 C17,10.4477153 17.4477153,10 18,10 Z"
                    id="Rectangle"
                    fill="#1C1C1F"
                  ></path>
                  <path
                    d="M18,24 C18.5522847,24 19,24.4477153 19,25 C19,25.5522847 18.5522847,26 18,26 C17.4477153,26 17,25.5522847 17,25 C17,24.4477153 17.4477153,24 18,24 Z"
                    id="Rectangle-Copy-24"
                    fill="#1C1C1F"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    default:
      return null;
  }
};
