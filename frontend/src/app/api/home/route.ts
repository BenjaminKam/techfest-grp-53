export async function GET() {
    const res = await fetch("http://localhost:5000");
    const data = await res.json();
    return Response.json(data);
}
