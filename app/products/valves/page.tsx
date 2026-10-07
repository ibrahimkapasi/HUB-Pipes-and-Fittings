import { redirect } from "next/navigation"
import { valvesTabHref } from "@/lib/valves"

// The full valves listing lives in the Products page "Valves" tab
export default function ValvesIndexPage() {
  redirect(valvesTabHref())
}
