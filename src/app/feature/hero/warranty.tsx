import { Star } from "lucide-react";

export function HeroWarranty() {
    return (
        <section
            className="w-full px-32 py-24 flex flex-col items-center justify-center max-lg:px-6
        max-lg:h-svh max-lg:py-4"
        >
            <section className="flex items-center gap-6">
                <div className="relative">
                    <h1
                        className="text-[14rem] font-extrabold bg-gradient-to-b from-primary 
                        to-transparent bg-clip-text text-transparent via-20%"
                    >
                        7
                    </h1>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <div className="flex items-center">
                        <Star className="w-8 h-8 text-primary" />
                        <Star className="w-8 h-8 text-primary" />
                        <Star className="w-8 h-8 text-primary" />
                        <Star className="w-8 h-8 text-primary" />
                        <Star className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl text-foreground font-bold">
                        DIAS DE GARANTIA
                    </h1>
                </div>
            </section>
            <h3 className="text-2xl font-bold text-foreground max-lg:text-base max-lg:text-center">
                NÃO GOSTOU? DEVOLVEMOS SEU DINHEIRO.
            </h3>
        </section>
    );
}
