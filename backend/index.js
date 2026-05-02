const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");

const fetchNotifications = require("./services/notificationService");

const calculatePriority = require("./utils/priorityCalculator");

const app = express();

app.use(cors());

app.use(logger);

app.get("/priority-notifications", async (req, res) => {
  try {
    const notifications =
      await fetchNotifications();

    const ranked = notifications.map((n) => ({
      ...n,
      priority: calculatePriority(n),
    }));

    ranked.sort((a, b) => b.priority - a.priority);

    const top10 = ranked.slice(0, 10);

    res.json(top10);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(5000, () => {
  process.stdout.write(
    "Server running on port 5000\n"
  );
});