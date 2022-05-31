import Theme from "theme/theme";

export interface BalanceSummaryProps {
  totalValue?: number;
  profit: number;
  theme: Theme;
  dashboardType?: "user" | "investor" | "marketplace";  
}
