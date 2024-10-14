import { NextRequest,NextResponse } from 'next/server';

export async function POST(request:NextRequest){
  const data = await request.formDat()
  const file:File | null = data.get('file') as unknown as File
  if(!file){
    return NextResponse.json({ message:"There is no image uploaded"})
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
}

export async function GET(request:Request){
  const jsonResponse = {
    message:'Your Backend API Works Bro'
  }
  return new Response(JSON.stringify(jsonResponse))
}
