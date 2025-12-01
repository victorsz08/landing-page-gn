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
            className="h-screen w-full flex items-center justify-center gap-4 px-32 max-lg:p-8 max-lg:flex-col
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
                <h1 className="text-4xl font-bold tracking-tight text-foreground max-lg:text-2xl">
                    QUEM SOU EU?
                </h1>
                <p className="text-sm text-foreground/70 font-light max-lg:text-xs">
                    Me chamo Geraldo Neto! Sou graduado em Educação física pela
                    UNIFACISA (CREF 10 - 007836G/PB). Minha especialidade é
                    treinamento com pesos. Na musculação, tenho uma experiência
                    de treinamentos a mais de 10 anos! Possuo atuações nas áreas
                    de reabilitação (em diversos tipos de patologias),
                    emagrecimento, hipertrofia, saúde no geral. Atualmente, sou
                    treinador para as pessoas que realmente querem mudar seu
                    estilo de vida através da musculação e ter mais saúde,
                    consequentemente, conquistar todos seus objetivos, seja
                    hipertrofia, emagrecimento, etc.
                </p>
                <div className="flex items-center mt-4 justify-start gap-4 max-lg:gap-2 max-lg:justify-center">
                    <Card className="h-28 grid justify-center items-center">
                        <CardContent className="flex flex-col text-center items-center">
                            <CardTitle className="text-4xl font-bold text-primary font-inter">
                                +10
                            </CardTitle>
                            <CardDescription className="text-xs">
                                Anos de experiência
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card className="h-28 grid justify-center items-center">
                        <CardContent className="flex flex-col text-center items-center">
                            <CardTitle className="text-4xl font-bold text-primary font-inter">
                                +1000
                            </CardTitle>
                            <CardDescription className="text-xs">
                                Alunos satisfeitos
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </section>
    );
}
