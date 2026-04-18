import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Milk,
  IceCream,
  Pencil,
  ShoppingBasket,
  Check,
  Navigation,
  Facebook,
  Instagram,
  ShoppingCart,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import heroShop from "../assets/hero-shop.jpg";
import galleryDairy from "../assets/gallery-dairy.jpg";
import gallerySnacks from "../assets/gallery-snacks.jpg";
import galleryStationery from "../assets/gallery-stationery.jpg";
import galleryExterior from "../assets/gallery-exterior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radhe Parlour & General Store — Fresh Dairy & Daily Essentials, Palanpur" },
      {
        name: "description",
        content:
          "Visit Radhe Parlour & General Store on VIP Road, Palanpur for fresh Amul milk, ice cream, chocolates, stationery and daily groceries. Open daily: 7:30 AM — 8:30 PM.",
      },
      { property: "og:title", content: "Radhe Parlour & General Store — Palanpur" },
      {
        property: "og:description",
        content: "Your nearby store for fresh dairy & daily essentials in Palanpur, Gujarat.",
      },
      { property: "og:image", content: heroShop },
      { name: "twitter:image", content: heroShop },
    ],
  }),
  component: Home,
});

const PHONE = "+918200895554";
const WHATSAPP = "+918200895554";
const ADDRESS =
  "VIP Road, Banas Dairy Rd, nr. Treasure Residency, Shivam Nagar Society, Palanpur, Gujarat 385001";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=24.15246864775864,72.44014590323756";
const MAPS_EMBED =
  "https://www.google.com/maps?q=24.15246864775864,72.44014590323756&z=17&output=embed";

const products = [
  {
    icon: Milk,
    title: "Milk & Dairy",
    desc: "Fresh Amul milk, butter, ghee, paneer, curd and more — delivered fresh daily.",
  },
  {
    icon: IceCream,
    title: "Ice Cream & Chocolates",
    desc: "Wide range of Amul ice cream tubs, cones, chocolates and frozen treats.",
  },
  {
    icon: Pencil,
    title: "Stationery",
    desc: "Notebooks, pens, pencils and school supplies for students of all ages.",
  },
  {
    icon: ShoppingBasket,
    title: "Daily Essentials",
    desc: "Groceries, snacks, beverages and household items for everyday needs.",
  },
];

const reasons = [
  "Fresh products, every day",
  "Affordable, honest pricing",
  "Conveniently located on VIP Road",
  "Friendly, helpful service",
  "Wide range under one roof",
];

