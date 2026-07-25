# Episode 1 — Fundamentals of the Internet and Web

# CHAPTER 1 — How the Internet Works

## 1.1 History of the Internet

**Definition first:** The Internet is a global network of interconnected computer networks that communicate using a common set of rules (protocols).

### Timeline

| Year | Event |
|---|---|
| 1969 | **ARPANET** launched by the US Department of Defense (via ARPA — Advanced Research Projects Agency). Connected 4 university computers: UCLA, Stanford, UC Santa Barbara, University of Utah. |
| 1974 | **TCP/IP** proposed by Vint Cerf and Bob Kahn — a universal language for computers to talk to each other. |
| 1983 | ARPANET officially adopts TCP/IP — this date is often called the "birth of the Internet" as we know it. |
| 1989 | **Tim Berners-Lee** (at CERN) proposes the **World Wide Web (WWW)** — a system of linked documents accessed via the Internet. |
| 1991 | The first website goes live. |
| 1993 | Mosaic, the first popular graphical web browser, is released. |
| 1995–2000 | Dot-com boom — Internet goes mainstream commercially. |
| 2004+ | Web 2.0 era begins — social media, user-generated content. |
| 2020s | Web3, AI-integrated web, edge computing. |

**Why ARPANET was built:** The US military wanted a decentralized communication network that could survive partial destruction (e.g., in case of nuclear attack) — no single point of failure. This is *why* the Internet's core design has no central control point.

**Important distinction:** The **Internet** is the physical/logical network infrastructure (cables, routers, protocols). The **Web (WWW)** is just one application that runs on top of the Internet — a system of documents (websites) linked via hyperlinks. Email, WhatsApp, online gaming, and video streaming also run on the Internet but are *not* the Web.

> 💡 **Analogy:** The Internet is like the road network of a country. The Web is like one type of vehicle (say, buses) that uses those roads. Email is another vehicle (say, courier trucks). Different vehicles, same roads.

### Key Takeaways
- Internet = global network infrastructure. Web = one application (linked documents) running on it.
- ARPANET (1969) → TCP/IP (1974/1983) → WWW (1989) is the core evolutionary chain.
- The Internet was designed to be decentralized and fault-tolerant.

---

## 1.2 Evolution of the Web

| Feature | Web 1.0 (1991–2004) | Web 2.0 (2004–present) | Web 3.0 (emerging) |
|---|---|---|---|
| Nature | Read-only | Read-write | Read-write-own |
| Content | Static HTML pages | User-generated (social media, blogs) | Decentralized, AI-driven, user-owned data |
| Interaction | None/minimal | High (comments, likes, sharing) | Smart contracts, decentralized identity |
| Examples | Early Yahoo, GeoCities | Facebook, YouTube, Wikipedia | Blockchain apps, decentralized storage |
| Data ownership | Website owner | Platform (Google, Meta) | User (in theory) |
| Technology | Static HTML | AJAX, JavaScript frameworks, APIs | Blockchain, IPFS, smart contracts |

**Advantages/Disadvantages:**
- **Web 1.0:** ✅ Simple, fast to build ❌ No interactivity, no personalization
- **Web 2.0:** ✅ Rich interaction, real-time updates ❌ Centralized control, privacy concerns, data monetization by platforms
- **Web 3.0:** ✅ User data ownership, censorship resistance ❌ Still immature, scalability issues, complexity for average users

