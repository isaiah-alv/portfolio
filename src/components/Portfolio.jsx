import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

export default function Portfolio() {
  return (
    <section className="py-6">
      <div className="grid grid-cols-1 gap-4">
        {portfolio.slice(0, 3).map((project, index) => (
          <PortfolioItem
            key={index}
            index={index}
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
