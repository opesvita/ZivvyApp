import type { ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { PlayIcon } from "@/components/base/video-player/icons";
import { cx } from "@/utils/cx";

interface FeaturedCardCommonProps {
    title: string;
    description: ReactNode;
    confirmLabel: string;
    className?: string;
    onDismiss: () => void;
    onConfirm: () => void;
}

export const FeaturedCardImage = ({
    title,
    description,
    confirmLabel,
    imageSrc,
    className,
    onDismiss,
    onConfirm,
}: FeaturedCardCommonProps & {
    imageSrc: string;
}) => {
    return (
        <div className={cx("relative flex flex-col rounded-xl bg-secondary p-4", className)}>
            <p className="text-sm font-semibold text-primary">{title}</p>
            <p className="mt-1 text-sm text-tertiary">{description}</p>

            <div className="absolute top-2 right-2">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>

            <div className="relative mt-4 w-full">
                <img
                    src={imageSrc}
                    className="aspect-video w-full rounded-lg object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                    alt={title}
                />
                <PlayIcon className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-fg-white" />
            </div>

            <div className="mt-4 flex gap-3">
                <Button onClick={onDismiss} color="link-gray" size="sm">
                    Dismiss
                </Button>
                <Button onClick={onConfirm} color="link-color" size="sm">
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};
