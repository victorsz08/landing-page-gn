
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://consultoria-exemplo.com.br";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // disallow: '/admin', // Exemplo de como bloquear uma pasta
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
