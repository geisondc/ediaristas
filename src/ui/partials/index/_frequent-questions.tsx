import { useState } from "react";
import {
  SectionContainer,
  Wave,
  SectionTitle,
  SectionSubTitle,
  AccordionStyled,
} from "./_frequent-questions.styled";
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@material-ui/core";

const questionsList = [
  {
    question: "Dúvida 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus earum ut alias similique voluptatem quo dicta tempore, placeat fuga maiores quis possimus nihil minima repellat iure aliquid porro commodi?",
  },
  {
    question: "Dúvida 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus earum ut alias similique voluptatem quo dicta tempore, placeat fuga maiores quis possimus nihil minima repellat iure aliquid porro commodi?",
  },
  {
    question: "Dúvida 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus earum ut alias similique voluptatem quo dicta tempore, placeat fuga maiores quis possimus nihil minima repellat iure aliquid porro commodi?",
  },
  {
    question: "Dúvida 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus earum ut alias similique voluptatem quo dicta tempore, placeat fuga maiores quis possimus nihil minima repellat iure aliquid porro commodi?",
  },
];

const FrequentQuestions = () => {
  const [activeAccordion, setActiveAccordion] = useState(3);

  function isOpen(accordionNumber: number): boolean {
    return activeAccordion === accordionNumber;
  }

  function changeOpenAccordion(accordionNumber: number) {
    setActiveAccordion(accordionNumber);
    if (isOpen(accordionNumber)) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionNumber);
    }
  }

  function getIcon(accordionNumber: number) {
    return isOpen(accordionNumber) ? "twf-minus" : "twf-plus";
  }

  return (
    <SectionContainer>
      <Wave src={"/img/home/waves.svg"} />

      <Container>
        <SectionTitle>Ainda está com dúvidas</SectionTitle>
        <SectionSubTitle>Veja abaixo as perguntas frequentes</SectionSubTitle>

        {questionsList.map((item, index) => (
          <AccordionStyled
            key={index}
            expanded={isOpen(index + 1)}
            onChange={() => changeOpenAccordion(index + 1)}
          >
            <AccordionSummary expandIcon={<i className={getIcon(index+1)} />}>
              <Typography color={"primary"}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{item.answer}</AccordionDetails>
          </AccordionStyled>
        ))}
      </Container>
    </SectionContainer>
  );
};

export default FrequentQuestions;
