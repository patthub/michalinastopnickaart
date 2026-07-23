// Prefiksuje wewnętrzne ścieżki wartością `base` z astro.config.mjs.
// Bez tego linki i zdjęcia (/katalog, /img/...) łamią się pod /michalinastopnickaart.
// Zewnętrznych URL-i (http, mailto) nie ruszaj tym helperem.
// BASE_URL bywa z końcowym „/” albo bez — normalizuj złączenie do jednego ukośnika.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const link = (sciezka: string) => `${base}/${sciezka.replace(/^\//, '')}`;
