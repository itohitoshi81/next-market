import connectDB from '@/app/utils/database';
import { ItemModel } from '@/app/utils/schemaModels';
import { NextResponse } from 'next/server';

export async function GET(request, context) {
  console.log('api item', context.params.id);
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(context.params.id);
    return NextResponse.json({
      messages: 'アイテム読み取り成功(シングル)',
      singleItem: singleItem,
    });
  } catch {
    return NextResponse.json({ messages: 'アイテム読み取り失敗(シングル)' });
  }
}