const reviews = [
  {
    name: "Jaydip Joshi",
    text: "Best place to buy fresh milk and Amul products. Also good collection of stationery and daily items.",
  },
  {
    name: "Vansh Joshi",
    text: "Very good place for food packet items and other necessary things. Highly recommend.",
  },
  {
    name: "Utsav Patel",
    text: "Wonderful shop and customer care support is the very best in the area.",
  },
  {
    name: "Devang Joshi",
    text: "You can get all fresh dairy products here. Trustworthy and reliable shop.",
  },
  {
    name: "Kishan Bhatt",
    text: "Very convenient store for daily needs. You can find milk, ice cream, and groceries easily.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <Reviews />
        <Gallery />
        <PreOrder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#reviews", label: "Reviews" },
    { href: "#gallery", label: "Gallery" },
    { href: "#preorder", label: "Pre-Order", highlight: true },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-border backdrop-blur ${isMenuOpen ? "bg-background" : "bg-background/85"}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
              R
            </span>
            <span className="text-base font-semibold sm:text-lg">Radhe Parlour</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition hover:text-[var(--link)] ${
                  link.highlight ? "font-semibold text-primary animate-soft-bounce" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95"
            >
              <Phone className="h-4 w-4" /> <span className="hidden sm:inline">Call</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] z-[100] md:hidden overflow-y-auto"
          style={{ backgroundColor: "#F1F3E0" }}
        >
          <nav className="flex flex-col p-8 space-y-8 min-h-[calc(100vh-60px)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl font-bold border-b-2 border-black/5 pb-4 transition active:opacity-70 ${
                  link.highlight ? "text-[#D97D55]" : "text-[#2d3a2a]"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 space-y-6">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full rounded-2xl bg-[#D97D55] p-5 text-lg font-bold text-white shadow-lg active:scale-95 transition"
              >
                <Navigation className="h-6 w-6" /> Get Directions
              </a>

              <div className="mt-10 py-8 border-t border-black/5 text-center space-y-2">
                <p className="font-bold text-[#2d3a2a]">Radhe Parlour & General Store</p>
                <p className="text-sm text-[#778873]">Open daily: 7:30 AM – 8:30 PM</p>
                <a href={`tel:${PHONE}`} className="block mt-4 text-xl font-bold text-[#D97D55]">
                  {PHONE}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroShop}
          alt="Interior of Radhe Parlour & General Store, Palanpur"
          width={1600}
          height={1024}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-primary" /> Open today: 7:30 AM – 8:30 PM
        </span>
        <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Radhe Parlour <span className="text-primary">&</span> General Store
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Your nearby store for fresh dairy & daily essentials in Palanpur.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95"
          >
            <Navigation className="h-4 w-4" /> Get Directions
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
        <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="font-medium text-foreground">5.0</span>
          <span>· 8 Google reviews</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[var(--soft)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            A trusted neighbourhood store, serving Palanpur every day.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Radhe Parlour & General Store is a friendly local shop on VIP Road, Palanpur. From fresh
            Amul dairy products to everyday groceries, ice cream, chocolates and stationery — we
            keep your daily essentials within easy reach, at honest prices.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { k: "5.0★", v: "Customer rating" },
              { k: "Daily", v: "Fresh stock" },
              { k: "7:30 AM", v: "Open daily" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft"
              >
                <div className="text-xl font-bold text-primary">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={galleryDairy}
            alt="Fresh Amul dairy products"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full rounded-3xl object-cover shadow-card"
          />
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">What We Offer</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Everything you need, nearby.</h2>
        <p className="mt-3 text-muted-foreground">
          A carefully stocked range of fresh and everyday products for your home.
        </p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Local, reliable & always fresh.</h2>
          <p className="mt-4 text-muted-foreground">
            We focus on what matters most — quality, convenience and a friendly experience.
          </p>
        </div>
        <ul className="space-y-3">
          {reasons.map((r) => (
            <li
              key={r}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft"
            >
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-4 w-4" />
              </span>
              <span className="font-medium">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Reviews</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Loved by our customers</h2>
        <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="font-medium text-foreground">5.0</span>
          <span>on Google</span>
        </div>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-semibold text-accent-foreground">
                {r.name.charAt(0)}
              </span>
              <span className="text-sm font-semibold">{r.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: galleryExterior, alt: "Shop exterior" },
    { src: heroShop, alt: "Shop interior shelves" },
    { src: gallerySnacks, alt: "Snacks and chocolates" },
    { src: galleryDairy, alt: "Dairy products" },
    { src: galleryStationery, alt: "Stationery section" },
  ];
  return (
    <section id="gallery" className="bg-[var(--soft)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Gallery</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Take a look inside</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <img
            src={images[0].src}
            alt={images[0].alt}
            loading="lazy"
            className="col-span-2 row-span-2 h-full w-full rounded-2xl object-cover shadow-soft md:aspect-auto"
          />
          {images.slice(1).map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover shadow-soft"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Visit Us</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Come say hello</h2>
        <p className="mt-3 text-muted-foreground">
          We’re open daily from 7:30 AM to 8:30 PM. Drop in or give us a call.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <InfoCard icon={MapPin} title="Address">
            {ADDRESS}
          </InfoCard>
          <InfoCard icon={Phone} title="Phone">
            <a href={`tel:${PHONE}`} className="text-[var(--link)] hover:underline">
              Call the store
            </a>
          </InfoCard>
          <InfoCard icon={Clock} title="Business Hours">
            7:30 AM – 8:30 PM daily
          </InfoCard>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-95"
          >
            <Navigation className="h-4 w-4" /> Get Directions
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-card md:col-span-3">
          <iframe
            title="Radhe Parlour & General Store on Google Maps"
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            loading="lazy"
            className="block h-[420px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent text-accent-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

const DAIRY_PRODUCTS = ["Milk", "Buttermilk", "Ice Cream", "Butter", "Other"] as const;
type DairyProduct = (typeof DAIRY_PRODUCTS)[number];

const PRODUCT_VARIANTS: Record<string, string[]> = {
  Milk: ["Buffalo Milk", "Gold Milk"],
  Buttermilk: ["Masti Buttermilk", "Masala Buttermilk"],
  "Ice Cream": ["Vanilla", "Chocolate", "Butterscotch", "American Nuts", "Rajbhog"],
  Butter: ["Amul Butter (Salted)", "Amul Lite", "Garlic Butter"],
};

function PreOrder() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selected, setSelected] = useState<DairyProduct[]>([]);
  const [variants, setVariants] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function toggleProduct(p: DairyProduct) {
    setSelected((prev) => {
      const isRemoving = prev.includes(p);
      if (isRemoving) {
        const newSelected = prev.filter((x) => x !== p);
        const newVariants = { ...variants };
        delete newVariants[p];
        setVariants(newVariants);
        return newSelected;
      } else {
        return [...prev, p];
      }
    });
  }

  function handleVariantChange(product: string, variant: string) {
    setVariants((prev) => ({ ...prev, [product]: variant }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const productSummary =
      selected
        .map((p) => {
          const variant = variants[p];
          return variant ? `${p} (${variant})` : p;
        })
        .join(", ") || "—";

    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "—";

    const msg = [
      "🛒 *Pre-Order Request — Radhe Parlour*",
      "",
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      `🥛 Products: ${productSummary}`,
      `📦 Quantity: ${quantity || "—"}`,
      `📅 Pickup/Delivery Date: ${formattedDate}`,
      notes ? `📝 Notes: ${notes}` : "",
    ]
      .filter((l) => l !== "")
      .join("\n");

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noreferrer");
    setSubmitted(true);
  }

  function resetForm() {
    setName("");
    setPhone("");
    setSelected([]);
    setVariants({});
    setQuantity("");
    setDate("");
    setNotes("");
    setSubmitted(false);
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="preorder" style={{ backgroundColor: "#F4E9D7" }}>
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white"
            style={{ backgroundColor: "#D97D55" }}
          >
            <ShoppingCart className="h-4 w-4" />
            Pre-Order Your Dairy Products
          </div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl" style={{ color: "#D97D55" }}>
            Pre-Order Your Daily Essentials
          </h2>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "#6a5240" }}>
            Book your milk, buttermilk, ice cream, and other items in advance.
            <br className="hidden sm:block" />
            Get fresh products ready when you need them.
          </p>
        </div>

        {/* Card */}
        <div
          className="mt-10 rounded-3xl p-6 sm:p-10"
          style={{
            background: "#fff",
            boxShadow: "0 8px 40px -12px rgba(217,125,85,0.18)",
          }}
        >
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle className="h-16 w-16" style={{ color: "#D97D55" }} />
              <h3 className="text-2xl font-bold" style={{ color: "#D97D55" }}>
                Request Sent! 🎉
              </h3>
              <p className="text-muted-foreground max-w-sm">
                Your request has been sent. We will contact you shortly to confirm your order.
              </p>
              <button
                onClick={resetForm}
                className="mt-4 rounded-full px-8 py-3 text-sm font-semibold text-white transition"
                style={{ backgroundColor: "#D97D55" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6FA4AF")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#D97D55")}
              >
                Place Another Order
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name + Phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="po-name"
                    className="mb-1.5 block text-sm font-semibold"
                    style={{ color: "#6a5240" }}
                  >
                    Customer Name
                  </label>
                  <input
                    id="po-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2"
                    style={{
                      borderColor: "#e2c9b8",
                      background: "#fdf8f5",
                      // @ts-ignore
                      "--tw-ring-color": "#D97D55",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="po-phone"
                    className="mb-1.5 block text-sm font-semibold"
                    style={{ color: "#6a5240" }}
                  >
                    Phone Number <span style={{ color: "#D97D55" }}>*</span>
                  </label>
                  <input
                    id="po-phone"
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2"
                    style={{ borderColor: "#e2c9b8", background: "#fdf8f5" }}
                  />
                </div>
              </div>

              {/* Product Selection */}
              <div>
                <p className="mb-2 text-sm font-semibold" style={{ color: "#6a5240" }}>
                  Select Products
                </p>
                <div className="flex flex-wrap gap-2">
                  {DAIRY_PRODUCTS.map((p) => {
                    const active = selected.includes(p);
                    return (
                      <label
                        key={p}
                        className="cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition select-none"
                        style={{
                          borderColor: active ? "#D97D55" : "#e2c9b8",
                          backgroundColor: active ? "#D97D55" : "#fdf8f5",
                          color: active ? "#fff" : "#6a5240",
                        }}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={active}
                          onChange={() => toggleProduct(p)}
                        />
                        {active && "✓ "}
                        {p}
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Variant Selection */}
              {selected.some((p) => PRODUCT_VARIANTS[p]) && (
                <div className="space-y-4 rounded-2xl bg-[#fdf8f5] p-5 border border-[#e2c9b8]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#D97D55]">
                    Select Specifics
                  </p>
                  <div className="space-y-5">
                    {selected.map((p) => {
                      const options = PRODUCT_VARIANTS[p];
                      if (!options) return null;
                      return (
                        <div key={p}>
                          <label
                            className="mb-2 block text-sm font-semibold"
                            style={{ color: "#6a5240" }}
                          >
                            {p === "Ice Cream" ? "Ice Cream Flavor" : `${p} Type`}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {options.map((v) => {
                              const isSelected = variants[p] === v;
                              return (
                                <button
                                  key={v}
                                  type="button"
                                  onClick={() => handleVariantChange(p, v)}
                                  className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
                                    isSelected
                                      ? "bg-[#D97D55] text-white border-[#D97D55]"
                                      : "bg-white text-[#6a5240] border-[#e2c9b8] hover:border-[#D97D55]"
                                  }`}
                                >
                                  {v}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Row 2: Quantity + Date */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="po-qty"
                    className="mb-1.5 block text-sm font-semibold"
                    style={{ color: "#6a5240" }}
                  >
                    Quantity
                  </label>
                  <input
                    id="po-qty"
                    type="text"
                    placeholder="e.g. 2 litres, 3 packets"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2"
                    style={{ borderColor: "#e2c9b8", background: "#fdf8f5" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="po-date"
                    className="mb-1.5 block text-sm font-semibold"
                    style={{ color: "#6a5240" }}
                  >
                    Delivery / Pickup Date <span style={{ color: "#D97D55" }}>*</span>
                  </label>
                  <input
                    id="po-date"
                    type="date"
                    required
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2"
                    style={{ borderColor: "#e2c9b8", background: "#fdf8f5" }}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="po-notes"
                  className="mb-1.5 block text-sm font-semibold"
                  style={{ color: "#6a5240" }}
                >
                  Additional Notes{" "}
                  <span className="font-normal text-xs" style={{ color: "#9e7a62" }}>
                    (optional)
                  </span>
                </label>
                <textarea
                  id="po-notes"
                  rows={3}
                  placeholder="Any special instructions or requests..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 resize-none"
                  style={{ borderColor: "#e2c9b8", background: "#fdf8f5" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="po-submit"
                className="flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-semibold text-white shadow-md transition active:scale-95"
                style={{ backgroundColor: "#D97D55" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6FA4AF")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#D97D55")}
              >
                <ShoppingCart className="h-5 w-5" />
                Place Order via WhatsApp
              </button>
              <p className="text-center text-xs" style={{ color: "#9e7a62" }}>
                Clicking will open WhatsApp with your order details pre-filled.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const easeOutQuad = (t: number) => t * (2 - t);

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(easeOutQuad(progress) * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
}

function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchStat = async () => {
      const getUrl = "https://api.counterapi.dev/v1/radhe-parlour-v3/visits";
      const upUrl = "https://api.counterapi.dev/v1/radhe-parlour-v3/visits/up";
      
      try {
        const hasVisited = localStorage.getItem("radhe_v3_visited");
        let res;
        
        if (!hasVisited) {
          // If the user hasn't visited before, increment!
          res = await fetch(upUrl);
          let data = await res.json().catch(() => null);
          
          if (res.ok && data && typeof data.count === "number") {
            setVisitorCount(data.count);
            localStorage.setItem("radhe_v3_visited", "true");
            return;
          }
        }
        
        // If they have visited already (like on a page refresh), just get the visual number
        res = await fetch(getUrl);
        const data = await res.json().catch(() => null);
        
        if (data && typeof data.count === "number") {
          setVisitorCount(data.count);
        }
      } catch (err) {
        console.error("Counter fetch err:", err);
      }
    };
    
    fetchStat();
  }, []);

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
              R
            </span>
            <span className="text-base font-semibold">Radhe Parlour & General Store</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Palanpur, Gujarat · Fresh dairy & daily essentials.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#about" className="hover:text-[var(--link)]">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[var(--link)]">
                Products
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-[var(--link)]">
                Reviews
              </a>
            </li>
            <li>
              <a href="#preorder" className="hover:text-[var(--link)]">
                Pre-Order
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--link)]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Contact</div>
          <p className="mt-3 text-sm text-muted-foreground">{ADDRESS}</p>
          <a
            href={`tel:${PHONE}`}
            className="mt-2 block text-sm text-[var(--link)] hover:underline"
          >
            {PHONE}
          </a>
          <div className="mt-4 flex gap-3">
            <a
              aria-label="WhatsApp"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-[var(--link)]"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              aria-label="Facebook"
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-[var(--link)]"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              aria-label="Instagram"
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-[var(--link)]"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6">
          <div className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Radhe Parlour & General Store. All rights reserved.
          </div>
          {visitorCount !== null && (
            <div className="flex flex-none items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft transition-colors hover:border-primary/30 hover:text-foreground">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span><AnimatedCounter end={visitorCount} /> website visits</span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
