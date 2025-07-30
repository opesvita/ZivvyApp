import { ArrowLeft, SearchLg } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Illustration } from "@/components/shared-assets/illustrations";

export const NotFoundIllustration01 = () => {
    return (
        <section className="grid min-h-screen flex-1 bg-primary py-16 md:py-24">
            <div className="mx-auto grid h-full max-w-container grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-8">
                <div className="flex h-full flex-1 flex-col items-start gap-8 md:justify-center md:gap-12 md:pr-8">
                    <div className="md:hidden">
                        <Illustration type="cloud" size="sm">
                            <SearchLg />
                        </Illustration>
                    </div>

                    <div className="flex flex-col items-start gap-4 md:gap-6">
                        <div className="flex flex-col gap-3">
                            <span className="text-md font-semibold text-brand-secondary">404 error</span>
                            <h1 className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">Page not found</h1>
                        </div>
                        <p className="max-w-120 text-lg text-tertiary md:text-xl">
                            Sorry, the page you are looking for doesn't exist. <br className="max-md:hidden" /> Here are some helpful links:
                        </p>
                    </div>
                    <div className="flex flex-col-reverse gap-3 self-stretch md:flex-row md:self-auto">
                        <Button color="secondary" size="xl" iconLeading={ArrowLeft}>
                            Go back
                        </Button>
                        <Button size="xl">Take me home</Button>
                    </div>
                </div>

                <div className="relative hidden h-full flex-1 items-center justify-center px-14 md:flex">
                    <Illustration type="cloud" size="lg" className="h-64 w-100 shrink-0 xl:h-87.25 xl:w-120" childrenClassName="size-22 xl:size-30.5">
                        <SearchLg className="size-12 xl:size-15" />
                    </Illustration>
                </div>
            </div>
        </section>
    );
};
