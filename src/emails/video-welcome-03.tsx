import { Column, Container, Button as EmailButton, Html, Img, Preview, Row } from "@react-email/components";
import { Body } from "./_components/body";
import { Button } from "./_components/button";
import { CenterAlignedDivider as Footer } from "./_components/footer";
import { Head } from "./_components/head";
import { LeftAligned as Header } from "./_components/header";
import { Tailwind } from "./_components/tailwind";
import { Text } from "./_components/text";

export default function VideoWelcome03({ theme }: { theme?: "light" | "dark" }) {
    return (
        <Html>
            <Tailwind theme={theme}>
                <Head />
                <Preview>Video welcome 03</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-secondary md:p-8">
                        <Header />
                        <Container align="left" className="max-w-full bg-primary px-6 py-8">
                            <Row className="mb-12 max-w-full">
                                <EmailButton aria-label="Video tutorial on getting started" href="https://www.untitledui.com/">
                                    <Img
                                        aria-hidden
                                        src="https://www.untitledui.com/images/email/video-welcome-03.webp"
                                        alt="Video player"
                                        className="w-full"
                                    />
                                </EmailButton>
                            </Row>
                            <Row className="mb-4">
                                <Text className="text-center text-display-xs font-semibold text-primary md:text-display-sm">Welcome to Untitled!</Text>
                            </Row>
                            <Row className="mb-12">
                                <Text className="text-center text-md text-tertiary md:text-lg">
                                    Hi Olivia, thanks for checking out Untitled. Here are a few tips to help you get up and running as soon as possible. If you
                                    have any questions, just reply to this email—we'll be happy to hear from you!
                                </Text>
                            </Row>
                            <Row className="border-collapse">
                                <Column align="center">
                                    <Button href="https://www.untitledui.com/" color="secondary" className="mr-1.5 text-center align-middle">
                                        <Img
                                            aria-hidden
                                            src="https://www.untitledui.com/images/email/play-circle.webp"
                                            alt="Play circle"
                                            className="inline size-5 align-middle opacity-50"
                                        />
                                        <span className="ml-1.5">Watch intro</span>
                                    </Button>

                                    <Button href="https://www.untitledui.com/" className="ml-1.5">
                                        Log in
                                    </Button>
                                </Column>
                            </Row>
                        </Container>
                        <Footer />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
