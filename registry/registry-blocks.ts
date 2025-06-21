import type { Registry } from "./schema";

export const block: Registry = [
    {
        name: "ai-card-generation",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input", "select", "textarea"],
        files: [
            {
                path: "components/ruixenui/blocks/ai-card-generation/ai-card-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/ai-card-generation/header-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/ai-card-generation/form-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/ai-card-generation/settings-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/ai-card-generation/preview-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/ai-card-generation/error-generation.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "dashboard",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: [
            "button",
            "card",
            "sidebar",
            "input",
            "avatar",
            "dropdown-menu",
            "progress",
            "separator",
        ],
        files: [
            {
                path: "components/ruixenui/blocks/dashboard/dashboard.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/layout.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/top-nav.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/app-sidebar.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/content.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/nav-main.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/nav-documents.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/nav-secondary.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/nav-user.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/list-01.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/list-02.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/list-03.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/dashboard/btn-11.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "minimal-shop",
        type: "registry:block",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button", "input", "select", "textarea"],
        files: [
            {
                path: "components/ruixenui/blocks/minimal-shop/minimal-shop.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/minimal-shop/top-bar.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/minimal-shop/product-grid.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/minimal-shop/product-modal.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/minimal-shop/cart-drawer.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/minimal-shop/data.ts",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/minimal-shop/header.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "auth-basic",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input", "separator"],
        files: [
            {
                path: "components/ruixenui/blocks/auth-basic/auth-basic.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/auth-basic/auth-form.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/auth-basic/social-login.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "ai-chat",
        type: "registry:block",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button", "input", "textarea"],
        files: [
            {
                path: "components/ruixenui/blocks/ai-chat/ai-chat.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/blocks/ai-chat/multimodal-input.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "card-grid",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/ruixenui/card-grid.tsx",
                type: "registry:component",
            },
            {
                path: "components/ruixenui/card/card-08.tsx",
                type: "registry:component",
            },
        ],
    },
];
