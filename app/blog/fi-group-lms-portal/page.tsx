"use client"
import Link from "next/link"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function FIGroupLMSBlog() {
    return (
        <div className="font-inter bg-[#0a0a0a] text-[#e5e5e5] min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-6">
                            <Link href="/" className="nav-link text-gray-400 text-sm font-medium hover:text-white transition-colors">home</Link>
                            <Link href="/projects" className="nav-link text-gray-400 text-sm font-medium hover:text-white transition-colors">projects</Link>
                            {/* <a href="https://blogs.abhinavkushwaha.in" target="_blank" className="nav-link text-gray-400 text-sm font-medium hover:text-white transition-colors" rel="noreferrer">blog</a> */}
                            <Link href="/contact" className="nav-link text-gray-400 text-sm font-medium hover:text-white transition-colors">contact</Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="mailto:abhinavkush2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                <i className="fas fa-envelope text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
                {/* Back Button */}
                <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 text-sm">
                    <i className="fas fa-arrow-left mr-2"></i>
                    Back to Projects
                </Link>

                {/* Blog Content */}
                <article className="prose prose-invert prose-lg max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Building a Full-Stack LMS from Scratch: The FI Group Story</h1>

                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-8">
                        <span>July 2025</span>
                        <span>•</span>
                        <span>25 min read</span>
                    </div>

                    <div className="text-gray-300 leading-relaxed space-y-6">
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">How It All Started</h2>
                        <p>
                            So I got tasked with building a Learning Management System for FI Nursing College. Not just any LMS - we're talking role-based access, user management, integrated calendars, the whole nine yards. And it needed to actually work in production with real users, not just be another portfolio piece that crashes under load.
                        </p>
                        <p className="flex items-center space-x-2">
                            <strong>Check it out live:</strong>
                            <a href="https://finursingcollege.in" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">finursingcollege.in</a>
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Stack</h2>
                        <p>Here's what I ended up using:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Next.js</strong> for the frontend (and backend, honestly)</li>
                            <li><strong>PostgreSQL</strong> for the database</li>
                            <li><strong>Prisma</strong> as the ORM</li>
                            <li><strong>MinIO</strong> for in-house file storage</li>
                            <li><strong>NocoDB</strong> for database management</li>
                            <li><strong>Google Calendar API</strong> for calendar sync</li>
                            <li><strong>Nginx</strong> as the reverse proxy</li>
                            <li><strong>PM2</strong> to keep things running</li>
                            <li><strong>GitHub Actions</strong> for CI/CD</li>
                            <li><strong>Digital Ocean</strong> for hosting</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Why These Choices?</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Next.js - The Obvious Pick</h3>
                        <p>
                            Look, I could've gone with a separate React frontend and Express backend. But why make life harder? Next.js gave me:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>SSR out of the box (hello, SEO)</li>
                            <li>API routes so I didn't need a separate server</li>
                            <li>File-based routing that actually makes sense</li>
                            <li>Performance optimizations I didn't have to think about</li>
                        </ul>
                        <p>
                            Plus, the documentation is solid and the community is huge. When you're stuck at 2 AM debugging, that matters.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">PostgreSQL + Prisma = Best Friends</h3>
                        <p>
                            I went with PostgreSQL because, let's be real, you don't mess around with student data. You need ACID compliance and reliability. Could I have used MongoDB? Sure. Would I have regretted it when dealing with complex relationships between users, courses, and enrollments? Absolutely.
                        </p>
                        <p>
                            Prisma was a game-changer. Type-safe queries, automatic migrations, and I could actually understand what my database looked like by reading the schema file:
                        </p>

                        <SyntaxHighlighter language="prisma" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`// Clean, simple, readable
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
}`}
                        </SyntaxHighlighter>

                        <p>No more "wait, what column was that again?"</p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Features That Actually Matter</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">1. Role-Based Access (Because Not Everyone Should See Everything)</h3>
                        <p>
                            This was crucial. You can't have students accessing admin panels or instructors seeing other instructors' private content. I built a multi-tier system:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Admin:</strong> Can do everything (user management, system config, the works)</li>
                            <li><strong>Instructor:</strong> Course management, grading, tracking student progress</li>
                            <li><strong>Student:</strong> Access courses, submit assignments, check grades</li>
                        </ul>
                        <p>The middleware guards every route and API endpoint. If you're not supposed to be there, you're not getting in.</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">2. Calendar System (Harder Than You'd Think)</h3>
                        <p>Building a calendar that actually works is... an experience. Had to handle:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Class scheduling with conflict detection</li>
                            <li>Exam dates that don't overlap</li>
                            <li>Assignment deadlines</li>
                            <li>Event notifications</li>
                            <li>Making sure everything syncs across different user roles</li>
                        </ul>
                        <p>Ended up building a custom solution because third-party calendar integrations were either too expensive or too limited.</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">3. User Management Dashboard (Admin's Best Friend)</h3>
                        <p>The admin panel needed to be powerful but not overwhelming:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Bulk import users via CSV (because nobody wants to add 500 students manually)</li>
                            <li>Quick role switching</li>
                            <li>Activity logs (who did what and when)</li>
                            <li>Usage analytics</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">4. Google Calendar Integration (The Game Changer)</h3>
                        <p>
                            Here's where things got interesting. I wanted students to get automatic calendar updates whenever a new class or timetable was created. Not just in-app notifications - actual Google Calendar events that show up on their phones.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">The OAuth2 Dance with Google</h4>
                        <p>
                            Setting this up wasn't just plugging in an API key. Had to go through Google's verification process:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Created a project in Google Cloud Console</li>
                            <li>Configured OAuth 2.0 credentials</li>
                            <li>Set up consent screen with proper scopes</li>
                            <li>Submitted for Google's app verification (this took a while)</li>
                            <li>Handled all the privacy policy and terms of service requirements</li>
                        </ul>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Permissions & Scopes</h4>
                        <p>
                            Had to be careful with what permissions I requested. Too many and Google flags you, too few and the feature doesn't work. I settled on:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><code className="text-blue-400">calendar.events</code> - Create and manage events</li>
                            <li><code className="text-blue-400">calendar.readonly</code> - Read calendar data for conflict detection</li>
                        </ul>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">How It Works</h4>
                        <p>When an instructor creates a new class or updates the timetable:</p>
                        <ol className="list-decimal list-inside space-y-2 text-gray-300">
                            <li>System captures the event details (date, time, subject, room)</li>
                            <li>Fetches all enrolled students for that course</li>
                            <li>Uses Google Calendar API to create events in their calendars</li>
                            <li>Students get a notification on their phones instantly</li>
                            <li>If the class is rescheduled, the calendar event updates automatically</li>
                        </ol>

                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`// Simplified calendar sync logic
async function syncToGoogleCalendar(classData, students) {
  const event = {
    summary: classData.title,
    location: classData.room,
    description: classData.description,
    start: { dateTime: classData.startTime },
    end: { dateTime: classData.endTime },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'popup', minutes: 30 },
        { method: 'email', minutes: 1440 }
      ]
    }
  };

  for (const student of students) {
    if (student.googleCalendarToken) {
      await calendar.events.insert({
        calendarId: 'primary',
        auth: student.googleCalendarToken,
        resource: event
      });
    }
  }
}`}
                        </SyntaxHighlighter>

                        <p>
                            The approval process from Google was tedious - had to document the use case, explain data handling, show screenshots, and wait for manual review. But once approved, it's been rock solid.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">5. MinIO for In-House File Storage</h3>
                        <p>
                            Storing files was another challenge. Could've used AWS S3, but that gets expensive fast when you're dealing with course materials, assignments, and student submissions. Enter MinIO.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Why MinIO?</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>S3-compatible API (easy to switch if needed)</li>
                            <li>Self-hosted = full control over data</li>
                            <li>No storage costs beyond server space</li>
                            <li>Fast local network speeds</li>
                            <li>Great for compliance with data residency requirements</li>
                        </ul>

                        <p>Set up MinIO as a Docker container on the same server. Created buckets for different file types:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><code className="text-blue-400">course-materials</code> - Lectures, PDFs, presentations</li>
                            <li><code className="text-blue-400">assignments</code> - Student submissions</li>
                            <li><code className="text-blue-400">user-uploads</code> - Profile pictures, documents</li>
                        </ul>

                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`// MinIO client setup
import { Client } from 'minio';

const minioClient = new Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY
});

// Upload file
async function uploadFile(file, bucketName) {
  const fileName = \`\${Date.now()}-\${file.name}\`;
  await minioClient.putObject(
    bucketName,
    fileName,
    file.buffer,
    file.size
  );
  return fileName;
}`}
                        </SyntaxHighlighter>

                        <p>
                            Storage is cheap on Digital Ocean, so this approach saved a ton compared to cloud storage providers. Plus, file access is blazing fast since it's all local.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">6. NocoDB for Database Management</h3>
                        <p>
                            Here's a little secret: not everyone on the team knows SQL. The admin staff needed to make quick changes to the database sometimes, and I wasn't going to give them direct PostgreSQL access.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">The NocoDB Solution</h4>
                        <p>
                            NocoDB turns your database into a spreadsheet-like interface. Think Airtable, but self-hosted and connected to your actual database.
                        </p>

                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Deployed as a Docker container alongside the main app</li>
                            <li>Connected directly to the PostgreSQL database</li>
                            <li>Role-based access (admins only, obviously)</li>
                            <li>GUI for viewing and editing data without writing SQL</li>
                        </ul>

                        <SyntaxHighlighter language="yaml" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`# Docker compose for NocoDB
version: '3'
services:
  nocodb:
    image: nocodb/nocodb:latest
    ports:
      - "8080:8080"
    environment:
      - NC_DB=pg://postgres:5432?u=user&p=password&d=fi_lms
    restart: always
    volumes:
      - nocodb_data:/usr/app/data

volumes:
  nocodb_data:`}
                        </SyntaxHighlighter>

                        <p>
                            Now when someone needs to bulk update user emails or fix a data entry mistake, they can do it through a friendly UI instead of asking me to run SQL queries. Saves time and reduces errors.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Security Considerations</h4>
                        <p>Obviously, this is powerful and potentially dangerous. So:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Only accessible via VPN</li>
                            <li>Strong authentication required</li>
                            <li>Audit logs for all changes</li>
                            <li>Read-only access for most tables</li>
                            <li>Regular backups before any bulk operations</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Deployment & Infrastructure (The Fun Part)</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Nginx - The Gatekeeper</h3>
                        <p>
                            Nginx is the first thing any request hits before it reaches my Next.js app. Think of it as the bouncer at a club - checking IDs, managing the line, and keeping troublemakers out.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">SSL/TLS Termination</h4>
                        <p>
                            First things first: everything runs over HTTPS. I used Let's Encrypt for free SSL certificates (because why pay for something that's free?). Nginx handles the SSL handshake, decrypts the traffic, and passes it to Next.js as plain HTTP internally. This offloads the encryption work from Node, which is honestly not great at handling SSL compared to Nginx.
                        </p>
                        <p>
                            The certificate auto-renews every 90 days via a cron job. I set it and haven't touched it in months. Students' login credentials, grades, and personal data all flow over encrypted connections. Non-negotiable.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Request Routing & Load Balancing</h4>
                        <p>
                            Nginx routes different types of requests to different places. Static files (images, CSS, fonts) get served directly from disk - no need to hit the Node server for those. API requests go to the Next.js app. MinIO file requests get proxied to port 9000 where MinIO is running.
                        </p>
                        <p>
                            When I eventually scale to multiple Node instances, Nginx will load balance between them. Right now it's one instance, but the infrastructure is ready.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Caching Static Assets</h4>
                        <p>
                            Nginx caches static files in memory. When a student loads the dashboard, images and CSS files are served instantly from Nginx's cache instead of hitting the filesystem every time. Set proper cache headers, and browsers cache them too. Less bandwidth, faster loads, happy users.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Rate Limiting</h4>
                        <p>
                            This is the anti-abuse layer. Nginx tracks how many requests come from each IP address. If someone (or something) starts hammering the server - maybe trying to brute force login, or scrape data, or just being malicious - Nginx shuts them down automatically.
                        </p>
                        <p>
                            I configured it to allow 10 requests per second per IP. Normal users never hit that. Bots and attackers do. They get a 429 error and a timeout. Simple, effective protection that costs zero compute.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">PM2 - Because Apps Crash</h3>
                        <p>
                            Node.js apps crash. It's not a question of if, it's when. An unhandled exception, a memory leak that finally maxes out, a database connection that hangs - something will eventually go wrong.
                        </p>
                        <p>
                            PM2 is my insurance policy. It's a process manager that keeps the Node app running no matter what.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Automatic Restarts</h4>
                        <p>
                            If the Node process crashes for any reason, PM2 detects it within milliseconds and restarts it. The downtime is usually under a second. Most users don't even notice. Without PM2, the site would just be down until I manually SSH in and restart it. At 3 AM? No thanks.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Zero-Downtime Deployments</h4>
                        <p>
                            Here's the cool part: when I deploy new code, PM2 can reload the app without dropping a single request. It starts a new instance of the app with the updated code, waits for it to be ready, then gradually shifts traffic from the old instance to the new one. Once all traffic is moved, it kills the old instance.
                        </p>
                        <p>
                            Students can be using the site during a deployment and never know it happened. No maintenance windows, no downtime announcements. I've deployed during peak hours without issues.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Monitoring & Logs</h4>
                        <p>
                            PM2 gives me a dashboard showing memory usage, CPU usage, uptime, and restart counts. If memory starts climbing (potential leak), I see it. If the app is restarting frequently (something's broken), I know immediately.
                        </p>
                        <p>
                            Logs are centralized and rotated automatically. I can stream them in real-time or search historical logs. When something breaks, I'm not digging through scattered log files across the server.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Clustering</h4>
                        <p>
                            PM2 can run multiple instances of the app in cluster mode, utilizing all CPU cores. My Digital Ocean droplet has 4 cores, so PM2 runs 4 instances and load balances between them. Better performance, better reliability (if one instance crashes, the other three keep serving traffic).
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">GitHub Actions - Deploy While You Sleep</h3>
                        <p>
                            I'm lazy about manual deployments. They're error-prone, time-consuming, and I hate SSHing into servers to run commands. So I automated everything.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">The Workflow</h4>
                        <p>
                            When I push code to the main branch on GitHub, a chain reaction starts:
                        </p>

                        <p><strong>Step 1: GitHub Actions Triggers</strong></p>
                        <p>
                            GitHub detects the push and spins up a Ubuntu container in their cloud. Free CI/CD minutes are generous for private repos, so this costs me nothing.
                        </p>

                        <p><strong>Step 2: Tests Run</strong></p>
                        <p>
                            First, it installs dependencies and runs the test suite. Unit tests, integration tests, the works. If anything fails, the deployment stops immediately. I get a notification, and the broken code never touches production.
                        </p>
                        <p>
                            This has saved me multiple times from deploying bugs that would've broken the site.
                        </p>

                        <p><strong>Step 3: Build</strong></p>
                        <p>
                            If tests pass, it runs <code className="text-blue-400">npm run build</code>. Next.js compiles everything, optimizes assets, and generates the production bundle. If the build fails (TypeScript errors, missing dependencies, whatever), deployment stops.
                        </p>

                        <p><strong>Step 4: Database Migrations</strong></p>
                        <p>
                            Before deploying new code, it runs Prisma migrations against the production database. If I added a new table or modified a schema, those changes get applied automatically. Migrations are idempotent, so running them multiple times is safe.
                        </p>
                        <p>
                            This happens before code deployment, so the new code always has the database schema it expects.
                        </p>

                        <p><strong>Step 5: SSH & Deploy</strong></p>
                        <p>
                            GitHub Actions SSHs into my Digital Ocean server using a private key stored in GitHub Secrets (encrypted, obviously). Once connected, it:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Pulls the latest code from GitHub</li>
                            <li>Installs any new dependencies</li>
                            <li>Runs the build on the server (sometimes I do this in CI instead, depends on my mood)</li>
                            <li>Tells PM2 to reload the app</li>
                        </ul>

                        <p><strong>Step 6: Verification</strong></p>
                        <p>
                            After deployment, the workflow makes a health check request to the site. If it gets a 200 OK response, deployment succeeded. If not, it can automatically roll back (though I haven't needed this yet).
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Why This Matters</h4>
                        <p>
                            I can fix a bug, push the code from my laptop (or phone via GitHub's mobile app), and it's live in production within 5 minutes. No manual steps, no room for human error. I've deployed from coffee shops, airports, even once from a moving train.
                        </p>
                        <p>
                            The confidence this gives me is huge. I'm not afraid to deploy because I know the process is reliable and reversible.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Problems I Ran Into (And How I Fixed Them)</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Problem 1: Permission Hell</h3>
                        <p>
                            <strong>The Issue:</strong> Managing permissions got complicated fast. At first, I thought it'd be simple - just "admin" and "student" roles. But reality hit hard.
                        </p>
                        <p>
                            An instructor should be able to grade assignments for their courses, but not see other instructors' courses. They can view enrolled students, but can't delete accounts. They can upload course materials, but can't modify system settings. The admin needs full control, but even within that, some operations are more dangerous than others.
                        </p>
                        <p>
                            I started with a bunch of if-statements scattered throughout the code. It got messy fast. Checking permissions in every component and every API route. I'd miss checks, introduce bugs, and spend hours debugging "why can this student see the admin panel?"
                        </p>

                        <p>
                            <strong>The Fix:</strong> I built a middleware-based permission system. Every API route goes through authentication middleware first, then authorization middleware. The middleware checks the user's role against the required role for that route.
                        </p>
                        <p>
                            On the frontend, I created wrapper components that conditionally render based on permissions. Instead of sprinkling permission checks everywhere, I wrap features:
                        </p>
                        <p className="font-mono text-sm bg-gray-900 p-3 rounded">
                            &lt;RequireRole role="admin"&gt; ... admin stuff ... &lt;/RequireRole&gt;
                        </p>
                        <p>
                            Clean, reusable, and I can audit permissions by just looking at the route definitions. No more hunting through thousands of lines of code.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Problem 2: Zero-Downtime Migrations</h3>
                        <p>
                            <strong>The Issue:</strong> Students use this LMS 24/7. There's no "maintenance window" where I can take the site down. But I need to update the database schema as features evolve - add tables, modify columns, create relationships.
                        </p>
                        <p>
                            Early on, I'd just run migrations on the production database and hope for the best. This worked until it didn't. One migration locked a table during a write-heavy period, and the site hung for 30 seconds. Users saw errors. Some submissions were lost. Not great.
                        </p>

                        <p><strong>The Fix - A Process:</strong></p>

                        <p><strong>1. Always Backup First</strong></p>
                        <p>
                            Before every migration, I take a database snapshot. Digital Ocean makes this a one-click operation. If something goes catastrophically wrong, I can restore to 5 minutes ago. I learned this the hard way after a migration once corrupted some data (my fault, not Prisma's).
                        </p>

                        <p><strong>2. Test in Staging</strong></p>
                        <p>
                            I have a staging environment that mirrors production. Same database structure, same volume of data (anonymized copies of production data). I run migrations there first. If they take 10 seconds, I know production will be similar. If they lock tables, I see it before it affects users.
                        </p>

                        <p><strong>3. Use Prisma's Migration Preview</strong></p>
                        <p>
                            Prisma can show you the SQL it will run before actually running it. I review this every time. Sometimes it reveals inefficient operations or potential issues. I've caught destructive migrations this way.
                        </p>

                        <p><strong>4. Document Rollback Steps</strong></p>
                        <p>
                            Before running a migration, I write down how to undo it. If I'm adding a column, I document the DROP COLUMN command. If I'm changing a constraint, I know how to revert it. This has saved me twice when migrations had unexpected side effects.
                        </p>

                        <p><strong>5. Blue-Green Deployments for Major Changes</strong></p>
                        <p>
                            For really big schema changes, I use a blue-green strategy. I create the new schema alongside the old, deploy code that writes to both, wait for data to sync, then switch reads to the new schema. Only once everything is stable do I remove the old schema. More work, but zero risk.
                        </p>

                        <p>
                            No more "sorry for the downtime" emails. Migrations run during peak hours and nobody notices.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Making It Fast</h2>
                        <p>Performance isn't a feature - it's a requirement. When you have real users trying to submit assignments before a deadline, or instructors grading during office hours, slow = broken. Here's how I made this thing fast:</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Image Optimization</h3>
                        <p>
                            Next.js Image component is genuinely magic. It automatically converts images to modern formats (WebP, AVIF), generates multiple sizes, and lazy loads them. An instructor uploads a 5MB photo? Next.js serves it as a 50KB WebP file at the exact size needed for the viewport.
                        </p>
                        <p>
                            The lazy loading means images below the fold don't load until you scroll near them. On a page with 50 profile pictures, you only load the 10 visible ones initially. The rest load as needed. Massive bandwidth savings.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Code Splitting</h3>
                        <p>
                            Why should students download the admin panel code? They never see it. I used dynamic imports to split code by role and feature. The student bundle is 200KB. The admin bundle is 450KB. But students never download that extra 250KB because their browser never requests it.
                        </p>
                        <p>
                            Heavy components like the rich text editor for announcements? Dynamic import. Chart library for analytics? Dynamic import. Students on mobile with limited data plans thank me for this.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Database Connection Pooling</h3>
                        <p>
                            Opening a database connection is expensive - TLS handshake, authentication, all that overhead. Early on, I was opening a new connection for every request. Under load, this was a disaster.
                        </p>
                        <p>
                            Prisma has built-in connection pooling. It maintains a pool of open connections and reuses them across requests. Configured properly (pool size matching my database's connection limit), this eliminated connection overhead entirely. Requests are faster, the database is happier, everyone wins.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">CDN for Static Assets</h3>
                        <p>
                            Images, CSS, JavaScript bundles - none of that needs to come from my server. I use Cloudflare's CDN (free tier is generous). Static files get cached at edge locations around the world.
                        </p>
                        <p>
                            A student in California and a student in Mumbai both get fast load times because they're fetching assets from nearby edge servers, not my single server in New York. First request might be slow, but it caches, and subsequent requests are lightning fast.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Compression</h3>
                        <p>
                            Nginx compresses all responses with Gzip (and Brotli for browsers that support it). HTML, CSS, JavaScript, JSON - all compressed before sending over the network. A 500KB HTML page becomes 100KB compressed. That's an 80% reduction in transfer time.
                        </p>
                        <p>
                            Setup took 5 minutes, benefits are permanent. Free speed boost with zero code changes.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Security (Because I Don't Want to Get Hacked)</h2>
                        <p>Building a system that handles student data means security isn't optional. One breach and I'm done. Here's how I locked things down:</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">JWT Sessions</h3>
                        <p>
                            I use JWTs for authentication. When you log in, you get a signed token that contains your user ID and role. This token goes in an HTTP-only cookie (so JavaScript can't access it - XSS protection).
                        </p>
                        <p>
                            The token is signed with a secret key. Any tampering invalidates the signature. Try to change your role from "student" to "admin" in the token? The signature won't match, and you get kicked out. Simple, stateless, and secure.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">SQL Injection Prevention</h3>
                        <p>
                            This is where Prisma really shines. It parameterizes every query automatically. I never write raw SQL strings with user input concatenated in. Ever.
                        </p>
                        <p>
                            Even if I wanted to be vulnerable to SQL injection, Prisma makes it hard. The TypeScript API just doesn't allow it. User input goes through proper escaping and parameterization. Classic attacks like <code className="text-blue-400">' OR '1'='1</code> just get treated as literal strings.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">XSS Protection</h3>
                        <p>
                            React escapes content by default, which helps. But I also sanitize user input on the backend before storing it. Rich text from instructors? Sanitized through a whitelist-based HTML sanitizer. Only safe tags are allowed.
                        </p>
                        <p>
                            Content Security Policy headers tell browsers what scripts are allowed to run. Only scripts from my domain, no inline scripts, no eval(). If someone somehow injects a script tag, the browser refuses to execute it.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">CSRF Protection</h3>
                        <p>
                            Every state-changing request (POST, PUT, DELETE) requires a CSRF token. The token is generated server-side, embedded in the page, and verified on submission. An attacker can't make your browser submit a malicious form to my site because they don't have your valid CSRF token.
                        </p>
                        <p>
                            Same-site cookies provide additional protection. Even if an attacker tricks you into clicking a malicious link, your authentication cookie won't be sent with that cross-site request.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Rate Limiting</h3>
                        <p>
                            Nginx rate limits are the first layer. But I also have application-level rate limiting on sensitive endpoints. Login attempts? 5 tries per IP per 15 minutes. Password reset requests? 3 per hour. API endpoints? Depends on the endpoint, but all are limited.
                        </p>
                        <p>
                            This stops brute force attacks, credential stuffing, and API abuse. Legitimate users never hit these limits. Attackers do, and they get blocked.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">HTTPS Everywhere</h3>
                        <p>
                            Every single request goes over HTTPS. I redirect HTTP to HTTPS automatically. Browsers see the site as secure (that green padlock). Student credentials, grades, personal info - all encrypted in transit.
                        </p>
                        <p>
                            Let's Encrypt makes this free and automatic. There's literally no reason not to use HTTPS in 2025.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Numbers</h2>
                        <p>After months of building and refining:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>1000+</strong> active users across roles</li>
                            <li><strong>99.9%</strong> uptime (the 0.1% was my fault - bad deployment on a Friday)</li>
                            <li><strong>&lt;2s</strong> average page load</li>
                            <li><strong>Zero</strong> security breaches (knock on wood)</li>
                            <li><strong>60%</strong> reduction in admin workload</li>
                        </ul>
                        <p>The college staff actually uses it daily, which is the real success metric.</p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">What I Learned</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">1. Don't Overthink the Stack</h3>
                        <p>
                            I started simple: Next.js + PostgreSQL + Prisma. That's it. No microservices architecture, no Kubernetes cluster, no message queues, no event-driven this or that.
                        </p>
                        <p>
                            You know what? That simple stack has handled 1000+ users without breaking a sweat. I see people planning for "scale" when they have zero users. They build distributed systems for problems they don't have yet.
                        </p>
                        <p>
                            A well-built monolith will take you further than you think. When I actually need to scale (if that day comes), I can refactor. But premature optimization is real, and it kills projects. Start simple, add complexity only when you need it.
                        </p>
                        <p>
                            The tech industry has this obsession with "modern" and "scalable" architectures. But you know what's modern? Shipping a working product that users love. Use boring technology that works.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">2. Automate or Regret It</h3>
                        <p>
                            I set up CI/CD on day one. Not week two, not after launch. Day. One.
                        </p>
                        <p>
                            Here's why: manual deployments are hell. You SSH into a server, pull code, run builds, restart services, cross your fingers. You do this once? Fine. You do this 50 times? You will mess it up. You will forget a step. You will deploy broken code at 11 PM and spend two hours debugging.
                        </p>
                        <p>
                            I've been there. I once manually deployed to production and forgot to run migrations. The site crashed. Users saw errors. I looked like an idiot. Never again.
                        </p>
                        <p>
                            Now? Push to GitHub, and it's live in 5 minutes. Tests run automatically. Migrations apply automatically. If something fails, the deployment stops. I deploy multiple times a day without thinking about it.
                        </p>
                        <p>
                            Setting up GitHub Actions took me maybe 2 hours. That investment has saved me dozens of hours and countless headaches. Automate the boring stuff so you can focus on building features.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">3. Monitor Everything</h3>
                        <p>
                            Errors happen. Bugs slip through. The question is: do you find out when it happens, or when a user emails you three days later?
                        </p>
                        <p>
                            I use Sentry for error tracking. Every unhandled exception, every failed API call, every weird edge case - Sentry catches it and sends me a notification. I see the error message, the stack trace, the user's browser, the request that caused it. Everything I need to debug.
                        </p>
                        <p>
                            This has saved me multiple times. A student reported "something's broken" (thanks, very helpful). I checked Sentry, saw an exception in the assignment submission handler, found the bug, fixed it, and deployed - all in 20 minutes. Without monitoring? I'd still be asking "can you describe what you were doing when it broke?"
                        </p>
                        <p>
                            I also monitor performance. Slow database queries get logged. API endpoints with high response times get flagged. If something starts degrading, I know before users complain.
                        </p>
                        <p>
                            Monitoring isn't paranoia. It's professionalism. You can't fix what you don't know is broken.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">4. Plan for Growth</h3>
                        <p>
                            I said don't over-engineer, and I meant it. But there's a difference between over-engineering and planning for obvious growth.
                        </p>
                        <p>
                            Database indexes aren't over-engineering. They're essential. Even with 10 users, indexed queries are fast. With 1000 users, they're still fast. Without indexes? Good luck.
                        </p>
                        <p>
                            Pagination isn't over-engineering. Even if you only have 20 items now, you'll have 200 eventually. Implement pagination from the start. It's not hard, and future-you will be grateful.
                        </p>
                        <p>
                            Proper error handling isn't over-engineering. Log errors, handle edge cases, validate inputs. This isn't "premature optimization" - it's basic software engineering.
                        </p>
                        <p>
                            The trick is knowing the difference. Microservices for a simple CRUD app? Over-engineering. Database indexes and pagination? Basic planning. One wastes time now and solves nonexistent problems. The other saves time later when problems are real.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">5. Security Isn't Optional</h3>
                        <p>
                            Build security in from day one. Not "I'll add authentication later." Not "I'll worry about SQL injection after launch." From. Day. One.
                        </p>
                        <p>
                            Here's why: retrofitting security is a nightmare. You have to audit every endpoint, every query, every input field. You'll miss things. And when you miss things in security, people's data gets exposed.
                        </p>
                        <p>
                            Starting with security is easy. Use an ORM that prevents SQL injection. Use a framework with built-in CSRF protection. Hash passwords with bcrypt. Set secure headers. These aren't hard - they're just non-negotiable.
                        </p>
                        <p>
                            I'm handling student data - grades, personal information, attendance records. One breach and I'm done. The college is done. Careers are damaged. So I don't cut corners on security. Ever.
                        </p>
                        <p>
                            The best part? Most security practices make your code better anyway. Input validation prevents bugs. Proper authentication improves UX. Rate limiting keeps your site reliable. Security isn't a burden - it's a foundation.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">What's Next?</h2>
                        <p>Things I want to add:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Real-time notifications (WebSockets)</li>
                            <li>Mobile app (probably React Native)</li>
                            <li>AI-powered analytics for student performance</li>
                            <li>Video conferencing integration</li>
                            <li>Better reporting dashboard</li>
                            <li>Multi-language support</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Wrapping Up</h2>
                        <p>
                            Building this LMS was one of the most challenging projects I've worked on. Not because the tech was complicated, but because it had to work reliably for real people every single day. No excuses, no "it works on my machine."
                        </p>
                        <p>
                            The combo of Next.js, PostgreSQL, and solid DevOps practices created something that actually solves problems. And honestly, that's what matters in my opinion.
                        </p>
                        <p>
                            Got questions about any part of this? The code patterns, deployment setup, or architecture decisions? Feel free to reach out. Always happy to talk shop.
                        </p>

                        <div className="border-t border-gray-800 mt-12 pt-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Next.js</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">PostgreSQL</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Prisma</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Google Calendar API</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">MinIO</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">NocoDB</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Docker</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Nginx</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">PM2</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">GitHub Actions</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Digital Ocean</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                <strong>Status:</strong> Live in Production at finursingcollege.in
                            </p>
                            <p className="text-gray-400 text-sm">
                                <strong>Users:</strong> 500+
                            </p>
                        </div>
                    </div>
                </article>
            </main>

            {/* Footer */}
            <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-800 mt-16">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/abhinav-kushwaha-8603b2247"
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/abhii2003"
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:abhinavkush2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
