import { Header } from "./header";




export function Layout({ children } : { children: React.ReactNode }) {

    return (
        <>
            <Header/>
            <main className="pb-10">
                {children}
            </main>
        </>
    )
}