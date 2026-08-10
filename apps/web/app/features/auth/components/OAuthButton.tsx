import type { ComponentType } from "react";
import {SvgIconProps} from "@thesvg/react";

interface OAuthButtonProps {
    label: string;
    Icon: ComponentType<SvgIconProps>;
    onClick: () => void;
    disabled?: boolean;
}

const OAuthButton = ({
                                label,
                                Icon,
                                onClick,
                                disabled,
                            }: OAuthButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
            <Icon className="h-4 w-4 shrink-0" />
            <span>{label}</span>
        </button>
    );
}

export default OAuthButton;