"use client";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Autoplay from "embla-carousel-autoplay";
import { Unlock } from "lucide-react";
import Image from "next/image";
import { FormPayment } from "../pricing/form";

export function Testemonials() {
    return (
        <section
            id="testimonials"
            className="w-full h-full px-32 flex items-center justify-center max-lg:px-4 max-lg:h-full"
        >
            <section className="w-full">
                <div className="w-full text-center">
                    <h1 className="text-4xl font-bold text-foreground max-lg:text-2xl">
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
                            {Array.from({ length: 12 }).map((_, index) => (
                                <CarouselItem
                                    className="basis-1/3 max-lg:basis-auto"
                                    key={index}
                                >
                                    <Image
                                        alt={`testemonial-${index}`}
                                        src={`/testimonials-${index + 1}.png`}
                                        width={350}
                                        height={320}
                                        className="rounded-lg object-cover"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="w-full flex items-center justify-center mt-10 px-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size={"lg"} type="submit">
                                Quero iniciar agora mesmo
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="z-[10000] h-full">
                            <SheetHeader>
                                <SheetTitle>Preencha o formulário</SheetTitle>
                                <SheetDescription>
                                    Preencha todas as informações corretas e
                                    prossiga para o pagamento.
                                </SheetDescription>
                            </SheetHeader>
                            <FormPayment />
                        </SheetContent>
                    </Sheet>
                </div>
            </section>
        </section>
    );
}
