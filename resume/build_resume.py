# Resume built in the portfolio's design system: Archivo (expanded) display,
# Instrument Sans body, IBM Plex Mono for labels, electric-blue accent and
# signal-orange metrics, numbered sections under hairline rules.
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor

W, H = A4
M = 46                      # side margin
TOP = 36
COLR = W - M                # right edge

INK    = HexColor('#0F1115')
MUTED  = HexColor('#555E69')
FAINT  = HexColor('#8A939C')
RULE   = HexColor('#D7DBE0')
ACCENT = HexColor('#3D4DFF')
SIGNAL = HexColor('#E8481A')

for n, f in [('Disp', 'ArchivoExp-Black.ttf'), ('DispB', 'ArchivoExp-Bold.ttf'),
             ('Body', 'IS-Regular.ttf'), ('BodyB', 'IS-SemiBold.ttf'),
             ('Mono', 'IBMPlexMono-Regular.ttf'), ('MonoM', 'IBMPlexMono-Medium.ttf')]:
    pdfmetrics.registerFont(TTFont(n, 'fonts/' + f))

c = canvas.Canvas('resume.pdf', pagesize=A4)
c.setTitle('Harshavardhan Arrimalla — Product Designer & AI Full-Stack Builder')
c.setAuthor('Harshavardhan Arrimalla')
y = H - TOP

def sw(s, font, size, track=0):
    return pdfmetrics.stringWidth(s, font, size) + track * len(s)

def draw(x, yy, s, font, size, color=INK, track=0):
    # letter-spacing lives on the text object, not the canvas
    t = c.beginText(x, yy)
    t.setFont(font, size); t.setFillColor(color)
    # Tc is text state and persists across BT/ET, so always set it —
    # otherwise a tracked label leaks its spacing into later body text.
    t.setCharSpace(track)
    t.textOut(s)
    c.drawText(t)
    return x + sw(s, font, size, track)

def draw_right(xr, yy, s, font, size, color=INK, track=0):
    draw(xr - sw(s, font, size, track), yy, s, font, size, color, track)

def rich(x, yy, width, spans, leading, size=8.7, indent=0):
    """Styled inline text with real word wrapping.

    Styles are tracked per character, so a style boundary inside a word
    (bold metric followed by punctuation) does not introduce a space.
    Returns the y position below the last line drawn.
    """
    chars, styles = [], []
    for text, font, color in spans:
        for ch in text:
            chars.append(ch); styles.append((font, color))

    # group into words, each a list of (text, font, color) runs
    words, cur = [], []
    def flush_word():
        if cur:
            words.append(list(cur)); cur.clear()
    i = 0
    while i < len(chars):
        if chars[i] == ' ':
            flush_word()
        else:
            f, col = styles[i]
            if cur and cur[-1][1] == f and cur[-1][2] == col:
                cur[-1] = (cur[-1][0] + chars[i], f, col)
            else:
                cur.append((chars[i], f, col))
        i += 1
    flush_word()

    def wwidth(word):
        return sum(pdfmetrics.stringWidth(t, f, size) for t, f, _ in word)

    space = pdfmetrics.stringWidth(' ', 'Body', size)
    line, lw, first = [], 0, True
    def emit(ln, yy_):
        cx = x if first else x + indent
        for word in ln:
            for t, f, col in word:
                cx = draw(cx, yy_, t, f, size, col)
            cx += space
    for word in words:
        ww = wwidth(word)
        avail = width if first else width - indent
        if line and lw + space + ww > avail:
            emit(line, yy); yy -= leading; first = False
            line, lw = [], 0
        line.append(word); lw += (space if lw else 0) + ww
    if line:
        emit(line, yy); yy -= leading
    return yy


def hrule(yy, color=RULE, w=0.6):
    c.setStrokeColor(color); c.setLineWidth(w); c.line(M, yy, COLR, yy)

def section(num, label, gap=8):
    global y
    y -= gap
    draw(M, y, '[' + num + ']', 'MonoM', 7.6, ACCENT, 0.9)
    draw(M + 24, y, label.upper(), 'MonoM', 7.6, INK, 1.9)
    y -= 5
    hrule(y)
    y -= 12

# ───────────────────────── header ─────────────────────────
draw(M, y - 20, 'HARSHAVARDHAN ARRIMALLA', 'Disp', 23.5, INK, -0.9)
y -= 20

y -= 14
draw(M, y, 'PRODUCT DESIGNER & AI FULL-STACK BUILDER', 'MonoM', 8.2, ACCENT, 1.5)

