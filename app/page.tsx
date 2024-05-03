import { Layout, LayoutTitle } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <LayoutTitle>Vacation Planner</LayoutTitle>
      <Button className="w-max">
        <Link href="/home">user</Link>
      </Button>
    </Layout>
  );
}
