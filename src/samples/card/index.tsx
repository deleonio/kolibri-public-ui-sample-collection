import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { CardBasic } from "./basic";
import { CardConfirm } from "./confirm";
import { CardFlex } from "./flex";
import { CardSelection } from "./selection";

export const Card: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<CardBasic />} />
    <Route path="/flex" element={<CardFlex />} />
    <Route path="/confirm" element={<CardConfirm />} />
    <Route path="/selection" element={<CardSelection />} />
  </Routes>
);
