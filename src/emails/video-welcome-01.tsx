import { Container, Button as EmailButton, Html, Img, Preview, Row } from "@react-email/components";
import { Body } from "./_components/body";
import { CenterAlignedActions as Footer } from "./_components/footer";
import { Head } from "./_components/head";
import { CenterAligned as Header } from "./_components/header";
import { Tailwind } from "./_components/tailwind";
import { Text } from "./_components/text";

export default function VideoWelcome01({ theme }: { theme?: "light" | "dark" }) {
    return (
        <Html>
            <Tailwind theme={theme}>
                <Head />
                <Preview>Video welcome 01</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-secondary md:p-8">
                        <Header />
                        <Container align="left" className="max-w-full bg-primary px-6 py-8">
                            <Row className="mb-8">
                                <Text className="text-sm text-tertiary md:text-md">
                                    Hi Olivia,
                                    <br />
                                    <br />
                                    Welcome to Untitled! You're already on your way to creating beautiful visual products.
                                    <br />
                                    <br />
                                    We've created a quick intro video to get you up and running as soon as possible. If you have any questions,{" "}
                                    <EmailButton className="text-tertiary" href="https://www.untitledui.com/">
                                        <span className="underline">please get in touch</span>
                                    </EmailButton>
                                    .
                                </Text>
                            </Row>
                            <Row className="mb-8 max-w-full">
                                <EmailButton aria-label="Video tutorial on getting started" href="https://www.untitledui.com/">
                                    <Img
                                        aria-hidden
                                        src="https://www.untitledui.com/images/email/video-welcome-01.webp"
                                        alt="Video player"
                                        className="w-full"
                                    />
                                </EmailButton>
                            </Row>
                            <Row>
                                <Text className="text-md text-tertiary">
                                    Thanks,
                                    <br />
                                    The team
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
