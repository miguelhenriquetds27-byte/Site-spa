Pular para a caixa de texto do chat






Crie a primeira página (landing page) ultra-elegante e minimalista para uma clínica de estética e SPA de alto padrão chamada "Vitória Spa".

A paleta de cores deve usar tons relaxantes como bege texturizado, off-white e detalhes sutis em dourado ou verde oliva suave, transmitindo paz, luxo e bem-estar.

A primeira tela (Hero Section) deve conter:

No topo esquerdo, o nome texturizado "Vitória Spa" com uma fonte sofisticada (serifada). No topo direito, links de navegação limpos para "Serviços", "Sobre Nós" e "Contato".

No centro, um título principal impactante: "O seu momento de relaxamento profundo e bem-estar".

Um subtítulo elegante abaixo: "Tratamentos corporais e faciais exclusivos para renovar suas energias em um ambiente acolhedor e sofisticado."

Um botão principal de destaque (Call to Action) arredondado escrito: "Agendar Experiência".

Uma imagem de fundo de altíssima qualidade (usando Unsplash) que mostre um ambiente de SPA luxuoso, massagem com pedras quentes ou toalhas brancas com folhas de eucalipto, com um filtro suave para o texto ficar perfeitamente legível.

O design deve ser totalmente otimizado para celulares (mobile-first), fluido, limpo e transmitir uma sensação imediata de calmaria e profissionalismo. Não adicione seções extras abaixo da primeira dobra por enquanto.

Vou criar a primeira tela do Vitória Spa com tons suaves, tipografia serifada e uma fotografia de SPA.

A primeira tela do Vitória Spa está pronta e adaptada para celulares; o agendamento aguarda seus dados de contato.

Pergunte à Lovable...



Nenhum arquivo escolhido

index.tsx

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import spaImage from "@/assets/spa-massage.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Vitória Spa | Relaxamento profundo e bem-estar" },
    { name: "description", content: "Tratamentos corporais e faciais exclusivos para renovar suas energias em um ambiente acolhedor e sofisticado. Conheça o Vitória Spa." },
    { property: "og:title", content: "Vitória Spa | Seu momento de bem-estar" },
    { property: "og:description", content: "Uma experiência de relaxamento com tratamentos corporais e faciais exclusivos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const details = {
  "Serviços": { title: "Cuidado em cada detalhe", text: "Tratamentos corporais e faciais exclusivos para renovar suas energias em um ambiente acolhedor e sofisticado." },
  "Sobre Nós": { title: "Vitória Spa", text: "Um espaço dedicado ao seu momento de relaxamento profundo e bem-estar." },
  "Contato": { title: "Vamos conversar", text: "Nossos canais de contato estarão disponíveis em breve." },
  "Agendar Experiência": { title: "Seu momento começa aqui", text: "Em breve, você poderá agendar sua experiência no Vitória Spa por aqui." },
};
type Detail = keyof typeof details;

function Index() {
  const [active, setActive] = useState<Detail | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const select = (item: Detail) => { setMenuOpen(false); setActive(item); };
  const content = active ? details[active] : null;
  return (
    <main className="spa-screen">
      <img className="spa-background" src={spaImage.url} alt="Ritual de massagem com óleos em um ambiente de spa" fetchPriority="high" />
      <div className="spa-wash" aria-hidden="true" />
+
