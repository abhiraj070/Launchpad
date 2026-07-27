// Wraps page content and remounts on every navigation, so each route change
// gets one subtle fade+lift. Persistent chrome (navbar/footer) lives in the
// layout and is unaffected. The animation degrades to nothing under
// prefers-reduced-motion (handled globally).
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
