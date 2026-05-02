const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

const calculatePriority = (notification) => {
  const now = new Date();

  const notificationTime = new Date(notification.Timestamp);

  const diffMinutes =
    (now - notificationTime) / (1000 * 60);

  const recencyScore = Math.max(100 - diffMinutes, 0);

  return (
    weights[notification.Type] * 100 +
    recencyScore
  );
};

module.exports = calculatePriority;