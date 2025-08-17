import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CardPricing } from "./card-pricing";
import { Button } from "@/components/ui/button";
import { Unlock } from "lucide-react";

interface PricingProps {
    price: string;
    desc: string;
    popular?: boolean;
    title: string;
}

const pricings: PricingProps[] = [
    {
        title: "Mensal",
        price: "R$100",
        desc: "Único mês",
    },
    {
        title: "Trimestral",
        price: "R$250",
        desc: "Duração de 3 meses",
    },
    {
        title: "Semestral",
        price: "R$480",
        desc: "Melhor custo benefício",
        popular: true,
    },
    {
        title: "Anual",
        price: "R$900",
        desc: "Perfeito para você que quer manter consistência",
    },
];
export function Princing() {
    return (
        <section className="h-screen w-full flex justify-center items-center">
            <section className="flex flex-col items-center justify-center w-full space-y-12">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-foreground">
                        PREÇOS E PLANOS
                    </h1>
                    <p className="text-sm font-light text-muted-foreground/80">
                        Escolha um plano que se adapte ao seu objetivo
                    </p>
                </div>
                <div className="flex items-center justify-center w-full space-x-6">
                    {pricings.map((item, index) => (
                        <CardPricing popular={item.popular} key={item.title}>
                            <CardHeader className="w-full flex flex-col justify-center items-center">
                                <CardTitle className="text-sm font-medium text-center">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <h1
                                    className={`${
                                        item.popular
                                            ? "text-primary"
                                            : "text-foreground"
                                    }
                                font-extrabold text-5xl font-inter`}
                                >
                                    {item.price}
                                </h1>
                                <CardDescription className="text-xs font-light text-muted-foreground">
                                    {item.desc}
                                </CardDescription>
                            </CardContent>
                        </CardPricing>
                    ))}
                </div>
                <div className="w-full text-center">
                    <p className="text-sm font-normal text-muted-foreground">
                        <strong className="text-foreground font-medium">
                            Vagas limitadas:
                        </strong>{" "}
                        As vagas são limitadas para garantir a qualidade do
                        atendimento.
                    </p>
                </div>
                <a>
                    <Button size="lg">
                        <Unlock strokeWidth={3} className="w-8 h-8" />
                        Comece agora e trasnforme sua vida
                    </Button>
                </a>
            </section>
        </section>
    );
}