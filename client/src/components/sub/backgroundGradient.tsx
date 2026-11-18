import PropTypes from "prop-types";

function BackgroundGradient({ children }) {
  return (
    <div className="min-h-screen w-full bg-linear-to-t from-[#ffbfd9] from-1% to-white z-0">
      {children}
    </div>
  );
}

BackgroundGradient.propTypes = {
  children: PropTypes.node,
};

export default BackgroundGradient;