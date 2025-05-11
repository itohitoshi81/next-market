import connectDB from '@/app/utils/database';
import { NextResponse } from 'next/server';
import { ItemModel } from '@/app/utils/schemaModels';

export async function GET() {
  return NextResponse.json({ message: 'item.create' });
}

export async function POST(request) {
  const reqBody = await request.json();
  // console.log(reqBody);

  try {
    // console.log(await request.json());
    await connectDB();
    await ItemModel.create(reqBody);
    return NextResponse.json({ message: 'アイテム作成成功' });
  } catch {
    return NextResponse.json({ message: 'アイテム作成失敗' });
  }
}

// mongodb+srv://itohitoshi81:<db_password>@cluster0.otixaxt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
