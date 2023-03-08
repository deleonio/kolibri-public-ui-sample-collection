import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { LinkBasic } from "./basic";
import { LinkIcons } from "./icons";
import { LinkImage } from "./image";
import { LinkTarget } from "./target";

export const Link: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<LinkBasic />} />
    <Route path="/icons" element={<LinkIcons />} />
    <Route path="/target" element={<LinkTarget />} />
    <Route path="/image" element={<LinkImage />} />
  </Routes>
);
