import ContentFrame from "../section/contentFrame";
import NavBar from "../section/navbar";

export default function Hero(){
    return (
        <div className="flex flex-col justify-center items-center pt-4">
        <NavBar color={"pink"}></NavBar>
        <ContentFrame color={"pink"}></ContentFrame>
        </div>
    )
}