### Key Takeaways
- Web 1.0 = read-only brochure web.
- Web 2.0 = interactive, platform-owned web (what most of today's apps, including SaaS products, are built on).
- Web 3.0 = decentralization-focused, still evolving.

---

## 1.3 How Computers Communicate

To understand networking, learn these building blocks first:

- **Network:** A group of two or more computers connected to share resources.
- **Node:** Any device connected to a network (computer, phone, printer, router).
- **Packet:** A small chunk of data. Large data (a webpage, a video) is broken into many packets before being sent over the Internet.
- **Router:** A device that directs packets between networks, choosing the best path (like a traffic officer at an intersection).
- **Switch:** A device that connects devices *within* the same local network and forwards data to the correct device using MAC addresses.
- **Hop:** Each time a packet passes through one router on its way to the destination, that's one "hop."
- **Port:** A numbered "door" on a computer through which specific types of traffic enter/exit (e.g., port 80 for HTTP, port 443 for HTTPS).

### Packet Journey Diagram

```
[Your Laptop]
     |
     |  Data broken into Packets: P1, P2, P3
     v
[Your Router] --- (Hop 1)
     v
[ISP Router] --- (Hop 2)
     v
[Internet Backbone Router] --- (Hop 3...N)
     v
[Destination Server's Router]
     v
[Destination Server]
     |
     |  Packets reassembled in correct order
     v
[Response sent back through a possibly DIFFERENT path]
```

**Important note:** Packets belonging to the same request can travel via *different* physical paths and arrive out of order — the receiving computer reorders them using sequence numbers (this is TCP's job, covered in Chapter 3).

### Key Takeaways
- Data is never sent as one giant blob — it's chopped into packets.
- Routers move packets between networks; switches move data within a network.
- Ports let one computer run many different services simultaneously.

---

## 1.4 How Data Travels Across the Internet

**Packet Switching** is the technique where data is split into packets, and each packet is routed independently, potentially via different paths, then reassembled at the destination.

Steps:
1. **Breaking into packets:** Data is split into fixed-size chunks. Each packet gets a header containing: source IP, destination IP, sequence number, and error-checking data.
2. **Routing:** Each router examines the destination IP and forwards the packet toward the best next hop, based on its routing table.
3. **Reassembling:** The destination computer collects all packets and reorders them using sequence numbers.
4. **Error checking:** Each packet includes a checksum. If a packet is corrupted or missing, the receiver requests retransmission (in TCP).

> 💡 **Analogy:** Imagine mailing a 500-page book by tearing out each page, numbering it, and mailing pages separately through different postal routes. The recipient collects all pages and reassembles the book in the right order using the page numbers.

### Key Takeaways
- Packet switching is more efficient and resilient than sending data as one continuous stream (circuit switching).
- Every packet is independently routed and may take a different path.
- Error-checking ensures corrupted data gets retransmitted.

---

## 1.5 IP Address

An **IP Address** is a unique numerical identifier assigned to every device on a network, used to locate it.

| Type | Description | Example |
|---|---|---|
| IPv4 | 32-bit address, ~4.3 billion possible addresses (running out) | `192.168.1.1` |
| IPv6 | 128-bit address, virtually unlimited addresses | `2001:0db8:85a3::8a2e:0370:7334` |
| Public IP | Globally unique, assigned by ISP, visible on the internet | `103.21.244.10` |
| Private IP | Used within a local network (home/office), not routable on the internet | `192.168.0.5` |
| Static IP | Manually assigned, doesn't change | Used for servers |
| Dynamic IP | Automatically assigned by DHCP, can change | Used for most home devices |

**Why IPv6 exists:** IPv4's ~4.3 billion addresses are nearly exhausted due to explosive device growth (phones, IoT, etc.). IPv6 solves this with a vastly larger address space.

### Key Takeaways
- IPv4 is running out; IPv6 is the long-term fix.
- Public IP identifies you to the world; Private IP identifies you within your home/office network.

---

## 1.6 MAC Address

A **MAC (Media Access Control) Address** is a unique hardware identifier burned into a device's network interface card (NIC) by the manufacturer.

- Format: `00:1A:2B:3C:4D:5E` (6 pairs of hex digits)
- **Unlike IP addresses, MAC addresses don't change** and aren't used for internet-wide routing — they're used only within a local network.

| MAC Address | IP Address |
|---|---|
| Identifies physical hardware | Identifies a device's location on a network |
| Fixed (usually) | Can change (dynamic) |
| Used by switches (Layer 2) | Used by routers (Layer 3) |
| Not routable across the internet | Routable across the internet |

**How switches use MAC addresses:** A switch builds a MAC address table mapping each MAC address to the physical port it's connected to. When a packet arrives, the switch checks the destination MAC and forwards it only to the correct port — not to every device (this is more efficient than a hub, which broadcasts to all).

### Key Takeaways
- MAC = hardware identity (local network only). IP = network identity (works globally).
- Switches use MAC addresses; routers use IP addresses.

---

## 1.7 Domain Name System (DNS)

**Why DNS exists:** Humans remember names (`google.com`) far more easily than numbers (`142.250.183.14`). DNS translates domain names into IP addresses.

### DNS Hierarchy

```
                    [ Root Server ]
                          |
          -------------------------------
          |               |              |
      [.com TLD]      [.org TLD]     [.in TLD]
          |
   [Authoritative Server for google.com]
          |
   Returns IP: 142.250.183.14
```

- **Root Server:** The top of the DNS hierarchy; knows where to find TLD servers.
- **TLD (Top-Level Domain) Server:** Manages domains ending in `.com`, `.org`, `.in`, etc.
- **Authoritative Server:** Holds the actual DNS records for a specific domain (e.g., `google.com`'s own DNS server).
- **Recursive Resolver:** The "middleman" server (often run by your ISP or services like Google's `8.8.8.8`) that does the lookup work on your behalf.

### Complete DNS Lookup Process

1. You type `www.example.com` into your browser.
2. Browser checks its local cache — if not found, asks the OS.
3. OS asks the **Recursive Resolver** (e.g., your ISP's DNS server).
4. Resolver asks the **Root Server**: "Who handles `.com`?"
5. Root Server replies with the **TLD Server**'s address.
6. Resolver asks the TLD Server: "Who handles `example.com`?"
7. TLD Server replies with the **Authoritative Server**'s address.
8. Resolver asks the Authoritative Server: "What's the IP for `www.example.com`?"
9. Authoritative Server replies with the IP address.
10. Resolver caches this and returns it to your browser.
11. Browser now connects directly to that IP address.

> This whole process typically takes **milliseconds** and is heavily cached at every layer to avoid repeating it constantly.

### Key Takeaways
- DNS = the internet's phonebook, converting names to IPs.
- Lookup order: Browser cache → OS → Recursive Resolver → Root → TLD → Authoritative.
- Caching at every layer makes repeat lookups nearly instant.

---

## 1.8 Internet Service Provider (ISP)

An **ISP** is a company that provides you access to the Internet (e.g., Jio, Airtel, Comcast).

| Type | Description |
|---|---|
| Fiber | Uses fiber-optic cables; fastest, most reliable |
| Cable | Uses coaxial cable (same as cable TV); fast but shared bandwidth in a neighborhood |
| Mobile Internet | Uses cellular towers (4G/5G); portable, variable speed |
| Satellite Internet | Uses satellites; works in remote areas, higher latency |

**How ISP and DNS work together:** When you request a website, your device asks your ISP's DNS resolver (unless you've configured a custom one like Google DNS `8.8.8.8` or Cloudflare `1.1.1.1`) to resolve the domain name into an IP address, and then your ISP routes your traffic to reach that IP.

### Key Takeaways
- ISPs provide the physical/wireless connection to the internet.
- Most people use their ISP's default DNS resolver unless manually changed.

---

## 1.9 Routing

**Routers** maintain **routing tables** — lists of network paths — to decide where to forward each packet next.

- **Packet forwarding:** At each hop, a router checks the destination IP against its routing table and sends the packet to the next best router.
- **Internet backbone:** High-capacity fiber-optic trunk lines (often undersea cables) operated by large telecom companies (Tier 1 providers) that carry the bulk of global internet traffic between countries and continents.

### Full Journey: Browser to Server

```
1. You type https://example.com and press Enter
2. Browser checks cache for DNS record (if none, does full DNS lookup as in 1.7)
3. Browser establishes TCP connection with server's IP (see Chapter 3)
4. TLS handshake occurs if HTTPS (see Chapter 4)
5. Browser sends HTTP GET request
6. Request travels: Your PC → Router → ISP → Backbone → Destination ISP → Destination Server
7. Server processes request, queries database if needed, generates response
8. Response travels back (possibly via different path)
9. Browser receives HTML/CSS/JS, renders the page
```

### Key Takeaways
- Routers use routing tables to make hop-by-hop forwarding decisions.
- The internet backbone (often undersea fiber cables) connects countries and continents.
- A single webpage load involves DNS resolution, TCP connection, TLS handshake, HTTP request/response — all in a fraction of a second.

---

# CHAPTER 2 — Client-Server Architecture

## 2.1 Core Concepts

- **Client:** A program/device that requests services or resources (e.g., your browser, mobile app).
- **Server:** A program/device that provides services or resources in response to requests (e.g., a web server hosting a website).
- **Client-Server Model:** An architecture where clients send requests and servers send back responses. This is the foundation of almost all web applications.

| Component | Role |
|---|---|
| Browser | The client application that renders web pages (Chrome, Firefox, Safari) |
| Web Server | Handles HTTP requests, serves static files or forwards to application logic (e.g., Nginx, Apache) |
| Application Server | Runs the business logic of the application (e.g., Node.js server, Next.js server) |
| Database Server | Stores and retrieves persistent data (e.g., PostgreSQL server) |

### Request → Processing → Response

```
[Client/Browser] --Request--> [Web Server] --> [Application Server] --> [Database Server]
                                                          |
[Client/Browser] <--Response-- [Web Server] <-- [Application Server] <---
```

### Key Takeaways
- Client-server model = one side asks, the other side answers.
- Modern web apps often chain Web Server → App Server → Database Server.

---

## 2.2 Browser Architecture

A browser has several core engines working together:

- **Rendering Engine:** Parses HTML/CSS and paints pixels on screen (e.g., Blink in Chrome, WebKit in Safari, Gecko in Firefox).
- **JavaScript Engine:** Executes JavaScript code (e.g., V8 in Chrome/Node.js, SpiderMonkey in Firefox).
- **Networking Layer:** Handles HTTP requests, DNS resolution, caching, and connection management.

### What Happens When You Visit `https://example.com` — Step by Step

1. **URL Parsing:** Browser parses the URL into protocol (`https`), domain (`example.com`), path (`/`).
2. **DNS Lookup:** Domain resolved to an IP address (see 1.7).
3. **TCP Connection:** Browser establishes a TCP connection to the server (three-way handshake, see Chapter 3).
4. **TLS Handshake:** Since it's HTTPS, a secure encrypted channel is negotiated (see Chapter 4).
5. **HTTP Request Sent:** Browser sends a `GET /` request with headers (cookies, user-agent, etc.).
6. **Server Processing:** Server (web server → app server → possibly database) processes the request and builds a response.
7. **HTTP Response Received:** Server sends back HTML (and links to CSS/JS/images).
8. **Parsing & Rendering:** Rendering engine parses HTML into a DOM tree, CSS into a CSSOM tree, combines them into a Render Tree, then paints pixels on screen.
9. **JavaScript Execution:** JS engine executes scripts, which may modify the DOM, fetch more data (via `fetch`/AJAX), or add interactivity.
10. **Page Interactive:** User can now interact with the fully rendered, interactive page.

### Key Takeaways
- A browser is really three engines working together: rendering, JavaScript, and networking.
- Visiting a URL triggers: DNS → TCP → TLS → HTTP request → HTML parsing → rendering → JS execution.

---

## 2.3 Frontend vs Backend vs Full Stack

| Aspect | Frontend | Backend | Full Stack |
|---|---|---|---|
| Runs where | User's browser/device | Server | Both |
| Responsibility | UI, UX, interactivity | Business logic, data, security | Both frontend and backend |
| Technologies | HTML, CSS, JS, React, Next.js | Node.js, databases, APIs | Combination |
| Example task | Rendering a form | Validating and storing form data | Building the entire feature |

### Key Takeaways
- Frontend = what the user sees and interacts with.
- Backend = what processes data, enforces rules, and talks to the database.
- Full Stack developers work across both.

---

## 2.4 Static vs Dynamic vs Hybrid Websites

| Type | Description | Example |
|---|---|---|
| Static | Same content served to every user; no server-side processing per request | A simple portfolio site |
| Dynamic | Content generated per request, often personalized (e.g., logged-in dashboard) | Gmail, a SaaS dashboard |
| Hybrid | Combination — some pages statically generated, others dynamically rendered (common in modern frameworks like Next.js with SSG + SSR) | An e-commerce site with static product pages and a dynamic cart |

### Key Takeaways
- Static = fast, cheap, same for everyone.
- Dynamic = personalized, requires server processing per request.
- Modern frameworks blend both for optimal performance (this is exactly what Next.js's App Router enables via Server Components, SSG, ISR, and SSR).

---

## 2.5 Web Hosting Types

| Hosting Type | Description | Best For |
|---|---|---|
| Shared Hosting | Multiple websites share one server's resources | Small blogs, low-traffic sites |
| VPS (Virtual Private Server) | A virtualized slice of a server, dedicated resources | Medium-traffic apps needing more control |
| Cloud Hosting | Resources scale dynamically across a distributed cloud infrastructure | Modern SaaS apps (e.g., Vercel, AWS) |
| Dedicated Hosting | An entire physical server dedicated to one client | High-traffic, resource-intensive apps |
| CDN (Content Delivery Network) | Distributes cached copies of content across global edge servers close to users | Reducing latency for static assets globally |

### Architecture Diagram: CDN

```
[User in India] ---> [Nearest Edge Server - Mumbai] ---> (cache hit, instant response)
[User in USA]   ---> [Nearest Edge Server - Virginia] ---> (cache hit, instant response)
                              |
                    (cache miss occasionally)
                              v
                     [Origin Server - wherever hosted]
```

### Key Takeaways
- Shared < VPS < Dedicated in terms of control and cost.
- Cloud hosting scales elastically — ideal for modern SaaS.
- CDNs reduce latency by serving cached content from servers geographically near the user.

---

# CHAPTER 3 — Internet Protocols

## 3.1 What Is a Protocol?

A **protocol** is a set of agreed-upon rules that define how data is formatted, transmitted, and received between devices. Protocols exist so that devices made by different manufacturers, running different software, can still communicate reliably.

> 💡 **Analogy:** A protocol is like a shared language and etiquette — e.g., when making a phone call, both people agree to say "Hello" first, take turns speaking, and say "Goodbye" to end. Without this shared etiquette, communication breaks down.

## 3.2 OSI Model vs TCP/IP Model

| OSI Model (7 layers) | TCP/IP Model (4 layers) | Example Protocols |
|---|---|---|
| 7. Application | Application | HTTP, FTP, DNS, SMTP |
| 6. Presentation | Application | SSL/TLS, encryption |
| 5. Session | Application | Sessions, sockets |
| 4. Transport | Transport | TCP, UDP |
| 3. Network | Internet | IP, ICMP |
| 2. Data Link | Network Access | Ethernet, MAC |
| 1. Physical | Network Access | Cables, radio waves |

**Key difference:** OSI is a theoretical, 7-layer reference model used for teaching and troubleshooting. TCP/IP is the practical, 4-layer model actually implemented on the real Internet.

### Key Takeaways
- OSI = conceptual teaching model (7 layers). TCP/IP = the model actually used (4 layers).
- HTTP lives at the Application layer; TCP/UDP live at the Transport layer.

---

## 3.3 TCP (Transmission Control Protocol)

TCP is **connection-oriented** and **reliable** — it guarantees that data arrives complete, in order, and error-free.

Key features:
- **Reliability:** Guarantees delivery; retransmits lost packets.
- **Flow Control:** Prevents a fast sender from overwhelming a slow receiver.
- **Congestion Control:** Slows down transmission if the network is congested.
- **Sequence Numbers:** Each byte of data is numbered so packets can be reordered correctly at the destination.
- **ACK (Acknowledgment):** Receiver sends an ACK back to confirm each packet arrived.
- **Retransmission:** If no ACK is received within a timeout, the sender resends the packet.

### TCP Three-Way Handshake (Connection Setup)

```
Client                     Server
  |------- SYN ----------->|     "I want to connect, my seq = X"
  |<---- SYN-ACK ----------|     "OK, I acknowledge X+1, my seq = Y"
  |------- ACK ----------->|     "Acknowledged, Y+1. Connection established."
  |                        |
  [ Data transfer begins ]
```

### TCP Connection Termination (Four-Way Handshake)

```
Client                     Server
  |------- FIN ----------->|     "I'm done sending"
  |<------ ACK ------------|     "Acknowledged"
  |<------ FIN ------------|     "I'm done too"
  |------- ACK ----------->|     "Acknowledged. Connection closed."
```

### Key Takeaways
- TCP guarantees ordered, reliable, error-checked delivery — at the cost of some speed/overhead.
- Connection setup = 3-way handshake (SYN, SYN-ACK, ACK).
- Connection teardown = 4-way handshake (FIN, ACK, FIN, ACK).

---

## 3.4 UDP (User Datagram Protocol)

UDP is **connectionless** and **unreliable** (no guarantee of delivery, order, or error correction) — but it's fast and has low overhead.

Key features:
- No handshake — data is just sent ("fire and forget").
- No guarantee of delivery or order.
- Much lower latency than TCP because there's no acknowledgment/retransmission overhead.

### Why Certain Applications Use UDP

| Application | Why UDP |
|---|---|
| Online Gaming | Speed matters more than a lost packet — a missed position update is quickly replaced by the next one anyway. |
| Video Streaming / Video Calls | A dropped frame is less disruptive than the delay caused by waiting for retransmission. |
| DNS | Queries are small and simple; if a response is lost, the resolver just retries. Speed matters. |

### TCP vs UDP Comparison

| Feature | TCP | UDP |
|---|---|---|
| Connection | Connection-oriented (handshake required) | Connectionless |
| Reliability | Reliable (guaranteed delivery) | Unreliable (best-effort) |
| Ordering | Guaranteed in-order delivery | No ordering guarantee |
| Speed | Slower (overhead from acknowledgments) | Faster (minimal overhead) |
| Use Cases | Web browsing, email, file transfer | Gaming, video/voice calls, DNS, live streaming |
| Error Checking | Yes, with retransmission | Basic checksum only, no retransmission |

**When to use which:** Use TCP when data integrity and completeness matter more than speed (loading a webpage, sending an email, transferring a file). Use UDP when speed and low latency matter more than occasional data loss (live video, gaming, VoIP).

### Key Takeaways
- TCP = reliable but slower. UDP = fast but unreliable.
- Choose based on whether your application can tolerate lost/out-of-order data.

---

# CHAPTER 4 — HTTP and HTTPS

## 4.1 History and Versions of HTTP

| Version | Year | Key Feature |
|---|---|---|
| HTTP/0.9 | 1991 | Extremely simple; only supported GET, no headers |
| HTTP/1.0 | 1996 | Added headers, status codes, multiple content types |
| HTTP/1.1 | 1997 | Persistent connections (reuse TCP connection), chunked transfer encoding |
| HTTP/2 | 2015 | Multiplexing (multiple requests over one connection), header compression, server push |
| HTTP/3 | 2020+ | Built on QUIC (over UDP instead of TCP) — faster connection setup, better handling of packet loss |

### Key Takeaways
- HTTP/1.1 introduced connection reuse — a major performance win.
- HTTP/2 added multiplexing to eliminate "head-of-line blocking."
- HTTP/3 moved to UDP-based QUIC for even faster, more resilient connections.

---

## 4.2 HTTP Request Structure

An HTTP request has four parts:

```
GET /api/users?id=42 HTTP/1.1        <-- Method, URL, Version
Host: example.com                     <-- Headers
Authorization: Bearer <token>
Content-Type: application/json

{ "optional": "body data" }           <-- Body (for POST/PUT/PATCH)
```

### HTTP Methods

| Method | Purpose | Idempotent? | Has Body? |
|---|---|---|---|
| GET | Retrieve a resource | Yes | No |
| POST | Create a new resource | No | Yes |
| PUT | Replace a resource entirely | Yes | Yes |
| PATCH | Partially update a resource | No (typically) | Yes |
| DELETE | Remove a resource | Yes | Usually no |
| OPTIONS | Ask server what methods/headers are allowed (used in CORS preflight) | Yes | No |
| HEAD | Like GET, but returns only headers, no body | Yes | No |

*Idempotent = calling it multiple times has the same effect as calling it once.*

---

## 4.3 HTTP Response Structure

```
HTTP/1.1 200 OK                       <-- Status Line
Content-Type: application/json        <-- Headers
Content-Length: 128

{ "id": 42, "name": "Priyanshu" }     <-- Body
```

### HTTP Status Codes

| Range | Category | Common Examples |
|---|---|---|
| 1xx | Informational | 100 Continue |
| 2xx | Success | 200 OK, 201 Created, 204 No Content |
| 3xx | Redirection | 301 Moved Permanently, 302 Found, 304 Not Modified |
| 4xx | Client Error | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests |
| 5xx | Server Error | 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable |

**Real-world example:** When a login fails due to wrong password → `401 Unauthorized`. When a logged-in user tries to access an admin page they don't have permission for → `403 Forbidden`. When they hit a rate limit → `429 Too Many Requests`.

### Key Takeaways
- Requests = Method + URL + Headers + optional Body.
- Responses = Status Line + Headers + Body.
- Status codes are grouped by first digit: 2xx success, 4xx client fault, 5xx server fault.

---

## 4.4 Cookies, Sessions, JWT, Authentication & Authorization

- **Cookies:** Small pieces of data stored in the browser, sent automatically with every request to the same domain. Used for sessions, preferences, tracking.
- **Sessions:** Server-side storage of user state, referenced by a session ID stored in a cookie. The server looks up the session ID to know who's making the request.
- **JWT (JSON Web Token):** A self-contained, signed token that encodes user identity/claims directly — the server doesn't need to store session state; it just verifies the token's signature.
- **Authentication:** Verifying *who* the user is (login).
- **Authorization:** Verifying *what* the authenticated user is allowed to do (permissions/roles).

| Aspect | Session-based Auth | JWT-based Auth |
|---|---|---|
| State | Stored server-side | Stored client-side (self-contained) |
| Scalability | Requires shared session store across servers | Stateless — scales easily across servers |
| Revocation | Easy (delete session server-side) | Harder (token valid until expiry unless a blocklist is used) |

### Key Takeaways
- Authentication = "who are you?" Authorization = "what can you do?"
- Sessions are server-stateful; JWTs are stateless and scale better horizontally, but are harder to revoke early.

---

## 4.5 HTTPS, SSL, TLS, and Encryption

**Why HTTPS is needed:** Plain HTTP sends data in readable plaintext — anyone intercepting the traffic (e.g., on public WiFi) can read or modify it. HTTPS encrypts the data in transit.

| HTTP | HTTPS |
|---|---|
| Unencrypted | Encrypted (via TLS) |
| Port 80 | Port 443 |
| Vulnerable to eavesdropping/tampering | Protected against eavesdropping/tampering |
| No identity verification of server | Server identity verified via certificate |

- **SSL (Secure Sockets Layer):** The original encryption protocol for the web — now deprecated/insecure, replaced by TLS.
- **TLS (Transport Layer Security):** The modern, secure successor to SSL. "HTTPS" today actually uses TLS, though the term "SSL certificate" is still used colloquially.

### Encryption Types

| Type | How it Works | Speed | Use in TLS |
|---|---|---|---|
| Symmetric | Same key encrypts and decrypts | Fast | Used for the actual data transfer after handshake |
| Asymmetric | Public key encrypts, only matching private key decrypts | Slow | Used during handshake to safely exchange the symmetric key |

### TLS Handshake (Simplified)

```
Client                                    Server
  |----- ClientHello -------------------->|   (supported TLS versions, cipher suites)
  |<---- ServerHello + Certificate -------|   (chosen cipher, server's public key cert)
  |-- Verify Certificate with CA -------->|   (client checks cert is signed by trusted CA)
  |----- Generate & encrypt session key -->|   (using server's public key)
  |<---- Handshake complete --------------|
  |==== Encrypted data using session key ====|
```

- **Digital Certificates:** Issued by trusted **Certificate Authorities (CAs)** like DigiCert or Let's Encrypt. They cryptographically bind a public key to a domain name, so browsers can trust that they're really talking to the claimed server.

### Key Takeaways
- HTTPS = HTTP + TLS encryption + server identity verification.
- Asymmetric encryption secures the handshake; symmetric encryption secures the actual data transfer (faster).
- Certificate Authorities are the trust anchor that makes HTTPS work.

---

## 4.6 Proxy, Reverse Proxy, Load Balancer, API Gateway

```
Forward Proxy:
[Client] --> [Forward Proxy] --> [Internet/Server]
(Hides the CLIENT's identity from the server; e.g., corporate proxy, VPN-like proxy)

Reverse Proxy:
[Client] --> [Reverse Proxy] --> [Backend Server(s)]
(Hides the SERVER's identity/architecture from the client; e.g., Nginx in front of your app)

Load Balancer:
[Client] --> [Load Balancer] --> [Server 1 / Server 2 / Server 3]
(Distributes traffic across multiple servers for scalability and redundancy)

API Gateway:
[Client] --> [API Gateway] --> [Auth Service / Users Service / Orders Service ...]
(Single entry point that routes to multiple backend microservices, often handling auth, rate limiting, logging centrally)
```

| Component | Primary Purpose |
|---|---|
| Forward Proxy | Protects/anonymizes the client |
| Reverse Proxy | Protects/abstracts the server, can also cache and terminate TLS |
| Load Balancer | Distributes load across multiple server instances |
| API Gateway | Central routing + cross-cutting concerns (auth, rate limiting) for microservices |

### Key Takeaways
- Forward proxy = on the client's side. Reverse proxy = on the server's side.
- Load balancers scale horizontally by spreading traffic.
- API Gateways centralize cross-cutting concerns in microservice architectures.

---

## 4.7 VPN (Virtual Private Network)

A VPN creates an encrypted "tunnel" between your device and a VPN server, routing your traffic through it.

- **Tunneling:** Your traffic is wrapped inside another encrypted packet, hiding its original content from anyone observing the network.
- **Encryption:** Protects data from being read even if intercepted.
- **IP Masking:** Websites see the VPN server's IP address instead of yours, hiding your real location/identity.

**Advantages:** Privacy from your ISP, security on public WiFi, bypassing geo-restrictions.
**Limitations:** Slower speeds (extra encryption/routing hop), doesn't guarantee full anonymity (the VPN provider can still see your traffic), some services actively block known VPN IP ranges.

**How VPN bypasses geo-restrictions:** A streaming service checks your IP address to determine your country. If you connect to a VPN server located in another country, the service sees that country's IP and serves content licensed for that region.

### Key Takeaways
- VPN = encrypted tunnel + IP masking.
- Improves privacy/security but shifts trust to the VPN provider instead of your ISP.

---

# Complete Revision Kit

## A. Complete Summary

The Internet is a decentralized global network built on packet-switching (Ch 1). Devices communicate using IP addresses (logical) and MAC addresses (physical/local), with DNS translating human-readable names into IPs. Data travels through ISPs and backbone routers via hop-by-hop routing.

The Web operates on a client-server model (Ch 2), where browsers (clients) request resources from servers, which may involve web servers, app servers, and database servers working together. Browsers internally use rendering, JavaScript, and networking engines to turn server responses into interactive pages.

Communication relies on protocols (Ch 3): TCP for reliable, ordered delivery (web pages, files) and UDP for fast, best-effort delivery (gaming, streaming, DNS queries), governed conceptually by the OSI model and practically by the TCP/IP model.

HTTP (Ch 4) is the application-layer protocol that structures web requests/responses, evolving from simple HTTP/0.9 to multiplexed HTTP/2 and QUIC-based HTTP/3. HTTPS adds TLS encryption and identity verification via certificates, protecting data in transit. Proxies, reverse proxies, load balancers, and API gateways add layers of routing, protection, and scalability between clients and backend infrastructure.

## B. One-Page Revision Sheet

- Internet = infrastructure; Web = application on top of it.
- ARPANET (1969) → TCP/IP (1983) → WWW (1989).
- Packets are small chunks of data; packet switching routes them independently.
- IP = logical/global address; MAC = physical/local address.
- DNS: Browser cache → Resolver → Root → TLD → Authoritative → IP returned.
- Client-server: Browser → Web Server → App Server → DB Server.
- Static = same for everyone; Dynamic = generated per request.
- TCP = reliable, ordered, slower (3-way handshake to connect, 4-way to close).
- UDP = fast, unreliable, no handshake.
- HTTP methods: GET (read), POST (create), PUT (replace), PATCH (update), DELETE (remove).
- Status codes: 2xx success, 3xx redirect, 4xx client error, 5xx server error.
- HTTPS = HTTP + TLS; asymmetric encryption secures the handshake, symmetric secures the data.
- Reverse proxy protects servers; forward proxy protects clients; load balancer distributes traffic.

## C. Interview Questions

**Easy**
1. What is the difference between the Internet and the World Wide Web?
2. What does DNS do, and why is it needed?
3. What is the difference between an IP address and a MAC address?
4. Name three HTTP methods and their purposes.
5. What does HTTPS add on top of HTTP?

**Medium**
6. Explain the TCP three-way handshake.
7. Why does DNS use UDP instead of TCP?
8. What's the difference between authentication and authorization?
9. Explain the difference between a forward proxy and a reverse proxy.
10. Walk through what happens, step by step, when you type a URL and press Enter.

**Hard**
11. Why is TCP called "reliable" and UDP "unreliable" — explain the mechanisms that make this true.
12. Explain how a TLS handshake establishes a secure connection without ever sending the symmetric key in plaintext.
13. Why is JWT-based authentication considered more scalable than session-based authentication, and what's the tradeoff?
14. Explain how HTTP/2 multiplexing solves the "head-of-line blocking" problem present in HTTP/1.1.
15. How does a CDN reduce latency, and what happens on a cache miss?

## D. 20 MCQs with Answers

*(Sampled set — full 50 available on request)*

1. What year was ARPANET launched? **A) 1969** B) 1989 C) 1974 D) 1991
2. Which protocol translates domain names to IP addresses? A) TCP B) **DNS** C) HTTP D) FTP
3. Which is NOT a valid HTTP method? A) GET B) POST C) **FETCH** D) DELETE
4. Which port does HTTPS use by default? A) 80 B) 8080 C) **443** D) 21
5. Which layer of the OSI model does TCP operate at? A) Network B) **Transport** C) Application D) Physical
6. Which is connectionless? A) TCP B) **UDP** C) TLS D) FTP
7. A 404 status code means: A) Server error B) **Resource not found** C) Success D) Redirect
8. Which encrypts faster during data transfer in TLS? A) Asymmetric B) **Symmetric** C) Both equally D) Neither
9. What does a reverse proxy primarily protect? A) The client B) **The server** C) The ISP D) The DNS
10. IPv6 was introduced primarily because: A) It's faster B) **IPv4 addresses were running out** C) It's cheaper D) Security
11. Which HTTP version introduced multiplexing? A) HTTP/1.0 B) HTTP/1.1 C) **HTTP/2** D) HTTP/0.9
12. MAC addresses are used by: A) Routers B) **Switches** C) DNS servers D) CDNs
13. Which status code range indicates client errors? A) 2xx B) 3xx C) **4xx** D) 5xx
14. What does a CA (Certificate Authority) do? A) Encrypts data B) **Verifies and signs certificates** C) Routes packets D) Hosts websites
15. Which is stateless? A) Session-based auth B) **JWT-based auth** C) Cookies D) None of the above
16. What does DHCP assign? A) MAC addresses B) **Dynamic IP addresses** C) Domain names D) Ports
17. In the TCP handshake, what is sent first? A) ACK B) **SYN** C) SYN-ACK D) FIN
18. Which is true of Web 1.0? A) Highly interactive B) **Read-only, static** C) Blockchain-based D) User-generated content
19. What does a load balancer do? A) Encrypts traffic B) **Distributes traffic across servers** C) Resolves domain names D) Caches DNS
20. QUIC (used in HTTP/3) runs over: A) TCP B) **UDP** C) ICMP D) ARP

