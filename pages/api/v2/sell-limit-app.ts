import { addSellLimitAdd, getWalletLists } from "service/NextApi/private";

export default async function handler(req: any, res: any) {
  const data = req.body;
  try {
    if (req.method === "POST") {
      const response = await addSellLimitAdd(req, data);
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "404 not found", success: false });
    }
  } catch (error: any) {
    if (error?.response?.status == 401) {
      res.status(401).json({ message: "Unauthorized", success: false });
    }
  }
}
