import { KolButton, KolButtonGroup } from "@public-ui/react";
import { FC } from "react";

export const ButtonGroupBasic: FC = () => (
  <KolButtonGroup>
    <KolButton _label="Active" _variant="primary"></KolButton>
    <KolButton _label="Not active" _disabled></KolButton>
    <KolButton
      _label="Active"
      _icon="fa-solid fa-house"
      _variant="danger"
    ></KolButton>
    <KolButton
      _label="Active"
      _icon="fa-solid fa-trash"
      _iconOnly
      _variant="ghost"
    ></KolButton>
  </KolButtonGroup>
);
