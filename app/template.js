import Navbar from "@/components/modules/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

export default function Template({ children }) {
    return (
        <>
            <Suspense>
                <Navbar />
            </Suspense>
            {children}
        </>
    )
}