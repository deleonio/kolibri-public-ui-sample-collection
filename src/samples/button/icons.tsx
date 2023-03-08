import { KolButton } from "@public-ui/react";
import { FC } from "react";

export const ButtonIcons: FC = () => (
  <div className="d-grid gap-4">
    <KolButton
      _icon={{
        bottom: "fa-solid fa-arrow-down",
        left: {
          icon: "fa-solid fa-arrow-left"
        },
        top: {
          style: {
            "font-size": "200%",
            transform: "rotate(45deg)"
          },
          icon: "fa-solid fa-arrow-up"
        },
        right: "fa-solid fa-arrow-right"
      }}
      _label="Label"
      _on={{
        onClick: (_event, _value) => alert("Klick!")
      }}
    />
  </div>
);
