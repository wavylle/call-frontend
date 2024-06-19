import { Button } from "./ui/button";

export default function EmptyCampaigns() {
    return <div
    className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
  > 
    <div className="flex flex-col items-center gap-1 text-center">
      <h3 className="text-2xl font-bold tracking-tight">
        You have not created any campaigns yet 
      </h3>
      <p className="text-sm text-muted-foreground">
        Press Start a Campaign to create a campaign.
      </p>
      <Button className="mt-4">Start a Campaign</Button>
    </div>
  </div>;
}