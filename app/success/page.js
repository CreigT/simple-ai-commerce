import { getProduct } from "@/lib/products";
import { verifyAccessToken } from "@/lib/access";

export const metadata = { title: "Unlocked" };

export default function SuccessPage({ searchParams }) {
  const token = searchParams.token || "";
  const access = token ? verifyAccessToken(token) : null;
  const product = access ? getProduct(access.productId) : getProduct(searchParams.product || "");

  return (
    <main className="section">
      <div className="card" style={{ maxWidth: 560 }}>
        <div className="badge">Paid and unlocked</div>
        <h1 style={{ fontSize: 42 }}>You are in.</h1>
        {product ? (
          <>
            <p className="muted">{product.name} is ready. Use the download below. Keep this page or the unlock link.</p>
            <p style={{ marginTop: 18 }}>
              <a className="btn" href={product.file} download>
                Download {product.name}
              </a>
            </p>
          </>
        ) : (
          <p className="muted">Payment received. If the file does not appear, contact support with your receipt.</p>
        )}
        <p className="tiny" style={{ marginTop: 16 }}>
          Access tokens expire. Need help later? Open /unlock and paste your token.
        </p>
      </div>
    </main>
  );
}
