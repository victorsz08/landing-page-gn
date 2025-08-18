import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Home() {
    return (
        <section
            id="home"
            className="h-screen w-full flex justify-center items-center px-32
            max-lg:px-2 max-lg:flex-col-reverse"
        >
            <section className="flex items-center justify-center gap-12 max-sm:flex-col-reverse">
                <section
                    className="flex flex-col w-full justify-center items-start gap-4 
                max-lg:items-center"
                >
                    <h1
                        className="text-4xl w-[80%] font-bold text-foreground tracking-tight leading-14
                    max-lg:text-2xl max-lg:w-[90%] max-lg:text-center max-lg:leading-8"
                    >
                        <span className="text-primary">
                            TREINO 100% INDIVIDUAL
                        </span>{" "}
                        PARA ALCANÇAR SEUS OBJETIVOS{" "}
                        <span className="text-primary">SEM ENROLAÇÃO!</span>
                    </h1>
                    <p className="text-base w-[80%] mb-8 font-normal text-muted-foreground max-lg:text-center">
                        Alcance seus objetivos com um plano de treino
                        personalizado e foco total nos resultados.
                    </p>
                    <div className="flex items-center justify-start gap-2 max-lg:flex-col">
                        <a href="#pricing">
                            <Button size={"lg"}>
                                Comece sua transformação hoje
                            </Button>
                        </a>
                        <a href="#about">
                            <Button size={"lg"} variant={"outline"}>
                                Sobre à consultoria
                            </Button>
                        </a>
                    </div>
                </section>
                <section className="relative w-[48rem] h-[30rem] max-lg:w-[20rem] max-lg:h-[22rem]">
                    <div className="absolute inset-0 z-0 bg-radial to-70% from-primary to-transparent" />
                    <div className="absolute inset-0 z-10 h-full">
                        <Image
                            src="/profile-2.png"
                            width={460}
                            height={460}
                            alt="Foto Perfil"
                            className="object-cover"
                        />
                        <div className="absolute inset-3 bg-gradient-to-t via-transparent from-background/90 to-transparent" />
                    </div>
                </section>
            </section>
        </section>
    );
}
