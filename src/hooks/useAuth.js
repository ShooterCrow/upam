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

  const getReferenceId = (reference) =>
    reference && typeof reference === "object"
      ? reference._id || reference.id || null
      : reference || null;

  if (token && user) {
    roles = user.roles || [];
    isLoggedIn = true;
    const { emailVerified, importedMember_id } = user;
    isActive = emailVerified;
    isAdmin = roles.includes("admin");
    isManager = roles.includes("manager");
    isRepresentative =
      roles.includes("representative") && !isAdmin && !isManager;
    const chapter = user.chapter || null;
    const representedChapter = user.representedChapter || null;

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
      chapter,
      chapterId: getReferenceId(chapter),
      chapterName:
        typeof chapter === "object" ? chapter?.chapter_name || null : null,
      representedChapter,
      representedChapterId: getReferenceId(representedChapter),
      representedChapterName:
        typeof representedChapter === "object"
          ? representedChapter?.chapter_name || null
          : null,
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
    chapter: null,
    chapterId: null,
    chapterName: null,
    representedChapter: null,
    representedChapterId: null,
    representedChapterName: null,
    isLoading: false,
    isUninitialized: false,
  };
};

export default useAuth;
