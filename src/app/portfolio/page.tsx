import { getPortfolio, PortfolioContent } from "../lib/sanity";

export default async function PortfolioPage() {
  const portfolioData: PortfolioContent[] | null = await getPortfolio();
  const documentUrl = portfolioData?.[0]?.portfolioUrl ?? "#";

  return (
    <div>
      <a href={documentUrl} download="Portfolio">
        Portfolio
      </a>
    </div>
  );
}
