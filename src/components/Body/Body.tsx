import { JsxElement } from "typescript";
import "./Body.css";

interface BodyProps {
    children: JSX.Element
}

const Body = ({children} : BodyProps) => {
    return <div className="main-body">{children}</div>
}

export default Body;