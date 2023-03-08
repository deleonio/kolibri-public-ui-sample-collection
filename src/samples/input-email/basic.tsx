import { KolInputEmail } from "@public-ui/react";
import { FC } from "react";
import { ERROR_MSG } from "../../shares/constants";

export const InputEmailBasic: FC = () => (
  <div className="d-grid gap-4">
    <KolInputEmail
      _id="email"
      _required
      _value="test@mail.de"
      _error={ERROR_MSG}
    >
      E-Mail
    </KolInputEmail>
    <KolInputEmail
      _id="email1"
      _name="email1"
      _placeholder="elke@mustermann.de"
      _list="['test1@mail.de', 'test2@mail.de', 'test3@mail.de']"
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
      E-Mail (Liste)
    </KolInputEmail>
    <KolInputEmail _disabled _id="email2" _value="test@mail.de">
      E-Mail (Disabled)
    </KolInputEmail>
    <KolInputEmail _id="email3" _read-only _value="test@mail.de">
      E-Mail (Readonly)
    </KolInputEmail>
  </div>
);
