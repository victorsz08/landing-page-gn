import Image from "next/image";
import { ListItem } from "./item";
import { Button } from "@/components/ui/button";
import { Unlock } from "lucide-react";

export function Services() {
    return (
        <section
            id="services"
            className="w-full px-32 h-screen flex items-center justify-around max-lg:text-center
            max-lg:p-8"
        >
            <section className="w-[50%] space-y-6 flex flex-col gap-8 max-lg:w-full">
                <h1 className="text-4xl font-bold text-foreground">
                    BENEFÍCIOS EXCLUSIVOS
                </h1>
                <div className="flex flex-col space-y-8 justify-start items-start max-lg:text-start">
                    <ListItem>
                        Planos de treino 100% ajustados ao seu nível, objetivos
                        e rotina.
                    </ListItem>
                    <ListItem>
                        Flexibilidade total: treine onde e quando quiser, com
                        meu suporte contínuo via WhatsApp.
                    </ListItem>
                    <ListItem>
                        Feedbacks regulares, ajustes personalizados e suporte
                        por vídeos para aprimorar suas execuções.​
                    </ListItem>
                    <ListItem>
                        Disponibilidade para tirar dúvidas e adaptar treinos
                        conforme suas necessidades.
                    </ListItem>
                    <ListItem>
                        Acesso a videos explicativos de todos os exercícios
                        prescritos, garantindo um melhor entendimento e
                        aprendizado!
                    </ListItem>
                    <ListItem>
                        Métodos baseados em ciência e mais de 10 anos de
                        experiência em musculação, garantindo máxima eficiência
                        nos treinos.
                    </ListItem>
                </div>
                <a href="#pricing">
                    <Button size="lg">
                        Comece hoje!{" "}
                        <Unlock strokeWidth={3} className="w-8 h-8" />
                    </Button>
                </a>
            </section>
            <Image
                src="/bg-image-02.png"
                width={400}
                height={480}
                alt="Foto treino"
                className="object-cover opacity-35 max-lg:hidden"
            />
        </section>
    );
}
