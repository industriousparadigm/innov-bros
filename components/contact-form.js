const ContactForm = () => {
  return (
    <form
      name="contact"
      action="/contact-success"
      method="POST"
      data-netlify="true"
      className="flex flex-col justify-between h-72"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className="block">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          className="form-input rounded mt-1 block w-full"
          placeholder="your@email.com"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Message</span>
        <textarea
          className="form-textarea rounded mt-1 block w-full"
          rows="3"
          placeholder="Type your message here"
        ></textarea>
      </label>
      <button className="mx-auto uppercase px-8 py-2 rounded bg-gray-900 text-blue-50 max-w-max">
        Send
      </button>
    </form>
  )
}

export default ContactForm
