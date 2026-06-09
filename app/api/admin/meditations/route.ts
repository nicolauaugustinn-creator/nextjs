import { neon } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';

const sql = neon(process.env.DATABASE_URL!);

// GET all meditations
export async function GET(req: NextRequest) {
  try {
    const meditations = await sql('SELECT * FROM meditations ORDER BY created_at DESC');
    return NextResponse.json(meditations);
  } catch (error) {
    console.error('Error fetching meditations:', error);
    return NextResponse.json({ error: 'Failed to fetch meditations' }, { status: 500 });
  }
}

// POST create meditation
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, description, duration, image, audioUrl, category, level, instructor, status, featured } = body;

    const result = await sql(
      `INSERT INTO meditations (title, slug, description, duration, image, audio_url, category, level, instructor, status, featured)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING *`,
      [title, slug, description, duration, image, audioUrl, category, level, instructor, status || 'draft', featured || false]
    );

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error creating meditation:', error);
    return NextResponse.json({ error: 'Failed to create meditation' }, { status: 500 });
  }
}

// PUT update meditation
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, slug, description, duration, image, audioUrl, category, level, instructor, status, featured } = body;

    const result = await sql(
      `UPDATE meditations 
       SET title = $1, slug = $2, description = $3, duration = $4, image = $5, audio_url = $6, category = $7, level = $8, instructor = $9, status = $10, featured = $11, updated_at = NOW()
       WHERE id = $12
       RETURNING *`,
      [title, slug, description, duration, image, audioUrl, category, level, instructor, status, featured, id]
    );

    if (result.length === 0) {
      return NextResponse.json({ error: 'Meditation not found' }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating meditation:', error);
    return NextResponse.json({ error: 'Failed to update meditation' }, { status: 500 });
  }
}

// DELETE meditation
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const result = await sql('DELETE FROM meditations WHERE id = $1 RETURNING id', [id]);

    if (result.length === 0) {
      return NextResponse.json({ error: 'Meditation not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting meditation:', error);
    return NextResponse.json({ error: 'Failed to delete meditation' }, { status: 500 });
  }
}
