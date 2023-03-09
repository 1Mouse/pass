import React, { useState } from "react";
import "../choose/choose.module.scss";

type Option = {
  value: string;
  label: string;
};

type OptionGroup = {
  label: string;
  options: Option[];
};

type Props = {
  optionGroups: OptionGroup[];
};

const MultipleSelect: React.FC<Props> = ({ optionGroups }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [expandedGroups, setExpandedGroups] = useState<boolean[]>(
    new Array(optionGroups.length).fill(false)
  );

  const toggleOption = (optionValue: string) => {
    const index = selectedOptions.indexOf(optionValue);
    if (index === -1) {
      setSelectedOptions([...selectedOptions, optionValue]);
    } else {
      setSelectedOptions([
        ...selectedOptions.slice(0, index),
        ...selectedOptions.slice(index + 1),
      ]);
    }
  };

  const toggleGroup = (groupIndex: number) => {
    setExpandedGroups([
      ...expandedGroups.slice(0, groupIndex),
      !expandedGroups[groupIndex],
      ...expandedGroups.slice(groupIndex + 1),
    ]);
  };

  return (
    <div className="multiple-select">
      {optionGroups.map((group, i) => (
        <div key={group.label} className="option-group">
          <div
            className={`group-label ${expandedGroups[i] ? "expanded" : ""}`}
            onClick={() => toggleGroup(i)}
          >
            {group.label}
          </div>
          {expandedGroups[i] && (
            <div className="option-list">
              {group.options.map((option) => (
                <label key={option.value} className="option">
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedOptions.indexOf(option.value) !== -1}
                    onChange={() => toggleOption(option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultipleSelect;














// import React, { useState } from "react";
// import Styles from  "../choose/choose.module.scss"

// type Props = {
//   id: number;
//   name: string;
//   selected: boolean;
//   onSelect: (option: string) => void;
// };

// const Choose = ({ name, selected, id , onSelect }: Props) => {
//   const [hovered, setHovered] = useState(false);

//   const handleClick = () => {
//     onSelect(name);
//     setHovered(false); // Reset hover state when clicked
//   };
// console.log(selected, id)
//   return (
//     <div
//       onClick={handleClick}
//       onMouseEnter={() => setHovered(false)}
//       onMouseLeave={() => setHovered(false)} // Reset hover state when mouse leaves
//       className={`choose ${Styles.skill} ${selected || hovered ? "selected" : ""}`}
//       >
//       {name}

//       {selected || hovered ? (
//         <svg 
//         xmlns="http://www.w3.org/2000/svg"
//          width="20" height="20" viewBox="0 0 24 24"
//           >
//           <path d="M20 12.194v9.806h-20v-20h18.272l-1.951 2h-14.321v16h16v-5.768l2-2.038zm.904-10.027l-9.404 9.639-4.405-4.176-3.095 3.097 7.5 7.273 12.5-12.737-3.096-3.096z"/></svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           style={{ color: "blue", width: "20px" }}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 4.5v15m7.5-7.5h-15"
//           />
//         </svg>
//       )}
//     </div>
//   );
// };

// export default Choose;
