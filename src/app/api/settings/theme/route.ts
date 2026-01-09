import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Settings from '@/lib/models/Settings';
import { isAuthenticated } from '@/lib/auth';

export async function GET() {
  try {
    await connectDB();
    const setting = await Settings.findOne({ key: 'activeTheme' });
    return NextResponse.json({ themeId: setting?.value || 'gold-luxury' });
  } catch (error) {
    console.error('Error fetching theme:', error);
    return NextResponse.json({ themeId: 'gold-luxury' });
  }
}

export async function POST(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { themeId } = await request.json();
    
    await connectDB();
    await Settings.findOneAndUpdate(
      { key: 'activeTheme' },
      { key: 'activeTheme', value: themeId, updatedAt: new Date() },
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true, themeId });
  } catch (error) {
    console.error('Error saving theme:', error);
    return NextResponse.json({ error: 'Failed to save theme' }, { status: 500 });
  }
}
