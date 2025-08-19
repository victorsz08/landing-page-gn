"use client"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { transformPhonePattern } from "@/lib/transforms";
const formSchema = z.object({
    name: z.string().nonempty("O campo nome é obrigatório.").trim(),
    email: z.string().nonempty("O campo email é obrigatório.").trim(),
    contact: z.string().nonempty("O campo contato é obrigatório").trim(),
    product: z.string().nonempty("O produto é obrigatorio.").trim(),
});

type FormInterface = z.infer<typeof formSchema>;

interface Product {
    id: string;
    title: string;
    amount: number;
}
const products: Product[] = [
    {
        id: "001",
        title: "Mensal",
        amount: 100,
    },
    {
        id: "002",
        title: "Trimestral",
        amount: 250,
    },
    {
        id: "003",
        title: "Semestral",
        amount: 480,
    },
    {
        id: "004",
        title: "Anual",
        amount: 900,
    },
];
export function FormPayment() {
    const form = useForm<FormInterface>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            contact: "",
            product: "003",
        },
    });

    async function paymentSubmit(data: FormInterface) {
        const preference = {
            name: data.name,
            email: data.email,
            contact: data.contact,
            productId: data.product,
        };

        const response = await fetch(`/api/mercadopago/payment`, {
            method: "POST",
            body: JSON.stringify(preference),
            headers: {
                "Content-type": "application/json",
            },
        });

        if (response.ok) {
            const rewrite = await response.json();
            window.location.href = rewrite.init_point;
            form.reset();
        }

        return;
    }

    function formatAmount(value: number): string {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(paymentSubmit)}
                className="px-4 flex flex-col justify-between pb-10 space-y-4 h-full"
            >
                <div className="flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <Input {...field} type="text" />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <Input {...field} type="email" />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="contact"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contato</FormLabel>
                                <Input
                                    value={field.value}
                                    type="text"
                                    maxLength={14}
                                    onChange={(e) => {
                                        field.onChange(
                                            transformPhonePattern(
                                                e.target.value
                                            )
                                        );
                                    }}
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="product"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mb-3">
                                    Escolha um plano:
                                </FormLabel>
                                <RadioGroup
                                    defaultValue={field.value}
                                    className="grid grid-cols-2"
                                >
                                    {products.map((item) => (
                                        <div
                                            className="w-full"
                                            key={item.id}
                                            onClick={() =>
                                                field.onChange(item.id)
                                            }
                                        >
                                            <RadioGroupItem
                                                className="sr-only"
                                                value={item.id}
                                            />
                                            <Label>
                                                <Card
                                                    className={`${
                                                        field.value === item.id
                                                            ? "border-2 border-primary"
                                                            : "border-2 border-background"
                                                    } w-full`}
                                                >
                                                    <CardContent>
                                                        <CardDescription className="text-xs font-medium text-muted-foreground">
                                                            {item.title}
                                                        </CardDescription>
                                                        <CardTitle className="text-base font-bold text-foreground">
                                                            {formatAmount(
                                                                item.amount
                                                            )}
                                                        </CardTitle>
                                                    </CardContent>
                                                </Card>
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex items-end justify-end gap-2">
                    <Button type="submit">Prosseguir para pagamento</Button>
                </div>
            </form>
        </Form>
    );
}