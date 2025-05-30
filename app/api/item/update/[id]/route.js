import connectDB from '@/app/utils/database';
import { ItemModel } from '@/app/utils/schemaModels';
import { connect } from 'mongoose';
import { NextResponse } from 'next/server';

export async function POST(request, context) {
  const reqBody = await request.json();
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(context.params.id);
    if (singleItem.email === reqBody.email) {
      await ItemModel.updateOne({ _id: context.params.id }, reqBody);
      return NextResponse.json({ messsage: 'アイテム編集成功' });
    } else {
      return NextResponse.json({ messsage: '他の人が作成したアイテムです' });
    }
  } catch {
    return NextResponse.json({ messsage: 'アイテム編集失敗' });
  }
}
