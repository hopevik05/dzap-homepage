export type ApprovalStatusType = {
  symbol: string;
  contract: string;
  status: string;
  transactionHash?: string;
  logo: string;
};
export interface TokenType {
  name: string;
  symbol: string;
  contract: string;
  decimals: number;
  balance: string;
  logo: string;
  quote_rate: number;
  verified: boolean;
  isActive?: boolean;
}

export interface AllowanceType {
  [key: string]: string;
}
