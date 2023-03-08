import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AccordionBasic } from "./basic";
import { AccordionHeadlines } from "./headlines";
import { AccordionHeader } from "./header";

export const Accordion: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<AccordionBasic />} />
    <Route path="/headlines" element={<AccordionHeadlines />} />
    <Route path="/header" element={<AccordionHeader />} />
  </Routes>
);
