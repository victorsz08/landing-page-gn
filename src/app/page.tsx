import { Button } from "@/components/ui/button";
import { About } from "./feature/about";
import { Home } from "./feature/home";
import { Services } from "./feature/services";

export default function LandingPage() {
    return (
        <main>
            <Home />
            <About />
            <Services />
        </main>
    );
}
