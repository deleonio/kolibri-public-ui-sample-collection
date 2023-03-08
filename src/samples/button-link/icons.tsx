import { KolButtonLink } from "@public-ui/react";
import { FC } from "react";

export const ButtonLinkIcons: FC = () => (
  <div className="d-grid gap-4">
    <KolButtonLink
      _icon="fa-solid fa-house"
      _label="Ich bin ein Link mit Icon links"
    />
    <KolButtonLink
      _icon={{
        right: "fa-solid fa-house"
      }}
      _label="Ich bin ein Link mit Icon rechts"
    />
    <KolButtonLink
      _icon={{
        top: "fa-solid fa-house"
      }}
      _label="Ich bin ein Link mit Icon oben"
    />
    <KolButtonLink
      _icon={{
        bottom: "fa-solid fa-house"
      }}
      _label="Ich bin ein Link mit Icon unten"
    />
    <KolButtonLink
      _icon={{
        top: "fa-solid fa-house",
        right: "fa-solid fa-house",
        bottom: "fa-solid fa-house",
        left: "fa-solid fa-house"
      }}
      _label="Ich bin ein Link mit allen Icons"
    />
  </div>
);
