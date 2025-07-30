import { Container, Html, Img, Preview, Row } from "@react-email/components";
import { Body } from "./_components/body";
import { Button } from "./_components/button";
import { LeftAligned as Footer } from "./_components/footer";
import { Head } from "./_components/head";
import { LeftAligned as Header } from "./_components/header";
import { Tailwind } from "./_components/tailwind";
import { Text } from "./_components/text";

export default function ImageWelcome({ theme }: { theme?: "light" | "dark" }) {
    return (
        <Html>
            <Tailwind theme={theme}>
                <Head />
                <Preview>Image Welcome</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-secondary md:p-8">
                        <Header />
                        <Container align="left" className="max-w-full bg-primary px-6 py-8">
                            <Row className="mb-12 max-w-full">
                                <Img
                                    aria-hidden
                                    src="https://www.untitledui.com/images/email/image-welcome.webp"
                                    alt="Simple Welcome Image"
                                    className="h-80 w-full"
                                />
                            </Row>
                            <Row className="mb-6">
                                <Text className="text-display-xs font-semibold text-primary md:text-display-sm">Hi Olivia,</Text>
                            </Row>
                            <Row className="mb-12">
                                <Text className="text-md text-tertiary md:text-lg">
                                    We're glad to have you onboard! You're already on your way to creating beautiful visual products.
                                    <br />
                                    <br />
                                    Whether you're here for your brand, for a cause, or just for fun—welcome! If there's anything you need, we'll be here every
                                    step of the way.
                                    <br />
                                    <br />
                                    Thanks,
                                    <br />
                                    The team
                                </Text>
                            </Row>

                            <Button href="https://www.untitledui.com/login">
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
