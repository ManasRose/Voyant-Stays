# Load Testing VoyantStays with Artillery

## 1. Install

```bash
npm install -g artillery
npm install --save-dev artillery-plugin-metrics-by-endpoint
```

(Run the plugin install inside your actual project root, not this folder,
so Artillery can find it via node_modules when you run the test from there.)

## 2. Point it at your server

Edit `target` in `artillery-config.yml`:
- Local: `http://localhost:5000` (run `node index.js` first)
- Deployed: your Render/Railway/Vercel URL

> Important: test against a database with a **realistic amount of seeded data**
> (use your existing `init/index.js` seeder, run it a few times or bump the
> listing count). Testing against 5 documents will always look fast and won't
> give you a credible number.

## 3. Run it

```bash
artillery run artillery-config.yml --output report.json
artillery report report.json   # generates an HTML report
```

## 4. What to pull out for your resume

After the run, Artillery prints a summary table. The numbers you want:

- **`http.response_time` p95 / p99** → your latency claim
  e.g. "p95 latency of 180ms under 50 req/sec"
- **`http.codes.200` vs `http.codes.5xx`** → your error rate claim
  e.g. "maintained <1% error rate under peak load"
- **`http.request_rate`** → your throughput claim
  e.g. "sustained 50 requests/sec"
- **Run it once BEFORE you add indexes/pagination, save the report.**
- **Run it again AFTER, same config, same seeded data size.**
- The delta between those two reports is your real, honest "X% improvement" bullet.

## 5. Suggested resume bullet template

> "Load-tested REST API endpoints using Artillery, identifying and resolving a
> bottleneck in the listings query path; reduced p95 response time from
> **[BEFORE]ms to [AFTER]ms** (X% improvement) under 50 concurrent requests/sec
> by adding MongoDB indexes and pagination."

Fill in the brackets with your actual numbers — don't estimate them, since
this is exactly the kind of claim an interviewer will ask you to defend.

## Next step

Once you've run this once (baseline, before any DB changes) and shared the
numbers with me, I'll implement the indexing + pagination changes in
`controllers/listings.js` and `models/listing.js`, and we'll re-run this same
test to get your "after" numbers.
