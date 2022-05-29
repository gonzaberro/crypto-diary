import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { JsxElement } from "typescript";

interface PageStractureProps{
    children: JSX.Element
    headerTitle: string
}

const PageStracture = ({children, headerTitle} : PageStractureProps) => {

    return <main style={{height:"100vh"}}>
        <Header headerTitle={headerTitle}/>
        <Body>{children}</Body>
        <Footer/>
    </main>


}

export default PageStracture;