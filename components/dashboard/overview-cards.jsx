import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function OverviewCards() {
  return (
    <section className="flex gap-8">
      <Card className={"text-center max-w-80 w-full"}>
         <CardHeader>
            <CardTitle>
               Total Earnings
            </CardTitle>
            <CardDescription className="text-2xl font-bold">
               $12,345
            </CardDescription>
         </CardHeader>
      </Card>
      <Card className={"text-center max-w-80 w-full"}>
         <CardHeader>
            <CardTitle>
               Total users
            </CardTitle>
            <CardDescription className="text-2xl font-bold">
               1205
            </CardDescription>
         </CardHeader>
      </Card>
      <Card className={"text-center max-w-80 w-full"}>
         <CardHeader>
            <CardTitle>
               Total service providers
            </CardTitle>
            <CardDescription className="text-2xl font-bold">
               430
            </CardDescription>
         </CardHeader>
      </Card>
    </section>
  )
}
