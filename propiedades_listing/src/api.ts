import axios from "axios";

export const fetchListings = async () => {
  const response = await axios.post("https://magicloops.dev/api/loop/469fe52a-90d0-4e11-9577-ad24300fbb29/run", {});
  return response.data.map((item: any) => ({
    ...item,
    surface: parseInt(item.surface.replace(/\D/g, "")) || 0,
    location: item.location.trim(),
  }));
};
