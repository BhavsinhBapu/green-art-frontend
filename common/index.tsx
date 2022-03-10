import { toast } from "react-toastify";

export const copyTextById = (id: string) => {
  const element: any = document.getElementById(id);
  if (element) {
    element.select();
    document.execCommand("copy");
    toast.success("Copied to clipboard");
  }
};
