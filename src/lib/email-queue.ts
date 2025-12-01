import { MailerSend, EmailParams } from "mailersend";
const mailerSend = new MailerSend({ 
    apiKey: String(process.env.NEXT_MAILERSEND_APIKEY)
});

type EmailJob = { params: EmailParams };

const queue: EmailJob[] = [];

export function enqueueEmail(params: EmailParams) {
  queue.push({ params });
}

setInterval(async () => {
  if (queue.length > 0) {
    const job = queue.shift();
    if (job) {
      try {
        await mailerSend.email.send(job.params);
        console.log("✅ Email enviado");
      } catch (err) {
        console.error("❌ Falha ao enviar email:", err);
        queue.push(job);
      }
    }
  }
}, 5000);
