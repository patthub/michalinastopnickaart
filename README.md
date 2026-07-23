# Pracownia Ziarno — wizytówka + katalog

Statyczna strona ceramicznej pracowni: wizytówka, katalog wyrobów i strony
produktów. Bez koszyka i płatności — katalog jest prezentacją, kontakt przez
linki zewnętrzne. Astro 5 + Tailwind, hosting na GitHub Pages.

> Treść („Ziarno", opisy, zdjęcia) jest fikcyjna — do podmiany na własną.

## Lokalnie

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produkcyjny build do dist/
```

## Dodanie produktu

1. **Zdjęcia** → wrzuć do `public/img/produkty/` (przeciągnij pliki wprost w
   github.com albo dodaj lokalnie). Nazwy bez spacji i polskich znaków.
2. **Opis** → utwórz plik `.md` w `src/content/produkty/` (nazwa pliku = adres
   URL produktu, np. `czarka.md` → `/produkty/czarka`). Najprościej skopiować
   istniejący plik i podmienić pola.

Nagłówek pliku (`---` … `---`):

| Pole | Typ | Uwagi |
|---|---|---|
| `nazwa` | tekst | **wymagane** |
| `skrot` | tekst | jedno zdanie na kartę w katalogu |
| `zdjecia` | lista ścieżek | **min. 1**, np. `/img/produkty/czarka-1.svg` |
| `glina` `szkliwo` `wypal` `wymiary` | tekst | opcjonalne, metryka |
| `rok` | liczba | opcjonalne |
| `kategoria` | `naczynia` \| `wazony` \| `rzezba` \| `kafle` | **wymagane** |
| `kolejnosc` | liczba | niższa = wyżej w katalogu (domyślnie 99) |
| `dostepny` | `true` / `false` | domyślnie `true` |
| `linki` | lista `{etykieta, url}` | dowolne linki zewnętrzne (pełny `https://…`) |

Treść pod nagłówkiem to pełny opis (Markdown). Commit → GitHub Actions sam
przebuduje i opublikuje stronę.

## Publikacja (GitHub Pages)

1. Wypchnij repo na GitHub (publiczne).
2. **Settings → Pages → Source: GitHub Actions**. Workflow `.github/workflows/deploy.yml`
   deployuje przy każdym pushu na `main`.

### Własna domena

1. `astro.config.mjs` → `site: 'https://twojadomena.pl'`.
2. Utwórz `public/CNAME` z jedną linią: `twojadomena.pl`.
3. DNS u rejestratora:
   - Rekordy **A** dla domeny głównej:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME** `www` → `uzytkownik.github.io`
4. Settings → Pages → Custom domain → wpisz domenę, zaznacz *Enforce HTTPS*.

### Bez własnej domeny (`uzytkownik.github.io/nazwa-repo`)

W `astro.config.mjs` ustaw `site: 'https://uzytkownik.github.io'` **oraz**
odkomentuj `base: '/nazwa-repo'`.

## Struktura

```
src/content/produkty/   ← pliki .md (jeden na produkt)
src/content.config.ts   ← schemat pól (walidacja Zod)
src/layouts/            ← Base.astro
src/pages/              ← index, katalog, produkty/[...slug]
src/components/         ← KartaProduktu, TabelaMetryk
src/styles/global.css   ← paleta + typografia (tokeny)
public/img/produkty/    ← zdjęcia
.github/workflows/      ← deploy
```

## Sveltia CMS (opcjonalnie, później)

Edycję przez panel można dodać bez zmiany struktury — Sveltia czyta te same
pliki `.md`. Doklejane, gdy klikanie w github.com przestanie wystarczać.
