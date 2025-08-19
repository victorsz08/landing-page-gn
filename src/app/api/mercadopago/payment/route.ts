"use server";

import { transformNumber } from "@/lib/transforms";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { PreferenceBackUrl } from "mercadopago/models/preferences/create-payload.model";
import { NextRequest, NextResponse } from "next/server";
import { sendMailCreateOrder } from "./sendmail";

const client = new MercadoPagoConfig({
    accessToken: String(process.env.NEXT_MERCADOPAGO_ACCESS_KEY),
});
const preference = new Preference(client);

interface Product {
    id: string;
    title: string;
    amount: number;
}

const products: Product[] = [
    {
        id: "001",
        title: "Mensal",
        amount: 100.00,
    },
    {
        id: "002",
        title: "Trimestral",
        amount: 250.00,
    },
    {
        id: "003",
        title: "Semestral",
        amount: 480.00,
    },
    {
        id: "004",
        title: "Anual",
        amount: 900.00,
    },
];

interface CreatePaymentPreferenceInput {
    name: string;
    email: string;
    contact: string;
    productId: string;
}
export async function POST(req: NextRequest) {
    const body: CreatePaymentPreferenceInput = await req.json();
    const { name, email, contact, productId } = body;

    const product = products.filter((item) => item.id === productId)[0];

    const phone = transformNumber(contact);
    const areaCode = phone.charAt(0) + phone.charAt(1);

    try {
        const result = await preference.create({
            body: {
                items: [
                    {
                        id: product.id,
                        title: product.title,
                        quantity: 1,
                        unit_price: product.amount,
                    },
                ],
                payer: {
                    email,
                    name,
                    phone: {
                        area_code: areaCode,
                        number: phone,
                    },
                },
            },
        });
        const productMail = {
            orderId: result.id || "",
            product_name: product.title,
            total_biling: product.amount.toLocaleString(),
            subtotal: product.amount.toLocaleString(),
        }

        sendMailCreateOrder({ email, name, product: productMail });
        
        return NextResponse.json({ init_point: result.init_point });
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}
