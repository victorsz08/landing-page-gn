import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="pt-10 max-lg:pt-0">{children}</main>
            <Footer />
        </>
    );
}
