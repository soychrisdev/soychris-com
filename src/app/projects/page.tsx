import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Heading1 } from "@/components/ui/heading-1";
import { Book, ExternalLink, Globe, Heart, Smartphone } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Proyectos - Christian Mesina | Desarrollador Full Stack",
    description:
        "Explora mi portafolio de proyectos de desarrollo web. Desde aplicaciones bíblicas hasta plataformas e-commerce, descubre mis trabajos en Next.js, React y TypeScript.",
    keywords: [
        "Christian Mesina",
        "proyectos",
        "portafolio",
        "desarrollo web",
        "Next.js",
        "React",
        "TypeScript",
        "Biblia Digital",
        "aplicaciones web",
        "full stack developer",
    ],
    authors: [{ name: "Christian Mesina", url: "https://soychris.com" }],
    creator: "Christian Mesina",
    publisher: "Christian Mesina",
    alternates: {
        canonical: "https://soychris.com/projects",
    },
    openGraph: {
        title: "Proyectos - Christian Mesina | Desarrollador Full Stack",
        description:
            "Explora mi portafolio de proyectos de desarrollo web. Desde aplicaciones bíblicas hasta plataformas e-commerce.",
        url: "https://soychris.com/projects",
        siteName: "Christian Mesina - Portfolio",
        type: "website",
        locale: "es_ES",
    },
    twitter: {
        card: "summary_large_image",
        title: "Proyectos - Christian Mesina | Desarrollador Full Stack",
        description:
            "Explora mi portafolio de proyectos de desarrollo web. Desde aplicaciones bíblicas hasta plataformas e-commerce.",
        creator: "@soychrisdev",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Biblia Digital",
            description:
                "Una aplicación web moderna para leer y estudiar la Biblia con una interfaz intuitiva y funcionalidades avanzadas de búsqueda y navegación.",
            longDescription:
                "Desarrollé esta aplicación como una herramienta completa para el estudio bíblico, con características como búsqueda avanzada, marcadores, notas personales y una experiencia de lectura optimizada tanto para desktop como móvil.",
            url: "https://biblia.soychris.com",
            image: "/api/placeholder/600/400",
            technologies: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Vercel",
            ],
            featured: true,
            category: "Web App",
            status: "Live",
            icon: Book,
        },
    ];

    const upcomingProjects = [
        {
            title: "E-commerce Platform",
            description: "Plataforma de comercio electrónico escalable",
            status: "En desarrollo",
            technologies: ["Next.js", "Prisma", "PostgreSQL"],
        },
        {
            title: "Task Management App",
            description:
                "Aplicación de gestión de tareas con colaboración en tiempo real",
            status: "Planificado",
            technologies: ["React", "Node.js", "Socket.io"],
        },
    ];

    // Structured Data JSON-LD
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Proyectos - Christian Mesina",
        description:
            "Portafolio de proyectos de desarrollo web de Christian Mesina, desarrollador full stack especializado en Next.js, React y TypeScript.",
        url: "https://soychris.com/projects",
        author: {
            "@type": "Person",
            name: "Christian Mesina",
            url: "https://soychris.com",
            jobTitle: "Desarrollador Full Stack",
            worksFor: {
                "@type": "Organization",
                name: "Freelance",
            },
        },
        mainEntity: {
            "@type": "ItemList",
            numberOfItems: projects.length,
            itemListElement: projects.map((project, index) => ({
                "@type": "SoftwareApplication",
                position: index + 1,
                name: project.title,
                description: project.description,
                url: project.url,
                applicationCategory: "WebApplication",
                operatingSystem: "Web Browser",
                programmingLanguage: project.technologies,
                author: {
                    "@type": "Person",
                    name: "Christian Mesina",
                },
            })),
        },
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <div className="min-h-screen bg-background">
                <main className="container mx-auto px-4 py-12 max-w-6xl">
                    {/* Header Section */}
                    <header className="text-center space-y-6 mb-20">
                        <Heading1 className="mb-6">
                            Mis Proyectos
                        </Heading1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Una colección de proyectos que he desarrollado,
                            desde aplicaciones web hasta herramientas útiles.
                            Cada proyecto refleja mi pasión por crear software
                            que realmente impacte.
                        </p>
                    </header>

                    {/* Featured Project */}
                    <section
                        className="mb-24"
                        itemScope
                        itemType="https://schema.org/SoftwareApplication"
                    >
                        <div className="flex items-center gap-3 mb-12">
                            <Heart className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-bold">
                                Proyecto Destacado
                            </h2>
                        </div>

                        {projects.filter((p) => p.featured).map((project) => (
                            <article
                                key={project.id}
                                className="overflow-hidden border-2 border-primary/20 shadow-lg rounded-lg"
                                itemScope
                                itemType="https://schema.org/SoftwareApplication"
                            >
                                <Card className="border-0">
                                    <div className="grid md:grid-cols-2 gap-0">
                                        {/* Project Image */}
                                        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 p-12 flex items-center justify-center min-h-[400px]">
                                            <div className="text-center space-y-6">
                                                <div className="mx-auto w-28 h-28 bg-primary/10 rounded-full flex items-center justify-center">
                                                    <project.icon
                                                        className="h-14 w-14 text-primary"
                                                        aria-label={`Icono de ${project.title}`}
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-primary/10 text-primary px-4 py-1"
                                                        itemProp="applicationCategory"
                                                    >
                                                        {project.category}
                                                    </Badge>
                                                    <div>
                                                        <Badge
                                                            variant="outline"
                                                            className="px-4 py-1"
                                                        >
                                                            {project.status}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-12">
                                            <CardHeader className="p-0 mb-8">
                                                <CardTitle
                                                    className="text-3xl font-bold mb-4"
                                                    itemProp="name"
                                                >
                                                    {project.title}
                                                </CardTitle>
                                                <CardDescription
                                                    className="text-base text-muted-foreground leading-relaxed"
                                                    itemProp="description"
                                                >
                                                    {project.longDescription}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent className="p-0 space-y-8">
                                                {/* Technologies */}
                                                <div>
                                                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-foreground">
                                                        Tecnologías
                                                    </h3>
                                                    <div className="flex flex-wrap gap-3">
                                                        {project.technologies
                                                            .map((tech) => (
                                                                <Badge
                                                                    key={tech}
                                                                    variant="secondary"
                                                                    className="text-xs px-3 py-1"
                                                                    itemProp="programmingLanguage"
                                                                >
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                    </div>
                                                </div>

                                                {/* Actions */}
                                                <CardFooter className="p-0 pt-4">
                                                    <div className="flex gap-4 w-full">
                                                        <Button
                                                            asChild
                                                            className="flex-1"
                                                            size="lg"
                                                        >
                                                            <a
                                                                href={project
                                                                    .url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2"
                                                                itemProp="url"
                                                                aria-label={`Ver proyecto ${project.title} en una nueva pestaña`}
                                                            >
                                                                <Globe className="h-4 w-4" />
                                                                Ver Proyecto
                                                            </a>
                                                        </Button>
                                                        <Button
                                                            variant="outline"
                                                            size="lg"
                                                            asChild
                                                        >
                                                            <a
                                                                href={project
                                                                    .url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label={`Enlace externo a ${project.title}`}
                                                                className="px-4"
                                                            >
                                                                <ExternalLink className="h-4 w-4" />
                                                            </a>
                                                        </Button>
                                                    </div>
                                                </CardFooter>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            </article>
                        ))}
                    </section>{" "}
                    {/* Upcoming Projects */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-12">
                            <Smartphone className="h-6 w-6 text-muted-foreground" />
                            <h2 className="text-2xl font-bold">
                                Próximos Proyectos
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {upcomingProjects.map((project, index) => (
                                <Card
                                    key={index}
                                    className="relative overflow-hidden"
                                >
                                    <CardHeader className="pb-6">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <CardTitle className="text-xl mb-3">
                                                    {project.title}
                                                </CardTitle>
                                                <CardDescription className="text-base leading-relaxed">
                                                    {project.description}
                                                </CardDescription>
                                            </div>
                                            <Badge
                                                variant={project.status ===
                                                        "En desarrollo"
                                                    ? "default"
                                                    : "secondary"}
                                                className="shrink-0 px-3 py-1"
                                            >
                                                {project.status}
                                            </Badge>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.map((
                                                tech,
                                            ) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="text-xs px-3 py-1"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>

                                    {/* Coming Soon Overlay */}
                                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <Badge
                                            variant="secondary"
                                            className="text-sm font-medium px-4 py-2"
                                        >
                                            Próximamente
                                        </Badge>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="text-center py-16 bg-card rounded-lg border">
                        <div className="space-y-6 max-w-3xl mx-auto px-6">
                            <h3 className="text-2xl font-bold">
                                ¿Te gusta lo que ves?
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Estos son solo algunos de los proyectos en los
                                que he trabajado. Si tienes una idea o necesitas
                                ayuda con un proyecto, ¡hablemos!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                                <Button asChild size="lg" className="px-8">
                                    <Link href="/#about-me">Conóceme más</Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    asChild
                                    size="lg"
                                    className="px-8"
                                >
                                    <a href="mailto:contact@soychris.com">
                                        Contáctame
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
