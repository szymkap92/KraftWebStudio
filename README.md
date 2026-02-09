# KraftWeb Studio

Websites, die verkaufen. Schnell. Sauber. SEO-ready.

## Uruchomienie / Setup

```bash
npm install
npm run dev
```

Strona będzie dostępna pod `http://localhost:3000`. Domyślnie przekieruje na `/de`.

### Build produkcyjny

```bash
npm run build
npm start
```

## Struktura projektu

```
kraftweb/
├── messages/           # Tłumaczenia (DE/PL)
│   ├── de.json
│   └── pl.json
├── public/images/      # Zdjęcia
│   ├── profesjonalne.png
│   └── wakacje.png
├── src/
│   ├── app/
│   │   ├── [locale]/   # Strony per locale
│   │   │   ├── page.tsx              # Landing page
│   │   │   ├── impressum/page.tsx    # Impressum
│   │   │   ├── datenschutz/page.tsx  # Datenschutz (DE)
│   │   │   └── polityka-prywatnosci/ # Polityka prywatności (PL)
│   │   ├── api/contact/route.ts      # API formularza kontaktowego
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/     # Komponenty React
│   ├── i18n/           # Konfiguracja next-intl
│   └── lib/            # Utilities
├── middleware.ts        # i18n middleware
└── next.config.ts
```

## Kluczowe miejsca do edycji

### 1. Dane kontaktowe
- **`src/components/Contact.tsx`** (linie 14-15): zmień `CONTACT_EMAIL` i `CONTACT_PHONE`
- **`src/components/JsonLd.tsx`**: zmień email, telefon, adres w structured data

### 2. Zdjęcia
- **`public/images/profesjonalne.png`** — zdjęcie do Hero (przy komputerze)
- **`public/images/wakacje.png`** — zdjęcie do sekcji "O mnie"
- Nazwy plików muszą się zgadzać (lub zmień ścieżki w `Hero.tsx` i `AboutMe.tsx`)
- Jeśli plik nie istnieje, wyświetli się placeholder z ikoną (komponent `SafeImage`)

### 3. Dane prawne (Impressum / Datenschutz)
- **`messages/de.json`** i **`messages/pl.json`** — sekcje `impressum` i `datenschutz`
- Szukaj `[Vor- und Nachname]`, `[Straße]`, `[PLZ]`, `[E-Mail]`, `[Telefon]` itd.
- Skonsultuj treści prawne z prawnikiem!

### 4. SEO i domena
- **`src/app/[locale]/layout.tsx`**: `baseUrl` (linia z `https://kraftweb.studio`)
- **`src/app/sitemap.ts`**: `BASE_URL`
- **`src/components/JsonLd.tsx`**: `url` i inne dane structured data

### 5. Formularz kontaktowy (backend)
- **`src/app/api/contact/route.ts`** — aktualnie loguje do konsoli
- Podmień na SendGrid, Resend, Nodemailer lub inny serwis mailowy

### 6. Social media / linki zewnętrzne
- **`src/components/JsonLd.tsx`** — `sameAs` array (dodaj profile social media)

### 7. Treści i tłumaczenia
- **`messages/de.json`** — wszystkie treści w języku niemieckim
- **`messages/pl.json`** — wszystkie treści w języku polskim

## Technologie

- Next.js 16.x (App Router) + TypeScript
- Tailwind CSS v4
- next-intl (i18n z routing per locale)
- Framer Motion (animacje scroll)
- Radix UI (accordion, dialog, checkbox, label)
- Lucide React (ikony)

## Funkcjonalności

- Pełna dwujęzyczność (DE/PL) z przełącznikiem w headerze
- Automatyczne wykrywanie języka (Accept-Language)
- SEO: meta tagi, OpenGraph, Twitter Cards, sitemap, robots, hreflang, JSON-LD
- Formularz kontaktowy z walidacją i mock API
- Portfolio z 4 mockupami SVG i filtrowaniem
- Cennik z widełkami w EUR i disclaimerem
- FAQ z akordeonem
- Podstrony prawne (Impressum, Datenschutz/Polityka prywatności)
- Responsywny design (mobile-first)
- Animacje scroll (fade-in/slide-up)
- Accessibility: focus states, aria labels, semantyczny HTML, kontrast

## Production hardening

### Security headers
Skonfigurowane w `next.config.ts` via `headers()`:
- `Content-Security-Policy` — default-src 'self', frame-ancestors 'none'
- `Strict-Transport-Security` — HSTS z preload
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — camera, microphone, geolocation wyłączone

### Cookie języka
`NEXT_LOCALE` — `Path=/; SameSite=Lax; Max-Age=31536000`. Flaga `Secure` dodawana automatycznie gdy strona jest serwowana po HTTPS.

### Kontakt API (DSGVO)
- Produkcja: zero logowania danych osobowych
- Dev: maskowany email + obcięta wiadomość (max 40 znaków)
- Plik: `src/app/api/contact/route.ts`

### metadataBase
Placeholder `https://kraftweb.studio` w `src/app/[locale]/layout.tsx` (linia z `metadataBase`). Zmień na docelową domenę przed deployem.

### SafeImage
Komponent `SafeImage` (w `src/components/SafeImage.tsx`) renderuje placeholder z ikoną gdy obraz nie istnieje. Oba użycia (Hero, AboutMe) korzystają z `fill` + `aspect-[4/5]` na kontenerze, co zapobiega CLS.

## Deployment (Vercel)

```bash
npx vercel
```

Lub podłącz repozytorium do Vercel Dashboard.
