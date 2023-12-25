import { Outlet } from "react-router-dom";
import Header from "./header";
import LicenseFooter from "./licenseFooter";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <LicenseFooter />
        </>
    );
}
