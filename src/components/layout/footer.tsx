import Link from "next/link";
import { Separator } from "../ui/separator";
import { Instagram, Whatsapp } from "./icons";

export function Footer() {
    return (
        <footer className="w-full flex items-center px-32 py-24 max-lg:px-4">
            <section className="text-center space-y-8 w-full">
                <p className="text-xs font-normal text-foreground">
                    ©2025 Geraldo Neto Treinador - Todos os direitos reservados
                </p>
                <Separator />
                <p className="text-xs font-light text-muted-foreground">
                    Termos e condições de uso
                </p>
                <p className="text-xs font-light text-muted-foreground">
                    Todas as informações em nosso site são armazenadas de forma
                    segura e utilizadas apenas para estabelecer uma comunicação
                    personalizada, formuladas de acordo com os seus interesses.
                </p>
                <p className="text-xs font-light text-muted-foreground">
                    Todos os depoimentos embora reais, enviados pelos nossos
                    alunos, não representam resultados únicos, cada indivíduo é
                    diferente.
                </p>
                <div className="flex items-center justify-center gap-4 w-full">
                    <Link
                        target="_blank"
                        referrerPolicy="no-referrer"
                        href="https://wa.me/+5583996032777"
                    >
                        <Whatsapp className="w-10 h-10 text-primary" />
                    </Link>
                    <Link
                        target="_blank"
                        referrerPolicy="no-referrer"
                        href="https://www.instagram.com/geraldnto_?igsh=MmRxYXo2ZTc2djBl"
                    >
                        <Instagram className="w-10 h-10 text-primary" />
                    </Link>
                </div>
            </section>
        </footer>
    );
}
