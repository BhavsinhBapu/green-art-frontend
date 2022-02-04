import Link from "next/link";

const ProfileSidebar = () => {
  return (
    <div className="page-left-sidebar">
      <div className="sidebar-top">
        <ul className="left-menu">
          <Link href="/user/profile">
            <li className=" active ">
              <a href="/user/profile">Profile</a>
            </li>
          </Link>
          <Link href="/user/edit-profile">
            <li className="">
              <a href="/user/edit-profile">Edit Profile</a>
            </li>
          </Link>
          <Link href="/user/phone-verification">
            <li className="">
              <a href="/user/phone-verification">Phone Verification</a>
            </li>
          </Link>
          <Link href="/user/security">
            <li className="">
              <a href="/user/security-setting">Security</a>
            </li>
          </Link>
          <Link href="/user/verification-list">
            <li className="">
              <a href="/user/profile-verification-list">Verification List</a>
            </li>
          </Link>
          <Link href="/user/personal-verification">
            <li className="">
              <a href="/user/personal-verification">Personal Verification</a>
            </li>
          </Link>
          <Link href="/user/change-password">
            <li className="">
              <a href="/user/change-password">Change Password</a>
            </li>
          </Link>
          <Link href="/user/activity">
            <li className="">
              <a href="/user/activity">Activity</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
