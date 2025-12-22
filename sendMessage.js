const axios = require("axios");

// بياناتك من Meta
const token =
  "EAAbQizSjTpwBQWjiJZCCWQ3kFF52zFLlUdiXnfZBGEntkgLiQZAJ4RgiZBTrR6NIQBh3kXi3PIgoV29eepupbSw23pTvZAS7hGRdoDYWdzOocQEnt75Bg4ZB9JeaZABlWXrCxuoDewArd74XObnLZBO2aTXm0FJCWC7tkZCKO5qD11PcZA212GVSZAt4FVXRXpI4Cvjs6SdLbgaqVnZAmWaOiXxjpiF5K1QcOo6qWDUJ0SyA";

const phoneNumberId = "891522684049711"; // ✅ Phone Number ID الصحيح
const recipient = "962785050875"; // ✅ رقمك الدولي بعد التفعيل

async function sendMessage() {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
      {
        messaging_product: "whatsapp",
        to: recipient,
        type: "text",
        text: { body: "مرحبا 👋! هذه أول رسالة من Node.js 🚀" },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Message sent:", response.data);
  } catch (error) {
    console.error("❌ Error:", error.response?.data || error.message);
  }
}

sendMessage();
