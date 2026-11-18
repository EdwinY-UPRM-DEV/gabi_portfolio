import Headline from "../sub/headline"

const frameColor = {
        pink: "bg-[#fd97bf] border-[#fd97bf]"
    }


export default function ContentFrame({color = "pink"}){
    
    
    return (
        <div className={`flex justify-center items-center w-[95vw] h-[85vh] rounded-b-[70px] ${frameColor[color]}`}>
            <div className="flex flex-col justify-center items-center bg-white h-48/50 w-48/50 rounded-[50px] mb-6">
                <Headline></Headline>
            </div>
        </div>
    )
}