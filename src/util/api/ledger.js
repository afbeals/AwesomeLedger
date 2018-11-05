import ledgerUtil from "../modules/ledger/ledgerUtility";

export const fetchLedger = ({
  request = {},
  mockProps = [],
  shouldFail = false
}) => {
  return new Promise((res, rej) => {
    window.setTimeout(() => {
      if (shouldFail) {
        return rej();
      } else {
        return res({
          data: ledgerUtil.buildMockLedgerList(mockProps),
          mockRequest: request
        });
      }
    }, 1000);
  });
};
