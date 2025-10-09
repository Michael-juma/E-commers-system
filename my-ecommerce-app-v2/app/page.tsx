export default function Page() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#0a0a0a",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#dc2626", marginBottom: "20px" }}>React Native / Expo Router Project</h1>

      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid #2a2a2a",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>⚠️ Preview Not Available</h2>
        <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
          This is a React Native project using Expo Router. The v0 preview system only works with Next.js web
          applications.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid #2a2a2a",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>✅ Your Project Files</h2>
        <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
          Your car dealership app has been created with the correct Expo Router structure:
        </p>
        <ul style={{ color: "#9ca3af", lineHeight: "1.8" }}>
          <li>
            <code style={{ backgroundColor: "#2a2a2a", padding: "2px 6px", borderRadius: "4px" }}>app/_layout.tsx</code>{" "}
            - Expo Router layout configuration
          </li>
          <li>
            <code style={{ backgroundColor: "#2a2a2a", padding: "2px 6px", borderRadius: "4px" }}>app/index.tsx</code> -
            Main car dealership page with React Native components
          </li>
        </ul>
      </div>

      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid #2a2a2a",
        }}
      >
        <h2 style={{ marginTop: 0 }}>🚀 How to Run Your App</h2>
        <p style={{ color: "#9ca3af", lineHeight: "1.6", marginBottom: "12px" }}>
          To test your car dealership app locally:
        </p>
        <ol style={{ color: "#9ca3af", lineHeight: "1.8" }}>
          <li>
            Make sure you have the car images in your{" "}
            <code style={{ backgroundColor: "#2a2a2a", padding: "2px 6px", borderRadius: "4px" }}>assets/</code> folder:
            <ul style={{ marginTop: "8px" }}>
              <li>red-mclaren-750s.jpg</li>
              <li>red-mclaren-side.jpg</li>
              <li>yellow-mclaren.jpg</li>
              <li>silver-mclaren.jpg</li>
              <li>logo.jpg</li>
            </ul>
          </li>
          <li>
            Run{" "}
            <code style={{ backgroundColor: "#2a2a2a", padding: "2px 6px", borderRadius: "4px" }}>npx expo start</code>{" "}
            in your terminal
          </li>
          <li>Press 'i' for iOS simulator or 'a' for Android emulator</li>
          <li>Or scan the QR code with Expo Go app on your phone</li>
        </ol>
      </div>

      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid #dc2626",
          marginTop: "20px",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#dc2626" }}>📱 Features Included</h3>
        <ul style={{ color: "#9ca3af", lineHeight: "1.8" }}>
          <li>Dark theme with red accents matching your design</li>
          <li>Mobile-responsive navigation with hamburger menu</li>
          <li>Hero section with call-to-action</li>
          <li>Services section with stats</li>
          <li>Innovation features showcase</li>
          <li>Featured cars grid with Kenyan Shilling (KES) pricing</li>
          <li>Customer testimonials</li>
          <li>Footer with contact information</li>
        </ul>
      </div>
    </div>
  )
}
