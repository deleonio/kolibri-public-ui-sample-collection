import { KolButton } from "@public-ui/react";
import { FC } from "react";

export const TooltipBasic: FC = () => {
  const catchFocusButton = (el) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      if (el instanceof HTMLElement) {
        el?.focus();
      }
    }, 1000);
  };

  return (
    <div className="d-flex flex-warp gap-2">
      <KolButton
        _label="Oben"
        _icon="fa-solid fa-arrow-up"
        _icon-only=""
        _tooltip-align="top"
        _variant="primary"
      ></KolButton>
      <KolButton
        _label="Unten"
        _icon="fa-solid fa-arrow-down"
        _icon-only=""
        _tooltip-align="bottom"
        _variant="secondary"
      ></KolButton>
      <KolButton
        _label="Links"
        _icon="fa-solid fa-arrow-left"
        _icon-only=""
        _tooltip-align="left"
        _variant="normal"
      ></KolButton>
      <KolButton
        ref={catchFocusButton}
        _label="Rechts"
        _icon="fa-solid fa-arrow-right"
        _icon-only=""
        _tooltip-align="right"
        _variant="danger"
      ></KolButton>
      <KolButton
        _label="Ich bin ein langer Text im Tooltip. Ich bin ein langer Text im Tooltip. Ich bin ein langer Text im Tooltip. Ich bin ein langer Text im Tooltip."
        _icon="fa-solid fa-house"
        _icon-only=""
        _variant="ghost"
      ></KolButton>{" "}
      <KolButton
        _label="Disabled"
        _icon="fa-solid fa-trash"
        _icon-only=""
        _disabled
      ></KolButton>
    </div>
  );
};
