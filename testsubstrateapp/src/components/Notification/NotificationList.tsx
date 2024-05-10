import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import "../../styles/App.css";

const NotificationList = () => {
  const [notification, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "notifications"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notifs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNotifications(notifs);

      return () => unsubscribe();
    });
  }, []);

  const updateNotificationStatus = async (id: string) => {
    const notifDoc = doc(db, "notifications", id);
    await updateDoc(notifDoc, { read: true });
  };

  return (
    <div>
      {notification.length &&
        notification.map((notif, index) => (
          <div
            key={notif?.id}
            onClick={() => updateNotificationStatus(notif.id)}
          >
            <p>
              {index}-{notif.message} - {notif?.read && "Seen"}
            </p>
          </div>
        ))}
    </div>
  );
};

export default NotificationList;
