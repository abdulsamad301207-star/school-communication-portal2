async function test() {
  const baseURL = 'http://localhost:3001';

  try {
    // 1. Test AI route
    const aiRes = await fetch(`${baseURL}/api/v1/ai/suggest`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: "Test",
        body: 123, // Send number to test text.replace crash
        type: "circular"
      })
    });
    console.log("AI Route:", aiRes.status);
    if (aiRes.status !== 200) {
      console.error("AI Bug response:", await aiRes.text());
    }
  } catch(e) { console.error("AI Bug:", e.message); }

  try {
    // 2. Test messages route
    const msgRes = await fetch(`${baseURL}/api/v1/messages`);
    console.log("Messages Route:", msgRes.status);
    if (msgRes.status !== 200) {
      console.error("Messages Bug response:", await msgRes.text());
    }
  } catch(e) { console.error("Messages Bug:", e.message); }

  try {
    // 3. Test portal route
    const portalRes = await fetch(`${baseURL}/api/v1/portal/inbox`);
    console.log("Portal Route:", portalRes.status);
    if (portalRes.status !== 200) {
      console.error("Portal Bug response:", await portalRes.text());
    }
  } catch(e) { console.error("Portal Bug:", e.message); }

}
test();

