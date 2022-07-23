import Link from "next/link";
import { useRouter } from "next/router";
const ProfileSidebar = () => {
  const router = useRouter();
  return (
    <div className="page-left-sidebar">
      <div className="sidebar-top">
        <ul className="left-menu">
          <Link href="/user/profile">
            <li className={router.pathname == "/user/profile" ? "active" : ""}>
              <a href="/user/profile">Profile</a>
            </li>
          </Link>
          <Link href="/user/edit-profile">
            <li
              className={
                router.pathname == "/user/edit-profile" ? "active" : ""
              }
            >
              <a href="/user/edit-profile">Edit Profile</a>
            </li>
          </Link>
          <Link href="/user/phone-verification">
            <li
              className={
                router.pathname == "/user/phone-verification" ? "active" : ""
              }
            >
              <a href="/user/phone-verification">Phone Verification</a>
            </li>
          </Link>
          <Link href="/user/security">
            <li className={router.pathname == "/user/security" ? "active" : ""}>
              <a href="/user/security-setting">Security</a>
            </li>
          </Link>
          <Link href="/user/verification-list">
            <li
              className={
                router.pathname == "/user/verification-list" ? "active" : ""
              }
            >
              <a href="/user/profile-verification-list">Verification List</a>
            </li>
          </Link>
          <Link href="/user/personal-verification">
            <li
              className={
                router.pathname == "/user/personal-verification" ? "active" : ""
              }
            >
              <a href="/user/personal-verification">Personal Verification</a>
            </li>
          </Link>
          <Link href="/user/change-password">
            <li
              className={
                router.pathname == "/user/change-password" ? "active" : ""
              }
            >
              <a href="/user/change-password">Change Password</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
