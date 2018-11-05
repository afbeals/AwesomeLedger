import { fetchUsers as loginUser } from "./api/users";
import { fetchLedger } from "./api/ledger";

const api = {
  loginUser,
  fetchLedger
};

export default api;
