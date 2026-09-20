# Debugging Journal — Task 2

### Entry 1: App Crash (Uncaught TypeError)
- **Symptom:** White screen crash on initial load: `Cannot read properties of null (reading 'map')`.
- **Tool Used:** Sources Panel / Breakpoints
- **What It Showed:** Setting a conditional breakpoint in the render phase revealed that the initial state for `products` was initialized as `null` instead of `[]`.
- **Fix:** Fixed state initialization in `useState<PublicProduct[]>([])` to start with an empty array.

---

### Entry 2: Silent Wrong Value (UI Prop Misbehavior)
- **Symptom:** Products rendered in the list, but product prices displayed as `undefined` or blank.
- **Tool Used:** React DevTools (Components Tab)
- **What It Showed:** Inspecting component props showed parent passed `cost={product.price}`, but `<ProductCard />` expected `price={product.price}`.
- **Fix:** Corrected prop name in `App.tsx` from `cost` to `price`.

---

### Entry 3: Network Failure (API Endpoint Typo)
- **Symptom:** Clicking "Fetch Products" silently failed, returning no items.
- **Tool Used:** Chrome Network Tab
- **What It Showed:** Filtered requests by `Fetch/XHR` and observed HTTP `404 Not Found` for `https://api.example.com/productss`.
- **Fix:** Corrected the fetch URL path from `/productss` to `/products`.