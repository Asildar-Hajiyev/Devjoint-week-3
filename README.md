# DevJoint 🎬

OMDb API əsasında qurulmuş, film/serial axtarışı və detallarını göstərən React tətbiqi.

## Xüsusiyyətlər

- 🔍 **Canlı axtarış** — debounce (400ms) ilə optimallaşdırılmış axtarış paneli, həm desktop, həm də mobil üçün ayrı UI
- 📄 **Səhifələmə (Pagination)** — nəticələr 8-ər ədəd göstərilir, "sliding window" pagination komponenti
- 🎞️ **Detal səhifəsi** — seçilmiş film/serial haqqında poster, janr, rejissor, IMDb reytinqi və süjet
- 🔔 **Toast bildirişləri** — `react-toastify` inteqrasiyası
- 📱 **Responsiv dizayn** — Tailwind CSS ilə mobil uyğun header və grid

## Texnologiyalar

- **React** (hooks: `useState`, `useEffect`)
- **React Router DOM** — səhifələr arası naviqasiya (`/main`, `/product/:id`)
- **Tailwind CSS** — stilizasiya
- **React Icons** (`react-icons/fa`)
- **React Toastify** — bildirişlər
- **OMDb API** — məlumat mənbəyi

## Layihə strukturu

```
src/
├── components/
│   ├── Header.jsx           # Naviqasiya + axtarış paneli (desktop/mobil)
│   ├── Footer.jsx           # Footer
│   ├── Card.jsx             # Film kartı
│   ├── Pagination.jsx       # Səhifələmə komponenti
│   └── SearchResultItem.jsx # Axtarış nəticəsi sətri
├── hooks/
│   ├── useFerch.js          # OMDb API-dən məlumat çəkmə hook-u (axtarış + səhifələmə)
│   └── useDebounce.js       # Debounce hook-u
├── pages/
│   ├── Main.jsx             # Əsas səhifə (grid + pagination)
│   └── ProductDetails.jsx   # Film detal səhifəsi
├── provider/
│   └── AppRouter.jsx        # Route konfiqurasiyası
└── App.jsx                  # Root komponent
```

## Mühit dəyişənləri

> OMDb API açarını pulsuz olaraq [omdbapi.com](https://www.omdbapi.com/apikey.aspx) saytından ala bilərsiniz.

## Skriptlər

| Əmr | Təsvir |
|---|---|
| `npm run dev` | Development server-i işə salır |

