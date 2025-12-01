import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function About() {
    return (
        <section
            id="about"
            className="h-screen w-full flex items-center justify-center gap-4 px-32 max-lg:px-6 max-lg:flex-col
            max-lg:h-full"
        >
            <div className="relative w-full">
                <Image
                    src="/foto-1.png"
                    width={600}
                    height={600}
                    alt="Foto Perfil"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent via-transparent" />
            </div>
            <section className="flex flex-col gap-4 justify-center h-full w-full max-lg:text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">
                    QUEM SOU EU?
                </h1>
                <p className="text-sm text-foreground/70 font-light max-lg:text-xs">
                    Me chamo Geraldo Neto! Sou graduado em Educação Física pela
                    UNIFACISA! Treino na musculação a mais de 10 anos e tenho
                    uma vasta experiência no quesito de treinamento com pesos.
                    Ao longo destes anos, atendi diversas pessoas com diversos
                    objetivos! Seja eles emagrecimento, saúde, hipertrofia,
                    reabilitação, etc.
                </p>
                <p className="text-sm text-foreground/70 font-light max-lg:text-xs">
                    Conseguimos alcançar todos os objetivos! Hoje, minha área de
                    domínio é a musculação em sí a qual trabalho nestes longos
                    anos e estou aqui disposto a te ajudar da melhor forma
                    possível e te ajudar a buscar o máximo desempenho com meus
                    métodos de treino, vamos comigo?
                </p>
                <div className="flex items-center mt-4 justify-start gap-4 max-lg:gap-2">
                    <Card>
                        <CardContent className="flex flex-col text-center items-center">
                            <CardTitle className="text-4xl font-bold text-primary font-inter">
                                +5
                            </CardTitle>
                            <CardDescription className="text-xs">
                                Anos de experiência
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col text-center items-center">
                            <CardTitle className="text-4xl font-bold text-primary font-inter">
                                +50
                            </CardTitle>
                            <CardDescription className="text-xs">
                                Alunos satisfeitos
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col text-center items-center">
                            <CardTitle className="text-4xl font-bold text-primary font-inter">
                                10
                            </CardTitle>
                            <CardDescription className="text-xs">
                                Anos na musculação
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </section>
    );
}
