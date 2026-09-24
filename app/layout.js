import "./globals.css";
import { getStore } from "@/lib/store";

export const metadata = {
  title: "Simple AI Commerce",
  description: "A simple digital storefront with a fair paywall. Add your variables and deploy.",
};

export default function RootLayout({ children }) {
  const store = getStore();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="wrap">
          <header className="nav">
            <a className="brand" href="/">{store.name}</a>
            <nav className="nav-links">
              <a href="/shop">Shop</a>
              <a href="/agents">Agents</a>
              <a href="/#how">How it works</a>
              <span className="pill">
                <span className="dot" />
                {store.agentStatus}
              </span>
            </nav>
          </header>
          {children}
          <footer className="footer">
            <div>
              {store.name} · {store.tagline}
              <div className="tiny">Owner override only. Agents handle the rest.</div>
            </div>
            <div>
              <a href="/privacy">Privacy</a>
              {" · "}
              <a href="/terms">Terms</a>
              {" · "}
              <a href={`mailto:${store.supportEmail}`}>{store.supportEmail}</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
