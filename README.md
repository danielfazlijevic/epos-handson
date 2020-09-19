# Sajt za EPOS demonstratore

## Opis sajta
Sajt je pre svega namenjen studentima koji žele da se prijave za HandsOn radionice koje organizuje ELAB katedra. Cilj sajta je da se omogući prikaz budućih radionica i da se omogući laka prijava na iste.

## Struktura i tehnologije
Sajt je napravljen bez frameworka, korišćeni su samo HTML, CSS i javascript bez dodatnih pluginova.

Sajt ima jednu stranicu sa više sekcija:
- hero sekcija
- sekcija o projektu
- sekcija sa listom radionica
- sekcija za prijavu

Prilikom dizajniranja i kodiranja, korišćen je mobile-first princip što znači da se pre svega razvijalo za mobilni telefon, nakon čega su dodate ispravke za veće ekrane. 
Za layout koristi i Grid i Flexbox. 

Forma za prijavu ima validaciju za sve vrednosti i takođe čuva polja za ime i email u LocalStorage-u browsera što nam omogućava da te podatke zapamtimo i automatski popunimo kada korisnik sledeći put uđe na sajt.

Takođe, javascript skripta je napravljena koja menja izgled menija u odnosu na skrol stranice.
