import React from "react";
import "./style.scss";

export default ({ onChange = () => {}, data = [], customClasses = {}, ...props }) => {

  const onClick = (step, index) => {
    onChange(step, index);
  };

  return (
    <div className="stepper-wrapper">
      {data.map((step, index) => {
        return (
          <div key={index} className="stepper-item" {...props}>
            <button
              className={`circle ${step.active ? 'active' : ''}`}
              onClick={() => {
                onClick(step, index);
              }}
            >
              <span className="index">{step.value || index + 1}</span>
            </button>
            <span className="title">{step.title}</span>
          </div>
        );
      })}
    </div>
  );
};
