import { KolAccordion, KolButton } from "@public-ui/react";
import { FC } from "react";

const STYLES = {
  float: "right",
  fontSize: "70%",
  marginTop: "-3rem",
  marginRight: "0.25rem"
};

export const AccordionHeader: FC = () => (
  <div className="d-grid gap-4">
    <KolAccordion _heading="Accordion mit Header" _level={1} _open>
      <div slot="header">Hier kann noch was in den Header</div>
      <div slot="content">
        Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
        <br />
        Mit Klick auf die Überschrift wird der Inhalt versteckt.
      </div>
    </KolAccordion>
    <KolAccordion
      id="accbtn1"
      _heading="Accordion mit Button im Header"
      _level={1}
    >
      <div slot="header">
        <KolButton
          id="btn1"
          _label="Bearbeiten"
          _variant="ghost"
          style={STYLES}
        ></KolButton>
      </div>
      <div slot="content">
        Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
        <br />
        Mit Klick auf die Überschrift wird der Inhalt versteckt.
      </div>
    </KolAccordion>
  </div>
);
