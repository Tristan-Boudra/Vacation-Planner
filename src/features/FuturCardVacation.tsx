/* eslint-disable react/no-unescaped-entities */
"use client";

import { LayoutTextThin } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const FuturCardVacation = () => {
  return (
    <>
      <Card className="w-96 h-max">
        <CardHeader className="px-6 relative">
          <CardTitle>Avignon 2024</CardTitle>
          <div className="absolute top-5 right-5 w-max px-4 bg-background rounded-lg border border-primary cursor-default">
            <LayoutTextThin className="text-primary">Bientôt...</LayoutTextThin>
          </div>
          <CardDescription className="w-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
            eligendi modi.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>T'es prochaine vacance a Avignon seront du 26 au 28 avril</p>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button>
            <Link href={"/home"}>Visualisez</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
