import React from "react";

function Job({ title, subTitle, onChange, checked }) {
  const onSelect = () => {
    onChange({ title, subTitle })
  }

  return (
    <div className="flex items-start mb-4">
      <div className="pr-2 pt-1">
        <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100" onChange={onSelect} checked={title === checked.title} />
      </div>
      <div>
        <h4 className="text-xl md:text-2xl mb-2">{title}</h4>
        <p className="text-gray-700">{subTitle}</p>
      </div>
    </div>
  )
}

export default Job;