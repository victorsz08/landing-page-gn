import { NextRequest, NextResponse } from "next/server";
import { sendMailApprovedOrder } from "../payment/sendmail";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const paymentId = body.data.id;

    try {
        const response = await fetch(
            `https://api.mercadopago.com/v1/payments/${paymentId}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${String(
                        process.env.NEXT_MERCADOPAGO_ACCESS_KEY
                    )}`,
                },
            }
        );

        const paymentResponse = await response.json();

        const paymentDetails = {
            status: paymentResponse.status,
            name: paymentResponse.payer.name,
            email: paymentResponse.payer.email,
            productName: paymentResponse.description,
            totalBilling: paymentResponse.transaction_amount,
        };

        await sendMailApprovedOrder({
            name: paymentDetails.name,
            email: paymentDetails.email,
            paymentId: paymentId,
            productName: paymentDetails.productName,
            totalBilling: paymentDetails.totalBilling
        });

        return NextResponse.json({ })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}
