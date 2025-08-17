"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function Testemonials() {
    return (
        <section className="w-full h-full px-32 flex items-center justify-center">
            <section className="w-full">
                <div className="w-full text-center">
                    <h1 className="text-4xl font-bold text-foreground">
                        O QUE NOSSOS ALUNOS ESTÃO FALANDO?
                    </h1>
                    <p className="text-sm font-light text-muted-foreground">
                        Depoimentos de quem já transformou seu corpo!
                    </p>
                </div>
                <div className="w-full h-full mt-10">
                    <Carousel
                        opts={{
                            loop: true, // faz o loop infinito
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000, // tempo em ms entre slides
                                stopOnInteraction: false, // continua mesmo se o usuário interagir
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {Array.from({ length: 9 }).map((_, index) => (
                                <CarouselItem className="basis-1/3" key={index}>
                                    <Image
                                        alt={`testemonial-${index}`}
                                        src={`/testimonials-${index + 1}.png`}
                                        width={450}
                                        height={400}
                                        className="rounded-lg object-cover h-[42rem]"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>
        </section>
    );
}
