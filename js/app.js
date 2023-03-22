"use strict";

const contatos = await fetch("http://localhost:8080/contato/0").then(
  (response) => response.json()
);

import { changeElements } from "./change-elements.js";
import { returnIcon } from "./return.js";
import { chargeContacts } from "./charge-contacts.js";
import { chargeProfile } from "./charge-profile.js";
import { showMessages } from "./show-messages.js";
import { changeColors } from "./change-colors.js";

changeColors();
chargeContacts(contatos);
chargeProfile(contatos);
showMessages(contatos);
changeElements();
returnIcon();
