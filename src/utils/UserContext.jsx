
import { createContext } from "react";

const UserContext = createContext({
 userName: "Default User",
  setUserName: () => {},
});

export default UserContext;