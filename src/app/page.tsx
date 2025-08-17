import { About } from "./feature/about";
import { Home } from "./feature/home";
import { Services } from "./feature/services";
import { Princing } from "./feature/pricing";
import { Tutorial } from "./feature/tutorial";
import { Faq } from "./feature/FAQ";
import { HeroWarranty } from "./feature/hero/warranty";
import { Testemonials } from "./feature/testemonials";

export default function LandingPage() {
    return (
        <main>
            <Home />
            <About />
            <Services />
            <Princing />
            <HeroWarranty />
            <Tutorial />
            <Testemonials />
            <Faq />
        </main>
    );
}
