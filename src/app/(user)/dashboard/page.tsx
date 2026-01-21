import Topbar from "@/components/dashboard/Topbar";
import StreakCard from "@/components/dashboard/StreakCard";
import RankingCard from "@/components/dashboard/RankingCard";
import OffersCard from "@/components/dashboard/OffersCard";

export default function Dashboard() {
  return (
    <>
      <Topbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <StreakCard />
        <RankingCard />
        <OffersCard />
      </div>
    </>
  );
}