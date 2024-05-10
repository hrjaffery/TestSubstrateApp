import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { db } from "../config/firebaseConfig";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";

const NotificationList = () => {
  const [notification, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "notifications"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notifs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("🚀 ~ notifs ~ notifs:", notifs);
      setNotifications(notifs);

      return () => unsubscribe();
    });
  }, []);

  const markAsRead = async (id: string) => {
    const notifDoc = doc(db, "notifications", id);
    await updateDoc(notifDoc, { read: true });
  };

  return (
    <div>
      {notification.map((notif, index) => (
        <div key={notif?.id} onClick={() => markAsRead(notif.id)}>
          <p>
            {index}-{notif.message} - {notif?.read && "Seen"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
