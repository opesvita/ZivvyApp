import { Column, Container, Button as EmailButton, Hr, Img, Row } from "@react-email/components";
import { Text } from "./text";

export function LeftAligned() {
    return (
        <Container align="left" className="max-w-full bg-primary p-6 py-8">
            <Text className="text-sm text-tertiary">
                This email was sent to{" "}
                <EmailButton href="https://www.untitledui.com/" className="text-brand-secondary">
                    <span className="underline">olivia@untitledui.com</span>
                </EmailButton>
                . If you'd rather not receive this kind of email, you can{" "}
                <EmailButton href="https://www.untitledui.com/" className="text-brand-secondary">
                    <span className="underline">unsubscribe</span>
                </EmailButton>{" "}
                or{" "}
                <EmailButton href="https://www.untitledui.com/" className="text-brand-secondary">
                    <span className="underline">manage your email preferences</span>
                </EmailButton>
                . <br />
                <br />© 2077 Untitled UI, 100 Smith Street, Melbourne VIC 3000
            </Text>

            <Row className="mt-12">
                <Column>
                    <Img aria-hidden src="https://www.untitledui.com/images/email/logo.png" alt="Untitled logo" className="h-6" />
                </Column>
                <Column className="ml-auto w-9">
                    <EmailButton aria-label="X (formerly Twitter)" href="https://www.untitledui.com/">
                        <Img aria-hidden className="size-5" src="https://www.untitledui.com/images/email/x.webp" alt="X logo" />
                    </EmailButton>
                </Column>
                <Column className="w-9">
                    <EmailButton aria-label="Facebook" href="https://www.untitledui.com/">
                        <Img aria-hidden className="size-5" src="https://www.untitledui.com/images/email/facebook.webp" alt="Facebook logo" />
                    </EmailButton>
                </Column>
                <Column className="w-5">
                    <EmailButton aria-label="Instagram" href="https://www.untitledui.com/">
                        <Img aria-hidden className="size-5" src="https://www.untitledui.com/images/email/instagram.webp" alt="Instagram logo" />
                    </EmailButton>
                </Column>
            </Row>
        </Container>
    );
}

export function CenterAligned() {
    return (
        <Container className="max-w-full bg-primary px-6 py-8">
            <Row align="center" className="mb-8">
                <Column align="center">
                    <EmailButton aria-label="X (formerly Twitter)" href="https://www.untitledui.com/">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/x.webp" alt="X logo" className="size-5" />
                    </EmailButton>
                    <EmailButton aria-label="Facebook" href="https://www.untitledui.com/" className="mx-4">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/facebook.webp" alt="Facebook logo" className="size-5" />
                    </EmailButton>
                    <EmailButton aria-label="Instagram" href="https://www.untitledui.com/">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/instagram.webp" alt="Instagram logo" className="size-5" />
                    </EmailButton>
                </Column>
            </Row>
            <Row>
                <Text className="text-center text-sm text-tertiary">
                    Untitled is committed to sustainable building. This email was sent with 200% carbon offset. If you'd prefer to not receive these emails,
                    please{" "}
                    <EmailButton href="https://www.untitledui.com/" className="text-brand-secondary">
                        <span className="underline">unsubscribe</span>
                    </EmailButton>
                    .
                    <br />
                    <br />
                    © 2077 Untitled UI
                    <br />
                    100 Smith Street, Melbourne VIC 3000
                </Text>
            </Row>
        </Container>
    );
}

export function CenterAlignedDivider() {
    return (
        <Container className="max-w-full bg-primary px-6 py-8">
            <Row className="mb-8">
                <Column>
                    <Hr className="border-t border-secondary" />
                </Column>
            </Row>
            <Row className="mb-8">
                <Text className="text-center text-sm text-tertiary">
                    You're receiving this email because you subscribed to receive marketing emails. If you'd prefer to not receive these emails, please{" "}
                    <EmailButton href="https://www.untitledui.com/" className="text-brand-secondary">
                        <span className="underline">unsubscribe</span>
                    </EmailButton>
                    .
                </Text>
            </Row>
            <Row className="mb-8">
                <Column align="center">
                    <EmailButton href="https://www.untitledui.com/" className="mr-4 text-sm text-tertiary">
                        <Text className="underline">Terms</Text>
                    </EmailButton>
                    <EmailButton href="https://www.untitledui.com/" className="mr-2 text-sm text-tertiary">
                        <Text className="underline">Privacy</Text>
                    </EmailButton>
                    <EmailButton href="https://www.untitledui.com/" className="ml-2 text-sm text-tertiary">
                        <Text className="underline">Cookies</Text>
                    </EmailButton>
                    <EmailButton href="https://www.untitledui.com/" className="ml-4 text-sm text-tertiary">
                        <Text className="underline">Contact us</Text>
                    </EmailButton>
                </Column>
            </Row>
            <Row>
                <Text className="text-center text-sm text-tertiary">
                    © 2077 Untitled UI
                    <br />
                    100 Smith Street, Melbourne VIC 3000
                </Text>
            </Row>
        </Container>
    );
}

