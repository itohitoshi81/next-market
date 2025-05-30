import connectDB from '@/app/utils/database';
import { ItemModel } from '@/app/utils/schemaModels';
import { connect } from 'mongoose';
import { NextResponse } from 'next/server';

export async function DELETE(request, context) {
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(context.params.id);
    if (singleItem.email === reqBody.email) {
      await ItemModel.deleteOne({ _id: context.params.id });
      return NextResponse.json({ message: 'アイテム削除成功' });
    } else {
      return NextResponse.json({ messsage: '他の人が作成したアイテムです' });
    }
  } catch {
    return NextResponse.json({ message: 'アイテム削除失敗' });
  }
}
