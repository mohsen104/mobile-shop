import data from '@/data/mobile.json';

export async function GET() {
    return Response.json(data, { status: 200 })
}