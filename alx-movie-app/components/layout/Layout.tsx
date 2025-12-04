import { ComponentProps } from "@/interfaces";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<ComponentProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    )
}

export default Layout;