y -= 13
c.setFillColor(HexColor('#1F9D6B')); c.circle(M + 2.6, y + 2.6, 2.6, stroke=0, fill=1)
draw(M + 10, y, 'AVAILABLE FOR WORK', 'Mono', 7.5, MUTED, 1.0)
draw_right(COLR, y, 'HYDERABAD, INDIA  ·  WORKING GLOBALLY', 'Mono', 7.5, FAINT, 1.0)

y -= 12
draw(M, y, 'arrimallaharshavardhan@gmail.com   ·   +91 86392 01394', 'Body', 8.6, MUTED)
y -= 11
draw(M, y, 'harsha-portfolio-henna.vercel.app   ·   linkedin.com/in/harshavardhan-arrimalla   ·   github.com/harsha-arrimalla',
     'Body', 8.3, MUTED)

# ───────────────────────── signals ─────────────────────────
y -= 15
hrule(y)
y -= 16
SIGNALS = [('10.4K', 'Users reached'), ('3×', 'Listing volume'),
           ('6', 'Enterprise clients'), ('12', 'Agents shipped'),
           ('4+', 'Years designing')]
colw = (COLR - M) / len(SIGNALS)
for i, (val, lab) in enumerate(SIGNALS):
    x = M + i * colw
    draw(x, y, val, 'Disp', 15.5, INK, -0.5)
    draw(x, y - 10, lab.upper(), 'Mono', 6.9, FAINT, 0.9)
y -= 16
hrule(y)

# ───────────────────────── profile ─────────────────────────
section('01', 'Profile', gap=13)
y = rich(M, y, COLR - M, [
    ('Product designer for decision-heavy software — enterprise AI, marketplaces, regulated banking. I work '
     'from support logs and telemetry, and on my own products I write the production code. Recent: an AI '
     'travel workspace ', 'Body', MUTED),
    ('live with six corporate clients', 'BodyB', INK),
    (', a creator marketplace taken from ', 'Body', MUTED),
    ('350 to 1,100 listings a month', 'BodyB', INK),
    (', and a 12-agent consumer product designed and shipped solo.', 'Body', MUTED),
], leading=10.7)

# ───────────────────────── experience ─────────────────────────
def job(title, org, period, place=None):
    global y
    y -= 6
    x = draw(M, y, title.upper(), 'DispB', 10.4, INK, -0.25)
    draw(x + 7, y, org.upper(), 'MonoM', 7.6, ACCENT, 1.2)
    meta = period.upper() + ('  ·  ' + place.upper() if place else '')
    draw_right(COLR, y, meta, 'Mono', 7.4, FAINT, 0.9)
    y -= 12

def sub(text):
    global y
    draw(M, y, text.upper(), 'Mono', 7.2, FAINT, 0.9)
    y -= 10

def point(spans):
    global y
    draw(M, y, '—', 'Body', 8.9, FAINT)
    y = rich(M + 13, y, COLR - M - 13, spans, leading=10.2)
    y -= 2.5

def B(t): return (t, 'BodyB', INK)
def T(t): return (t, 'Body', MUTED)
def S(t): return (t, 'BodyB', SIGNAL)

section('02', 'Experience')

job('Senior Product Designer', 'Mondee', 'Jul 2023 — Present', 'Hyderabad')
sub('Miraee — enterprise AI travel  ·  Aarna — AI supplier marketplace  ·  B2B agent booking platform')

point([B('Anchored every fare decision to one number. '),
       T('Support logs were full of “is this fare okay?”; 3 of 4 admins screenshotted rival fares to justify '
         'bookings. A live “Price to Beat” benchmark atop search cut time-to-selection and gave approvers a '
         'baseline for exceptions.')])
point([B('Made the trip, not the ticket, the unit of approval. '),
       T('Admins were rebuilding one trip from three confirmation emails. A Trip Summary binding flight, '
         'hotel, car and add-ons with policy badges and cost delta merged checkout and approval into one '
         'grammar. Live with '), S('6 enterprise clients'), T('.')])
point([B('Turned rejection and failure into explanation. '),
       T('Unexplained policy blocks lost beta users; one silent failure caused '), S('14 duplicate card holds'),
       T(' in a week. Exceptions now name the rule and the dollar gap; recovery splits money status from '
         'agent retries. '), S('Zero'), T(' unexplained blocks, no duplicate holds in UAT.')])
point([B('Rebuilt creator onboarding around how creators work. '),
       T('48% abandoned the 14-field form at upload, yet pilots re-ran chat prompts to fix one price. OCR '
         'prefill and conversational drafting with an “Edit as Form” toggle: abandonment '), S('62% → 37%'),
       T(', listings '), S('350 → 1,100'), T('/month, '), S('10.4K'), T(' signups in six months.')])
