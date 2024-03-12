import { getWalletWithdrawlByWalletId } from "service/NextApi/private";

export default async function handler(req: any, res: any) {
  try {
    const { wallet_id } = req.query;
    if (req.method === "GET") {
      const response = await getWalletWithdrawlByWalletId(req, wallet_id);
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
