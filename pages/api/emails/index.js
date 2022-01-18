import {
  connectPortalDatabase,
  postDocuments,
} from "../../../helpers/db-utils";

async function handler(req, res) {
  let client;
  try {
    client = await connectPortalDatabase();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to MongoDB" });
    return;
  }

  if (req.method === "POST") {
    try {
      const item = req.body;
      const documents = await postDocuments(client, "emails", item);
      res
        .status(200)
        .json(
          { email: documents, message: 'Success!', status: 200 }
        );
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  }

  client.close();
}

export default handler;
