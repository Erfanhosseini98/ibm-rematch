import { Outlet } from "react-router-dom";
import { Stack } from "@carbon/react";

const Layout =() => {
    return(
        <div>
            <Outlet />
        </div>
    )
}
export default Layout;
