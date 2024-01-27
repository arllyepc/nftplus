// Constants

const questions = [
  {
    title: "O que são NFTs?",
    content: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "Como funciona a compra de NFTs em seu site?",
    content: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "Como posso vender meus próprios NFTs?",
    content: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    title: "Os NFTs são seguros e autênticos?",
    content: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    title:
      "Quais são as taxas envolvidas na compra e venda de NFTs em seu site?",
    content: "Lorem ipsum dolor sit amet, consectetur",
  },
];

// Components
import Container from "@/components/container";
import TitleSection from "@/components/title-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SectionQuestions() {
  return (
    <section className="pt-10 @desktop:pt-28">
      <Container>
        <TitleSection
          subtitle="Desvendando os Mistérios dos NFTs"
          title="Perguntas frequentes"
        />
        <div>
          <Accordion type="single" collapsible className="w-full">
            {questions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{question.title}</AccordionTrigger>
                <AccordionContent>{question.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
