# Building Splashnest: A Daycare Management System That Actually Works

## Why This Exists

Ever walked into a daycare center and seen staff drowning in paperwork? Attendance sheets scattered everywhere, parents frantically texting about schedule changes, and someone trying to remember if little Timmy is allergic to peanuts by checking a three-month-old email? Yeah, that was the reality.

So we built Splashnest. Not because we thought "hey, the world needs another CRUD app," but because daycare centers were legitimately struggling with spreadsheets, paper forms, and way too many WhatsApp messages. Real people, real problems, real solution.

**Check it out live**: [dms.splashnest.com](https://dms.splashnest.com)

## The Tech Stack (and the reasoning behind it)

Let's break down what powers this thing and, more importantly, why we chose each piece:

### Frontend Arsenal
- **Next.js 15 with React 19** - Server components are genuinely great now, and the App Router finally feels mature
- **TypeScript** - Because catching bugs at compile time is way better than debugging at 2 AM
- **Tailwind CSS** - Utility-first styling that actually makes sense
- **Radix UI** - Accessible components out of the box
- **shadcn/ui** - Beautiful pre-built components that you actually own

### Backend Power
- **Next.js API Routes** - Everything in one repo, shared types, no CORS headaches
- **Prisma ORM** - Database queries that actually read like English
- **PostgreSQL via Supabase** - Rock-solid relational database with real-time superpowers
- **Supabase Auth** - JWT tokens, session management, all handled

### The Supporting Cast
- **PWA support** - Works offline, installs like a native app
- **date-fns** - Date manipulation without the nightmare
- **ExcelJS** - Export attendance to Excel
- **Zod** - Runtime type validation
- **React Hook Form** - Forms that don't suck

## Architecture: Keeping It Real

```
Frontend (Next.js) → API Routes → Prisma → Supabase PostgreSQL
```

No microservices. No GraphQL layer. Just a solid monolith that does its job.

## The Fun Problems We Actually Solved

### Problem 1: Timezone Hell

Date handling across timezones nearly broke us. Built centralized date utilities that handle ALL operations. No more timezone bugs.

### Problem 2: Progressive Web App

Staff need it to work offline. Service workers cache everything. Installs like a native app. Works when WiFi doesn't.

### Problem 3: Role-Based Access Control

Parents see only their kids. Admins see everything. Completely different experiences in the same codebase.

### Problem 4: Global Data Management

Built DataContext provider to avoid duplicate API calls. One fetch per data type, shared across the app.

### Problem 5: Recurring Classes

Parents set up templates like "Ballet every Tuesday." Cron jobs auto-generate instances. Set it once, forget it.

## What We Learned

1. **Date handling is genuinely hard** - Build utilities early
2. **Monoliths aren't evil** - Simple often beats complex
3. **Type safety is worth it** - TypeScript + Prisma + Zod catches everything
4. **Mobile design matters** - Design for smallest screen first
5. **Documentation saves lives** - Future you will thank present you

## The Numbers

- **50+** families using it daily
- **80+** children managed
- **99.8%** uptime
- **<1.5s** average load time
- **Surprisingly few** bugs post-launch

---

**Stack**: Next.js 15 • React 19 • TypeScript • Prisma • Supabase • PWA

**Status**: Live at dms.splashnest.com

**Users**: 50+ families
