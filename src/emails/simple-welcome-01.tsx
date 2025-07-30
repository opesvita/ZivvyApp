import { Container, Html, Preview } from "@react-email/components";
import { Body } from "./_components/body";
import { Button } from "./_components/button";
import { LeftAligned as Footer } from "./_components/footer";
import { Head } from "./_components/head";
import { LeftAlignedLinks as Header } from "./_components/header";
import { Tailwind } from "./_components/tailwind";
import { Text } from "./_components/text";

export default function SimpleWelcome01({ theme }: { theme?: "light" | "dark" }) {
    return (
        <Html>
            <Tailwind theme={theme}>
                <Head />
                <Preview>Simple welcome 01</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-primary md:p-8">
                        <Header />
                        <Container align="left" className="max-w-full px-6 py-8">
                            <Text className="text-sm text-tertiary md:text-md">
                                Hi Olivia,
                                <br />
                                <br />
                                We're glad to have you onboard! You're already on your way to creating beautiful visual products.
                                <br />
                                <br />
                                Whether you're here for your brand, for a cause, or just for fun—welcome! If there's anything you need, we'll be here every step
                                of the way.
                                <br />
                                <br />
                                Thanks,
                                <br />
                                The team
                            </Text>
                            <Button href="https://www.untitledui.com/" className="mt-8">
                                <Text className="text-md font-semibold">Log in</Text>
                            </Button>
                        </Container>
                        <Footer />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
