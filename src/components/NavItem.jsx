import {useContext} from "react";
import {SWContext} from "../utils/context.js";
import Button from "./ui/Button.jsx";

const NavItem = ({itemTitle}) => {
    const {changePage} = useContext(SWContext);
    return (
        <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
    )
}

export default NavItem;