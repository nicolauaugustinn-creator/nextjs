import { neon } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';

const sql = neon(process.env.DATABASE_URL!);

// GET all blog posts
export async function GET(req: NextRequest) {
  try {
    const posts = await sql`SELECT * FROM blog_posts ORDER BY created_at DESC`;
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

// POST create blog post
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, excerpt, content, image, category, author, status, featured } = body;

    const result = await sql`
      INSERT INTO blog_posts (title, slug, excerpt, content, image, category, author, status, featured)
      VALUES (${title}, ${slug}, ${excerpt}, ${content}, ${image}, ${category}, ${author}, ${status || 'draft'}, ${featured || false})
      RETURNING *`;

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

// PUT update blog post
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, slug, excerpt, content, image, category, author, status, featured } = body;

    const result = await sql`
      UPDATE blog_posts 
      SET title = ${title}, slug = ${slug}, excerpt = ${excerpt}, content = ${content}, image = ${image}, 
          category = ${category}, author = ${author}, status = ${status}, featured = ${featured}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING *`;

    if (result.length === 0) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

// DELETE blog post
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const result = await sql`DELETE FROM blog_posts WHERE id = ${id} RETURNING id`;

    if (result.length === 0) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}
