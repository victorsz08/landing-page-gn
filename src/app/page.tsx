import { About } from "./feature/about";
import { Home } from "./feature/home";
import { Services } from "./feature/services";
import { Princing } from "./feature/pricing";
import { Tutorial } from "./feature/tutorial";

export default function LandingPage() {
    return (
        <main>
            <Home />
            <About />
            <Services />
            <Princing />
            <Tutorial />
        </main>
    );
}