point([B('Killed my own best demo. '),
       T('The 3D avatar charmed reviewers but ran '), S('6.5s'), T(' median latency against 1.8s for text at '),
       S('9×'), T(' the compute. Cut from Discover for a fast mood-scoped feed, protecting unit economics as '
         'traffic grew.')])
point([B('Designed the agent platform for scanning, not browsing. '),
       T('A 3-tier scan order across 50+ results, fare flexibility at the decision point, and one layout '
         'grammar shared by Flights and Packages.')])

job('UI/UX Designer', 'Virtusa', 'Nov 2022 — Jul 2023')
point([B('Owned 3–4 end-to-end banking workflows '),
       T('in a regulated domain — requirements through wireframes, hi-fi UI, prototypes and annotated specs '
         'for an offshore team, where error prevention outranked visual novelty.')])

job('UI Designer', 'GlobalLogic', 'Feb 2022 — Nov 2022')
point([T('30+ screens and prototypes across 6+ Agile sprints, contributing reusable patterns to the shared library.')])

job('Graphic & Motion Designer', 'Prime Pixel', 'Jan 2019 — Dec 2021')
y += 3
point([T('Motion graphics and visual design — the typographic foundation behind the interface work.')])
y += 2

# ───────────────────────── built end to end ─────────────────────────
section('03', 'Designed and built')
job('Hita — AI Travel Companion', 'Self-initiated · Live', 'aihita.in', '2026')
point([B('Shipped the whole stack solo in ~6 days — '),
       T('Figma system through Next.js and React Native clients, Supabase, and a '), S('12-agent'),
       T(' orchestration runtime on the Claude API.')])
point([B('Separated the conversation from the machinery. '),
       T('Early builds printed agent tool calls inline and read like a console. Chat now carries one voice; '
         'the agents’ reasoning sits in an inspectable Activity layer.')])
point([B('Let field testing overrule the layout. '),
       T('Six testers hesitated to trigger location sharing, so SOS and Family Share moved from the drawer '
         'into the persistent header — 1-tap anywhere in a journey.')])

# ───────────────────────── case studies ─────────────────────────
section('04', 'Selected case studies — independent concepts')
for name, desc in [
    ('Equora', 'self-custody wallet — zero ceremony to look, comprehension-first before anything irreversible'),
    ('Pranik', 'multilingual AI care — one thread across patient, clinician and family; 3 languages as core paths'),
    ('Qualifyze', 'life-sciences GxP — a 5-stage audit lifecycle unified into three decision layers'),
]:
    y = rich(M, y, COLR - M, [(name + '  ', 'BodyB', INK), (desc, 'Body', MUTED)],
             leading=10.2, indent=12)
    y -= 1.0

# ───────────────────────── skills ─────────────────────────
section('05', 'Skills')
SKILLS = [
    ('Design', 'Figma  ·  design systems  ·  information architecture  ·  interaction design  ·  data-dense UI  ·  WCAG AA'),
    ('Build', 'React  ·  Next.js  ·  TypeScript  ·  React Native  ·  Supabase  ·  Claude API  ·  ships production front-end'),
    ('Research', 'Discovery interviews  ·  workflow deep-dives  ·  usability testing  ·  funnel & behavioral analytics'),
    ('AI workflow', 'Claude Code  ·  Cursor  ·  Figma MCP  ·  code-based prototyping  ·  conversational & agentic UX'),
]
for label, items in SKILLS:
    draw(M, y, label.upper(), 'MonoM', 7.4, INK, 1.0)
    y = rich(M + 78, y, COLR - M - 78, [(items, 'Body', 8.75 and MUTED)], leading=10.2, size=8.6)
    y -= 1.0

# ───────────────────────── education ─────────────────────────
section('06', 'Education')
x = draw(M, y, 'B.Sc. Computer Science', 'BodyB', 8.9, INK)
draw(x + 5, y, '·  Purvanchal University  ·  2015 — 2018', 'Body', 8.9, MUTED)
cert_a, cert_b = 'UI/UX Design Certification', '  ·  Prism Multimedia  ·  2021'
cert_x = COLR - sw(cert_a, 'BodyB', 8.9) - sw(cert_b, 'Body', 8.9)
cert_x = draw(cert_x, y, cert_a, 'BodyB', 8.9, INK)
draw(cert_x, y, cert_b, 'Body', 8.9, MUTED)
y -= 12

print('bottom y =', round(y, 1), '(must stay above ~34)')
c.showPage(); c.save()
print('saved resume.pdf')
