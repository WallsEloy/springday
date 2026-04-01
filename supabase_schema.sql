-- Enable UUID extension
create extension if not exists "uuid-ossp";

create table tickets (
  id uuid primary key default uuid_generate_v4(),
  email text not null,
  stripe_session_id text unique,
  payment_status text default 'pending', -- 'pending', 'paid'
  qr_code text unique,
  created_at timestamp with time zone default now()
);

create table checkins (
  id uuid primary key default uuid_generate_v4(),
  ticket_id uuid references tickets(id) unique,
  used boolean default false,
  scanned_at timestamp with time zone default now()
);

-- Enable Row Level Security (RLS)
alter table tickets enable row level security;
alter table checkins enable row level security;

create table registros (
  id uuid primary key default uuid_generate_v4(),
  nombre text not null,
  telefono text not null,
  edad integer not null,
  created_at timestamp with time zone default now()
);

alter table registros enable row level security;
create policy "Allow public inserts" on registros for insert with check (true);
create policy "Allow public select" on registros for select using (true);
