import { getPortfolio, PortfolioContent } from "../lib/sanity";
import { PortfolioLink } from "../_components/styled/PortfolioStyles";

export default async function PortfolioPage() {
  const portfolioData: PortfolioContent[] | null = await getPortfolio();
  const documentUrl = portfolioData?.[0]?.portfolioUrl ?? "#";

  return (
    <div>
      <PortfolioLink href={documentUrl} rel="noopener noreferrer" target="_blank">
        Portfólio - Baixar arquivo
      </PortfolioLink>
    </div>
  );
}
