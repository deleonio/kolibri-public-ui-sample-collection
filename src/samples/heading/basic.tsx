import { KolHeading } from "@public-ui/react";
import { FC } from "react";

export const HeadingBasic: FC = () => (
  <div className="d-grid gap-4">
    <KolHeading _level={1}>Ich bin eine H1-Überschrift</KolHeading>
    <KolHeading _level={2}>Ich bin eine H2-Überschrift</KolHeading>
    <KolHeading _level={3}>Ich bin eine H3-Überschrift</KolHeading>
    <KolHeading _level={4}>Ich bin eine H4-Überschrift</KolHeading>
    <KolHeading _level={5}>Ich bin eine H5-Überschrift</KolHeading>
    <KolHeading _level={6}>Ich bin eine H6-Überschrift</KolHeading>
  </div>
);
