"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import z from "zod";
import { Form, FormField, FormItem, FormMessage } from "./ui/form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

interface PlanProps {
    id: number;
    label: string;
    price: string;
}

const plans: Array<PlanProps> = [
    {
        id: 1,
        label: "Mensal",
        price: "R$100",
    },
    {
        id: 2,
        label: "Trimestral",
        price: "R$250",
    },
    {
        id: 3,
        label: "Semestral",
        price: "R$480",
    },
    {
        id: 4,
        label: "Anual",
        price: "R$900",
    },
];

const contactScheme = z.object({
    name: z
        .string()
        .min(4, "O campo nome deve conter no mínimo 4 caracteres")
        .max(255, "O campo nome deve conter no máximo 255 caracteres")
        .nonempty("Campo nome é obrigatório")
        .trim(),
    email: z
        .email("Digite um email válido")
        .nonempty("O campo email é obrigatório")
        .trim(),
    contact: z
        .string()
        .nonempty("O campo telefone é obrigatório")
        .transform((val) => val.replace(/\D/g, ""))
        .refine((digits) => digits.length === 11 || digits.length === 10, {
            message: "Digite um numero válido",
        }),
    plan: z.string().nonempty(),
});

type TContactForm = z.infer<typeof contactScheme>;

export function PaymentDialog({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const form = useForm<TContactForm>({
        resolver: zodResolver(contactScheme),
        defaultValues: {
            contact: "",
            email: "",
            name: "",
            plan: plans.find((s) => s.id === 1)?.label,
        },
    });

    function transformPhonePattern(value: string) {
        if (value.length >= 10) {
            return value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
        } else {
            return value.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
        }
    }

    async function sendEmail(data: TContactForm) {
        try {
            await emailjs.send("service_4y3vjv9", "template_8acrzxd", data, {
                publicKey: "pzprOXhQuidVm_gzn",
            });

            form.reset();
            setIsOpen(false);
            return;
        } catch {
            console.log("Error ao enviar email - tente novamente mais tarde!");
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="min-w-[40vw] z-10000">
                <DialogHeader className="mb-5">
                    <DialogTitle>Formulário de inscrição</DialogTitle>
                    <DialogDescription>
                        Preencha as informações para que possamos entrar em
                        contato
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        className="space-y-5"
                        onSubmit={form.handleSubmit(sendEmail)}
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Nome completo *</Label>
                                    <Input
                                        {...field}
                                        placeholder="Nome completo"
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Email *</Label>
                                    <Input
                                        type="email"
                                        {...field}
                                        placeholder="exemplo@email.com"
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contact"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Telefone *</Label>
                                    <Input
                                        {...field}
                                        placeholder="(99) 9999-9999"
                                        maxLength={15}
                                        onChange={(e) => {
                                            const valueFormated =
                                                transformPhonePattern(
                                                    e.target.value
                                                );
                                            field.onChange(valueFormated);
                                        }}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="plan"
                            render={({ field }) => (
                                <FormItem className="flex mt-6 flex-col justify-start items-start">
                                    <Label>Escolha um plano:</Label>
                                    <RadioGroup
                                        defaultValue="Mensal"
                                        className="flex items-start justify-between w-full"
                                    >
                                        {plans.map((p) => (
                                            <div
                                                key={p.id}
                                                className="flex flex-col items-center gap-2"
                                            >
                                                <RadioGroupItem
                                                    value={p.label}
                                                    onChange={() =>
                                                        field.onChange(p.label)
                                                    }
                                                />
                                                <div className="flex flex-col items-center gap-1">
                                                    <p className="text-muted-foreground/80 font-medium text-sm">
                                                        {p.label}
                                                    </p>
                                                    <p className="text-foreground font-bold text-xl">
                                                        {p.price}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </FormItem>
                            )}
                        />
                        <Button className="w-full h-12 mt-8" type="submit">
                            Confirmar
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
