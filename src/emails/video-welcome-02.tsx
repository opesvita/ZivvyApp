import { Column, Container, Button as EmailButton, Html, Img, Preview, Row } from "@react-email/components";
import { Body } from "./_components/body";
import { Button } from "./_components/button";
import { LeftAligned as Footer } from "./_components/footer";
import { Head } from "./_components/head";
import { LeftAlignedSocials as Header } from "./_components/header";
import { Tailwind } from "./_components/tailwind";
import { Text } from "./_components/text";

export default function VideoWelcome02({ theme }: { theme?: "light" | "dark" }) {
    return (
        <Html>
            <Tailwind theme={theme}>
                <Head />
                <Preview>Video welcome 02</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-secondary md:p-8">
                        <Header />
                        <Container align="left" className="max-w-full bg-primary px-6 py-8">
                            <Row className="mb-6">
                                <Text className="text-center text-display-xs font-semibold text-primary md:text-display-md">
                                    How to get up and running as soon as possible
                                </Text>
                            </Row>
                            <Row className="mb-8">
                                <Text className="text-center text-sm text-tertiary md:text-md">
                                    We've created a quick intro video to get you up and running as soon as possible. Don't hestitate to{" "}
                                    <EmailButton className="text-tertiary" href="https://www.untitledui.com/">
                                        <span className="underline">get in touch</span>
                                    </EmailButton>
                                    .
                                </Text>
                            </Row>
                            <Row className="mb-8 max-w-full">
                                <EmailButton aria-label="Video tutorial on getting started" href="https://www.untitledui.com/">
                                    <Img
                                        aria-hidden
                                        src="https://www.untitledui.com/images/email/video-welcome-02.webp"
                                        alt="Video player"
                                        className="w-full"
                                    />
                                </EmailButton>
                            </Row>
                            <Row className="border-collapse">
                                <Column align="center">
                                    <Button href="https://www.untitledui.com/" className="text-center align-middle">
                                        <Img
                                            aria-hidden
                                            src="https://www.untitledui.com/images/email/play-circle-white.webp"
                                            alt="Play circle"
                                            className="inline size-5 align-middle opacity-70"
                                        />
                                        <span className="ml-1.5 align-middle">Watch video</span>
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
