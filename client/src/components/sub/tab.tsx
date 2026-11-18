import PropTypes from "prop-types";

const colorVariants = {
  orange: "[--tab-color:#ff914d]",
  blue: "[--tab-color:#38b6ff]",
  purple: "[--tab-color:#8c52ff]",
  pink: "[--tab-color:#d068a7]",
  green: "[--tab-color:#7ed957]",
};

function Tab({ tabColor = "blue", content = "Test", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative isolate
        flex justify-center items-center
        rounded-[50px] border-2
        bg-[var(--tab-color)] text-[var(--tab-color)]
        text-5xl font-bantayog
        w-100 h-18 mt-5 p-2 cursor-pointer
        transition-transform duration-600 ease-out
        hover:scale-105 hover:-translate-y-1
        focus-visible:outline-2 focus-visible:outline-offset-4
        motion-reduce:transition-none motion-reduce:transform-none
        ${colorVariants[tabColor]}
      `}
    >
      {/* The inset leaves a 4px colored rim */}
      <span
        aria-hidden="true"
        className="absolute inset-1 overflow-hidden rounded-[50px]"
      >
        <span
          className="
            absolute inset-0 bg-white
            transition-transform duration-600 ease-out
            group-hover:translate-x-full
            group-focus-visible:translate-x-full
            motion-reduce:transition-none
          "
        />
      </span>

      <span
        className="
          relative z-10
          transition-colors duration-300
          group-hover:text-white
          group-focus-visible:text-white
          motion-reduce:transition-none
        "
      >
        {content}
      </span>
    </button>
  );
}

Tab.propTypes = {
  tabColor: PropTypes.oneOf(Object.keys(colorVariants)),
  content: PropTypes.node,
  onClick: PropTypes.func,
};

export default Tab;