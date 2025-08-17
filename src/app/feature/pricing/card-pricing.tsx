import { Card, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";




interface CardPricingProps extends React.ComponentProps<"div"> {
    children?: React.ReactNode;
    popular?: boolean;
}


export function CardPricing({ children, popular, className } : CardPricingProps) {

    return (
        <Card
            className={cn(
                popular ? "h-[22rem] border-2 border-primary" : "h-[20rem]",
                "flex flex-col items-center justify-center text-center w-[18rem]",
                className
            )}
        >
            {children}
            {popular && (
                <CardFooter className="text-center">
                    <CardDescription className="p-2 text-primary bg-primary/20 text-xs rounded-md font-medium">
                        POPULAR
                    </CardDescription>
                </CardFooter>
            )}
        </Card>
    );
}