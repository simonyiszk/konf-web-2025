import {getPresentationBreaks} from "@/models/get-presentation-data";

export function GET() {
  return new Response(JSON.stringify(getPresentationBreaks()), {
    status: 200,
    headers: {'Content-Type': 'application/json'}
  });
}
