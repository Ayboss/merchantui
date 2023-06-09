import React, { createContext, useState } from 'react';
import { KycType } from './types';

type KycContextTypes = {
  kycData: KycType | null;
  setKycData: React.Dispatch<any>;
};

const KycContext = createContext<KycContextTypes>({
  kycData: null,
  setKycData: () => {}
});

export const useKycDataContext = () => React.useContext(KycContext);

interface MerchantKycProviderProps {
  children: React.ReactNode;
}

export const MerchantKycProvider = ({ children }: MerchantKycProviderProps) => {
  const [kycData, setKycData] = useState<KycType | null>(null);

  return <KycContext.Provider value={{ kycData, setKycData }}>{children}</KycContext.Provider>;
};

export default KycContext;
