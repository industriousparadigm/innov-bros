import RandomQuote from "../components/random-quote"

export default function IndexPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">
        {
          "A creative R&D and Front-end Innovation team imagining and inventing a better future."
        }
      </h1>
      <RandomQuote />
    </>
  )
}
