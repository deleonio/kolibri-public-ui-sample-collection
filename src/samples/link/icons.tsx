import { KolLink } from "@public-ui/react";
import { FC } from "react";

export const LinkIcons: FC = () => (
  <div className="d-grid gap-4">
    <KolLink
      _icon="fa-solid fa-house"
      _label="Ich bin ein Link mit Icon links"
    />
    <KolLink
      _icon={{
        right: "fa-solid fa-house"
      }}
      _label="Ich bin ein Link mit Icon rechts"
    />
    <KolLink
      _icon={{
        top: "fa-solid fa-house"
      }}
      _label="Ich bin ein Link mit Icon oben"
    />
    <KolLink
      _icon={{
        bottom: "fa-solid fa-house"
      }}
      _label="Ich bin ein Link mit Icon unten"
    />
    <KolLink
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
