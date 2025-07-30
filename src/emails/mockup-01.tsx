import { Container, Html, Img, Preview, Row } from "@react-email/components";
import { Body } from "./_components/body";
import { Button } from "./_components/button";
import { LeftAlignedActions as Footer } from "./_components/footer";
import { Head } from "./_components/head";
import { LeftAlignedSocials as Header } from "./_components/header";
import { Tailwind } from "./_components/tailwind";
import { Text } from "./_components/text";

export default function Mockup01({ theme }: { theme?: "light" | "dark" }) {
    return (
        <Html>
            <Tailwind theme={theme}>
                <Head />
                <Preview>Mockup 01</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-secondary md:p-8">
                        <Header />
                        <Container align="left" className="max-w-full bg-primary px-6 py-8">
                            <Row className="mb-8 max-w-full">
                                <Img aria-hidden src="https://www.untitledui.com/images/email/mockup-01.webp" alt="Mockup 01" className="w-full" />
                            </Row>
                            <Row className="mb-6">
                                <Text className="text-display-xs font-semibold text-primary md:text-display-sm">
                                    Meet Untitled: a clean, modern UI kit for beautiful interfaces
                                </Text>
                            </Row>
                            <Row className="mb-8">
                                <Text className="text-sm text-tertiary md:text-md">
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

                            <Row>
                                <Button href="https://www.untitledui.com/" className="pr-4">
                                    <span className="mr-2">Download now</span>
                                    <Img
                                        aria-hidden
                                        src="https://www.untitledui.com/images/email/arrow-right.webp"
                                        alt="Arrow Right"
                                        className="inline size-5 align-middle opacity-70"
                                    />
                                </Button>
                            </Row>
                        </Container>
                        <Footer />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
