import type { SVGProps } from "react";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { cx } from "@/utils/cx";

export const LogoMark = (props: Props) => {
    const { size = "lg", type = "default", className, ...rest } = props;
    const types = {
        default: sizes[size],
        "with-text": WithText,
    };
    const Logo = types[type];
    return <Logo {...rest} className={className} />;
};

const lg = (props: SVGProps<SVGSVGElement>) => {
    return <UntitledLogoMinimal {...props} className={cx("size-12", props.className)} />;
};

const md = (props: SVGProps<SVGSVGElement>) => {
    return <UntitledLogoMinimal {...props} className={cx("size-10", props.className)} />;
};

const sm = (props: SVGProps<SVGSVGElement>) => {
    return <UntitledLogoMinimal {...props} className={cx("size-8", props.className)} />;
};

const WithText = (props: SVGProps<SVGSVGElement>) => {
    return <UntitledLogo {...props} />;
};
const sizes = {
    sm,
    md,
    lg,
};

interface Props extends SVGProps<SVGSVGElement> {
    size?: "sm" | "md" | "lg";
    className?: string;
    type?: "default" | "with-text";
}
