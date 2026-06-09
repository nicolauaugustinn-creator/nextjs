import { neon } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';

const sql = neon(process.env.DATABASE_URL!);

// GET all reviews
export async function GET(req: NextRequest) {
  try {
    const reviews = await sql('SELECT * FROM reviews ORDER BY created_at DESC');
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

// POST create review
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { author, avatar, rating, text, category, mediaType, mediaUrl, status, featured } = body;

    const result = await sql(
      `INSERT INTO reviews (author, avatar, rating, text, category, media_type, media_url, status, featured)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [author, avatar, rating, text, category, mediaType, mediaUrl, status || 'pending', featured || false]
    );

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
  }
}

// PUT update review
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, author, avatar, rating, text, category, mediaType, mediaUrl, status, featured } = body;

    const result = await sql(
      `UPDATE reviews 
       SET author = $1, avatar = $2, rating = $3, text = $4, category = $5, media_type = $6, media_url = $7, status = $8, featured = $9
       WHERE id = $10
       RETURNING *`,
      [author, avatar, rating, text, category, mediaType, mediaUrl, status, featured, id]
    );

    if (result.length === 0) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating review:', error);
    return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
  }
}

// DELETE review
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const result = await sql('DELETE FROM reviews WHERE id = $1 RETURNING id', [id]);

    if (result.length === 0) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
  }
}
