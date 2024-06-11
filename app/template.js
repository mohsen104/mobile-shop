import Navbar from "@/components/modules/Navbar";
import { Suspense } from "react";

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