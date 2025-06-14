import clsx from "clsx";

interface TitleProps {
    title: string;
    className?: string;
}

export default function Title({ title, className, ...rest }: TitleProps) {
    return (
        <div className={clsx("flex-col flex items-center gap-y-3", className )} {...rest}>
            <h3 className="text-primary-brown">{title}</h3>
            <div className="w-32 h-1 bg-primary-brown"></div>
        </div>
    );
}