export default function Heading({ children, large }) {
  const styles = {
    regular: "text-xl md:text-2xl lg:text-3xl mb-12",
    large: "text-2xl md:text-3xl lg:text-5xl mb-16",
  }

  return (
    <h1
      className={`${
        large ? styles.large : styles.regular
      } text-center font-bold`}
    >
      {children}
    </h1>
  )
}
