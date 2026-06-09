import { neon } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';

const sql = neon(process.env.DATABASE_URL!);

// GET all courses
export async function GET(req: NextRequest) {
  try {
    const courses = await sql('SELECT * FROM courses ORDER BY created_at DESC');
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
}

// POST create course
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      title, slug, subtitle, description, image, price, originalPrice, currency,
      duration, lessonsCount, level, category, instructor, rating, studentsCount,
      status, featured, modules
    } = body;

    const result = await sql(
      `INSERT INTO courses (title, slug, subtitle, description, image, price, original_price, currency, duration, lessons_count, level, category, instructor, rating, students_count, status, featured, modules)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
       RETURNING *`,
      [title, slug, subtitle, description, image, price, originalPrice, currency || 'RUB', duration, lessonsCount, level, category, instructor, rating, studentsCount, status || 'draft', featured || false, modules ? JSON.stringify(modules) : null]
    );

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}

// PUT update course
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      id, title, slug, subtitle, description, image, price, originalPrice, currency,
      duration, lessonsCount, level, category, instructor, rating, studentsCount,
      status, featured, modules
    } = body;

    const result = await sql(
      `UPDATE courses 
       SET title = $1, slug = $2, subtitle = $3, description = $4, image = $5, price = $6, original_price = $7, currency = $8, duration = $9, lessons_count = $10, level = $11, category = $12, instructor = $13, rating = $14, students_count = $15, status = $16, featured = $17, modules = $18, updated_at = NOW()
       WHERE id = $19
       RETURNING *`,
      [title, slug, subtitle, description, image, price, originalPrice, currency, duration, lessonsCount, level, category, instructor, rating, studentsCount, status, featured, modules ? JSON.stringify(modules) : null, id]
    );

    if (result.length === 0) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating course:', error);
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
  }
}

// DELETE course
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const result = await sql('DELETE FROM courses WHERE id = $1 RETURNING id', [id]);

    if (result.length === 0) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
  }
}
