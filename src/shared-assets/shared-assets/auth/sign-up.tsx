import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { LogoMark } from "./logomark";

export const SignupCardCombined = () => {
    return (
        <section className="min-h-screen bg-primary px-4 py-12 sm:bg-secondary md:px-8 md:pt-24 md:pb-[270px]">
            <div className="flex w-full flex-col gap-6 bg-primary sm:mx-auto sm:max-w-110 sm:rounded-2xl sm:px-10 sm:py-8 sm:shadow-sm">
                <div className="flex flex-col items-center gap-6 text-center">
                    <LogoMark size="lg" className="max-md:hidden" />
                    <LogoMark size="md" className="md:hidden" />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-display-xs font-semibold text-primary">Start your free trial</h1>
                        <p className="text-md text-tertiary">Sign up in less than 2 minutes.</p>
                    </div>
                </div>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));
                        console.log("Form data:", data);
                    }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-5">
                        <Input isRequired name="name" placeholder="Enter your name" size="md" />
                        <Input isRequired type="email" name="email" placeholder="Enter your email" size="md" />
                        <Input
                            isRequired
                            type="password"
                            name="password"
                            size="md"
                            placeholder="Create a password"
                            hint="Must be at least 8 characters."
                            minLength={8}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button type="submit" size="lg">
                            Get started
                        </Button>
                        <SocialButton social="google" theme="color">
                            Sign up with Google
                        </SocialButton>
                    </div>
                </Form>

                <div className="flex justify-center gap-1 text-center">
                    <span className="text-sm text-tertiary">Already have an account?</span>
                    <Button href="#" color="link-color" size="md">
                        Log in
                    </Button>
                </div>
            </div>
        </section>
    );
};
