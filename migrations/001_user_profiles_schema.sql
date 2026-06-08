-- User Profiles Table for Karma Numbers App
-- Tracks real user progress and stats

CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  name VARCHAR(255),
  email VARCHAR(255),
  avatar_url VARCHAR(500),
  
  -- Points system
  total_points INT DEFAULT 0,
  referral_code VARCHAR(10) UNIQUE,
  referred_users TEXT[] DEFAULT ARRAY[]::text[],
  
  -- Stats
  courses_completed INT DEFAULT 0,
  meditations_completed INT DEFAULT 0,
  total_hours_spent DECIMAL(10, 2) DEFAULT 0,
  current_level VARCHAR(50) DEFAULT 'Beginner',
  
  -- Active courses
  active_courses JSONB DEFAULT '[]'::jsonb,
  active_meditations JSONB DEFAULT '[]'::jsonb,
  
  -- Points history
  points_history JSONB DEFAULT '[]'::jsonb,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES neon_auth.user(id) ON DELETE CASCADE
);

-- Create index for faster lookups
CREATE INDEX idx_user_profiles_user_id ON public.user_profiles(user_id);
CREATE INDEX idx_user_profiles_referral_code ON public.user_profiles(referral_code);

-- Enable Row Level Security
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own profile
CREATE POLICY "Users can view their own profile" 
  ON public.user_profiles 
  FOR SELECT 
  USING (user_id = auth.uid());

-- RLS Policy: Users can only update their own profile
CREATE POLICY "Users can update their own profile" 
  ON public.user_profiles 
  FOR UPDATE 
  USING (user_id = auth.uid());

-- Courses Table
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  difficulty_level VARCHAR(50) DEFAULT 'Beginner',
  duration_hours DECIMAL(10, 2),
  lessons_count INT DEFAULT 0,
  image_url VARCHAR(500),
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User Course Progress Table
CREATE TABLE IF NOT EXISTS public.user_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  course_id UUID NOT NULL,
  progress_percentage INT DEFAULT 0,
  lessons_completed INT DEFAULT 0,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES public.user_profiles(user_id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE,
  UNIQUE(user_id, course_id)
);

-- Meditations Table
CREATE TABLE IF NOT EXISTS public.meditations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  duration_minutes INT,
  image_url VARCHAR(500),
  audio_url VARCHAR(500),
  created_by UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User Meditation Sessions Table
CREATE TABLE IF NOT EXISTS public.meditation_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  meditation_id UUID NOT NULL,
  duration_completed_minutes INT,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES public.user_profiles(user_id) ON DELETE CASCADE,
  FOREIGN KEY (meditation_id) REFERENCES public.meditations(id) ON DELETE CASCADE
);

-- Consultations Table
CREATE TABLE IF NOT EXISTS public.consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  consultant_id UUID,
  title VARCHAR(255),
  description TEXT,
  scheduled_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES public.user_profiles(user_id) ON DELETE CASCADE
);
