import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { ButtonLinkBasic } from "./basic";
import { ButtonLinkIcons } from "./icons";
import { ButtonLinkImage } from "./image";
import { ButtonLinkTarget } from "./target";

export const ButtonLink: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<ButtonLinkBasic />} />
    <Route path="/icons" element={<ButtonLinkIcons />} />
    <Route path="/target" element={<ButtonLinkTarget />} />
    <Route path="/image" element={<ButtonLinkImage />} />
  </Routes>
);
