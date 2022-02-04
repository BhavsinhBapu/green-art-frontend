const ProfileSidebar = () => {
  return (
    <div className="page-left-sidebar">
      <div className="sidebar-top">
        <ul className="left-menu">
          <li className=" active ">
            <a href="http://localhost:8000/user/profile">Profile</a>
          </li>
          <li className="">
            <a href="http://localhost:8000/user/edit-profile">Edit Profile</a>
          </li>
          <li className="">
            <a href="http://localhost:8000/user/phone-verification">
              Phone Verification
            </a>
          </li>
          <li className="">
            <a href="http://localhost:8000/user/security-setting">Security</a>
          </li>
          <li className="">
            <a href="http://localhost:8000/user/profile-verification-list">
              Verification List
            </a>
          </li>
          <li className="">
            <a href="http://localhost:8000/user/personal-verification">
              Personal Verification
            </a>
          </li>
          <li className="">
            <a href="http://localhost:8000/user/change-password">
              Change Password
            </a>
          </li>
          <li className="">
            <a href="http://localhost:8000/user/activity">Activity</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;
