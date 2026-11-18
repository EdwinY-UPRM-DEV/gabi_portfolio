import Tab from "../sub/tab"


const navColor = {
    pink: "bg-[#fd97bf] border-[#fd97bf]"
}
export default function NavBar({color = "pink"}){
    return(
    <div className={`flex gap-12 item-center justify-center rounded-t-[80px] p-4 w-[95vw] ${navColor[color]}`}>
        <Tab tabColor={"orange"} content={"About Me"}></Tab>
        <Tab tabColor={"blue"} content={"Illustration"}></Tab>
        <Tab tabColor={"purple"} content={"Graphic Design"}></Tab>
        <Tab tabColor={"pink"} content={"Social Media"}></Tab>
        <Tab tabColor={"green"} content={"Commision"}></Tab>
    </div>)
}