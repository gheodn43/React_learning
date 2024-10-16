import Header from "./Header"
import SectionProduct1 from "./SectionProduct1"
import SectionProduct2 from "./SectionProduct2"
import SectionProduct3 from "./SectionProduct3"
import SectionProduct4 from "./SectionProduct4"
import Footer from "./Footer"
export default function LandingPage(){
    return(
        <div>
            <div><Header/></div>
            <div><SectionProduct1/></div>
            <div><SectionProduct2/></div>
            <div><SectionProduct3/></div>
            <div><SectionProduct4/></div>
            <div><Footer/></div>

        </div>
    )
}