import { ArrowLeft, Key01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icons";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export const Step1ForgotPassword = () => {
    return (
        <section className="min-h-screen overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full max-w-90 flex-col gap-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="relative">
                        <FeaturedIcon color="gray" theme="modern" size="xl" className="z-10">
                            <Key01 className="size-7" />
                        </FeaturedIcon>
                        <BackgroundPattern size="lg" pattern="grid" className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
                        <BackgroundPattern size="md" pattern="grid" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden" />
                    </div>

                    <div className="z-10 flex flex-col gap-2 md:gap-3">
                        <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Forgot password?</h1>
                        <p className="self-stretch text-md text-tertiary">No worries, we'll send you reset instructions.</p>
                    </div>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Form data:", data);
                    }}
                    className="z-10 flex flex-col gap-6"
                >
                    <Input isRequired hideRequiredIndicator label="Email" type="email" name="email" placeholder="Enter your email" size="md" />

                    <div className="flex flex-col gap-4">
                        <Button type="submit" size="lg">
                            Reset password
                        </Button>
                    </div>
                </Form>

                <div className="z-10 flex justify-center gap-1 text-center">
                    <Button size="md" color="link-gray" href="#" className="mx-auto" iconLeading={ArrowLeft}>
                        Back to log in
                    </Button>
                </div>
            </div>
        </section>
    );
};
