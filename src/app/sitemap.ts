import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://consultoria-exemplo.com.br";

    // Adicione aqui as rotas estáticas da sua aplicação
    const staticRoutes = [
        "/",
        // '/sobre',
        // '/planos',
        // '/contato'
    ].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as const,
        priority: route === "/" ? 1 : 0.8,
    }));

    // Se você tiver rotas dinâmicas (ex: blog posts), pode buscá-las e adicioná-las aqui
    // const dynamicRoutes = ...

    return [
        ...staticRoutes,
        // ...dynamicRoutes
    ];
}
