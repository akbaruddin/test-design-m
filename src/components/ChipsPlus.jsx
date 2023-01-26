function ChipsPlus({ text }) {
  return (
    <span className="px-4 py-3 rounded-full text-black bg-gray-300 font-semibold text-sm flex align-center w-max cursor-pointer transition duration-300 ease">
      <button className="bg-transparent hover focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className="w-4 mr-3"
          role="img"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {text}
    </span>
  );
}

export default ChipsPlus;
