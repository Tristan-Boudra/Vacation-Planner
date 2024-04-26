import { Layout } from "@/components/layout";
import { Header } from "@/features/layout/Header";
import { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="h-full">
      <Layout>
        <Header />
        {props.children}
      </Layout>
    </div>
  );
}
