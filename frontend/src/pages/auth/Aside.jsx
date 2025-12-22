import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Aside() {
  return (
    <div className="absolute top-6 left-6">
      <Button variant="outline" asChild>
        <Link to="/">Home Page </Link>
      </Button>
    </div>
  );
}
