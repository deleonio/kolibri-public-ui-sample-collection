import { KolInputRange } from "@public-ui/react";
import { FC } from "react";
import { ERROR_MSG } from "../../shares/constants";

export const InputRangeBasic: FC = () => (
  <div className="d-grid gap-4">
    <KolInputRange
      _id="range"
      _min={0}
      _max={50}
      _name="range"
      _error={ERROR_MSG}
      _icon={{
        left: {
          icon: "fa-solid fa-arrow-left"
        },
        right: {
          icon: "fa-solid fa-arrow-right"
        }
      }}
      _touched
    >
      Schieberegler
    </KolInputRange>
    <KolInputRange _id="range" _min={0} _max={50} _step={10} _error={ERROR_MSG}>
      Schieberegler
    </KolInputRange>
    <KolInputRange _disabled _id="range" _min={0} _max={50}>
      Schieberegler
    </KolInputRange>
  </div>
);
