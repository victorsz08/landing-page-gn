import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Tutorial() {
    return (
        <section className="flex justify-center items-center w-full h-screen px-32">
            <section className="space-y-8 w-full">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground">
                        COMO ADQUIRIR
                    </h1>
                </div>
                <section className="w-full">
                    <Accordion type="single" collapsible className="min-w-48">
                        <AccordionItem value="one-step" className="w-full">
                            <AccordionTrigger>
                                1. Escolha seu plano
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-xs font-light text-muted-foreground">
                                    Escolha um plano que se adeque a sua rotina
                                    e objetivo na aba de{" "}
                                    <Link
                                        href="#pricing"
                                        className="underline font-medium text-foreground"
                                    >
                                        planos
                                    </Link>
                                    .
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="two-step" className="w-full">
                            <AccordionTrigger>
                                2. Preencha as informações no formulário
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-xs font-light text-muted-foreground">
                                    Preencha as informações corretas solicitadas
                                    no formulário, as informações são para
                                    contato, onde após pagamento nós entraremos
                                    em contato.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="three-step" className="w-full">
                            <AccordionTrigger>
                                3. Efetue o pagamento
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-xs font-light text-muted-foreground">
                                    Efetue o pagamanto através do{" "}
                                    <strong className="text-foreground">
                                        Mercado Pago
                                    </strong>
                                    , e aguarde as instruções pelo email
                                    cadastrado no email anterior.
                                </p>
                                <p className="text-xs font-light text-muted-foreground">
                                    Não se preocupe, o pagamento é feito de
                                    forma{" "}
                                    <strong className="text-foreground">
                                        100% segura
                                    </strong>{" "}
                                    em na própria plataforma do{" "}
                                    <strong className="text-foreground">
                                        Mercado Pago
                                    </strong>
                                    .
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
                <div className="w-full flex justify-center mt-10">
                    <a href="#pricing">
                        <Button size="lg">Mude seu corpo hoje</Button>
                    </a>
                </div>
            </section>
        </section>
    );
}
