import ContactForm from "../components/contact-form"
import IconLinkedin from "../components/icon-linkedin"
import IconEmail from "../components/icon-email"
import ExternalLink from "../utils/external-link"

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
      <p className="text-center">
        Write to us using the options above or the form below.
      </p>
      <ContactForm />
    </>
  )
}

export default Contact
