# Stage 1 - Campus Notification Priority System

## Objective

The goal of the system is to prioritize important unread campus notifications for students based on notification type and recency.

---

## Priority Logic

Notifications are prioritized using:

- Placement Notifications → Highest Priority
- Result Notifications → Medium Priority
- Event Notifications → Lowest Priority

Weight Mapping:

| Type | Weight |
|------|--------|
| Placement | 3 |
| Result | 2 |
| Event | 1 |

Priority Score Formula:

Priority Score = (Type Weight × 100) + Recency Score

---

## Recency Handling

Recent notifications are considered more important than older notifications.

The system calculates the time difference between the current time and notification timestamp to generate a recency score.

---

## API Integration

Notifications are fetched from the protected API endpoint using Bearer Token Authentication.

API Used:

GET /evaluation-service/notifications

---

## Logging Middleware

Custom logging middleware is integrated to log:

- Request Method
- API Route
- Timestamp

This improves debugging and monitoring.

---

## Efficient Top N Handling

To efficiently maintain the top 'n' notifications:

- Notifications are sorted based on priority score.
- Only top required notifications are returned.

For large-scale systems, a Max Heap / Priority Queue can be used for better performance.

---

## Scalability

The system is scalable because:

- Priority calculation is modular.
- Middleware is reusable.
- Notification fetching logic is separated into services.
- Future database integration can be added easily.

---

## Technologies Used

- Node.js
- Express.js
- Axios
- REST APIs
- JavaScript