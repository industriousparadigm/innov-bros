import ContactForm from "../components/contact-form"
import IconLinkedin from "../components/icon-linkedin"
import IconEmail from "../components/icon-email"
import ExternalLink from "../utils/external-link"
import Paragraph from "../components/paragraph"

const Contact = () => {
  return (
    <>
      <div className="flex justify-center space-x-12 mb-8">
        <ExternalLink href="https://www.linkedin.com/company/longbound">
          <IconLinkedin height={56} />
        </ExternalLink>
        <ExternalLink href="mailto: team@theinnovationbrothers.com">
          <IconEmail height={56} />
        </ExternalLink>
      </div>
      <Paragraph center>
        You can reach us via the options above or the form below. Either way, we
        will respond to your query as soon as we can.
      </Paragraph>
      <ContactForm />
    </>
  )
}

export default Contact
