import { darkModeColors, lightModeColors, primitiveColors } from "./colors";

export const getThemeColors = (theme: "light" | "dark" = "light") => {
    const colors = theme === "light" ? lightModeColors : darkModeColors;
    return {
        backgroundColor: {
            quaternary: colors["bg-quaternary"],
            "brand-solid": colors["bg-brand-solid"],
            disabled: colors["bg-disabled"],
            primary: colors["bg-primary"],
            "primary-solid": colors["bg-primary-solid"],
            primary_alt: colors["bg-primary_alt"],
            primary_hover: colors["bg-primary_hover"],
            secondary: {
                DEFAULT: colors["bg-secondary"],
                solid: colors["bg-secondary-solid"],
            },
            secondary_alt: colors["bg-secondary_alt"],
            secondary_hover: colors["bg-secondary_hover"],
            secondary_subtle: colors["bg-secondary_subtle"],
            tertiary: colors["bg-tertiary"],
            active: colors["bg-active"],
            disabled_subtle: colors["bg-disabled_subtle"],
            overlay: colors["bg-overlay"],
            brand: {
                primary: colors["bg-brand-primary"],
                primary_alt: colors["bg-brand-primary_alt"],
                secondary: colors["bg-brand-secondary"],
                solid: colors["bg-brand-solid"],
                solid_hover: colors["bg-brand-solid_hover"],
                section: colors["bg-brand-section"],
                section_subtle: colors["bg-brand-section_subtle"],
            },
            error: {
                primary: colors["bg-error-primary"],
                secondary: colors["bg-error-secondary"],
                solid: colors["bg-error-solid"],
            },
            warning: {
                primary: colors["bg-warning-primary"],
                secondary: colors["bg-warning-secondary"],
                solid: colors["bg-warning-solid"],
            },
            success: {
                primary: colors["bg-success-primary"],
                secondary: colors["bg-success-secondary"],
                solid: colors["bg-success-solid"],
            },
            "border-brand": colors["border-brand"],
            "border-brand_alt": colors["border-brand_alt"],
        },

        textColor: {
            primary: {
                DEFAULT: colors["text-primary"],
            },
            primary_on: {
                brand: colors["text-primary_on-brand"],
            },
            secondary: colors["text-secondary"],
            secondary_hover: colors["text-secondary_hover"],
            secondary_on: {
                brand: colors["text-secondary_on-brand"],
            },
            tertiary: colors["text-tertiary"],
            tertiary_hover: colors["text-tertiary_hover"],
            tertiary_on: {
                brand: colors["text-tertiary_on-brand"],
            },
            quaternary: colors["text-quaternary"],
            quaternary_on: {
                brand: colors["text-quaternary_on-brand"],
            },
            disabled: colors["text-disabled"],
            placeholder: colors["text-placeholder"],
            placeholder_subtle: colors["text-placeholder_subtle"],
            brand: {
                primary: colors["text-brand-primary"],
                secondary: colors["text-brand-secondary"],
                tertiary: colors["text-brand-tertiary"],
                tertiary_alt: colors["text-brand-tertiary_alt"],
            },
            error: {
                primary: colors["text-error-primary"],
            },
            warning: {
                primary: colors["text-warning-primary"],
            },
            success: {
                primary: colors["text-success-primary"],
            },
            tooltip: {
                "supporting-text": colors["tooltip-supporting-text"],
            },
        },
        borderColor: {
            primary: {
                DEFAULT: colors["border-primary"],
            },
            secondary: colors["border-secondary"],
            tertiary: colors["border-tertiary"],
            disabled: colors["border-disabled"],
            brand: {
                DEFAULT: colors["border-brand"],
                solid: colors["bg-brand-solid"],
                solid_hover: colors["bg-brand-solid_hover"],
            },
            error: {
                DEFAULT: colors["border-error"],
            },
            disabled_subtle: colors["border-disabled_subtle"],
            brand_alt: colors["border-brand_alt"],
            error_subtle: colors["border-error_subtle"],
        },
        ringColor: {
            bg: {
                brand: {
                    solid: colors["bg-brand-solid"],
                },
            },
            border: {
                primary: colors["border-primary"],
                secondary: colors["border-secondary"],
                tertiary: colors["border-tertiary"],
                disabled: colors["border-disabled"],
                brand: colors["border-brand"],
                error: colors["border-error"],
                disabled_subtle: colors["border-disabled_subtle"],
                brand_alt: colors["border-brand_alt"],
                error_subtle: colors["border-error_subtle"],
            },
        },
        outlineColor: {
            brand: {
                DEFAULT: colors["border-brand"],
            },
            primary: {
                DEFAULT: colors["border-primary"],
            },
            secondary: {
                DEFAULT: colors["border-secondary"],
            },
            error: {
                DEFAULT: colors["border-error"],
            },
        },
        colors: {
            ...primitiveColors,
            button: {
                primary: {
                    fg: colors["button-primary-fg"],
                    fg_hover: colors["button-primary-fg_hover"],
                    bg: colors["button-primary-bg"],
                    bg_hover: colors["button-primary-bg_hover"],
                    error: {
                        fg: colors["button-primary-error-fg"],
                        fg_hover: colors["button-primary-error-fg_hover"],
                        bg: colors["button-primary-error-bg"],
                        bg_hover: colors["button-primary-error-bg_hover"],
                    },
                },
                secondary: {
                    fg: colors["button-secondary-fg"],
                    fg_hover: colors["button-secondary-fg_hover"],
                    bg: colors["button-secondary-bg"],
                    bg_hover: colors["button-secondary-bg_hover"],
                    border: colors["button-secondary-border"],
                    border_hover: colors["button-secondary-border_hover"],
                    error: {
                        fg: colors["button-secondary-error-fg"],
                        fg_hover: colors["button-secondary-error-fg_hover"],
                        bg: colors["button-secondary-error-bg"],
                        bg_hover: colors["button-secondary-error-bg_hover"],
                        border: colors["button-secondary-error-border"],
                        border_hover: colors["button-secondary-error-border_hover"],
                    },
                },
                tertiary: {
                    fg: colors["button-tertiary-fg"],
                    fg_hover: colors["button-tertiary-fg_hover"],
                    bg_hover: colors["button-tertiary-bg_hover"],
                    error: {
                        fg: colors["button-tertiary-error-fg"],
                        fg_hover: colors["button-tertiary-error-fg_hover"],
                        bg_hover: colors["button-tertiary-error-bg_hover"],
                    },
                },
            },
            bg: {
                primary: colors["bg-primary"],
                "primary-solid": colors["bg-primary-solid"],
                secondary: colors["bg-secondary"],
                tertiary: colors["bg-tertiary"],
                quaternary: colors["bg-quaternary"],
                success: {
                    solid: colors["bg-success-solid"],
                },
            },
            fg: {
                primary: colors["fg-primary"],
                secondary: colors["fg-secondary"],
                secondary_hover: colors["fg-secondary_hover"],
                tertiary: colors["fg-tertiary"],
                tertiary_hover: colors["fg-tertiary_hover"],
                quaternary: colors["fg-quaternary"],
                quaternary_hover: colors["fg-quaternary_hover"],
                senary: colors["fg-senary"],
                white: colors["fg-white"],
                disabled: colors["fg-disabled"],
                disabled_subtle: colors["fg-disabled_subtle"],
                brand: {
                    primary: colors["fg-brand-primary"],
                    primary_alt: colors["fg-brand-primary_alt"],
                    secondary: colors["fg-brand-secondary"],
                },
                error: {
                    primary: colors["fg-error-primary"],
                    secondary: colors["fg-error-secondary"],
                },
                warning: {
                    primary: colors["fg-warning-primary"],
                    secondary: colors["fg-warning-secondary"],
                },
                success: {
                    primary: colors["fg-success-primary"],
                    secondary: colors["fg-success-secondary"],
                },
            },
            focus: {
                ring: {
                    DEFAULT: colors["focus-ring"],
                    error: colors["focus-ring-error"],
                },
            },
            border: {
                secondary: colors["border-secondary"],
            },
            slider: {
                handle: {
                    bg: colors["slider-handle-bg"],
                    border: colors["slider-handle-border"],
                },
            },
            utility: {
                gray: {
                    50: colors["utility-gray-50"],
                    100: colors["utility-gray-100"],
                    200: colors["utility-gray-200"],
                    300: colors["utility-gray-300"],
                    400: colors["utility-gray-400"],
                    500: colors["utility-gray-500"],
                    600: colors["utility-gray-600"],
                    700: colors["utility-gray-700"],
                    800: colors["utility-gray-800"],
                    900: colors["utility-gray-900"],
                    blue: {
                        50: colors["utility-gray-blue-50"],
                        100: colors["utility-gray-blue-100"],
                        200: colors["utility-gray-blue-200"],
                        300: colors["utility-gray-blue-300"],
                        400: colors["utility-gray-blue-400"],
                        500: colors["utility-gray-blue-500"],
                        600: colors["utility-gray-blue-600"],
                        700: colors["utility-gray-blue-700"],
                    },
                },
                brand: {
                    50: colors["utility-brand-50"],
                    100: colors["utility-brand-100"],
                    200: colors["utility-brand-200"],
                    300: colors["utility-brand-300"],
                    400: colors["utility-brand-400"],
                    500: colors["utility-brand-500"],
                    600: colors["utility-brand-600"],
                    700: colors["utility-brand-700"],
                    800: colors["utility-brand-800"],
                    900: colors["utility-brand-900"],
                    "50_alt": colors["utility-brand-50_alt"],
                    "100_alt": colors["utility-brand-100_alt"],
                    "200_alt": colors["utility-brand-200_alt"],
                    "300_alt": colors["utility-brand-300_alt"],
                    "400_alt": colors["utility-brand-400_alt"],
                    "500_alt": colors["utility-brand-500_alt"],
                    "600_alt": colors["utility-brand-600_alt"],
                    "700_alt": colors["utility-brand-700_alt"],
                    "800_alt": colors["utility-brand-800_alt"],
                    "900_alt": colors["utility-brand-900_alt"],
                },
                error: {
                    50: colors["utility-error-50"],
                    100: colors["utility-error-100"],
                    200: colors["utility-error-200"],
                    300: colors["utility-error-300"],
                    400: colors["utility-error-400"],
                    500: colors["utility-error-500"],
                    600: colors["utility-error-600"],
                    700: colors["utility-error-700"],
                },
                warning: {
                    50: colors["utility-warning-50"],
                    100: colors["utility-warning-100"],
                    200: colors["utility-warning-200"],
                    300: colors["utility-warning-300"],
                    400: colors["utility-warning-400"],
                    500: colors["utility-warning-500"],
                    600: colors["utility-warning-600"],
                    700: colors["utility-warning-700"],
                },
                success: {
                    50: colors["utility-success-50"],
                    100: colors["utility-success-100"],
                    200: colors["utility-success-200"],
                    300: colors["utility-success-300"],
                    400: colors["utility-success-400"],
                    500: colors["utility-success-500"],
                    600: colors["utility-success-600"],
                    700: colors["utility-success-700"],
                },
                blue: {
                    50: colors["utility-blue-50"],
                    100: colors["utility-blue-100"],
                    200: colors["utility-blue-200"],
                    300: colors["utility-blue-300"],
                    400: colors["utility-blue-400"],
                    500: colors["utility-blue-500"],
                    600: colors["utility-blue-600"],
                    700: colors["utility-blue-700"],
                    light: {
                        50: colors["utility-blue-light-50"],
                        100: colors["utility-blue-light-100"],
                        200: colors["utility-blue-light-200"],
                        300: colors["utility-blue-light-300"],
                        400: colors["utility-blue-light-400"],
                        500: colors["utility-blue-light-500"],
                        600: colors["utility-blue-light-600"],
                        700: colors["utility-blue-light-700"],
                    },
                    dark: {
                        50: colors["utility-blue-dark-50"],
                        100: colors["utility-blue-dark-100"],
                        200: colors["utility-blue-dark-200"],
                        300: colors["utility-blue-dark-300"],
                        400: colors["utility-blue-dark-400"],
                        500: colors["utility-blue-dark-500"],
                        600: colors["utility-blue-dark-600"],
                        700: colors["utility-blue-dark-700"],
                    },
                },
                green: {
                    50: colors["utility-green-50"],
                    100: colors["utility-green-100"],
                    200: colors["utility-green-200"],
                    300: colors["utility-green-300"],
                    400: colors["utility-green-400"],
                    500: colors["utility-green-500"],
                    600: colors["utility-green-600"],
                    700: colors["utility-green-700"],
                },
                yellow: {
                    50: colors["utility-yellow-50"],
                    100: colors["utility-yellow-100"],
                    200: colors["utility-yellow-200"],
                    300: colors["utility-yellow-300"],
                    400: colors["utility-yellow-400"],
                    500: colors["utility-yellow-500"],
                    600: colors["utility-yellow-600"],
                    700: colors["utility-yellow-700"],
                },
                indigo: {
                    50: colors["utility-indigo-50"],
                    100: colors["utility-indigo-100"],
                    200: colors["utility-indigo-200"],
                    300: colors["utility-indigo-300"],
                    400: colors["utility-indigo-400"],
                    500: colors["utility-indigo-500"],
                    600: colors["utility-indigo-600"],
                    700: colors["utility-indigo-700"],
                },
                purple: {
                    50: colors["utility-purple-50"],
                    100: colors["utility-purple-100"],
                    200: colors["utility-purple-200"],
                    300: colors["utility-purple-300"],
                    400: colors["utility-purple-400"],
                    500: colors["utility-purple-500"],
                    600: colors["utility-purple-600"],
                    700: colors["utility-purple-700"],
                },
                fuchsia: {
                    50: colors["utility-fuchsia-50"],
                    100: colors["utility-fuchsia-100"],
                    200: colors["utility-fuchsia-200"],
                    300: colors["utility-fuchsia-300"],
                    400: colors["utility-fuchsia-400"],
                    500: colors["utility-fuchsia-500"],
                    600: colors["utility-fuchsia-600"],
                    700: colors["utility-fuchsia-700"],
                },
                pink: {
                    50: colors["utility-pink-50"],
                    100: colors["utility-pink-100"],
                    200: colors["utility-pink-200"],
                    300: colors["utility-pink-300"],
                    400: colors["utility-pink-400"],
                    500: colors["utility-pink-500"],
                    600: colors["utility-pink-600"],
                    700: colors["utility-pink-700"],
                },
                orange: {
                    50: colors["utility-orange-50"],
                    100: colors["utility-orange-100"],
                    200: colors["utility-orange-200"],
                    300: colors["utility-orange-300"],
                    400: colors["utility-orange-400"],
                    500: colors["utility-orange-500"],
                    600: colors["utility-orange-600"],
                    700: colors["utility-orange-700"],
                    dark: {
                        50: colors["utility-orange-dark-50"],
                        100: colors["utility-orange-dark-100"],
                        200: colors["utility-orange-dark-200"],
                        300: colors["utility-orange-dark-300"],
                        400: colors["utility-orange-dark-400"],
                        500: colors["utility-orange-dark-500"],
                        600: colors["utility-orange-dark-600"],
                        700: colors["utility-orange-dark-700"],
                    },
                },
            },
            "app-store-badge": {
                border: colors["app-store-badge-border"],
            },
            "nav-item": {
                button: {
                    icon: {
                        fg: colors["nav-item-button-icon-fg"],
                        fg_active: colors["nav-item-button-icon-fg_active"],
                    },
                },
                icon: {
                    fg: colors["nav-item-icon-fg"],
                    fg_active: colors["nav-item-icon-fg_active"],
                },
            },

            breadcrumb: {
                fg: colors["breadcrumb-fg"],
                fg_hover: colors["breadcrumb-fg_hover"],
                bg_hover: colors["breadcrumb-bg_hover"],
                brand: {
                    fg_hover: colors["breadcrumb-brand-fg_hover"],
                    bg_hover: colors["breadcrumb-brand-bg_hover"],
                    icon: {
                        fg_hover: colors["breadcrumb-brand-icon-fg_hover"],
                    },
                },
                icon: {
                    fg: colors["breadcrumb-icon-fg"],
                    fg_hover: colors["breadcrumb-icon-fg_hover"],
                },
            },
            footer: {
                button: {
                    fg: colors["footer-button-fg"],
                    fg_hover: colors["footer-button-fg_hover"],
                },
                badge: {
                    fg: colors["footer-badge-fg"],
                    bg: colors["footer-badge-bg"],
                    border: colors["footer-badge-border"],
                },
            },
            icon: {
                fg: {
                    brand: colors["icon-fg-brand"],
                    brand_on: {
                        brand: colors["icon-fg-brand_on-brand"],
                    },
                },
            },
            "featured-icon": {
                light: {
                    fg: {
                        brand: colors["featured-icon-light-fg-brand"],
                        gray: colors["featured-icon-light-fg-gray"],
                        error: colors["featured-icon-light-fg-error"],
                        warning: colors["featured-icon-light-fg-warning"],
                        success: colors["featured-icon-light-fg-success"],
                    },
                },
                modern: {
                    border: colors["featured-icon-modern-border"],
                },
            },
            "social-icon": {
                fg: {
                    x: colors["social-icon-fg-x"],
                    instagram: colors["social-icon-fg-instagram"],
                    apple: colors["social-icon-fg-apple"],
                    github: colors["social-icon-fg-github"],
                    angellist: colors["social-icon-fg-angellist"],
                    tumblr: colors["social-icon-fg-tumblr"],
                },
            },
            "screen-mockup": {
                border: colors["screen-mockup-border"],
            },
            "slider-handle": {
                bg: colors["slider-handle-bg"],
                border: colors["slider-handle-border"],
            },
            "thumbnail-badge": {
                brand: {
                    fg: colors["thumbnail-badge-brand-fg"],
                },
                success: {
                    fg: colors["thumbnail-badge-success-fg"],
                },
            },
            toggle: {
                button: {
                    fg_disabled: colors["toggle-button-fg_disabled"],
                },
            },
            "wysiwyg-editor-icon": {
                fg: colors["wysiwyg-editor-icon-fg"],
                fg_active: colors["wysiwyg-editor-icon-fg_active"],
            },
        },
    };
};
