export enum Networks {
  '0x1' = 1,
  '0x38' = 56,
  '0x89' = 137,
  '0xa4b1' = 42161,
}

export enum AppEnv {
  'production' = 'production',
  'staging' = 'staging',
  'development' = 'development',
}

export enum TrxState {
  unset,
  onSubmit,
  signApproval,
  approving,
  signPermit,
  signTrx,
  mining,
  error,
}
