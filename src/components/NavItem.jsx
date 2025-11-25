import {useContext} from "react";
import {SWContext} from "../utils/context.js";

const NavItem = ({itemTitle}) => {
    const {changePage} = useContext(SWContext);
    return (
        <div
            onClick={() => changePage(itemTitle)}
            className="bg-red border-1 px-3 rounded-md cursor-pointer hover:bg-red-500 hover:text-white hover:border-main"
        >{itemTitle}</div>
    )
}

export default NavItem;