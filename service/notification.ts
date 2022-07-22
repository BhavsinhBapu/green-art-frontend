import request from "lib/request";

// notifications;

export const notification = async () => {
  return request.get("/notifications");
};
export const notificationSeen = async (ids: any) => {
  return request.post("/notification-seen ", { ids: ids });
};
