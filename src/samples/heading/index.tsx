import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { HeadingBadged } from "./badged";
import { HeadingBasic } from "./basic";
import { HeadingParagraph } from "./paragraph";

export const Heading: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<HeadingBasic />} />
    <Route path="/paragraph" element={<HeadingParagraph />} />
    <Route path="/badged" element={<HeadingBadged />} />
  </Routes>
);
