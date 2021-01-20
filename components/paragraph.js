export default function Paragraph({ children, center }) {
  return <p className={center ? "text-center" : ""}>{children}</p>
}
