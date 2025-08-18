import { Button } from "../ui/button";
import { MenuItem } from "./menu-item";

interface NavItems {
    label: string;
    href: string;
}

const items: NavItems[] = [
    {
        label: "HOME",
        href: "#home",
    },
    {
        label: "SOBRE",
        href: "#about",
    },
    {
        label: "SERVIÇOS",
        href: "#pricing",
    },
    {
        label: "AVALIAÇÕES",
        href: "#testimonials",
    },
    {
        label: "FAQ",
        href: "#faq",
    },
];
export function Header() {
    return (
        <header
            className="w-full z-[1000] p-6 border-b border-muted/60 bg-background fixed flex items-center 
        justify-between max-lg:hidden"
        >
            <h1 className="text-base font-semibold text-foreground">
                GERALDO NETO <span className="text-primary">TREINADOR</span>
            </h1>
            <nav className="flex items-center gap-4">
                {items.map((item) => (
                    <MenuItem key={item.href} link={item.href}>
                        {item.label}
                    </MenuItem>
                ))}
                <Button size="sm">Começar agora!</Button>
            </nav>
        </header>
    );
}
