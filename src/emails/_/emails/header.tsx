import { Column, Container, Button as EmailButton, Img, Row } from "@react-email/components";
import { Text } from "./text";

export function LeftAligned() {
    return (
        <Container align="left" className="max-w-full bg-primary p-6">
            <Row>
                <Img aria-hidden src="https://www.untitledui.com/images/email/logo.png" alt="Untitled logo" className="h-7 md:h-8" />
            </Row>
        </Container>
    );
}

export function LeftAlignedLinks() {
    return (
        <Container align="left" className="max-w-full bg-primary p-6">
            <Row className="mb-8">
                <Img aria-hidden src="https://www.untitledui.com/images/email/logo.png" alt="Untitled logo" className="h-7 md:h-8" />
            </Row>
            <Row>
                <EmailButton href="https://www.untitledui.com/" className="text-sm font-semibold text-primary md:text-md">
                    Home
                </EmailButton>
                <EmailButton href="#blog" className="ml-4 text-sm font-semibold text-primary md:text-md">
                    Blog
                </EmailButton>
                <EmailButton href="#tutorial" className="ml-4 text-sm font-semibold text-primary md:text-md">
                    Tutorial
                </EmailButton>
                <EmailButton href="#support" className="ml-4 text-sm font-semibold text-primary md:text-md">
                    Support
                </EmailButton>
            </Row>
        </Container>
    );
}

export function LeftAlignedSocials() {
    return (
        <Container align="center" className="max-w-full min-w-[354px] bg-primary p-6">
            <Row align="left" className="align-middle">
                <div className="flex w-full flex-1 items-center">
                    <Img aria-hidden src="https://www.untitledui.com/images/email/logo.png" alt="Untitled logo" className="inline h-7 align-middle md:h-8" />

                    <EmailButton href="https://www.untitledui.com/" className="ml-auto align-middle">
                        <Text className="text-sm font-semibold text-primary md:text-md">Log in</Text>
                    </EmailButton>
                    <EmailButton aria-label="Facebook" href="https://www.untitledui.com/" className="ml-6 align-middle">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/x-black.webp" alt="X logo" className="size-5" />
                    </EmailButton>
                    <EmailButton aria-label="Facebook" href="https://www.untitledui.com/" className="mx-4 align-middle">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/facebook-black.webp" alt="Facebook logo" className="size-5" />
                    </EmailButton>
                    <EmailButton aria-label="Instagram" href="https://www.untitledui.com/" className="align-middle">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/instagram-black.webp" alt="Instagram logo" className="size-5" />
                    </EmailButton>
                </div>
            </Row>
        </Container>
    );
}

export function CenterAligned() {
    return (
        <Container align="center" className="max-w-full bg-primary p-6">
            <Row>
                <Column align="center">
                    <Img aria-hidden src="https://www.untitledui.com/images/email/logo.png" alt="Untitled logo" className="h-7 md:h-8" />
                </Column>
            </Row>
        </Container>
    );
}

export function CenterAlignedLinks() {
    return (
        <Container align="center" className="max-w-full bg-primary p-6">
            <Row>
                <Column align="center">
                    <Img aria-hidden src="https://www.untitledui.com/images/email/logo.png" alt="Untitled logo" className="h-7 md:h-8" />
                </Column>
            </Row>
            <Row align="center">
                <Column align="center">
                    <EmailButton href="https://www.untitledui.com/" className="mr-4 text-sm font-semibold text-primary md:text-md">
                        Home
                    </EmailButton>
                    <EmailButton href="#blog" className="mr-2 text-sm font-semibold text-primary md:text-md">
                        Blog
                    </EmailButton>
                    <EmailButton href="#tutorial" className="ml-2 text-sm font-semibold text-primary md:text-md">
                        Tutorial
                    </EmailButton>
                    <EmailButton href="#support" className="ml-4 text-sm font-semibold text-primary md:text-md">
                        Support
                    </EmailButton>
                </Column>
            </Row>
        </Container>
    );
}

export function CenterAlignedSocials() {
    return (
        <Container align="center" className="max-w-full min-w-[354px] bg-primary p-6">
            <Row>
                <Column align="center">
                    <Img aria-hidden src="https://www.untitledui.com/images/email/logo.png" alt="Untitled logo" className="h-7 md:h-8" />
                </Column>
            </Row>
            <Row align="center">
                <Column align="center">
                    <EmailButton aria-label="X (formerly Twitter)" href="https://www.untitledui.com/">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/x-black.webp" alt="X logo" className="size-5" />
                    </EmailButton>

                    <EmailButton aria-label="Facebook" href="https://www.untitledui.com/" className="mx-4">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/facebook-black.webp" alt="Facebook logo" className="size-5" />
                    </EmailButton>

                    <EmailButton aria-label="Instagram" href="https://www.untitledui.com/">
                        <Img aria-hidden src="https://www.untitledui.com/images/email/instagram-black.webp" alt="Instagram logo" className="size-5" />
                    </EmailButton>
                </Column>
            </Row>
        </Container>
    );
}
