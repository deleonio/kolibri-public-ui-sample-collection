import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { TextareaAdjustHeight } from "./adjust-height";
import { TextareaBasic } from "./basic";
import { TextareaDisabled } from "./disabled";
import { TextareaPlaceholder } from "./placeholder";
import { TextareaReadOnly } from "./readonly";
import { TextareaResize } from "./resize";
import { TextareaRows } from "./rows";

export const Textarea: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<TextareaBasic />} />
    <Route path="/placeholder" element={<TextareaPlaceholder />} />
    <Route path="/rows" element={<TextareaRows />} />
    <Route path="/resize" element={<TextareaResize />} />
    <Route path="/adjust-height" element={<TextareaAdjustHeight />} />
    <Route path="/disabled" element={<TextareaDisabled />} />
    <Route path="/readonly" element={<TextareaReadOnly />} />
  </Routes>
);
