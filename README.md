# Vego Kassen Project is built with React, TypeScript and Vite.

## Installation

To start project run:

`npm install`

`npm install react-router-dom localforage match-sorter sort-by`

`npm install --save styled-components`

`npm install --save-dev @types/styled-components`

installera vscode extension: vscode-styled-components


för att få fontawesome att fungera:
`npm i --save @fortawesome/fontawesome-svg-core`
`npm i --save @fortawesome/free-solid-svg-icons`
`npm i --save @fortawesome/free-regular-svg-icons`
`npm i --save @fortawesome/react-fontawesome@latest`

npm run dev


## Hur du lägger in ikoner med fontawesome

Hitta ikonen du vill  ha på fontawesome , ex https://fontawesome.com/icons/user?s=solid&f=classic

<FontAwesomeIcon icon="fa-solid fa-user" />
kopiera denna, men byt ut strängen till måsvingar och camelcase och spara. då importeras den till din komponent. 
<FontAwesomeIcon icon={faUser}/>

Ett till exempel, med lite styling
<FontAwesomeIcon icon={faCartShopping} size="lg" color="white" beat/>

import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

https://fontawesome.com/docs/web/use-with/react/ Läsa mer om react och fontawesome


**Vi skriver med named exports i hela projektet, inga export default.**


