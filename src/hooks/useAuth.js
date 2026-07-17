import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../pages/authenticationPages/authSlice";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  let roles = [];
  let isLoggedIn = false;
  let isActive = false;
  let isAdmin = false;
  let isManager = false;
  let isRepresentative = false;
  let status = "User";

  if (token && user) {
    roles = user.roles || [];
    isLoggedIn = true;
    const { emailVerified, importedMember_id } = user;
    isActive = emailVerified;
    isAdmin = roles.includes("admin");
    isManager = roles.includes("manager");
    isRepresentative =
      roles.includes("representative") && !isAdmin && !isManager;

    if (isAdmin) status = "Admin";
    else if (isManager) status = "Manager";
    else if (isRepresentative) status = "Representative";

    return {
      roles,
      isLoggedIn,
      isActive,
      isAdmin,
      isManager,
      isRepresentative,
      status,
      user,
      importedMember_id,
      isLoading: false,
      isUninitialized: false,
    };
  }

  return {
    roles: [],
    isLoggedIn: false,
    isActive: false,
    isAdmin: false,
    isManager: false,
    isRepresentative: false,
    status: "Guest",
    user: null,
    isLoading: false,
    isUninitialized: false,
  };
};

export default useAuth;
