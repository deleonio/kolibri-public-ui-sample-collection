import { FC } from "react";
import { AlertBasic } from "./basic";

export const AlertCardMsg: FC = () => (
  <div className="d-grid">
    <AlertBasic variant="card" />
    <AlertBasic variant="msg" />
  </div>
);
