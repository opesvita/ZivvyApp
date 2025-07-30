import { Column, Container, Button as EmailButton, Html, Img, Preview, Row } from "@react-email/components";
import { Body } from "./_components/body";
import { CenterAlignedDivider as Footer } from "./_components/footer";
import { Head } from "./_components/head";
import { CenterAligned as Header } from "./_components/header";
import { Tailwind } from "./_components/tailwind";
import { Text } from "./_components/text";

export default function Mockup02({ theme }: { theme?: "light" | "dark" }) {
    return (
        <Html>
            <Tailwind theme={theme}>
                <Head />
                <Preview>Mockup 02</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-secondary md:p-8">
                        <Header />
                        <Container align="left" className="max-w-full bg-primary px-6 py-8">
                            <Row className="mb-8 max-w-full">
                                <Img aria-hidden src="https://www.untitledui.com/images/email/mockup-02.webp" alt="Mockup 01" className="w-full" />
                            </Row>
                            <Row className="mb-4">
                                <Text className="text-center text-display-xs font-semibold text-primary md:text-display-sm">Welcome to Untitled!</Text>
                            </Row>
                            <Row className="mb-8">
                                <Text className="text-center text-md text-tertiary md:text-lg">
                                    Hi Olivia, thanks for checking out Untitled. Get the most of Untitled by installing our new mobile app.
                                </Text>
                            </Row>
                            <Row align="left" className="mb-8">
                                <Column align="right" className="pr-1.5">
                                    <EmailButton aria-label="Download in App Store" href="https://www.untitledui.com/">
                                        <Img aria-hidden src="https://www.untitledui.com/images/email/app-store.webp" alt="App Store" className="h-10" />
                                    </EmailButton>
                                </Column>
                                <Column align="left" className="pl-1.5">
                                    <EmailButton aria-label="Download in Google Play" href="https://www.untitledui.com/">
                                        <Img aria-hidden src="https://www.untitledui.com/images/email/google-play.webp" alt="Google play" className="h-10" />
                                    </EmailButton>
                                </Column>
                            </Row>
                            <Row>
                                <Text className="text-center text-md text-tertiary md:text-lg">
                                    If you have any questions, just reply to this email—we'll be happy to hear from you!
                                </Text>
                            </Row>
                        </Container>
                        <Footer />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
