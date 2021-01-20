import Link from "next/link"
import Heading from "../components/heading"
import Paragraph from "../components/paragraph"

const ContactSuccess = () => {
  return (
    <>
      <Heading>Message sent!</Heading>
      <p className="text-center underline mb-8">
        <Link href="/">Back to homepage</Link>
      </p>
    </>
  )
}

export default ContactSuccess
