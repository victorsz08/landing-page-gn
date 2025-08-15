import { Button } from "@/components/ui/button";
import { About } from "./feature/about";
import { Home } from "./feature/home";
import { Services } from "./feature/services";
import { Princing } from "./feature/pricing";

export default function LandingPage() {
    return (
        <main>
            <Home />
            <About />
            <Services />
            <Princing />
        </main>
    );
}
