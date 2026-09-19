import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function ProjectCard({ title, description, status, badgeVariant = "default" }) {
    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">{title}</CardTitle>
                <Badge variant={badgeVariant}>{status}</Badge>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700 text-sm">{description}</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full">View Project</Button>
            </CardFooter>
        </Card>
    );
}
