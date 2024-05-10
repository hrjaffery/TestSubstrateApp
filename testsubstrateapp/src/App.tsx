import React from "react";
import NotificationSystem from "./components/Notification/NotificationSystem";
import NotificationList from "./components/Notification/NotificationList";

function App() {
  return (
    <div className="App">
      <h1>Notification System</h1>
      <NotificationSystem />
      <NotificationList />
    </div>
  );
}

export default App;
