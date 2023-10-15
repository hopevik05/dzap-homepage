/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrxState } from '../Enums';
import { AllowanceType, TokenType } from '../Types';

interface NativeCurrencyInfoType {
  decimals: number;
  balance: number | undefined;
  quote_rate: number | null;
}
type Props = {
  tokenList: TokenType[];
  trxResponse: any;
  isRefreshData: boolean;
  isApproved: boolean;
  isLoading: boolean;
  isChainSwitcher: boolean;
  trxState: number;
  allowance: AllowanceType;
  nativeCurrencyInfo: NativeCurrencyInfoType;
};

const initialState: Props = {
  tokenList: [],
  nativeCurrencyInfo: {
    decimals: 18,
    balance: undefined,
    quote_rate: 1,
  },
  trxResponse: undefined,
  isRefreshData: false,
  isApproved: false,
  isLoading: false,
  isChainSwitcher: false,
  trxState: TrxState.unset,
  allowance: {},
};

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setNativeCurrencyInfo: (
      state,
      action: PayloadAction<NativeCurrencyInfoType>,
    ) => {
      state.nativeCurrencyInfo = action.payload;
    },
    setTokenList: (state, action: PayloadAction<TokenType[]>) => {
      state.tokenList = action.payload;
    },
    setTrxResponse: (state, action: PayloadAction<any>) => {
      const currentState = state;
      currentState.trxResponse = action.payload;
    },
    setIsRefreshData: (state, action: PayloadAction<boolean>) => {
      const currentState = state;
      currentState.isRefreshData = action.payload;
    },
    setIsApproved: (state, action: PayloadAction<boolean>) => {
      const currentState = state;
      currentState.isApproved = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      const currentState = state;
      currentState.isLoading = action.payload;
    },
    setTrxState: (state, action: PayloadAction<number>) => {
      const currentState = state;
      currentState.trxState = action.payload;
    },
    setAllowance: (state, action: PayloadAction<AllowanceType>) => {
      const currentState = state;
      currentState.allowance = action.payload;
    },
  },
});

export const {
  setNativeCurrencyInfo,
  setTokenList,
  setTrxResponse,
  setIsRefreshData,
  setIsApproved,
  setIsLoading,
  setTrxState,
  setAllowance,
} = common.actions;

export default common.reducer;
