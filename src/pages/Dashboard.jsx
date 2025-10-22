import MetricCard from "../components/MetricCard";
import GrowthChart from "../components/GrowthChart";
import ProfileCard from "../components/ProfileCard";
import ReflectionPanel from "../components/ReflectionPanel";

export default function Dashboard() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="Peace Level" value="85%" description="Spiritual stability and rest" />
        <MetricCard title="Clarity Index" value="70%" description="Sense of direction from God" />
        <MetricCard title="Consistency Rate" value="5/7" description="Daily engagement rate" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GrowthChart />
        </div>
        <ProfileCard />
      </div>

      <ReflectionPanel />
    </main>
  );
}
