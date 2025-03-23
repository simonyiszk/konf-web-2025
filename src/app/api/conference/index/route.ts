import {getIndexData} from "@/models/get-index-data";

export function GET() {
  return new Response(JSON.stringify(getIndexData()), {
    status: 200,
    headers: {'Content-Type': 'application/json'}
  });
}
