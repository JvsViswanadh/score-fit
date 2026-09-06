# ScoreFit — AI Resume Tailoring & ATS Score Checker

## 1. Idea

ScoreFit is an AI-powered tool that helps job seekers get past Applicant
Tracking Systems (ATS) and land more interviews. A user pastes a job link or
job description alongside their current resume. ScoreFit instantly analyses
the match and returns:

- An **ATS match score** (0–100%) showing how well the resume aligns with
  the job description
- A list of **missing high-impact keywords** the ATS is likely filtering on
- A **tailored, rewritten resume** (same real experience, reworded and
  reordered to include the missing keywords — never fabricated)
- An optional **AI-generated cover letter** matched to the role
- An optional **interview prep PDF** with likely questions and model answers
  based on the job description and the user's own background

The core insight behind the product: the free ATS score is the trust-building
hook (no signup, instant, specific), and the paid tailored output is the
value moment — priced to beat a human resume writer on both cost and speed
(₹1,500–5,000 and 3–4 days for a human vs ₹749 and 5 minutes for ScoreFit).

## 2. Target user

Active job seekers applying to multiple roles — new grads, career switchers,
and professionals doing high-volume applications — who want to know *why*
they aren't getting interviews and fix it in minutes, not days.

## 3. Product flow

```
Landing (/) 
  → free upload + score → Score Result (/score-result)
    → "Get quick fix" (₹149)        → Checkout (/checkout, Quick Fix only)
    → "Get full tailored resume"    → Checkout (/checkout, ₹749 + add-ons)
      → guest payment, no account required → Delivery (/delivery)
        → downloads (only items purchased)
        → subscription upsell → Subscribe (/subscribe)
          → sign in (email or Google) → Account (/account)
            → "Start tailoring" → back to Landing

Secondary path:
Landing → "Sample Report" → Sample Report (/sample-report)
  → "Try it yourself" → back to Landing upload box
```

Score Result presents Quick Fix and Full Tailored Resume as two side-by-side
cards, each with its own description, so users self-select rather than being
pushed toward one option.

Sign-in is intentionally deferred to the subscription step only — one-time
paid users never need to create an account. This keeps the funnel honest:
free → paid job → optionally becomes a signed-in subscriber, never a forced
signup earlier.

## 4. Pricing

| Tier | Price | What's included |
|---|---|---|
| Free score | ₹0 | Instant ATS match score, no signup |
| Quick Fix | ₹149 | Top 3–5 missing keywords inserted directly into the existing resume — a fast, minimal edit, not a full rewrite |
| Full Tailored Resume | ₹749 | Complete rewrite: every bullet reworded, formatting cleaned up, structured for this job's ATS (DOCX + PDF) |
| + Cover letter add-on | +₹250 | Role-specific cover letter (add-on to Full Tailored Resume only) |
| + Interview prep add-on | +₹350 | Top 15 questions + model answers, PDF (add-on to Full Tailored Resume only) |
| Job Search Pass (subscription) | ₹1,999/month | Unlimited tailoring, cover letters, and interview prep |

Quick Fix exists as a low-friction first purchase ("tripwire" tier) — its
job is conversion and trust-building at a price point that requires zero
deliberation, not standalone profit. Cost per use is still ~₹9–12 regardless
of tier, so margin is not the constraint; the goal is capturing one-time
users who won't commit ₹749 on a first visit but will take a ₹149 punt, some
share of whom return for the full ₹749 tier afterward.

