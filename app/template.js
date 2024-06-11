import Navbar from "@/components/modules/Navbar";

export default function Template({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}