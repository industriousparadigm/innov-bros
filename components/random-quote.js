import { useState } from "react"
import quotes from "../content/quotes.json"
import randomElement from "../lib/random-element"

const RandomQuote = () => {
  const [quote, setQuote] = useState(randomElement(quotes))

  const getNewQuote = () => {
    const newQuote = randomElement(quotes)
    newQuote._id === quote._id ? getNewQuote() : setQuote(newQuote)
  }

  return (
    <div className="m-12 md:px-12 lg:px-32 text-center">
      <p className="mb-4" key={quote._id}>{`"${quote.quote}"`}</p>
      <p className="text-sm mb-8">
        <em>{quote.author}</em>
      </p>
      <div className="mx-auto w-14" onClick={getNewQuote}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}

export default RandomQuote
