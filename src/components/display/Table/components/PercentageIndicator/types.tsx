import theme from "../../../../../theme/theme";

export interface PercentageIndicatorProps {
  value: number;
  theme: theme;
  dashboardType?: "user" | "investor" | "marketplace";
  subtitle?: string;
  showTrophy?: boolean;
}
