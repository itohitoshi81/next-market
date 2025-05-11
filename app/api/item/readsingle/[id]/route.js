import connectDB from '@/app/utils/database';
import { ItemModel } from '@/app/utils/schemaModels';
import { NextResponse } from 'next/server';

export async function GET(request, context) {
  console.log(context.params.id);
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(context.params.id);
    return NextResponse.json({
      messages: 'アイテム読み取り成功(シングル)3',
      singleItem: singleItem,
    });
  } catch {}
}
