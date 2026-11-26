import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Iury Lopes | Software Developer" },
      { name: "description", content: "Portfólio de Iury Lopes, desenvolvedor Full-Stack especialista em Java, Spring Boot, React e sistemas corporativos." },
      { property: "og:title", content: "Iury Lopes | Software Developer" },
      { property: "og:description", content: "Sistemas completos, estáveis e preparados para evoluir." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