export function LeftAlignedActions() {
    return (
        <Container className="max-w-full bg-primary px-6 py-8">
            <Row className="mb-2">
                <Text className="text-md font-semibold text-primary">Download the app</Text>
            </Row>
            <Row className="mb-6">
                <Text className="text-sm text-tertiary">Get the most of Untitled by installing our new mobile app.</Text>
            </Row>
            <Row align="left" className="mb-12">
                <Column align="left" className="w-[120px] pr-1.5">
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
            <Row className="mb-12">
                <Text className="text-sm text-tertiary">
                    This email was sent to{" "}
                    <EmailButton href="https://www.untitledui.com/" className="text-brand-secondary">
                        <span className="underline">olivia@untitledui.com</span>
                    </EmailButton>
                    . If you'd rather not receive this kind of email, you can{" "}
                    <EmailButton href="https://www.untitledui.com/" className="text-brand-secondary">
                        <span className="underline">unsubscribe</span>
                    </EmailButton>{" "}
                    or{" "}
                    <EmailButton href="https://www.untitledui.com/" className="text-brand-secondary">
                        <span className="underline">manage your email preferences</span>
                    </EmailButton>
                    . <br />
                    <br />© 2077 Untitled UI, 100 Smith Street, Melbourne VIC 3000
                </Text>
            </Row>
            <Row>
                <Column>
                    <Img aria-hidden src="https://www.untitledui.com/images/email/logo.png" alt="Untitled logo" className="h-6" />
                </Column>
                <Column className="ml-auto w-9">
                    <EmailButton aria-label="X (formerly Twitter)" href="https://www.untitledui.com/">
                        <Img aria-hidden className="size-5" src="https://www.untitledui.com/images/email/x.webp" alt="X logo" />
                    </EmailButton>
                </Column>
                <Column className="w-9">
                    <EmailButton aria-label="Facebook">
                        <Img aria-hidden className="size-5" src="https://www.untitledui.com/images/email/facebook.webp" alt="Facebook logo" />
                    </EmailButton>
                </Column>
                <Column className="w-5">
                    <EmailButton aria-label="Instagram">
                        <Img aria-hidden className="size-5" src="https://www.untitledui.com/images/email/instagram.webp" alt="Instagram logo" />
                    </EmailButton>
                </Column>
            </Row>
        </Container>
    );
}

export function CenterAlignedActions() {
    return (
        <Container className="max-w-full bg-primary px-6 py-8">
            <Row align="center" className="mb-2">
                <Text className="text-center text-md font-semibold text-primary">Download the app</Text>
            </Row>
            <Row align="center" className="mb-6">
                <Text className="text-center text-sm text-tertiary">Get the most of Untitled by installing our new mobile app.</Text>
            </Row>
            <Row align="center" className="mb-8">
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
            <Row align="center" className="mb-8">
                <Column align="center">
                    <EmailButton aria-label="X (formerly Twitter)" href="https://www.untitledui.com/">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/x.webp" alt="X logo" className="size-5" />
                    </EmailButton>
                    <EmailButton aria-label="Facebook" href="https://www.untitledui.com/" className="mx-4">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/facebook.webp" alt="Facebook logo" className="size-5" />
                    </EmailButton>
                    <EmailButton aria-label="Instagram" href="https://www.untitledui.com/">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/instagram.webp" alt="Instagram logo" className="size-5" />
                    </EmailButton>
                </Column>
            </Row>
            <Row>
                <Text className="text-center text-sm text-tertiary">
                    Untitled is committed to sustainable building. This email was sent with 200% carbon offset. If you'd prefer to not receive these emails,
                    please{" "}
                    <EmailButton href="https://www.untitledui.com/" className="text-brand-secondary">
                        <span className="underline">unsubscribe</span>
                    </EmailButton>
                    .
                    <br />
                    <br />
                    © 2077 Untitled UI
                    <br />
                    100 Smith Street, Melbourne VIC 3000
                </Text>
            </Row>
        </Container>
    );
}

export function CenterAlignedDividerActions() {
    return (
        <Container className="max-w-full bg-primary px-6 py-8">
            <Row className="mb-8">
                <Column>
                    <Hr className="border-t border-secondary" />
                </Column>
            </Row>
            <Row align="center" className="mb-2">
                <Text className="text-center text-md font-semibold text-primary">Download the app</Text>
            </Row>
            <Row align="center" className="mb-6">
                <Text className="text-center text-sm text-tertiary">Get the most of Untitled by installing our new mobile app.</Text>
            </Row>
            <Row align="center" className="mb-8">
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
            <Row className="mb-8">
                <Column>
                    <Hr className="border-t border-secondary" />
                </Column>
            </Row>
            <Row className="mb-8">
                <Text className="text-center text-sm text-tertiary">
                    You're receiving this email because you subscribed to receive marketing emails. If you'd prefer to not receive these emails, please{" "}
                    <EmailButton href="https://www.untitledui.com/" className="text-brand-secondary">
                        <span className="underline">unsubscribe</span>
                    </EmailButton>
                    .
                </Text>
            </Row>
            <Row className="mb-8">
                <Column align="center">
                    <EmailButton href="https://www.untitledui.com/" className="mr-4 text-sm text-tertiary">
                        <Text className="underline">Terms</Text>
                    </EmailButton>
                    <EmailButton href="https://www.untitledui.com/" className="mr-2 text-sm text-tertiary">
                        <Text className="underline">Privacy</Text>
                    </EmailButton>
                    <EmailButton href="https://www.untitledui.com/" className="ml-2 text-sm text-tertiary">
                        <Text className="underline">Cookies</Text>
                    </EmailButton>
                    <EmailButton href="https://www.untitledui.com/" className="ml-4 text-sm text-tertiary">
                        <Text className="underline">Contact us</Text>
                    </EmailButton>
                </Column>
            </Row>
            <Row>
                <Text className="text-center text-sm text-tertiary">
                    © 2077 Untitled UI
                    <br />
                    100 Smith Street, Melbourne VIC 3000
                </Text>
            </Row>
        </Container>
    );
}
