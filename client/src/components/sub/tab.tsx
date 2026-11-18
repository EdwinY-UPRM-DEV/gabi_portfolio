import PropTypes from 'prop-types';

const colorVariants = {
  orange: "border-[#ff914d] text-[#ff914d]",
  blue: "border-[#38b6ff] text-[#38b6ff]",
  purple: "border-[#8c52ff] text-[#8c52ff]",
  pink: "border-[#d068a7] text-[#d068a7]",
  green: "border-[#7ed957] text-[#7ed957]",
};

function Tab({
    tabColor = "blue",
    content =  "Test"
    }){
    return(
        <>
        <div className={`flex justify-center items-center border-4 text-3xl font-skillet rounded-3xl bg-white w-58 h-12 p-2 ${colorVariants[tabColor]}` }>
        {content}
        </div>
        </>
    )
}

Tab.propTypes = {
    tabColor: PropTypes.string.isRequired
};

export default Tab;
