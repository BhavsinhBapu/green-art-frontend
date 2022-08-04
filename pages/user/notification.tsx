import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { notification, notificationSeen } from "service/notification";
import { RootState } from "state/store";
const NotificationPage = () => {
  const { t } = useTranslation("common");
  const [notificationData, setNotification] = useState<any>([]);
  const { isLoggedIn, user } = useSelector((state: RootState) => state.user);
  const getNotifications = async () => {
    const data = await notification();
    setNotification(data.data.data);
  };
  console.log(notificationData, "notificationData");
  useEffect(() => {
    isLoggedIn && getNotifications();
  }, [isLoggedIn]);
  return (
    <div className="container">
      <h2 className="section-top-title">{t("Overview")}</h2>

      {notificationData.map((item: any, index: any) => (
        <div className="notification-body" key={index}>
          <img
            src="/notification.png"
            className="img-fluid notificationicon"
            alt=""
          />
          <div>
            <p className="text-black">{item?.title}</p>
            <p className="title-body-notifination text-black">
              {item?.notification_body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationPage;
