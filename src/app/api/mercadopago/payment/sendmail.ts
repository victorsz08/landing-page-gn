import { EmailParams, MailerSend, Recipient, Sender } from "mailersend"

export interface Product {
    orderId: string;
    product_name: string;
    total_biling: string;
    subtotal: string;
}
export interface SendMailInput {
    email: string;
    name: string;
    product: Product; 
}

interface Personalization {
    email: string;
    data: {
        name: string;
        product_name: string;
        order_id: string;
        subtotal: string;
        support_email: string;
        total_billing: string;
    }
}
const mailerSend = new MailerSend({ 
    apiKey: String(process.env.NEXT_MAILERSEND_APIKEY)
});

const senderMail = "suporte@geraldonetotreinador.com.br";
const senderName = "Geraldo Neto Treinador";
const sentFrom = new Sender(senderMail, senderName);

export async function sendMailCreateOrder({ email, name, product } : SendMailInput) {
    const recipients = [new Recipient(email, name)];
    
    const personalization: Personalization[] = [
        {
            email: email,
            data: {
                name: name,
                product_name: product.product_name,
                order_id: product.orderId,
                subtotal: product.subtotal,
                support_email: senderMail,
                total_billing: product.total_biling
            }
        }
    ];

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject("Pedido Recebito")
        .setTemplateId("neqvygm130dg0p7w")
        .setPersonalization(personalization)

    await mailerSend.email.send(emailParams);
    return
}

interface NotificationDetails {
    name: string;
    email: string;
    productName: string;
    totalBilling: string;
    paymentId: string;
};

export async function sendMailApprovedOrder({ 
    name, 
    email, 
    productName, 
    totalBilling, 
    paymentId 
}: NotificationDetails) 
{
    const recipients = [new Recipient(email, name)];
    const personalization: Personalization[] = [
        {
            email: email,
            data: {
                order_id: paymentId,
                name: name,
                product_name: productName,
                subtotal: totalBilling,
                total_billing: totalBilling,
                support_email: senderMail
            }
        }
    ];


    const emailParams = new EmailParams()
        .setFrom(sentFrom)
          .setTo(recipients)
          .setReplyTo(sentFrom)
          .setSubject(`Seu pedido #${paymentId} foi aprovado!`)
          .setTemplateId("zr6ke4n807v4on12")
          .setPersonalization(personalization);
    
    await mailerSend.email.send(emailParams);
    return
}