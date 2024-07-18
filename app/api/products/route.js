import data from '@/data/mobile.json';

export async function GET() {
    return Response.json({
        message: "successfully!",
        error: 200,
        date: new Date(),
        count: data.length,
        data
    }, { status: 200 })
}