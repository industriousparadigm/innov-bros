const ExternalLink = ({ children, href }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
)

export default ExternalLink
