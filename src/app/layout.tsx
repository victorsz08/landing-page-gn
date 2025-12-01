import { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Poppins } from "next/font/google";
import { Layout } from "@/components/layout";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://geraldonetotreinador.com.br";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Geraldo Neto Treinador | Consultoria de Treino e Musculação",
        template: `Geraldo Neto Treinador`,
    },
    description:
        "Transforme seu corpo com a consultoria de treinamento de Geraldo Neto. Planos de musculação personalizados para hipertrofia e emagrecimento. Conquiste seus objetivos com uma assessoria online completa e baseada em ciência.",
    keywords: [
        "consultoria de treinamento",
        "treinador pessoal",
        "musculação",
        "hipertrofia",
        "emagrecimento",
        "plano de treino personalizado",
        "assessoria online",
        "Geraldo Neto",
    ],
    authors: [{ name: "Geraldo Neto" }],
    creator: "Geraldo Neto",
    openGraph: {
        title: "Geraldo Neto | Treinador e Consultoria de Musculação",
        description:
            "Consultoria online e planos de treino personalizados para você atingir seus objetivos de hipertrofia e emagrecimento.",
        url: siteUrl,
        siteName: "Geraldo Neto Treinador",
        locale: "pt_BR",
        type: "website",
    },
};

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

const inter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
    display: "swap",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
            <body
                className={`${inter.variable} ${poppins.className} antialiased bg-background`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Layout>{children}</Layout>
                </ThemeProvider>
            </body>
        </html>
    );
}