Full Tailored Resume pricing is anchored on checkout against the human
alternative ("Professional resume writers charge ₹1,500–5,000 and take 3–4
days. Get yours in 5 minutes.") — this anchor line is used only on the
₹749 tier, not on Quick Fix, since the comparison only makes sense against a
full rewrite.

On the Score Result page, Quick Fix and Full Tailored Resume are presented
side by side as two distinct, clearly described options so users self-select
based on what they actually need — not as a discount on the same product.

## 5. Tech stack

| Layer | Tool |
|---|---|
| Frontend framework | Angular (standalone components) |
| Design / page building | Builder.io (Visual Copilot / Generate + Add Interactivity), screens originally prototyped in Stitch |
| Backend (separate deploy — Angular has no server-side API routes) | Node/Express or FastAPI |
| Resume parsing | `pdf-parse` (PDF), `mammoth` (DOCX) |
| Output file generation | `docx` npm package, `pdf-lib` |
| AI | Claude API — Haiku 4.5 for ATS scoring (cheap, fast, consistent), Sonnet 5 for resume rewriting, cover letters, and interview prep generation (higher-quality writing) |
| Auth + database | Supabase |
| Payments | Razorpay (UPI, primary for India) + Stripe (global cards) |
| Hosting | Vercel or Render (backend), Angular build hosted alongside or on its own static host |
| Dev tools | GitHub Copilot for backend code |

### Estimated AI cost per paid run

| Task | Model | Approx. cost |
|---|---|---|
| ATS score (free tier) | Haiku 4.5 | ~₹1–2 |
| Quick Fix (keyword insertion only) | Haiku 4.5 / Sonnet 5 | ~₹2–3 |
| Tailored resume rewrite | Sonnet 5 | ~₹4–5 |
| Cover letter | Sonnet 5 | ~₹2–3 |
| Interview prep PDF | Sonnet 5 | ~₹3–4 |
| **Full paid bundle (Full Tailored Resume + both add-ons)** | — | **~₹9–12** |

Even at the ₹149 Quick Fix price point, margin stays above 94% — margin is
not the constraint on how low this tier can go; conversion and trust-building
are the actual goals of that price point.

## 6. Monthly budget (early stage)

| Item | Approx. cost |
|---|---|
| Hosting (frontend + backend, free/starter tiers) | ₹0–1,900 |
| Supabase (free tier initially) | ₹0 |
| Claude API (first 100–200 paid uses) | ₹950–1,900 |
| Payment gateway fees | ~2–3% per transaction |
| Domain (amortized) | ~₹95/month |
| **Total pre-scale** | **~₹2,400–3,800/month** |

## 7. Build status

- [x] All screens designed in Stitch (Landing, Score Result, Checkout,
      Delivery, Sample Report)
- [x] Angular project scaffolded and connected to Builder.io
- [x] All 7 pages generated in Builder.io with mock data
- [x] Navigation and in-page interactivity (checkbox totals, button routes)
      wired across all pages
- [ ] Backend service for resume parsing, Claude API calls, and file
      generation
- [ ] Payment integration (Razorpay + Stripe)
- [ ] Supabase auth wired to the Subscribe/Account flow
- [ ] Real ATS scoring logic (rule-based keyword matching + Claude-assisted
      analysis)
- [ ] End-to-end test: real resume + real job description → real tailored
      output
- [ ] Deploy to production hosting
- [ ] Launch

## 8. Next milestones (in order)

1. Build the backend service and a single working endpoint
   (`POST /api/score`) that takes a resume + job description and returns a
   real ATS score
2. Connect that endpoint to the Angular app, replacing mock data on the
   Score Result page
3. Add the resume rewriting and file-generation endpoints, wire to Checkout
   → Delivery
4. Integrate Razorpay/Stripe on the Checkout page
5. Wire Supabase auth to the Subscribe → Account flow
6. Soft-launch to a small group (placement cells, job-search communities)
   for real feedback before spending on marketing

## 9. Marketing strategy (post-launch)

- SEO on transactional keywords ("ATS resume checker free", "tailor resume
  for [job title]") rather than brand keywords
- Reddit/LinkedIn presence in job-search communities — lead with the free
  score tool, not a sales pitch
- College/bootcamp placement cell outreach — high-intent, low-CAC during
  placement season
- WhatsApp/Telegram job-search groups (India-specific, high engagement)
- Free ATS checker as the primary lead magnet and growth wedge

## 10. Open questions to revisit

- Final positioning: "beat the ATS" (score/keyword framing) vs. "get more
  interviews" (outcome framing) — the latter is more honest and
  differentiates from the crowded ATS-score category
- Whether to add an application tracker / resume version history — deferred
  post-launch, not part of MVP