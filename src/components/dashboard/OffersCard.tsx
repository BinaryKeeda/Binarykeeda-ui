import { Card } from "@mui/material";

const offers = [
  { title: "Premium Courses", color: "from-blue-500 to-blue-400" },
  { title: "Interview Prep", color: "from-purple-500 to-pink-500" },
  { title: "Mock Tests", color: "from-orange-500 to-red-500" },
];

export default function OffersCard() {
  return (
    <Card className="p-6 rounded-xl shadow-sm space-y-4">
      <h3 className="text-lg font-semibold">Featured Offers</h3>

      {offers.map((offer) => (
        <div
          key={offer.title}
          className={`p-4 text-white rounded-lg bg-linear-to-r ${offer.color}`}
        >
          {offer.title}
        </div>
      ))}

      <button className="w-full border rounded-lg py-2 text-gray-600 hover:bg-gray-100">
        View All Offers
      </button>
    </Card>
  );
}
