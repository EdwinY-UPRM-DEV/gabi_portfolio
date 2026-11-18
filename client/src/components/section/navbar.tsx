import Tab from "../sub/tab"


const navColor = {
    pink: "bg-[#fd97bf] border-[#fd97bf]"
}
export default function NavBar({color = "pink"}){
    return(
    <div className={`gap-2 flex justify-around item-center rounded-t-[55px] p-4 w-[65vw] ${navColor[color]}`}>
        <Tab tabColor={"orange"} content={"About Me"}></Tab>
        <Tab tabColor={"blue"} content={"Illustration"}></Tab>
        <Tab tabColor={"purple"} content={"Graphic Design"}></Tab>
        <Tab tabColor={"pink"} content={"Social Media"}></Tab>
        <Tab tabColor={"green"} content={"Commision"}></Tab>
    </div>)
}