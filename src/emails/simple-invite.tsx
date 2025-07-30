import { Container, Html, Preview } from "@react-email/components";
import { Body } from "./_components/body";
import { Button } from "./_components/button";
import { LeftAligned as Footer } from "./_components/footer";
import { Head } from "./_components/head";
import { LeftAligned as Header } from "./_components/header";
import { Tailwind } from "./_components/tailwind";
import { Text } from "./_components/text";

export default function SimpleInvite({ theme }: { theme?: "light" | "dark" }) {
    return (
        <Html>
            <Tailwind theme={theme}>
                <Head />
                <Preview>Simple Invite</Preview>
                <Body>
                    <Container align="center" className="w-full max-w-160 bg-primary md:p-8">
                        <Header />
                        <Container align="left" className="max-w-full px-6 py-8">
                            <Text className="text-md text-tertiary">
                                Hi Olivia,
                                <br />
                                <br />
                                Alicia has invited you to join the team on <span className="text-md font-semibold">Untitled</span>.
                            </Text>
                            <Button href="https://www.untitledui.com/" className="my-6">
                                <Text className="text-md font-semibold">Accept the invite</Text>
                            </Button>
                            <Text className="text-md text-tertiary">
                                Thanks,
                                <br />
                                The team
                            </Text>
                        </Container>
                        <Footer />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
