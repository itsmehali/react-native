**Breaking Bad React Native app**

Az alkalmazás egy Breaking Bad API-t használ. Az egyes szereplőkről szól, kapunk képet, nevet, becenevet és egyéb dolgokat róluk, mint pl.:
iskola vagy, hogy halottak e vagy nem.

Az alkalmazás egyszerű, de alapvetően megfelel a követelményeknek.

* Két oldalból áll, az egyik a főoldal, ahol egy képet a szereplőről láthatunk, favouritelni tudjuk, illetve előre és hátra tudunk lépkedni.
  Valamint egy More gomb, hogy többet is olvassunk róla, itt a Modal navigációt használja, hogy a 2. ablak feljöjjön.
* Ha favouritezünk, akkor az app ujratöltése után is favourite marad, mivel Storaget használ.
* Expos környezet
* Fejlesztés kezdetben weben, majd andoridos emulátor, a végén viszont a saját teleonom, az expo app segítségével.
* Az applikáció kinézete egyszerű, lehetne szebb is akár.

Az alábbi Hook-okat használtam fel, és összegző leírás, hogy mire való:

* useState: sokszor kellett felhasználni. Alapvetően egy adott állapotot mentünk el benne és a setXy részével meg tudjuk változtatni ha
  valami történik.
* useEffect: ha egy condition lefut akkor azt figyeli. Valami változást figyel. itt egy külön funkcióba async/await -esen (ez azért kell ,hogy
  megkapja az adatokat, úgymond várjon amíg megjön) az API-t betöltjük majd lefut a useEffect. A useEffect második részében egy []
  üres tömböt teszünk, ekkor egyszer mindenképp lefut. Ha valamilyen más useState változót berakunk, akkor legof újra futni ha változás
  történik a useStatebe.
* useContext: Ez a Provideres része, nem kell ledrillelni a state-et propokon keresztül. Az applikációnkban bárkinek biztosítani tudjuk, hogy
  megkapja a statet.
* useReducer: A másik fajtája a useState-nek. Olyasmi mint Redux, egy globális változó féle. (state,action) => newState és terun-öli a 
  dispatchel. Kell bele Constants, swich case az egyes állapotokra, Reducer és Context.
