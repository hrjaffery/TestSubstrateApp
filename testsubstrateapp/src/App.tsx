import React from "react";
import NotificationController from "./components/Notification/NotificationController";
import NotificationList from "./components/Notification/NotificationList";

function App() {
  return (
    <div className="App">
      <h1>Notification Controller</h1>
      <NotificationController />
      <NotificationList />
    </div>
  );
}

export default App;
