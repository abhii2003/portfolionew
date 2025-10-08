"use client"
import Link from "next/link"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function RescueBotBlog() {
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
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Building a Smart Surveillance Robot: YOLOv5 Meets ESP32</h1>

                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-8">
                        <span>June 2025</span>
                        <span>•</span>
                        <span>20 min read</span>
                    </div>

                    <div className="text-gray-300 leading-relaxed space-y-6">
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Idea</h2>
                        <p>
                            So here's the thing: I wanted to build something that combined hardware and AI in a way that actually solves a real problem. Not just another "hello world" IoT project, but something with practical applications.
                        </p>
                        <p>
                            The result? A remote-controlled robot with a camera that can detect people automatically, send SMS alerts with GPS coordinates, and stream video in real-time. Think disaster relief, security surveillance, or search and rescue operations.
                        </p>
                        <p>
                            It's called RRBot (Rescue & Reconnaissance Bot), and it's honestly one of the coolest hardware projects I've built.
                        </p>
                        <p className="flex items-center space-x-2">
                            <strong>Check it out:</strong>
                            <a href="https://github.com/abhii2003/RRBOT" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">github.com/abhii2003/RRBOT</a>
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">What We're Actually Building</h2>
                        <p>Let me break down what this thing does:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Remote Control:</strong> Drive it around like an RC car from a web interface</li>
                            <li><strong>Live Video Feed:</strong> See what the robot sees in real-time via ESP32-CAM</li>
                            <li><strong>AI Person Detection:</strong> YOLOv5 running on my laptop processes the video feed</li>
                            <li><strong>SMS Alerts:</strong> When someone's detected, sends an instant text message via Vonage API</li>
                            <li><strong>GPS Tracking:</strong> Stores detection coordinates in Supabase</li>
                            <li><strong>Pan/Tilt Camera:</strong> Two servos let you look around remotely</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Stack (Hardware + Software)</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Hardware Side</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>ESP32-CAM:</strong> The brain and eyes of the robot</li>
                            <li><strong>Motor Driver (L298N):</strong> Controls the wheels</li>
                            <li><strong>DC Motors:</strong> For movement</li>
                            <li><strong>SG90 Servos (x2):</strong> Pan and tilt for the camera</li>
                            <li><strong>18650 Battery Pack:</strong> Power source</li>
                            <li><strong>GPS Module (optional):</strong> For real location tracking</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Software Stack</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>YOLOv5:</strong> State-of-the-art object detection</li>
                            <li><strong>Python:</strong> For the AI processing</li>
                            <li><strong>Vonage API:</strong> SMS notifications</li>
                            <li><strong>Supabase:</strong> Real-time database for tracking detections</li>
                            <li><strong>ESP32 Arduino:</strong> Firmware for the robot</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Setting Up YOLOv5 (The Smart Part)</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Why YOLOv5?</h3>
                        <p>
                            I needed object detection that was fast, accurate, and could run on a laptop (not everyone has access to GPU clusters). YOLOv5 checked all the boxes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Real-time detection (30+ FPS even on CPU)</li>
                            <li>Pre-trained on 80 object classes including "person"</li>
                            <li>Multiple model sizes (trade speed for accuracy)</li>
                            <li>Easy to customize and integrate</li>
                            <li>Excellent documentation from Ultralytics</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Getting Started</h3>
                        <p>First, clone the YOLOv5 repo and install dependencies:</p>

                        <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`git clone https://github.com/ultralytics/yolov5.git
cd yolov5
pip install -r requirements.txt`}
                        </SyntaxHighlighter>

                        <p>Then test it out with your webcam to make sure everything works:</p>

                        <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`python detect.py --source 0 --weights yolov5s.pt --view-img`}
                        </SyntaxHighlighter>

                        <p>
                            If you see detection boxes around objects on your webcam feed, you're good to go. The first run downloads the pre-trained weights automatically (about 14MB for yolov5s).
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Customizing Detection for the Robot</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">The Problem with Vanilla YOLOv5</h3>
                        <p>
                            The default <code className="text-blue-400">detect.py</code> is great for basic object detection. But I needed more:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Send SMS alerts when people are detected</li>
                            <li>Don't spam me with 30 texts per second</li>
                            <li>Store detection events in a database</li>
                            <li>Include GPS coordinates with each detection</li>
                        </ul>
                        <p>So I had to roll up my sleeves and customize the detection script.</p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Key Customizations</h3>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">1. SMS Integration with Vonage</h4>
                        <p>
                            First, I set up Vonage (formerly Nexmo) for SMS. It's got a generous free tier and the API is straightforward:
                        </p>

                        <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`import vonage

client = vonage.Client(key="your-api-key", secret="your-api-secret")
sms = vonage.Sms(client)

def send_alert(lat, lon):
    responseData = sms.send_message({
        "from": "RRBot",
        "to": "+1234567890",  # Your phone number
        "text": f"Person detected! Location: {lat}, {lon}"
    })
    
    if responseData["messages"][0]["status"] == "0":
        print("SMS sent successfully")
    else:
        print(f"SMS failed: {responseData['messages'][0]['error-text']}")`}
                        </SyntaxHighlighter>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">2. Supabase Database Integration</h4>
                        <p>
                            I needed to log every detection with a timestamp and coordinates. Supabase made this stupidly easy:
                        </p>

                        <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`from supabase import create_client

API_URL = 'https://your-project.supabase.co'
API_KEY = 'your-api-key'
supabase = create_client(API_URL, API_KEY)

def log_detection(lon, lat):
    data = {
        "longitude": lon,
        "latitude": lat,
        "timestamp": datetime.now().isoformat()
    }
    
    result = supabase.table('detections').insert(data).execute()
    print(f"Logged detection: {result.data}")`}
                        </SyntaxHighlighter>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">3. Smart Cooldown Timer</h4>
                        <p>
                            Here's the thing: YOLOv5 runs at 30 FPS. Without a cooldown, I'd get 30 SMS alerts per second when someone walks in front of the camera. My phone would explode, and my Vonage credits would vanish.
                        </p>
                        <p>Solution? A simple cooldown timer:</p>

                        <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`import time

last_detection_time = None
COOLDOWN_SECONDS = 40

# Inside the detection loop
for detection in results:
    if detection.class_name == "person":
        current_time = time.time()
        
        # Only alert if cooldown has passed
        if last_detection_time is None or current_time - last_detection_time >= COOLDOWN_SECONDS:
            lat, lon = get_gps_coordinates()
            log_detection(lon, lat)
            send_alert(lat, lon)
            last_detection_time = current_time
            print(f"Alert sent! Next alert available in {COOLDOWN_SECONDS}s")`}
                        </SyntaxHighlighter>

                        <p>
                            Now I only get one alert every 40 seconds, no matter how many frames detect a person. Much better.
                        </p>

                        <h4 className="text-xl font-bold text-white mt-6 mb-2">4. GPS Coordinate Generation</h4>
                        <p>
                            For the demo, I generate random GPS coordinates near a specific location. In a real deployment, you'd hook up an actual GPS module:
                        </p>

                        <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`import random

def generate_random_location(base_lat=37.7749, base_lon=-122.4194):
    # Small random offset (about 1km radius)
    lat_offset = random.uniform(-0.01, 0.01)
    lon_offset = random.uniform(-0.01, 0.01)
    
    return base_lat + lat_offset, base_lon + lon_offset`}
                        </SyntaxHighlighter>

                        <p>
                            For production, you'd replace this with actual GPS data from a module like NEO-6M or u-blox.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">The ESP32-CAM Setup</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Why ESP32-CAM?</h3>
                        <p>This tiny board is a beast. For like $10, you get:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Dual-core 240MHz processor</li>
                            <li>2MP camera with decent image quality</li>
                            <li>WiFi built-in</li>
                            <li>GPIO pins for motor control and servos</li>
                            <li>Runs on 5V (battery-friendly)</li>
                        </ul>

                        <p>
                            The only downside? No built-in USB programmer. You need an FTDI adapter or another ESP32 to flash it. Minor inconvenience for the price.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Camera Stream Setup</h3>
                        <p>
                            The ESP32-CAM creates a web server that streams JPEG frames. You access it by hitting an HTTP endpoint:
                        </p>

                        <SyntaxHighlighter language="cpp" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`// In Arduino setup()
camera_config_t config;
config.ledc_channel = LEDC_CHANNEL_0;
config.ledc_timer = LEDC_TIMER_0;
config.pin_d0 = Y2_GPIO_NUM;
// ... more pin configurations ...
config.frame_size = FRAMESIZE_VGA;  // 640x480
config.jpeg_quality = 10;  // 0-63, lower means better
config.fb_count = 2;

esp_err_t err = esp_camera_init(&config);
if (err != ESP_OK) {
  Serial.printf("Camera init failed: 0x%x", err);
  return;
}

// Start web server
startCameraServer();`}
                        </SyntaxHighlighter>

                        <p>
                            Then from Python, you can access the stream as a video source:
                        </p>

                        <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`# Use the ESP32-CAM stream as input
python detect.py --source http://192.168.4.1/Camera --weights yolov5s.pt`}
                        </SyntaxHighlighter>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Motor Control</h3>
                        <p>
                            Controlling the motors is straightforward with an L298N motor driver. The ESP32 sends PWM signals to control speed and direction:
                        </p>

                        <SyntaxHighlighter language="cpp" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`#define MOTOR_LEFT_FWD 12
#define MOTOR_LEFT_BWD 13
#define MOTOR_RIGHT_FWD 14
#define MOTOR_RIGHT_BWD 15

void moveForward() {
  digitalWrite(MOTOR_LEFT_FWD, HIGH);
  digitalWrite(MOTOR_LEFT_BWD, LOW);
  digitalWrite(MOTOR_RIGHT_FWD, HIGH);
  digitalWrite(MOTOR_RIGHT_BWD, LOW);
}

void moveBackward() {
  digitalWrite(MOTOR_LEFT_FWD, LOW);
  digitalWrite(MOTOR_LEFT_BWD, HIGH);
  digitalWrite(MOTOR_RIGHT_FWD, LOW);
  digitalWrite(MOTOR_RIGHT_BWD, HIGH);
}

void turnLeft() {
  digitalWrite(MOTOR_LEFT_FWD, LOW);
  digitalWrite(MOTOR_LEFT_BWD, HIGH);
  digitalWrite(MOTOR_RIGHT_FWD, HIGH);
  digitalWrite(MOTOR_RIGHT_BWD, LOW);
}

void stop() {
  digitalWrite(MOTOR_LEFT_FWD, LOW);
  digitalWrite(MOTOR_LEFT_BWD, LOW);
  digitalWrite(MOTOR_RIGHT_FWD, LOW);
  digitalWrite(MOTOR_RIGHT_BWD, LOW);
}`}
                        </SyntaxHighlighter>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Pan/Tilt Servos</h3>
                        <p>
                            Two SG90 servos give the camera 2 degrees of freedom. You control them with standard servo library:
                        </p>

                        <SyntaxHighlighter language="cpp" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`#include <ESP32Servo.h>

Servo panServo;
Servo tiltServo;

void setup() {
  panServo.attach(2);   // Pan servo on GPIO 2
  tiltServo.attach(4);  // Tilt servo on GPIO 4
  
  // Center position
  panServo.write(90);
  tiltServo.write(90);
}

void lookLeft() {
  panServo.write(45);
}

void lookRight() {
  panServo.write(135);
}

void lookUp() {
  tiltServo.write(45);
}

void lookDown() {
  tiltServo.write(135);
}`}
                        </SyntaxHighlighter>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Putting It All Together</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">The Complete Workflow</h3>
                        <p>Here's how everything works end-to-end:</p>

                        <ol className="list-decimal list-inside space-y-2 text-gray-300">
                            <li><strong>Robot Powers On:</strong> ESP32-CAM boots up, connects to WiFi, starts camera server</li>
                            <li><strong>Control Interface:</strong> User opens web dashboard, sees live video feed</li>
                            <li><strong>Remote Control:</strong> User drives robot around using arrow keys or on-screen buttons</li>
                            <li><strong>Video Processing:</strong> Python script grabs frames from ESP32-CAM stream</li>
                            <li><strong>Object Detection:</strong> YOLOv5 analyzes each frame for people</li>
                            <li><strong>Person Detected:</strong> If a person is found and cooldown allows:</li>
                            <ul className="list-disc list-inside ml-6 space-y-1">
                                <li>Generate/retrieve GPS coordinates</li>
                                <li>Log detection to Supabase with timestamp</li>
                                <li>Send SMS alert with location</li>
                                <li>Start cooldown timer</li>
                            </ul>
                            <li><strong>Continue Monitoring:</strong> Keep processing frames, respect cooldown</li>
                        </ol>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Running the Detection</h3>
                        <p>To start the full system:</p>

                        <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                            {`# 1. Power on the robot and connect to WiFi

# 2. Find the robot's IP address (check serial monitor or router)

# 3. Run the custom detection script
python detect.py --source http://192.168.4.1/Camera --weights yolov5s.pt --conf-thres 0.4

# Options explained:
# --source: ESP32-CAM stream URL
# --weights: YOLOv5 model (s=small, m=medium, l=large, x=extra large)
# --conf-thres: Confidence threshold (0.4 = 40% confidence minimum)`}
                        </SyntaxHighlighter>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Performance Tuning</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Choosing the Right Model</h3>
                        <p>YOLOv5 comes in 5 sizes. Here's what I found in testing:</p>

                        <div className="bg-gray-900 p-4 rounded-lg my-4">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="text-left py-2">Model</th>
                                        <th className="text-left py-2">Size</th>
                                        <th className="text-left py-2">FPS (CPU)</th>
                                        <th className="text-left py-2">Accuracy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-800">
                                        <td className="py-2">yolov5n</td>
                                        <td>1.9 MB</td>
                                        <td>~45 FPS</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className="border-b border-gray-800">
                                        <td className="py-2">yolov5s</td>
                                        <td>14 MB</td>
                                        <td>~30 FPS</td>
                                        <td>Better</td>
                                    </tr>
                                    <tr className="border-b border-gray-800">
                                        <td className="py-2">yolov5m</td>
                                        <td>40 MB</td>
                                        <td>~20 FPS</td>
                                        <td>Great</td>
                                    </tr>
                                    <tr className="border-b border-gray-800">
                                        <td className="py-2">yolov5l</td>
                                        <td>89 MB</td>
                                        <td>~12 FPS</td>
                                        <td>Excellent</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">yolov5x</td>
                                        <td>166 MB</td>
                                        <td>~7 FPS</td>
                                        <td>Best</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            For real-time robot surveillance, I use <code className="text-blue-400">yolov5s</code>. It's the sweet spot between speed and accuracy. If you have a GPU, you can easily use yolov5l or yolov5x for better detection.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">Confidence Threshold Tuning</h3>
                        <p>
                            The confidence threshold determines how sure YOLOv5 needs to be before reporting a detection. I found these values work well:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>0.3:</strong> More detections, more false positives (good for not missing anyone)</li>
                            <li><strong>0.4:</strong> Balanced (what I use)</li>
                            <li><strong>0.5:</strong> High confidence only, fewer false alarms</li>
                            <li><strong>0.6+:</strong> Very conservative, might miss some people</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Lessons Learned</h2>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">1. Hardware is Harder Than You Think</h3>
                        <p>
                            Software bugs? Recompile and redeploy. Hardware bugs? Desolder, rewire, test, repeat. I burned through 3 motor drivers before I realized I was exceeding their current rating. Check your specs, use proper power supplies, and don't skimp on components.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">2. Test Components Individually</h3>
                        <p>
                            Don't assemble everything and then wonder why nothing works. Test the camera first. Then add motors. Then servos. Then the detection. Incremental testing saved me hours of debugging.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">3. Real-Time Constraints Are Real</h3>
                        <p>
                            When you're processing video at 15-30 FPS, every millisecond counts. I had to learn to write efficient Python code, optimize YOLOv5 inference, and minimize network latency. Profiling tools became my best friends.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">4. Battery Life is Always Less Than Expected</h3>
                        <p>
                            Datasheets lie. Or rather, they give best-case scenarios. Real-world battery life is always shorter. Plan accordingly and build in buffer capacity.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-3">5. Documentation Matters</h3>
                        <p>
                            Three months after building this, I came back to add a feature and had no idea how anything worked. Document your wiring diagrams, pin assignments, and code logic. Future you will be grateful.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">What's Next?</h2>
                        <p>Some improvements I'm planning:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li><strong>Autonomous Navigation:</strong> Add obstacle avoidance with ultrasonic sensors</li>
                            <li><strong>Face Recognition:</strong> Not just detect people, but identify specific individuals</li>
                            <li><strong>Edge AI:</strong> Run YOLOv5 directly on ESP32-CAM using TensorFlow Lite</li>
                            <li><strong>Multi-Robot Coordination:</strong> Multiple robots covering a larger area</li>
                            <li><strong>Better GPS:</strong> Replace random coordinates with actual GPS module data</li>
                            <li><strong>Voice Commands:</strong> Control the robot with Alexa or Google Assistant</li>
                            <li><strong>Night Vision:</strong> Add IR LEDs for low-light operation</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">Wrapping Up</h2>
                        <p>
                            Building RRBot was one of those projects that combined everything I love: hardware, software, AI, and solving real problems. It's not perfect - the WiFi range could be better, battery life could be longer, and detection accuracy could improve - but it works.
                        </p>
                        <p>
                            And that's the point. You don't need a perfect project. You need a working project that you can iterate on.
                        </p>
                        <p>
                            The beauty of this setup is its modularity. Don't like Vonage? Swap in Twilio. Want better object detection? Train a custom YOLOv5 model. Need faster processing? Add a GPU. The architecture supports all these upgrades without major rewrites.
                        </p>
                        <p>
                            If you're building something similar, hit me up on GitHub. I'd love to see what you come up with!
                        </p>

                        <div className="border-t border-gray-800 mt-12 pt-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">YOLOv5</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">ESP32-CAM</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Python</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Supabase</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Vonage API</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Arduino</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Computer Vision</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">IoT</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                <strong>GitHub:</strong> <a href="https://github.com/abhii2003/RRBOT" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">github.com/abhii2003/RRBOT</a>
                            </p>
                            <p className="text-gray-400 text-sm">
                                <strong>Status:</strong> Prototype Complete, Continuous Improvements
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
