const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzazU0MTRAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMzAyMSwiaWF0IjoxNzc3NzAyMTIxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTc5YThlMjUtNDY0Zi00OTg5LWIyM2QtOGQ1ZDE0NTkxMTg1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2FuZGkgc2FoYXNyYSByZWRkeSIsInN1YiI6ImQxYTAyY2Q1LWE3M2MtNGM5Zi05MmRhLTY2ZGQ1MDFlZjM4MCJ9LCJlbWFpbCI6InNrNTQxNEBzcm1pc3QuZWR1LmluIiwibmFtZSI6ImthbmRpIHNhaGFzcmEgcmVkZHkiLCJyb2xsTm8iOiJyYTIzMTEwNDIwMjAwMzUiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJkMWEwMmNkNS1hNzNjLTRjOWYtOTJkYS02NmRkNTAxZWYzODAiLCJjbGllbnRTZWNyZXQiOiJhWXRXTmVDSkRYUU1nV3hjIn0.qcdVYQhjFj10J-8poR3HocDhTfh_luGdwef66x81GEU";

const fetchNotifications = async () => {
  try {

    const response = await axios.get(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    return response.data.notifications;

  } catch (error) {

    process.stdout.write(
      `API ERROR: ${error.message}\n`
    );

    if (error.response) {
      process.stdout.write(
        `STATUS: ${error.response.status}\n`
      );
    }

    throw new Error("Failed to fetch notifications");
  }
};

module.exports = fetchNotifications;