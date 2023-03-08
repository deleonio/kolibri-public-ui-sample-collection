import { KolAccordion, KolButton } from "@public-ui/react";
import { FC } from "react";

export const AccordionBasic: FC = () => (
  <div className="d-grid gap-4">
    <KolAccordion _heading="Überschrift Accordion Tab 1" _level={1}>
      <div slot="content">Inhalt Accordion Tab 1</div>
    </KolAccordion>
    <KolAccordion _heading="Überschrift Accordion Tab 2" _level={1} _open>
      <div slot="content">Inhalt Accordion Tab 2</div>
    </KolAccordion>
    <KolAccordion _heading="Überschrift Accordion Tab 3" _level={1}>
      <div slot="content">Inhalt Accordion Tab 3</div>
    </KolAccordion>
  </div>
);

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Ueberschriften = (args: any) => {
  return (
    <div className="d-grid gap-4">
      <KolAccordion _heading="Überschrift Level 1" _level={1}>
        <div slot="content">Inhalt Accordion Tab 1</div>
      </KolAccordion>
      <KolAccordion _heading="Überschrift Level 2" _level={2}>
        <div slot="content">Inhalt Accordion Tab 2</div>
      </KolAccordion>
      <KolAccordion _heading="Überschrift Level 3" _level={3}>
        <div slot="content">Inhalt Accordion Tab 3</div>
      </KolAccordion>
      <KolAccordion _heading="Überschrift Level 4" _level={4}>
        <div slot="content">Inhalt Accordion Tab 4</div>
      </KolAccordion>
      <KolAccordion _heading="Überschrift Level 5" _level={5}>
        <div slot="content">Inhalt Accordion Tab 5</div>
      </KolAccordion>
      <KolAccordion _heading="Überschrift Level 6" _level={6}>
        <div slot="content">Inhalt Accordion Tab 6</div>
      </KolAccordion>
    </div>
  );
};
Ueberschriften.storyName = "Überschriften";

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Geoeffnet = (args: any) => {
  return (
    <div>
      <KolAccordion _heading="Accordion geöffnet anzeigen" _level={1} _open>
        <div slot="content">
          Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
          <br />
          Mit Klick auf die Überschrift wird der Inhalt versteckt.
        </div>
      </KolAccordion>
    </div>
  );
};
Geoeffnet.storyName = "Geöffnet";

/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const MitHeader = (args: any) => {
  return (
    <div>
      <KolAccordion _heading="Accordion geöffnet anzeigen" _level={1} _open>
        <div slot="header">Hier kann noch was in den Header</div>
        <div slot="content">
          Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
          <br />
          Mit Klick auf die Überschrift wird der Inhalt versteckt.
        </div>
      </KolAccordion>
    </div>
  );
};
/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const MitButton = (args: any) => {
  setTimeout(() => {
    let buttons = document.querySelectorAll("kol-button");
    buttons.forEach((button) => {
      button._on = {
        onClick: (event) => {
          let id = button.id;
          let acc = document.querySelector(
            "kol-accordion#acc" + id
          ) as HTMLElement;
          acc._open === false ? (acc._open = true) : (acc._open = false);
        }
      };
    });
  }, 1000);
  return (
    <div style={{ display: "grid", gap: "0.25em" }}>
      <KolAccordion id="accbtn0" _heading="Accordion 1" _level={1}>
        <div slot="header">
          <KolButton
            id="btn0"
            _label="Bearbeiten"
            _variant="ghost"
            style={{
              float: "right",
              fontSize: "70%",
              marginTop: "-2.3rem",
              marginRight: "0.5rem"
            }}
          ></KolButton>
        </div>
        <div slot="content">
          Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
          <br />
          Mit Klick auf die Überschrift wird der Inhalt versteckt.
        </div>
      </KolAccordion>
      <KolAccordion id="accbtn1" _heading="Accordion 2" _level={1}>
        <div slot="header">
          <KolButton
            id="btn1"
            _label="Bearbeiten"
            _variant="ghost"
            style={{
              float: "right",
              fontSize: "70%",
              marginTop: "-2.3rem",
              marginRight: "0.5rem"
            }}
          ></KolButton>
        </div>
        <div slot="content">
          Dieser Inhalt wird direkt beim Laden der Seite angezeigt.
          <br />
          Mit Klick auf die Überschrift wird der Inhalt versteckt.
        </div>
      </KolAccordion>
      <KolAccordion id="accbtn2" _heading="Accordion 3" _level={1}>
        <div slot="header">
          <KolButton
            id="btn2"
            _label="Bearbeiten"
            _variant="ghost"
            style={{
              float: "right",
              fontSize: "70%",
              marginTop: "-2.3rem",
              marginRight: "0.5rem"
            }}
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
};
/**
 * Die Component stellt eine konkrete Story im Storybook dar.
 *
 * @see: https://storybook.js.org/docs/react/get-started/whats-a-story
 */
export const Alert = (args: any) => {
  return (
    <div>
      <KolAccordion _heading="Accordion mit Alert-Button" _level={1}>
        <div className="p-1" slot="header">
          In den Accordion-Header kann auch nach was komplexeres eingefügt
          werden.
          <KolButton
            _icon="fa-solid fa-plus"
            _label="Hinzufügen"
            _on={{
              onClick: () => {
                alert(`Hi, es wurde der Button Hinzufügen angeklickt`);
              }
            }}
          ></KolButton>
        </div>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
          odit, accusamus id a officia neque omnis facere, corporis amet alias
          maiores! Laboriosam placeat omnis illo maxime laborum fugiat deserunt
          mollitia! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quos aperiam rem, doloremque cum, explicabo qui reiciendis minima
          sequi quidem et harum dolorum consequatur tempore id tempora provident
          quae consequuntur ab!
        </p>
      </KolAccordion>
    </div>
  );
};
Alert.storyName = "Mit Alert-Button";
