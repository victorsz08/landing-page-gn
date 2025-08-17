import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";


interface FaqItems {
    value: string;
    title: string;
    content: React.ReactNode;
};

const items: FaqItems[] = [
   {
    value: "question-1",
    title: "Como funciona a consultoria?",
    content: 
        <>
            <p className="text-xs font-light text-muted-foreground">
                Após adquirir o seu plano, você receberá um e-mail com as próximas instruções e um 
                formulário de anamnese. A partir dessas informações, montaremos uma estratégia{" "}
                <strong className="font-medium text-foreground">100% personalizada</strong> de acordo com seus objetivos,
                nível de treino e rotina.
            </p>
        </>
},
{
    value: "question-2",
    title: "O pagamento é seguro?",
    content: 
        <>
            <p className="text-xs font-light text-muted-foreground">
                Sim! Utilizamos o{" "}
                <strong className="text-foreground font-medium">Mercado Pago</strong>, 
                uma das plataformas de pagamento mais seguras do Brasil. 
                Seus dados pessoais e financeiros ficam totalmente protegidos.
            </p>
        </>
},
{
    value: "question-3",
    title: "Preciso ter acesso à academia?",
    content: 
        <>
            <p className="text-xs font-light text-muted-foreground">
                Não necessariamente. Os treinos podem ser adaptados para serem feitos em{" "}
                <strong className="text-foreground font-medium">academia</strong> ou em{" "}
                <strong className="text-foreground font-medium">casa</strong>, com ou sem equipamentos.
                Tudo depende da sua realidade e dos seus objetivos.
            </p>
        </>
},
{
    value: "question-4",
    title: "Em quanto tempo vou ver resultados?",
    content: 
        <>
            <p className="text-xs font-light text-muted-foreground">
                Isso varia de pessoa para pessoa, mas seguindo o plano de treino e alimentação recomendados,
                é comum perceber mudanças em{" "}
                <strong className="text-foreground font-medium">4 a 8 semanas</strong>. 
                Lembre-se: consistência é a chave para resultados duradouros.
            </p>
        </>
},
{
    value: "question-5",
    title: "O acompanhamento é individual?",
    content: 
        <>
            <p className="text-xs font-light text-muted-foreground">
                Sim! Todo o processo é feito de forma{" "}
                <strong className="text-foreground font-medium">individualizada</strong>, 
                levando em conta suas necessidades, objetivos, disponibilidade de tempo e histórico de saúde.
            </p>
        </>
},
{
    value: "question-6",
    title: "Posso tirar dúvidas durante o acompanhamento?",
    content: 
        <>
            <p className="text-xs font-light text-muted-foreground">
                Claro! Você terá um canal direto de contato para{" "}
                <strong className="text-foreground font-medium">tirar dúvidas, pedir ajustes</strong> 
                e receber orientações sempre que precisar durante o período do seu plano.
            </p>
        </>
},
{
    value: "question-7",
    title: "E se eu nunca treinei antes?",
    content: 
        <>
            <p className="text-xs font-light text-muted-foreground">
                Não tem problema! O programa pode ser{" "}
                <strong className="text-foreground font-medium">adaptado para iniciantes</strong>, 
                começando do zero e evoluindo conforme você ganha confiança, força e condicionamento físico.
            </p>
        </>
}
]


export function Faq() {
    return (
        <section className="w-full h-screen flex items-center justify-center px-32">
            <section className="flex flex-col justify-center items-center space-y-8 w-full">
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-4xl font-bold text-foreground">FAQ</h1>
                    <p className="text-sm font-light text-muted-foreground">
                        Dúvidas frequentes sobre a consultoria.
                    </p>
                </div>
                <section className="w-full">
                    <Accordion type="single" collapsible className="w-full">
                        {items.map((item) => (
                            <AccordionItem className="min-w-full" key={item.value} value={item.value}>
                                <AccordionTrigger>{item.title}</AccordionTrigger>
                                <AccordionContent>
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
                <div className="w-full flex justify-center mt-10">
                    <a href="#pricing">
                        <Button size="lg">
                            Adquirir agora!
                        </Button>
                    </a>
                </div>
            </section>
        </section>
    )
}