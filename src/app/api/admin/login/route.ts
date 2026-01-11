import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAIL = 'hassan.sarwar21@gmail.com'
const ADMIN_PASSWORD = 'Hassan123@'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = Buffer.from(`${email}:${Date.now()}`).toString('base64')
      
      return NextResponse.json({ 
        success: true, 
        token,
        message: 'Login successful' 
      })
    }

    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 401 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
