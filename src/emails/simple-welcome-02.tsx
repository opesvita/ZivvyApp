import { Column, Container, Button as EmailButton, Hr, Html, Img, Preview, Row } from "@react-email/components";
import { Body } from "./_components/body";
import { Button } from "./_components/button";
import { LeftAligned as Footer } from "./_components/footer";
import { Head } from "./_components/head";
import { LeftAligned as Header } from "./_components/header";
import { Tailwind } from "./_components/tailwind";
import { Text } from "./_components/text";

export default function SimpleWelcome02({ theme }: { theme?: "light" | "dark" }) {
    return (
        <Html>
            <Tailwind theme={theme}>
                <Head />
                <Preview>Simple welcome 02</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-primary md:p-8">
                        <Header />
                        <Container align="left" className="max-w-full px-6 py-8">
                            <Row className="mb-12 max-w-full">
                                <Img
                                    aria-hidden
                                    height="auto"
                                    src="https://www.untitledui.com/images/email/simple-welcome-02.webp"
                                    alt="Simple Welcome Image"
                                    className="w-full"
                                />
                            </Row>
                            <Row className="mb-6">
                                <Text className="text-display-xs font-semibold text-primary md:text-display-sm">Welcome to Untitled</Text>
                            </Row>
                            <Row>
                                <Text className="text-sm text-tertiary md:text-md">
                                    We're excited to welcome you to Untitled and we're even more excited about what we've got planned. You're already on your
                                    way to creating beautiful visual products.
                                    <br />
                                    <br />
                                    Whether you're here for your brand, for a cause, or just for fun—welcome! If there's anything you need, we'll be here every
                                    step of the way.
                                </Text>
                            </Row>
                            <Row align="left" className="my-6 mr-auto">
                                <Column className="w-5" align="left">
                                    <Hr className="m-0 w-20 border-t border-secondary" />
                                </Column>
                            </Row>
                            <Row className="mb-2">
                                <EmailButton href="https://www.untitledui.com/">
                                    <Text className="text-sm font-semibold text-brand-secondary underline md:text-md">Untitled changelog →</Text>
                                </EmailButton>
                            </Row>
                            <Row>
                                <Text className="text-sm text-tertiary md:text-md">Weekly new updates and improvements to Untitled.</Text>
                            </Row>
                            <Row align="left" className="my-6 mr-auto">
                                <Column className="w-5" align="left">
                                    <Hr className="m-0 w-20 border-t border-secondary" />
                                </Column>
                            </Row>
                            <Row className="mb-2">
                                <EmailButton href="https://www.untitledui.com/">
                                    <Text className="text-sm font-semibold text-brand-secondary underline md:text-md">Follow us on Twitter →</Text>
                                </EmailButton>
                            </Row>
                            <Row>
                                <Text className="text-sm text-tertiary md:text-md">Weekly Stay up-to-date with the latest announcements and jobs.</Text>
                            </Row>
                            <Row align="left" className="my-6 mr-auto">
                                <Column className="w-5" align="left">
                                    <Hr className="m-0 w-20 border-t border-secondary" />
                                </Column>
                            </Row>
                            <Row className="mb-2">
                                <EmailButton href="https://www.untitledui.com/">
                                    <Text className="text-sm font-semibold text-brand-secondary underline md:text-md">Why we're building Untitled →</Text>
                                </EmailButton>
                            </Row>
                            <Row>
                                <Text className="text-sm text-tertiary md:text-md">Weekly Untitled is a new standard of design system and UI kit.</Text>
                            </Row>
                            <Row align="left" className="my-6 mr-auto">
                                <Column className="w-5" align="left">
                                    <Hr className="m-0 w-20 border-t border-secondary" />
                                </Column>
                            </Row>
                            <Row className="mb-12">
                                <Text className="text-sm text-tertiary md:text-md">
                                    Thanks for signing up. If you have any questions, send us a message at{" "}
                                    <EmailButton href="mailto:hi@untitledui.com" className="text-sm font-semibold text-brand-secondary md:text-md">
                                        hi@untitledui.com
                                    </EmailButton>{" "}
                                    or on{" "}
                                    <EmailButton href="https://www.untitledui.com/" className="text-sm font-semibold text-brand-secondary md:text-md">
                                        X (Twitter)
                                    </EmailButton>
                                    . We'd love to hear from you.
                                    <br />
                                    <br />— The team
                                </Text>
                            </Row>
                            <Button href="#login">
                                <Text className="text-sm font-semibold md:text-md">Get started</Text>
                            </Button>
                        </Container>
                        <Footer />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