## E. Common Interview Mistakes

- Confusing "the Internet" with "the Web" (they are not the same thing).
- Saying HTTPS "just encrypts data" without mentioning identity verification via certificates.
- Mixing up authentication and authorization.
- Not knowing that UDP is used deliberately in some cases for speed — assuming "unreliable" always means "bad."
- Forgetting that TCP guarantees order via sequence numbers, not just "resending lost packets."
- Confusing symmetric vs asymmetric encryption's roles in TLS (many say TLS is "all asymmetric," which is incorrect and inefficient).

## F. Real-World Scenarios

- **Scenario:** A user reports "the site is slow only sometimes." → Discuss possible causes: DNS resolution delay, TCP handshake latency, TLS negotiation overhead, server processing time, or network congestion — and how you'd diagnose each using browser dev tools' Network tab.
- **Scenario:** "Why did switching our login system from sessions to JWT cause an issue where we couldn't force-logout a compromised user?" → Discuss the JWT revocation tradeoff and mitigation (short expiry + refresh tokens, or a blocklist).

## G. Glossary

| Term | Definition |
|---|---|
| Packet | A small chunk of data sent over a network |
| DNS | System that translates domain names into IP addresses |
| TCP | Reliable, connection-oriented transport protocol |
| UDP | Fast, connectionless transport protocol |
| TLS | Protocol that encrypts data in transit and verifies server identity |
| CDN | Distributed network of servers caching content close to users |
| Reverse Proxy | Server-side intermediary that forwards client requests to backend servers |
| JWT | Self-contained signed token used for stateless authentication |
| Idempotent | An operation that has the same effect no matter how many times it's repeated |

## H. Recommended Further Reading

- MDN Web Docs — HTTP overview
- RFC 793 (TCP) and RFC 768 (UDP) — the original protocol specifications
- "High Performance Browser Networking" by Ilya Grigorik (free online book)
- Cloudflare Learning Center — DNS, CDN, and TLS explainers

---