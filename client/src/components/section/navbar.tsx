import Tab from "../sub/tab"


const navColor = {
    pink: "bg-[#fd97bf] border-[#fd97bf]"
}
export default function NavBar({color = "pink"}){
    return(
    <div className={`gap-3 flex justify-between item-center border-8 rounded-t-3xl ${navColor[color]}`}>
        <Tab tabColor={"orange"} content={"About Me"}></Tab>
        <Tab tabColor={"blue"} content={"Illustration"}></Tab>
        <Tab tabColor={"purple"} content={"Graphic Design"}></Tab>
        <Tab tabColor={"pink"} content={"Social Media"}></Tab>
        <Tab tabColor={"green"} content={"Commision"}></Tab>
    </div>)
}