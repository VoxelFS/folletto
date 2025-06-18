import { TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import clsx from "clsx";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    className?: string;
    name: string;
    error?: FieldError;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
    ({ label, className, error, ...rest }, ref) => {
        return (
            <div className="mb-4">
                <label className="block mb-1 font-medium">
                    * {label}
                </label>
                <textarea
                    ref={ref}
                    className={clsx(`px-4 py-5 bg-background-white placeholder-subtext-black`, className)}
                    rows={4}
                    {...rest}
                />
                {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </div>
        );
    }
);

FormTextarea.displayName = "FormTextarea";
export default FormTextarea;
