import Heading from "../components/heading";
import Paragraph from "../components/paragraph";

export default function ServicesPage() {
  return (
    <>
      <Heading>
        The Innovation Brothers helps people and organizations to become more
        innovative by identifying, creating and realizing growth opportunities
        through innovation.
      </Heading>
      <div className="w-full mb-8 md:my-16 relative">
        <img src="/innovbros-key-activities.png" alt="key activities" />
      </div>
      <section className="mb-6">
        <ol className="list-decimal list-inside px-8">
          <li>
            Improve systems, products and/or services
            <ol className="list-lower-alpha list-inside pl-8">
              <li>Solve “unsolvable problems”</li>
              <li>Expose and resolve bottlenecks and failures</li>
              <li>Reduce costs</li>
            </ol>
          </li>
          <li>Develop new innovative concepts and new market segments</li>
          <li>Forecast the evolution of products, services and technologies</li>
        </ol>
      </section>
      <Paragraph>
        We follow a model structure that is adapted based on the specificities
        of the project with different tools and methodologies.
      </Paragraph>
    </>
  );
}
