# Building a Full-Stack LMS from Scratch: The FI Group Story

## How It All Started

So I got tasked with building a Learning Management System for FI Nursing College. Not just any LMS - we're talking role-based access, user management, integrated calendars, the whole nine yards. And it needed to actually work in production with real users, not just be another portfolio piece that crashes under load.

**Check it out live**: [finursingcollege.in](https://finursingcollege.in)

## The Stack

Here's what I ended up using:

- **Next.js** for the frontend (and backend, honestly)
- **PostgreSQL** for the database
- **Prisma** as the ORM
- **Nginx** as the reverse proxy
- **PM2** to keep things running
- **GitHub Actions** for CI/CD
- **Digital Ocean** for hosting

## Why These Choices?

### Next.js - The Obvious Pick

Look, I could've gone with a separate React frontend and Express backend. But why make life harder? Next.js gave me:
- SSR out of the box (hello, SEO)
- API routes so I didn't need a separate server
- File-based routing that actually makes sense
- Performance optimizations I didn't have to think about

Plus, the documentation is solid and the community is huge. When you're stuck at 2 AM debugging, that matters.

### PostgreSQL + Prisma = Best Friends

I went with PostgreSQL because, let's be real, you don't mess around with student data. You need ACID compliance and reliability. Could I have used MongoDB? Sure. Would I have regretted it when dealing with complex relationships between users, courses, and enrollments? Absolutely.

Prisma was a game-changer. Type-safe queries, automatic migrations, and I could actually understand what my database looked like by reading the schema file:

```prisma
// Clean, simple, readable
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  role      Role     @default(STUDENT)
  courses   CourseEnrollment[]
  createdAt DateTime @default(now())
}

model Course {
  id          String   @id @default(uuid())
  title       String
  description String
  enrollments CourseEnrollment[]
  assignments Assignment[]
}
```

No more "wait, what column was that again?"

## The Features That Actually Matter

### 1. Role-Based Access (Because Not Everyone Should See Everything)

This was crucial. You can't have students accessing admin panels or instructors seeing other instructors' private content. I built a multi-tier system:

- **Admin**: Can do everything (user management, system config, the works)
- **Instructor**: Course management, grading, tracking student progress
- **Student**: Access courses, submit assignments, check grades

The middleware guards every route and API endpoint. If you're not supposed to be there, you're not getting in.

### 2. Calendar System (Harder Than You'd Think)

Building a calendar that actually works is... an experience. Had to handle:
- Class scheduling with conflict detection
- Exam dates that don't overlap
- Assignment deadlines
- Event notifications
- Making sure everything syncs across different user roles

Ended up building a custom solution because third-party calendar integrations were either too expensive or too limited.

### 3. User Management Dashboard (Admin's Best Friend)

The admin panel needed to be powerful but not overwhelming:
- Bulk import users via CSV (because nobody wants to add 500 students manually)
- Quick role switching
- Activity logs (who did what and when)
- Usage analytics

## Deployment & Infrastructure (The Fun Part)

### Nginx - The Gatekeeper

Nginx sits in front of everything, handling:
- SSL/TLS (because security isn't optional)
- Request routing
- Static file caching
- Rate limiting (no one's DDoS-ing my LMS)

Basic config looks like this:

```nginx
server {
    listen 80;
    server_name finursingcollege.in;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Simple, clean, works like a charm.

### PM2 - Because Apps Crash

PM2 keeps the Node process alive. If something crashes (and things will crash), PM2 restarts it automatically. Plus:
- Zero-downtime deployments
- Memory/CPU monitoring
- Log management
- Clustering for better performance

```javascript
module.exports = {
  apps: [{
    name: 'fi-lms',
    script: 'npm',
    args: 'start',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
}
```

Set it and forget it.

### GitHub Actions - Deploy While You Sleep

Here's where it gets cool. Push to main, and:

1. GitHub Actions picks it up
2. Runs tests and builds
3. Applies database migrations
4. SSHs into the server
5. Pulls latest code
6. Reloads with PM2 (zero downtime!)

All automated. I can deploy from my phone if needed.

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/fi-lms
            git pull origin main
            npm install
            npx prisma migrate deploy
            npm run build
            pm2 reload ecosystem.config.js
```

## The Problems I Ran Into (And How I Fixed Them)

### Problem 1: Permission Hell

**The Issue**: Managing who can access what got complicated fast. Not just "admin vs student" - more like "this instructor can grade these specific courses but not those ones."

**The Fix**: Built a middleware-based system with context-aware checks:

```typescript
export function requireRole(roles: Role[]) {
  return async (req: NextRequest) => {
    const session = await getSession(req);
    if (!session || !roles.includes(session.user.role)) {
      return new Response('Unauthorized', { status: 403 });
    }
  };
}
```

Wrapped every protected route with this. Clean, reusable, and saved me from a million if-statements.

### Problem 2: Slow Queries With Hundreds of Students

**The Issue**: Loading course lists became painfully slow when courses had 200+ enrolled students. Users weren't happy.

**The Fix**: 
- Pagination with cursor-based loading (not offset-based - that's a trap)
- Database indexes on commonly queried fields
- Only fetch what you need (thanks Prisma's `select`)
- Redis caching for stuff that doesn't change often

Went from 8-second load times to under 2 seconds. Worth it.

### Problem 3: Zero-Downtime Migrations

**The Issue**: Can't just take the site down every time I need to update the database schema. Students are accessing this 24/7.

**The Fix**:
- Always back up before migrations (learned this the hard way)
- Test migrations in staging first (also learned this the hard way)
- Use Prisma's migration preview
- Document rollback steps
- Blue-green deployment strategy for major changes

No more "sorry for the downtime" emails.

## Making It Fast

Performance isn't optional when you have real users. Here's what I did:

- **Image Optimization**: Next.js Image component handles lazy loading automatically
- **Code Splitting**: Dynamic imports for heavy components (don't load the admin panel code for students)
- **Database Connection Pooling**: Configured Prisma to reuse connections
- **CDN for Static Assets**: Images and CSS served from edge locations
- **Compression**: Gzip/Brotli via Nginx (free speed boost)

## Security (Because I Don't Want to Get Hacked)

Security stuff you can't skip:
- **JWT Sessions**: Stateless authentication
- **SQL Injection Prevention**: Prisma parameterizes everything
- **XSS Protection**: Sanitize inputs, set CSP headers
- **CSRF Protection**: Token validation on state-changing requests
- **Rate Limiting**: Nginx throttles suspicious traffic
- **HTTPS Everywhere**: Let's Encrypt for free SSL

## The Numbers

After months of building and refining:

- **1000+** active users across roles
- **99.9%** uptime (the 0.1% was my fault - bad deployment on a Friday)
- **<2s** average page load
- **Zero** security breaches (knock on wood)
- **60%** reduction in admin workload

The college staff actually uses it daily, which is the real success metric.

## What I Learned

**1. Don't Overthink the Stack**
Started simple with Next.js + PostgreSQL. Didn't need microservices or Kubernetes for this. Use what works.

**2. Automate or Regret It**
Set up CI/CD early. Manual deployments suck and you will mess them up.

**3. Monitor Everything**
Errors happen. Find them before your users do. Sentry saved me multiple times.

**4. Plan for Growth**
Even if you're starting small, think about what happens when you 10x your users. Database indexes aren't just "nice to have."

**5. Security Isn't Optional**
Build it in from day one. Retrofitting security is way harder than starting with it.

## What's Next?

Things I want to add:
- Real-time notifications (WebSockets)
- Mobile app (probably React Native)
- AI-powered analytics for student performance
- Video conferencing integration
- Better reporting dashboard
- Multi-language support

## Wrapping Up

Building this LMS was one of the most challenging projects I've worked on. Not because the tech was complicated, but because it had to work reliably for real people every single day. No excuses, no "it works on my machine."

The combo of Next.js, PostgreSQL, and solid DevOps practices created something that actually solves problems. And honestly, that's what matters in my opinion.

Got questions about any part of this? The code patterns, deployment setup, or architecture decisions? Feel free to reach out. Always happy to talk shop.

---

**Stack**: Next.js • PostgreSQL • Prisma • Nginx • PM2 • GitHub Actions • Digital Ocean

**Status**: Live in Production at finursingcollege.in

**Users**: 500+
