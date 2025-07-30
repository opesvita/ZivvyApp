import { Fragment, type HTMLAttributes, type ReactNode, useLayoutEffect, useState } from "react";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { jsx, jsxs } from "react/jsx-runtime";
import type { SpecialLanguage, StringLiteralUnion } from "shiki/bundle/web";
import { codeToHast } from "shiki/bundle/web";
import "@/components/application/code-snippet/code-snippet.style.css";
import { cx } from "@/utils/cx";

type SupportedLanguages = "tsx" | "js" | "jsx" | "ts" | "typescript" | "javascript" | "json" | "html";
type Languages = StringLiteralUnion<SupportedLanguages | SpecialLanguage>;

export const highlight = async (code: string, lang: Languages) => {
    const out = await codeToHast(code, {
        lang: lang,
        defaultColor: "light",
        themes: {
            light: "github-light",
            dark: "github-dark",
        },
        colorReplacements: {
            "github-light": {
                // Main text color
                "#24292e": "var(--color-utility-gray-700)",

                "#005cc5": "var(--color-utility-blue-600)",
                "#d73a49": "var(--color-utility-pink-600)",
                "#6f42c1": "var(--color-utility-brand-600)",
                "#032f62": "var(--color-primary)",
            },
            "github-dark": {
                // Main text color
                "#e1e4e8": "var(--color-utility-gray-700)",

                "#79b8ff": "var(--color-utility-blue-600)",
                "#f97583": "var(--color-utility-pink-600)",
                "#b392f0": "var(--color-utility-brand-600)",
                "#9ecbff": "var(--color-primary)",
            },
        },
    });

    return toJsxRuntime(out, {
        Fragment,
        jsx,
        jsxs,
    });
};

interface CodeSnippetProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The code to be syntax highlighted. Can be provided in two ways:
     * 1. As a string via this prop for client-side highlighting
     * 2. As pre-highlighted nodes via children prop for server-side highlighting
     */
    code?: string;

    /**
     * The programming language of the code snippet.
     * Determines syntax highlighting rules.
     */
    language: Languages;

    /**
     * Whether to display line numbers alongside the code.
     * @default true
     */
    showLineNumbers?: boolean;

    /**
     * Pre-highlighted code nodes that were generated on the server.
     * Alternative to passing raw code string via the `code` prop.
     */
    children?: ReactNode;
}

export const CodeSnippet = ({ children, code, language, showLineNumbers = true, className, ...otherProps }: CodeSnippetProps) => {
    const [nodes, setNodes] = useState(children);

    useLayoutEffect(() => {
        if (!code) return;
        void highlight(code, language).then(setNodes);
    }, [code, language]);

    return (
        <div
            {...otherProps}
            className={cx(
                "max-w-full overflow-hidden rounded-xl border border-secondary bg-primary [&>.shiki]:overflow-x-auto [&>code]:w-full",
                "font-mono text-sm leading-[22px] whitespace-pre",
                showLineNumbers ? "line-numbers" : "p-4",
                className,
            )}
        >
            {nodes ?? code ?? <p>Loading...</p>}
        </div>
    );
};
