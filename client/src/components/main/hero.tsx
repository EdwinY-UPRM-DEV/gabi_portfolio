import ContentFrame from "../section/contentFrame";
import NavBar from "../section/navbar";
import BackgroundGradient from "../sub/backgroundGradient";

export default function Hero(){
    return (
        <BackgroundGradient>
        <div className="flex flex-col justify-center items-center pt-4">
        <NavBar color={"pink"}></NavBar>
        <ContentFrame color={"pink"}></ContentFrame>
        </div>
        </BackgroundGradient>
    )
}