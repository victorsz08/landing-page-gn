"use client";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Unlock } from "lucide-react";
import Image from "next/image";

export function Testemonials() {
    return (
        <section
            id="testimonials"
            className="w-full h-full px-32 flex items-center justify-center max-lg:px-4"
        >
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
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                                stopOnInteraction: true,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {Array.from({ length: 9 }).map((_, index) => (
                                <CarouselItem
                                    className="basis-1/3 max-lg:basis-auto"
                                    key={index}
                                >
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
                <div className="w-full flex items-center justify-center mt-10">
                    <a href="#pricing">
                        <Button size="lg">
                            <Unlock className="w-6 h-6" strokeWidth={3} />
                            QUERO MINHA TRANSFORMAÇÃO AGORA
                        </Button>
                    </a>
                </div>
            </section>
        </section>
    );
}
