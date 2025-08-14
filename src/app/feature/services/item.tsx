import { Check } from "lucide-react";



interface ListItemProps {
    children?: React.ReactNode;
}


export function ListItem({ children } : ListItemProps) {
    return (
        <div className="flex items-center gap-2">
            <Check strokeWidth={4} className="text-primary w-6 h-6"/>
            <p
                className="text-sm font-light text-foreground/80"
            >
                {children}
            </p>
        </div>
    )
}