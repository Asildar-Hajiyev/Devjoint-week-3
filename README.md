# DevJoint

DevJoint — React və Redux Toolkit əsasında hazırlanmış, responsiv məhsul kataloqu tətbiqidir. Layihə [Fake Store API](https://fakestoreapi.com) vasitəsilə real vaxt data çəkərək istifadəçilərə axtarış, filtrasiya və səhifələmə funksionallığı təqdim edir.

## Xüsusiyyətlər

- 🔍 **Axtarış** — debounce mexanizmi ilə optimallaşdırılmış, real-time məhsul axtarışı (desktop + mobil dəstəyi)
- 📦 **Səhifələmə (Pagination)** — məhsulların səhifələr üzrə bölünməsi
- ⚡ **State idarəetməsi** — Redux Toolkit (`createAsyncThunk`) ilə mərkəzləşdirilmiş data axını
- 🎯 **UX vəziyyətləri** — loading, error və empty state-lərin ayrıca göstərilməsi
- 📱 **Responsiv dizayn** — mobil, tablet və desktop üçün uyğunlaşdırılmış interfeys
- 🧩 **Təkrar istifadə oluna bilən komponentlər** — Card, Search, Pagination, Footer

## Texnologiyalar

- React
- Redux Toolkit
- Axios
- Tailwind CSS
- React Router
- React Icons
- react-router-dom

## Struktur

```
src/
├── components/     → Card, Pagination, Footer və s.
├── pages/          → Header, Search
├── redux/          → dataSlice (thunk + reducer)
├── hooks/          → useFetch (custom hook)
```