import { permanentRedirect } from "next/navigation";

export default function HomeRouteRedirect() {
  permanentRedirect("/");
}
