import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const NotificationSystem = () => {
  const sendNotification = async (type: string) => {
    try {
      await addDoc(collection(db, "notifications"), {
        type,
        message: `Notification ${type}`,
        read: false,
      });
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <div>
      <button onClick={() => sendNotification("Notification 1")}>
        Notification 1
      </button>
      <button onClick={() => sendNotification("Notification 2")}>
        Notification 2
      </button>
      <button onClick={() => sendNotification("Notification 3")}>
        Notification 3
      </button>
    </div>
  );
};

export default NotificationSystem;
