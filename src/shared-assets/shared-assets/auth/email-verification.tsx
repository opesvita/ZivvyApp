import { ArrowLeft, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icons";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const Step1CheckEmail = () => {
    return (
        <section className="flex min-h-screen flex-1 overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full max-w-90 flex-col gap-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="relative">
                        <FeaturedIcon color="gray" theme="modern" size="xl" className="relative z-10">
                            <Mail01 className="size-7" />
                        </FeaturedIcon>
                        <BackgroundPattern pattern="grid" size="lg" className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
                        <BackgroundPattern pattern="grid" size="md" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden" />
                    </div>

                    <div className="z-10 flex flex-col gap-2 md:gap-3">
                        <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Check your email</h1>
                        <p className="text-md text-tertiary">
                            We sent a verification link to <span className="font-medium">olivia@untitledui.com</span>
                        </p>
                    </div>
                </div>

                <div className="z-10 flex flex-col">
                    <Button type="submit" size="lg">
                        Enter code manually
                    </Button>
                </div>

                <div className="flex justify-center gap-1 text-center">
                    <Button color="link-gray" size="md" href="#" className="mx-auto" iconLeading={ArrowLeft}>
                        Back to log in
                    </Button>
                </div>
            </div>
        </section>
    );
};
