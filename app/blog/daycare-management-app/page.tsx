"use client"
import Link from "next/link"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function DaycareBlog() {
    return (
        <div className="font-inter bg-[#0a0a0a] text-[#e5e5e5] min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex space-x-6">
                            <Link href="/" className="nav-link text-gray-400 text-sm font-medium hover:text-white transition-colors">home</Link>
                            <Link href="/projects" className="nav-link text-gray-400 text-sm font-medium hover:text-white transition-colors">projects</Link>
                            <a href="https://blogs.abhinavkushwaha.in" target="_blank" className="nav-link text-gray-400 text-sm font-medium hover:text-white transition-colors" rel="noreferrer">blog</a>
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
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Building Splashnest: A Daycare Management System That Actually Works</h1>

                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-8">
                        <span>September 2025</span>
                        <span>•</span>
                        <span>18 min read</span>
                    </div>

                    <div className="text-gray-300 leading-relaxed space-y-6">
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Why This Exists</h2>
                        <p>
                            Ever walked into a daycare center and seen staff drowning in paperwork? Attendance sheets scattered everywhere, parents frantically texting about schedule changes, and someone trying to remember if little Timmy is allergic to peanuts by checking a three-month-old email? Yeah, that was the reality.
                        </p>
                        <p>
                            So I built Splashnest. Not because I thought "hey, the world needs another CRUD app," but because daycare centers were legitimately struggling with spreadsheets, paper forms, and way too many WhatsApp messages. Real people, real problems, real solution.
                        </p>
                        <p className="flex items-center space-x-2">
                            <strong>Check it out live:</strong>
                            <a href="https://dms.splashnest.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">dms.splashnest.com</a>
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Tech Stack (and the reasoning behind it)</h2>
                        <p>Let's break down what powers this thing and, more importantly, why I chose each piece:</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Frontend Arsenal</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Next.js 15 with React 19</strong> - Server components are genuinely great now, and the App Router finally feels mature. Plus, having everything in one codebase beats managing separate frontend/backend repos</li>
                            <li><strong>TypeScript</strong> - Because catching bugs at compile time is way better than debugging at 2 AM when production breaks</li>
                            <li><strong>Tailwind CSS</strong> - Utility-first styling that actually makes sense. No more naming classes or context-switching to CSS files</li>
                            <li><strong>Radix UI</strong> - Accessible components out of the box. Keyboard navigation, ARIA labels, screen reader support - all handled</li>
                            <li><strong>shadcn/ui</strong> - Beautiful pre-built components that you actually own. Copy, paste, customize. No black-box npm packages</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Backend Power</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Next.js API Routes</strong> - Keep it simple. Everything in one repo, shared types, no CORS headaches</li>
                            <li><strong>Prisma ORM</strong> - Database queries that actually read like English. Plus that auto-generated TypeScript client? Chef's kiss</li>
                            <li><strong>PostgreSQL via Supabase</strong> - Rock-solid relational database with real-time superpowers and a clean dashboard</li>
                            <li><strong>Supabase Auth</strong> - JWT tokens, session management, password resets - all handled. No need to roll our own auth</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">The Supporting Cast</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>PWA support (@ducanh2912/next-pwa)</strong> - Works offline, installs like a native app, feels professional</li>
                            <li><strong>date-fns</strong> - Date manipulation without wanting to throw your laptop out the window</li>
                            <li><strong>ExcelJS</strong> - Export attendance to Excel because accountants still live in Excel world</li>
                            <li><strong>Zod</strong> - Runtime type validation. TypeScript guards compile time, Zod guards runtime</li>
                            <li><strong>React Hook Form</strong> - Forms that don't make you want to cry</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Architecture: Keeping It Real</h2>
                        <p>I went with a straightforward architecture. No buzzwords, no over-engineering:</p>

                        <SyntaxHighlighter language="text" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`Frontend (Next.js) → API Routes → Prisma → Supabase PostgreSQL`}
                        </SyntaxHighlighter>

                        <p>That's it. No microservices. No GraphQL layer "just in case we need it later." No Kafka message queues. Just a solid monolith that does its job really well.</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Why Supabase?</h3>
                        <p>Could've gone with a raw PostgreSQL instance somewhere. But Supabase gives me so much more:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>PostgreSQL database with an actually good dashboard (no more raw SQL for simple queries)</li>
                            <li>Built-in authentication system that just works</li>
                            <li>Row-level security policies (super important for multi-tenant apps)</li>
                            <li>Real-time subscriptions for live updates (parents see schedule changes instantly)</li>
                            <li>Edge functions if we ever need serverless compute</li>
                            <li>Automatic backups (sleep better at night)</li>
                        </ul>

                        <p>Plus, the developer experience is fantastic. Setting up a new table? Write a Prisma schema, run migration, boom, done. The Supabase dashboard updates automatically.</p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Fun Problems I Actually Solved</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Problem 1: Timezone Hell (The Big One)</h3>
                        <p>Oh man, this one almost broke us. When you're dealing with schedules, dates, and attendance across different timezones, JavaScript's Date object becomes your worst enemy.</p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">What Was Happening</h4>
                        <p>Picture this nightmare scenario:</p>
                        <ol className="list-decimal list-inside space-y-2 text-gray-300">
                            <li>Parent in PST creates a schedule for "September 7th, 2025"</li>
                            <li>Frontend sends the date string "2025-09-07" to the API</li>
                            <li>Backend does <code className="text-blue-400">new Date("2025-09-07")</code> which creates UTC midnight</li>
                            <li>Database stores this as a UTC timestamp</li>
                            <li>Admin in EST queries for "today's schedules"</li>
                            <li>Gets the wrong day's data because of timezone conversion</li>
                        </ol>

                        <p>Parents were seeing schedules appear and disappear. Admins couldn't find records. It was chaos.</p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">The Solution: Centralized Date Utilities</h4>
                        <p>I built a fortress of date utilities in <code className="text-blue-400">utils/date-utils.ts</code> that handles ALL date operations:</p>

                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`// Get today's date in local timezone as string
getTodayString() // Returns: "2025-10-08"

// Create proper date range for database queries
// This ensures we capture the ENTIRE day in UTC
getUTCDateRange("2025-09-07") 
// Returns: { 
//   start: Date (2025-09-07 00:00:00 in local, converted to UTC),
//   end: Date (2025-09-07 23:59:59 in local, converted to UTC)
// }

// Create a local date for storage (uses noon to avoid DST issues)
createLocalDate("2025-09-07") 
// Returns: Date object representing noon on that day in local timezone

// Format dates consistently for display
formatDisplayDate(date) // "Monday, Sep 7, 2025"
formatTimeDisplay(date) // "3:30 PM"`}
                        </SyntaxHighlighter>

                        <p>Now every single date operation in the app goes through these utilities. API routes use them. Components use them. Cron jobs use them. No exceptions.</p>

                        <p>I even wrote a comprehensive guide (<code className="text-blue-400">TIMEZONE-HANDLING-GUIDE.md</code>) explaining the gotchas and how to avoid them. Because I know future devs (or future me) will need it.</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Problem 2: Making It a Progressive Web App (The Smart Financial Move)</h3>
                        <p>Daycare staff work in environments where WiFi can be spotty. Kids running around, busy mornings, sometimes the internet just drops. I needed the app to work offline. But more importantly, I needed to make a smart business decision.</p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Why PWA Instead of Native Apps?</h4>
                        <p>Here's the thing - I could've built separate iOS and Android apps. But let's break down why that would've been ridiculous:</p>

                        <h5 className="text-lg font-bold text-white mt-4 mb-2">Cost Savings (The Big One)</h5>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Apple Developer Fee: $99/year</strong> - Why pay Apple $99 annually just to distribute an app? That's money that could go toward actual features or infrastructure</li>
                            <li><strong>Google Play: $25 one-time</strong> - Not terrible, but still an unnecessary expense</li>
                            <li><strong>No app store review delays</strong> - Deploy instantly, no waiting 2-5 days for Apple's review team</li>
                            <li><strong>No 30% commission</strong> - If we ever add paid features, no app store cut</li>
                            <li><strong>Single codebase = lower maintenance costs</strong> - One app to maintain, not three (web, iOS, Android)</li>
                        </ul>

                        <h5 className="text-lg font-bold text-white mt-4 mb-2">Cross-Platform Perfection</h5>
                        <p>PWAs work everywhere. Literally everywhere:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>iOS Safari</strong> - Add to Home Screen, full screen experience, no browser chrome</li>
                            <li><strong>Android Chrome</strong> - Native install prompt, appears in app drawer, indistinguishable from native</li>
                            <li><strong>Desktop</strong> - Works on Windows, Mac, Linux. Any browser. Same code</li>
                            <li><strong>Tablets</strong> - Responsive design adapts perfectly</li>
                            <li><strong>Future platforms</strong> - Whatever comes next will probably support PWAs</li>
                        </ul>

                        <h5 className="text-lg font-bold text-white mt-4 mb-2">Lightweight & Fast</h5>
                        <p>Native apps are bloated. PWAs are lean:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>~2MB total download</strong> - vs 50-100MB for typical native apps</li>
                            <li><strong>Instant updates</strong> - Users always get the latest version, no app store update prompts</li>
                            <li><strong>Progressive loading</strong> - App shell loads first, content follows. Feels instant</li>
                            <li><strong>Cached assets</strong> - After first visit, loads from cache. Sub-second load times</li>
                            <li><strong>No bloat</strong> - Just the web code, no native SDK overhead</li>
                        </ul>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">PWA Features Implemented</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Service Workers</strong> - Cache app shell, API responses, and critical assets</li>
                            <li><strong>Offline Fallback</strong> - Graceful degradation when network is unavailable</li>
                            <li><strong>Install Prompts</strong> - Custom UI encouraging users to "Add to Home Screen"</li>
                            <li><strong>App-like Experience</strong> - Full screen, no browser UI, native-feeling transitions</li>
                            <li><strong>Push Notification Ready</strong> - Infrastructure in place for future implementation</li>
                            <li><strong>Background Sync</strong> - Queues actions when offline, syncs when connection returns</li>
                        </ul>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">The Technical Setup</h4>
                        <p>The setup was surprisingly straightforward thanks to <code className="text-blue-400">@ducanh2912/next-pwa</code>. Just wrap the Next.js config:</p>

                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`import withPWA from '@ducanh2912/next-pwa';

const nextConfig = {
  // ... your config
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);`}
                        </SyntaxHighlighter>

                        <p>Add a <code className="text-blue-400">manifest.json</code> file:</p>

                        <SyntaxHighlighter language="json" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`{
  "name": "Splashnest Daycare",
  "short_name": "Splashnest",
  "description": "Daycare Management System",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`}
                        </SyntaxHighlighter>

                        <p>Boom. PWA. Works offline. Installs like a native app. Zero recurring fees. Cross-platform by default. Parents love it because it feels professional and responsive. I love it because it's financially smart and technically elegant.</p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">The Real-World Impact</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Parents don't care it's a PWA</strong> - To them, it's just "the app." Looks native, feels native, works native</li>
                            <li><strong>Staff use it offline</strong> - Mark attendance even when WiFi drops. Syncs when connection returns</li>
                            <li><strong>Zero distribution friction</strong> - Share a link. That's it. No "download from App Store" barrier</li>
                            <li><strong>Instant bug fixes</strong> - Deploy to web, users get it immediately. No waiting for app store approval</li>
                            <li><strong>One codebase</strong> - Fix once, works everywhere. Saved countless development hours</li>
                        </ul>

                        <p>This is the kind of decision that makes you realize: sometimes the "simpler" option is actually the smarter option. No Apple tax, no fragmentation, no complexity. Just a web app that works really, really well.</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Problem 3: Role-Based Access Control</h3>
                        <p>Two completely different user types need completely different experiences. This isn't just hiding a few buttons - it's fundamentally different apps living in the same codebase.</p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">What Parents See</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Only their own children (never someone else's kid)</li>
                            <li>Create and edit schedules for their kids</li>
                            <li>Add special instructions (allergies, pickup notes, etc.)</li>
                            <li>View daily menus</li>
                            <li>Check attendance history</li>
                        </ul>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">What Admins See</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>All children across all families</li>
                            <li>All parent accounts</li>
                            <li>User management (create, edit, delete accounts)</li>
                            <li>Menu management (create daily menus)</li>
                            <li>Global instructions and policies</li>
                            <li>Class scheduling and templates</li>
                            <li>Analytics and reports</li>
                        </ul>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">How I Handle It</h4>
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`// Prisma schema defines roles
enum UserRole {
  PARENT
  ADMIN
}

model User {
  id       String   @id
  email    String   @unique
  role     UserRole @default(PARENT)
  children Child[]
}

// API route protection
const token = await getToken(req)
const user = await verifyToken(token)

if (user.role !== 'admin') {
  return NextResponse.json(
    { error: 'Unauthorized' }, 
    { status: 403 }
  )
}

// Frontend conditional rendering
{user.role === 'admin' ? (
  <AdminDashboard />
) : (
  <ParentDashboard />
)}`}
                        </SyntaxHighlighter>

                        <p>Every API route checks authentication AND authorization. Every component conditionally renders based on role. No shortcuts, no "I'll add that later."</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Problem 4: Global Data Management</h3>
                        <p>I needed a way to avoid every component making separate API calls. Twenty components all fetching the same children data? Inefficient and janky.</p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Enter DataContext</h4>
                        <p>I built a global data context provider that:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Fetches all necessary data on mount (children, schedules, menus)</li>
                            <li>Caches it in React context</li>
                            <li>Provides refresh functions for each data type</li>
                            <li>Handles loading states globally</li>
                            <li>Manages error states</li>
                        </ul>

                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`// One fetch, shared everywhere
const { 
  children, 
  schedules, 
  isLoading,
  refreshChildren 
} = useData();

// When a child is added
await createChild(childData);
await refreshChildren(); // Update context`}
                        </SyntaxHighlighter>

                        <p>This pattern keeps the API calls manageable and the UI snappy. Plus, it's way easier to debug when data lives in one place.</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Problem 5: Recurring Classes & Templates</h3>
                        <p>Parents wanted to set up recurring classes (like "Ballet every Tuesday at 3 PM") without manually creating each instance. Makes sense, but implementing it is trickier than it sounds.</p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">The Database Design</h4>
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`model ClassTemplate {
  id          String   @id @default(uuid())
  name        String   // "Ballet Class"
  startTime   String   // "15:00"
  endTime     String   // "16:00"
  isRecurring Boolean  
  dayOfWeek   String?  // "tuesday"
  startDate   DateTime?
  endDate     DateTime?
  
  // Generated class instances
  instances   ClassSchedule[]
  childId     String
  child       Child @relation(fields: [childId])
}

model ClassSchedule {
  id         String    @id @default(uuid())
  date       DateTime  // Specific date: 2025-09-09
  completed  Boolean?
  droppedOff Boolean?
  pickedUp   Boolean?
  
  templateId String?
  template   ClassTemplate? @relation(fields: [templateId])
}`}
                        </SyntaxHighlighter>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">The Cron Magic</h4>
                        <p>A daily cron job runs and:</p>
                        <ol className="list-decimal list-inside space-y-2 text-gray-300">
                            <li>Finds all active recurring templates</li>
                            <li>Checks if instances exist for the next 7 days</li>
                            <li>Generates missing instances based on dayOfWeek and date range</li>
                            <li>Links them back to the template</li>
                        </ol>

                        <p>Parents set it up once, and the system handles the rest. Check out <code className="text-blue-400">utils/cron-class-scheduler.ts</code> for the implementation.</p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Database Schema (it's actually well-thought-out)</h2>
                        <p>We spent real time designing this. Eight main models, all properly related:</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Core Models</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>User</strong> - Parents and admin accounts with authentication</li>
                            <li><strong>Child</strong> - The kids, linked to parent users</li>
                            <li><strong>Schedule</strong> - Daily drop-off and pickup times</li>
                            <li><strong>ClassTemplate</strong> - Recurring class definitions</li>
                            <li><strong>ClassSchedule</strong> - Actual class instances with attendance tracking</li>
                            <li><strong>DailyMenu</strong> - What's for breakfast, lunch, and snack each day</li>
                            <li><strong>SpecialInstructions</strong> - Allergies, medical notes, pickup authorization</li>
                            <li><strong>DaycareSettings</strong> - Operating hours, capacity limits, fee structure</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Smart Relationships</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Everything uses UUIDs (no sequential IDs that leak information)</li>
                            <li>Proper foreign key constraints</li>
                            <li>Cascade deletes configured (delete parent → removes their children from DB)</li>
                            <li>Indexes on frequently queried fields (date ranges, user IDs)</li>
                            <li>Enum types for roles and other fixed options</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">UI/UX: Making It Actually Usable</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Mobile-First Philosophy</h3>
                        <p>I designed for mobile first because that's what parents and daycare staff actually use. The desktop view is just a wider version with better spacing.</p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">Bottom Navigation Bar</h4>
                        <p>Always visible, always accessible:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Dashboard</strong> - Home screen with today's info</li>
                            <li><strong>Schedule</strong> - Create and view schedules</li>
                            <li><strong>History</strong> - Past attendance and activity</li>
                            <li><strong>Settings</strong> - Profile, preferences, logout</li>
                        </ul>

                        <p>Clean, simple, thumb-friendly. No hunting for navigation.</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Component Library: shadcn/ui</h3>
                        <p>I used shadcn/ui components throughout, customized to match the design:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Cards</strong> - Content grouping with subtle shadows</li>
                            <li><strong>Dialogs</strong> - Forms and confirmations</li>
                            <li><strong>Toasts</strong> - Success and error notifications</li>
                            <li><strong>Accordions</strong> - Collapsible sections for long content</li>
                            <li><strong>Select & Combobox</strong> - Searchable dropdowns</li>
                            <li><strong>Date Pickers</strong> - Calendar selection with proper timezone handling</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">The Admin Dashboard</h3>
                        <p>Check out <code className="text-blue-400">components/dashboard/admin/admin-dashboard.tsx</code>. I've got:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Compact Stat Cards</strong> - Total children, active schedules, pending tasks</li>
                            <li><strong>Quick Actions</strong> - Jump directly to menus, instructions, user management</li>
                            <li><strong>Today's Activity</strong> - Count of scheduled classes and attendance status</li>
                            <li><strong>Age Demographics</strong> - Visual breakdown (toddlers vs preschool vs school age)</li>
                        </ul>

                        <p>It's colorful without being overwhelming. Gradient backgrounds, subtle shadows, good spacing. Everything you need at a glance.</p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Automation: Cron Jobs That Actually Run</h2>
                        <p>I set up several cron jobs to handle recurring tasks:</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">1. Attendance Tracking</h3>
                        <p>Runs every morning at 6 AM:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Finds all schedules for today</li>
                            <li>Checks which kids haven't been marked as dropped off</li>
                            <li>Auto-marks them as absent</li>
                            <li>Notifies admins of absences</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">2. Class Schedule Generation</h3>
                        <p>Runs daily at midnight:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Finds all recurring class templates</li>
                            <li>Generates instances for the next 7 days</li>
                            <li>Skips dates that already have instances</li>
                            <li>Respects start and end dates of templates</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">3. Data Cleanup</h3>
                        <p>Runs weekly:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Archives records older than 1 year</li>
                            <li>Cleans up orphaned data</li>
                            <li>Optimizes database indexes</li>
                        </ul>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">GitHub Actions for Automation</h4>
                        <p>I use GitHub Actions to run these cron jobs instead of Vercel's cron feature. More control, easier debugging, and works with any hosting platform.</p>
                        <p>Configured through <code className="text-blue-400">.github/workflows/cron.yml</code>:</p>
                        <SyntaxHighlighter language="yaml" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`name: Cron Jobs

on:
  schedule:
    # Attendance tracking - 6 AM daily
    - cron: '0 6 * * *'
    # Class scheduler - midnight daily
    - cron: '0 0 * * *'
  workflow_dispatch: # Manual trigger for testing

jobs:
  run-crons:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Attendance Cron
        if: github.event.schedule == '0 6 * * *'
        run: |
          curl -X POST https://dms.splashnest.com/api/cron/attendance \\
            -H "Authorization: Bearer \${{ secrets.CRON_SECRET }}"
      
      - name: Trigger Class Scheduler
        if: github.event.schedule == '0 0 * * *'
        run: |
          curl -X POST https://dms.splashnest.com/api/cron/class-scheduler \\
            -H "Authorization: Bearer \${{ secrets.CRON_SECRET }}"`}
                        </SyntaxHighlighter>

                        <p>GitHub Actions hits these endpoints on schedule. Free, reliable, and I can see the execution logs right in GitHub. Plus, I can manually trigger them for testing.</p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Things We'd Do Differently (Hindsight is 20/20)</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">1. More Comprehensive Testing</h3>
                        <p>
                            Yeah, we should have more tests. We know. The project works great in production, but automated tests would make refactoring way less scary. Unit tests for utilities, integration tests for API routes, E2E tests for critical flows.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">2. State Management Evolution</h3>
                        <p>
                            DataContext works well for this app size, but if we scaled up significantly, we'd probably reach for Zustand or break things into more granular contexts. The current approach starts feeling heavy around 10+ data types.
                        </p>


                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">3. Real-time Updates</h3>
                        <p>
                            While Supabase supports real-time subscriptions, I'm not using them yet. Implementing websocket connections for live updates when admins change schedules or menus would be a great addition.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Deployment Story</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Hosting: Vercel (Obviously)</h3>
                        <p>It's a Next.js app, and Vercel just works:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Push to main branch → automatic deployment</li>
                            <li>Preview deployments for every PR</li>
                            <li>Environment variables managed through dashboard</li>
                            <li>Edge functions available if needed</li>
                            <li>Analytics built-in</li>
                            <li>Zero configuration needed</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Automation: GitHub Actions</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Cron jobs run on schedule via GitHub Actions workflows</li>
                            <li>Manual triggers available for testing</li>
                            <li>Execution logs visible in GitHub</li>
                            <li>Secrets managed securely</li>
                            <li>Free for public repositories</li>
                            <li>Works with any hosting platform</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Database: Supabase</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Connection pooling handled automatically</li>
                            <li>Migrations run through Prisma CLI</li>
                            <li>Automatic daily backups</li>
                            <li>Point-in-time recovery available</li>
                            <li>Row-level security for multi-tenant data</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">CI/CD Pipeline</h3>
                        <ol className="list-decimal list-inside space-y-2 text-gray-300">
                            <li>Push code to GitHub</li>
                            <li>Vercel detects the push</li>
                            <li>Runs build process (TypeScript compile, Next.js build)</li>
                            <li>Runs database migrations if schema changed</li>
                            <li>Deploys to edge network</li>
                            <li>GitHub Actions trigger cron jobs on schedule</li>
                        </ol>

                        <p>Takes about 2 minutes from push to live. Cron jobs run automatically via GitHub Actions. Clean separation of concerns.</p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">What I Actually Learned</h2>

                        <p><strong>1. Date Handling Is Genuinely Hard</strong></p>
                        <p>
                            Seriously, timezones are a trap. JavaScript's Date object will betray you. Build utilities early, document them thoroughly, and stick to them religiously. Future me will send thanks.
                        </p>
                        <p><strong>2. PWAs Are Underrated</strong></p>
                        <p>
                            For many use cases, a well-built PWA is better than native apps. Cross-platform, instant updates, no app store hassles. Parents and staff don't care if it's "native" as long as it works well.
                        </p>

                        <p><strong>3. Type Safety Is Worth Every Keystroke</strong></p>
                        <p>
                            TypeScript + Prisma + Zod = catch bugs before users do. The initial setup time pays dividends immediately. Refactoring with confidence is a superpower.
                        </p>

                        <p><strong>4. Mobile Design Can't Be an Afterthought</strong></p>
                        <p>
                            Design for the smallest screen first. Most users will be on mobile. A mobile-optimized experience that scales up to desktop is better than desktop-first that gets squeezed down.
                        </p>

                        <p><strong>5. Documentation Actually Saves Lives</strong></p>
                        <p>
                            I wrote guides for timezone handling, cron setup, and user workflows. When I came back to the code after two weeks, I was thankful. Good docs aren't optional.
                        </p>

                        <p><strong>6. Real Problems Need Real Solutions</strong></p>
                        <p>
                            Building something people actually use is different from building a portfolio piece. Edge cases matter. Error handling matters. Performance matters. Reliability matters.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Numbers (Because People Ask)</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Active Users:</strong> 30+ families using it daily</li>
                            <li><strong>Children Managed:</strong> 40+ kids tracked</li>
                            <li><strong>Uptime:</strong> 99.8% (that 0.2% was Vercel maintenance, not my fault)</li>
                            <li><strong>Average Load Time:</strong> Under 1.5 seconds</li>
                            <li><strong>API Response Time:</strong> 200-300ms average</li>
                            <li><strong>Bugs Reported Post-Launch:</strong> Surprisingly few (timezone utilities FTW)</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Wrapping Up</h2>
                        <p>
                            Building Splashnest was a genuine learning experience. Not because I used cutting-edge tech or invented something new, but because I solved real problems for real people.
                        </p>
                        <p>
                            The code is clean. The architecture makes sense. The documentation exists (and is actually helpful). It works reliably in production. Parents love the convenience. Daycare staff appreciate the organization.
                        </p>
                        <p>
                            Would I build it again? Absolutely. Maybe with more tests next time. Definitely with the same attention to timezones.
                        </p>
                        <p>
                            The app is live at <a href="https://dms.splashnest.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">dms.splashnest.com</a>. The codebase is well-structured, properly commented, and actually maintainable. That's what matters.
                        </p>

                        <div className="border-t border-gray-800 mt-12 pt-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Next.js 15</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">React 19</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">TypeScript</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Prisma</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Supabase</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">PostgreSQL</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Tailwind CSS</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">PWA</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">shadcn/ui</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                <strong>Status:</strong> Live in Production at dms.splashnest.com
                            </p>
                            <p className="text-gray-400 text-sm">
                                <strong>Users:</strong> 50+ families
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
