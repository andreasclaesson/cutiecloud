# CutieCloud landing page (Next.js + Bunny.net)

En statisk Next.js-sida med "e-girl vibe" som kan hostas billigt på Bunny.net.

## Kom igång lokalt

```bash
npm install
npm run dev
```

## Bygg för Bunny.net

```bash
npm run build
```

Detta skapar en `out/`-mapp (statisk export). Ladda upp allt i `out/` till din Bunny Storage Zone.

## Rekommenderad Bunny-setup

1. Skapa en **Storage Zone**.
2. Ladda upp innehållet från `out/`.
3. Skapa en **Pull Zone** som pekar mot Storage-zonen.
4. Lägg till din custom domän på Pull-zonen och aktivera SSL.
5. (Valfritt) Lägg till Edge Rule för fallback till `/index.html` om du bygger fler routes.
