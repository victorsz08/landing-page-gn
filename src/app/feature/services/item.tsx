import { Check, CheckCircle, CheckCircle2 } from "lucide-react";

interface ListItemProps {
    children?: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
    return (
        <div className="flex items-center gap-4">
            <CheckCircle
                strokeWidth={3}
                className="text-primary min-w-6 min-h-6"
            />
            <p className="text-sm font-light text-foreground/80">{children}</p>
        </div>
    );
}
