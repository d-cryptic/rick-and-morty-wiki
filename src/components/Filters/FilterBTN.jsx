import React from "react";

const FilterBTN = ({ name, index, item, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
		.x:checked + label{
			background-color: #0b5ed7;
			color: white;
		}

		input[type="radio]{
					  display: none;
				  }`}
      </style>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          onClick={(e) => {
            setPageNumber(1);
            task(item);
          }}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
