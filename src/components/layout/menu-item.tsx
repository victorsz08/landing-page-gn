import Link from "next/link";
import {} from "next/navigation";

interface MenuItemProps {
  children?: React.ReactNode;
  link: string;
}

export function MenuItem({ children, link }: MenuItemProps) {
  return (
    <Link
      href={link}
      className="text-xs font-medium text-foreground/70 hover:text-primary 
        transition-colors duration-200 cursor-pointer"
    >{children}</Link>
  );
}
