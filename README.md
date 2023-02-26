# Vego Kassen Project is built with React, TypeScript and Vite.

## Installation

To start project run:

1. `npm install`
2. `npm install react-router-dom localforage match-sorter sort-by`


För att få styled components att fungera i typescript:

3. `npm install --save styled-components`
4. `npm install --save-dev @types/styled-components`
5. installera vscode extension: vscode-styled-components


för att få fontawesome att fungera:

6. `npm i --save @fortawesome/fontawesome-svg-core`
7. `npm i --save @fortawesome/free-solid-svg-icons`
8. `npm install --save @fortawesome/free-brands-svg-icons`
9. `npm i --save @fortawesome/free-regular-svg-icons`
10. `npm i --save @fortawesome/react-fontawesome@latest`

 Starta livecode server: npm run dev


## Hur du lägger in ikoner med fontawesome(tutorial från mimmi)

Hitta ikonen du vill  ha på fontawesome , ex https://fontawesome.com/icons/user?s=solid&f=classic

<FontAwesomeIcon icon="fa-solid fa-user" />
kopiera denna, men byt ut strängen till måsvingar och sista ordet i camelcase och spara. då importeras den till din komponent. 
<FontAwesomeIcon icon={faUser}/>

Ett till exempel, med lite styling
<FontAwesomeIcon icon={faCartShopping} size="lg" color="white" beat/> (den pulserar!)

    import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

    Både ikonerna och fontawesomeicon behöver importeras för att fungera.
    Vi har tillgång till brands, solid och regular free icons. Se till att importera iconen från rätt paket. ex:

<FontAwesomeIcon icon={faEnvelope}/>
    import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; Om du vill ha regular style
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons"  Om du vill ha solid style 
    (det kommer upp som förslag när du skriver vilka som finns o varifrån)

<FontAwesomeIcon icon={faFacebook} />
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; import från brands

https://fontawesome.com/docs/web/use-with/react/style Läsa mer om react styling och fontawesome. Tänk dock på att vi har typescript, dokumentationen utgår från javascript. 



## Generell styling och kodstil

**Vi skriver med named exports i hela projektet, inga export default.**

Nuvarande font som är importerad är: 

font-family: 'Titillium Web', sans-serif;

Om du hittar annan bra font du vill använda, dela med oss andra. 



