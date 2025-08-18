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
        <main className="overflow-x-hidden w-full h-full py-10 flex flex-col gap-10">
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
