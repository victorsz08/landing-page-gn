import { About } from "./feature/about";
import { Home } from "./feature/home";
import { Services } from "./feature/services";
import { Princing } from "./feature/pricing";
import { Tutorial } from "./feature/tutorial";
import { Faq } from "./feature/FAQ";

export default function LandingPage() {
    return (
        <main>
            <Home />
            <About />
            <Services />
            <Princing />
            <Tutorial />
            <Faq />
        </main>
    );
}
