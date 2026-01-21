import { Card } from "@mui/material";

export default function RankingCard() {
  return (
    <Card className="p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Global Ranking</h3>
        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
          #12
        </span>
      </div>

      <div className="h-32 bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg mb-4" />

      <p className="text-green-600 font-medium">↑ 133 positions improved</p>
    </Card>
  );
}
