import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();

    return [
        {
            url: "https://ruixenui.com",
            lastModified: currentDate,
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: "https://ruixenui.com/docs",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        // {
        //     url: "https://ruixenui.com/pricing",
        //     lastModified: currentDate,
        //     changeFrequency: "monthly",
        //     priority: 0.8,
        // },
        {
            url: "https://ruixenui.com/docs/components/ai-input",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ruixenui.com/docs/components/button",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://ruixenui.com/docs/components/card",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        // {
        //     url: "https://ruixenui.com/docs/components/pricing",
        //     lastModified: currentDate,
        //     changeFrequency: "monthly",
        //     priority: 0.5,
        // },
        // {
        //     url: "https://ruixenui.com/docs/components/text",
        //     lastModified: currentDate,
        //     changeFrequency: "monthly",
        //     priority: 0.5,
        // },
        {
            url: "https://ruixenui.com/docs/components/alert",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        // {
        //     url: "https://ruixenui.com/docs/components/block",
        //     lastModified: currentDate,
        //     changeFrequency: "monthly",
        //     priority: 0.5,
        // },
        {
            url: "https://ruixenui.com/docs/components/input",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        // {
        //     url: "https://ruixenui.com/docs/hooks/",
        //     lastModified: currentDate,
        //     changeFrequency: "monthly",
        //     priority: 0.5,
        // },
        // {
        //     url: "https://ruixenui.com/docs/components/block",
        //     lastModified: currentDate,
        //     changeFrequency: "monthly",
        //     priority: 0.6,
        // },
        {
            url: "https://ruixenui.com/docs/components/input",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        // {
        //     url: "https://ruixenui.com/docs/components/faq",
        //     lastModified: currentDate,
        //     changeFrequency: "monthly",
        //     priority: 0.6,
        // },
        // {
        //     url: "https://ruixenui.com/docs/components/list",
        //     lastModified: currentDate,
        //     changeFrequency: "monthly",
        //     priority: 0.6,
        // },
    ];
}
