import { Container, Button as EmailButton, Html, Preview, Row, Section } from "@react-email/components";
import { Body } from "./_components/body";
import { Button } from "./_components/button";
import { LeftAligned as Footer } from "./_components/footer";
import { Head } from "./_components/head";
import { LeftAligned as Header } from "./_components/header";
import { Tailwind } from "./_components/tailwind";
import { Text } from "./_components/text";

export default function SimpleVerification({ theme }: { theme?: "light" | "dark" }) {
    return (
        <Html>
            <Tailwind theme={theme}>
                <Head />
                <Preview>Simple Verification</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-primary md:p-8">
                        <Header />
                        <Section align="left" className="max-w-full px-6 py-8">
                            <Row className="mb-6">
                                <Text className="text-tertiary">
                                    Hi Olivia,
                                    <br />
                                    <br />
                                    This is your verification code:
                                </Text>
                            </Row>
                            <Row className="mb-6 min-w-72">
                                <EmailButton className="rounded-[10px] bg-border-brand p-0.5">
                                    <Text className="size-11 rounded-lg bg-primary p-2 text-center align-middle text-display-md font-medium text-brand-tertiary_alt md:size-[62px] md:p-0 md:text-display-lg">
                                        3
                                    </Text>
                                </EmailButton>
                                <EmailButton className="ml-2 rounded-[10px] bg-border-brand p-0.5">
                                    <Text className="size-11 rounded-lg bg-primary p-2 text-center align-middle text-display-md font-medium text-brand-tertiary_alt md:size-[62px] md:p-0 md:text-display-lg">
                                        0
                                    </Text>
                                </EmailButton>
                                <EmailButton className="ml-2 rounded-[10px] bg-border-brand p-0.5">
                                    <Text className="size-11 rounded-lg bg-primary p-2 text-center align-middle text-display-md font-medium text-brand-tertiary_alt md:size-[62px] md:p-0 md:text-display-lg">
                                        6
                                    </Text>
                                </EmailButton>
                                <EmailButton className="ml-2 rounded-[10px] bg-border-brand p-0.5">
                                    <Text className="size-11 rounded-lg bg-primary p-2 text-center align-middle text-display-md font-medium text-brand-tertiary_alt md:size-[62px] md:p-0 md:text-display-lg">
                                        6
                                    </Text>
                                </EmailButton>
                            </Row>
                            <Row className="mb-6">
                                <Text className="text-md text-tertiary">
                                    This code will only be valid for the next 5 minutes. If the code does not work, you can use this login verification link:
                                </Text>
                            </Row>
                            <Row className="mb-6">
                                <Button href="https://www.untitledui.com/" className="mb-6">
                                    <Text className="text-md font-semibold">Verify email</Text>
                                </Button>
                            </Row>
                            <Row>
                                <Text className="text-md text-tertiary">
                                    Thanks,
                                    <br />
                                    The team
                                </Text>
                            </Row>
                        </Section>
                        <Footer />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
