import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Iury Lopes | Desenvolvedor Full-Stack" },
      { name: "description", content: "Portfólio de Iury Lopes, desenvolvedor Full-Stack especialista em Java, Spring Boot, Angular e sistemas corporativos." },
      { property: "og:title", content: "Iury Lopes | Desenvolvedor Full-Stack" },
      { property: "og:description", content: "Sistemas completos, estáveis e preparados para evoluir." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
