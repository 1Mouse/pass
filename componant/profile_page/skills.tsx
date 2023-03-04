import { Props } from "next/script";
import React from "react";


const Skill = ({ name }: Props) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                width: "180px",
                padding: "10px 0",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "cyan",
                borderRadius: "6px",
                paddingLeft: "5px",
              }}
            >
              {name}
    
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ color: "blue", width: "20px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </>
        );
      };
      export default Skill;
