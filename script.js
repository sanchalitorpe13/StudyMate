/* ============================================================
   Moungiri Coaching Classes — shared JavaScript
   Community Engagement Project (Assignments 1-4)

   There is NO backend. Every list below is dummy data held in a
   JavaScript array, and "login" only writes a value to localStorage.
   ============================================================ */

/* ============================================================
   SECTION 1 — DUMMY DATA
   ============================================================ */

/* Study material (notes, formula sheets, PDFs, MCQ sets) */
const MATERIALS = [
  { title: 'Units and Measurements — Full Notes', cls: '11', subject: 'Physics',   chapter: 'Ch 1', exam: 'JEE',     type: 'Notes',         pages: 24, size: '2.1 MB' },
  { title: 'Laws of Motion — Formula Sheet',       cls: '11', subject: 'Physics',   chapter: 'Ch 4', exam: 'MHT-CET', type: 'Formula Sheet', pages: 4,  size: '480 KB' },
  { title: 'Some Basic Concepts of Chemistry',     cls: '11', subject: 'Chemistry', chapter: 'Ch 1', exam: 'NEET',    type: 'Notes',         pages: 18, size: '1.6 MB' },
  { title: 'Chemical Bonding — Topic PDF',         cls: '11', subject: 'Chemistry', chapter: 'Ch 4', exam: 'JEE',     type: 'Topic PDF',     pages: 30, size: '3.4 MB' },
  { title: 'Trigonometric Functions — MCQ Set',    cls: '11', subject: 'Maths',     chapter: 'Ch 3', exam: 'MHT-CET', type: 'MCQs',          pages: 12, size: '900 KB' },
  { title: 'Cell — Structure and Function',        cls: '11', subject: 'Biology',   chapter: 'Ch 8', exam: 'NEET',    type: 'Notes',         pages: 22, size: '2.8 MB' },
  { title: 'Current Electricity — Full Notes',     cls: '12', subject: 'Physics',   chapter: 'Ch 3', exam: 'JEE',     type: 'Notes',         pages: 28, size: '2.9 MB' },
  { title: 'Ray Optics — Formula Sheet',           cls: '12', subject: 'Physics',   chapter: 'Ch 9', exam: 'NEET',    type: 'Formula Sheet', pages: 5,  size: '520 KB' },
  { title: 'Solutions — Topic PDF',                cls: '12', subject: 'Chemistry', chapter: 'Ch 2', exam: 'MHT-CET', type: 'Topic PDF',     pages: 20, size: '2.2 MB' },
  { title: 'Organic Chemistry — Name Reactions',   cls: '12', subject: 'Chemistry', chapter: 'Ch 10',exam: 'JEE',     type: 'Formula Sheet', pages: 8,  size: '1.1 MB' },
  { title: 'Integrals — MCQ Practice Set',         cls: '12', subject: 'Maths',     chapter: 'Ch 7', exam: 'JEE',     type: 'MCQs',          pages: 16, size: '1.3 MB' },
  { title: 'Matrices and Determinants — Notes',    cls: '12', subject: 'Maths',     chapter: 'Ch 3', exam: 'JEE',     type: 'Notes',         pages: 19, size: '1.8 MB' },
  { title: 'Genetics and Evolution — Notes',       cls: '12', subject: 'Biology',   chapter: 'Ch 5', exam: 'NEET',    type: 'Notes',         pages: 26, size: '3.1 MB' },
  { title: 'Human Physiology — MCQ Set',           cls: '12', subject: 'Biology',   chapter: 'Ch 14',exam: 'NEET',    type: 'MCQs',          pages: 14, size: '1.0 MB' },
  { title: 'Electrostatics — MHT-CET PCM Practice', cls: '12', subject: 'Physics',  chapter: 'Ch 1', exam: 'MHT-CET', type: 'MCQs',          pages: 10, size: '880 KB' }
];

/* Previous year question papers */
const PYQS = [
  { exam: 'JEE',     year: 2025, paper: 'JEE Main — Session 1, Paper 1', subject: 'PCM', solution: true,  size: '1.9 MB' },
  { exam: 'JEE',     year: 2024, paper: 'JEE Main — Session 2, Paper 1', subject: 'PCM', solution: true,  size: '2.0 MB' },
  { exam: 'JEE',     year: 2023, paper: 'JEE Advanced — Paper 1',        subject: 'PCM', solution: false, size: '2.4 MB' },
  { exam: 'NEET',    year: 2025, paper: 'NEET UG — Code F1',             subject: 'PCB', solution: true,  size: '2.2 MB' },
  { exam: 'NEET',    year: 2024, paper: 'NEET UG — Code T3',             subject: 'PCB', solution: true,  size: '2.1 MB' },
  { exam: 'NEET',    year: 2023, paper: 'NEET UG — Code R2',             subject: 'PCB', solution: false, size: '2.0 MB' },
  { exam: 'MHT-CET', year: 2025, paper: 'MHT-CET PCM — 2 May Shift 1',   subject: 'PCM', solution: true,  size: '1.5 MB' },
  { exam: 'MHT-CET', year: 2025, paper: 'MHT-CET PCB — 5 May Shift 2',   subject: 'PCB', solution: true,  size: '1.6 MB' },
  { exam: 'MHT-CET', year: 2024, paper: 'MHT-CET PCM — 4 May Shift 1',   subject: 'PCM', solution: false, size: '1.4 MB' },
  { exam: 'JEE',     year: 2022, paper: 'JEE Advanced — Paper 2',        subject: 'PCM', solution: true,  size: '2.3 MB' },
  { exam: 'NEET',    year: 2022, paper: 'NEET UG — Code A1',             subject: 'PCB', solution: true,  size: '2.0 MB' },
  { exam: 'MHT-CET', year: 2024, paper: 'MHT-CET PCB — 6 May Shift 1',   subject: 'PCB', solution: true,  size: '1.5 MB' },
  { exam: 'MHT-CET', year: 2023, paper: 'MHT-CET PCM — 3 May Shift 2',   subject: 'PCM', solution: false, size: '1.4 MB' }
];

/* Mock test question bank. answer = index of the correct option. */
const QUESTIONS = [
  { q: 'The SI unit of electric current is the:', opts: ['Volt', 'Ampere', 'Ohm', 'Coulomb'], answer: 1,
    why: 'The ampere is one of the seven SI base units. The volt measures potential difference and the coulomb measures charge.' },
  { q: 'Which of the following is a vector quantity?', opts: ['Speed', 'Mass', 'Displacement', 'Temperature'], answer: 2,
    why: 'Displacement has both magnitude and direction; speed, mass and temperature are scalars.' },
  { q: 'The value of sin 90° is:', opts: ['0', '1', '1/2', 'Undefined'], answer: 1,
    why: 'sin 90° = 1, which is the maximum value of the sine function.' },
  { q: 'The atomic number of carbon is:', opts: ['6', '12', '14', '8'], answer: 0,
    why: 'Carbon has 6 protons, so its atomic number is 6. The 12 is its most common mass number.' },
  { q: 'Which organelle is called the powerhouse of the cell?', opts: ['Ribosome', 'Nucleus', 'Mitochondria', 'Golgi body'], answer: 2,
    why: 'Mitochondria produce ATP through cellular respiration, which supplies energy to the cell.' },
  { q: 'The derivative of x³ with respect to x is:', opts: ['3x', '3x²', 'x²', '2x³'], answer: 1,
    why: 'By the power rule, d/dx(xⁿ) = n·xⁿ⁻¹, so d/dx(x³) = 3x².' },
  { q: 'Which gas is most abundant in the Earth\'s atmosphere?', opts: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'], answer: 2,
    why: 'Nitrogen makes up roughly 78% of the atmosphere; oxygen is about 21%.' },
  { q: 'Ohm\'s law is expressed as:', opts: ['V = IR', 'P = VI', 'F = ma', 'E = mc²'], answer: 0,
    why: 'Ohm\'s law states that potential difference equals current multiplied by resistance.' },
  { q: 'The pH of a neutral solution at 25 °C is:', opts: ['0', '7', '14', '1'], answer: 1,
    why: 'At 25 °C a neutral solution has equal H⁺ and OH⁻ concentrations, giving a pH of 7.' },
  { q: 'DNA replication is described as:', opts: ['Conservative', 'Semi-conservative', 'Dispersive', 'Non-conservative'], answer: 1,
    why: 'Each new DNA molecule keeps one parent strand and one new strand, shown by the Meselson-Stahl experiment.' }
];

/* Canned chatbot replies. Each entry lists trigger keywords. */
const BOT_REPLIES = [
  { keys: ['hello', 'hi', 'hey', 'namaskar'], text: 'Hello! I am the Moungiri Coaching Classes assistant. Ask me about a topic, an exam, or where to find study material.' },
  { keys: ['newton', 'motion', 'law'], text: "Newton's three laws: (1) a body stays at rest or in uniform motion unless a net force acts on it, (2) F = ma, (3) every action has an equal and opposite reaction. Full notes are on the Study Material page under Physics, Class 11, Chapter 4." },
  { keys: ['mole', 'mole concept', 'avogadro'], text: 'One mole contains 6.022 × 10²³ particles (Avogadro\'s number). Moles = given mass ÷ molar mass. See Chemistry, Class 11, Chapter 1.' },
  { keys: ['jee', 'advanced'], text: 'JEE Main is held in two sessions (January and April) by the NTA. Focus on NCERT first, then previous year papers. You will find JEE papers from 2023 to 2025 on the PYQs page.' },
  { keys: ['neet'], text: 'NEET UG covers Physics, Chemistry and Biology, with Biology carrying the largest weight. Start with NCERT Biology line by line, then attempt mock tests.' },
  { keys: ['cet', 'mht'], text: 'MHT-CET is based on the Maharashtra State Board syllabus, with about 20% weight from Class 11. There is no negative marking, so attempt every question.' },
  { keys: ['integration', 'integral', 'derivative', 'calculus'], text: 'Remember ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ −1, and d/dx(xⁿ) = n·xⁿ⁻¹. The Maths section has a practice set on Integrals.' },
  { keys: ['scholarship', 'money', 'fees waiver'], text: 'Check the Scholarships page. NSP, the Maharashtra EBC scheme and the NTSE are all listed there with their eligibility and deadlines.' },
  { keys: ['career', 'after 12', 'what to do'], text: 'The Career Guidance page explains the main paths after Class 12 — engineering, medical, defence, commerce and arts — with the entrance exam each one needs.' },
  { keys: ['attendance'], text: 'Your subject-wise attendance is on the Attendance page. Most colleges require at least 75% to be allowed to sit for the examination.' },
  { keys: ['time', 'timetable', 'plan', 'study plan'], text: 'A workable plan: 2 hours of theory, 2 hours of problem solving and 1 hour of revision daily, with one full mock test every Sunday. Revise the same topic after 1 day, 7 days and 30 days.' },
  { keys: ['thank', 'thanks'], text: 'Happy to help. Ask me anything else while you study.' }
];

/* Career paths after Class 12 */
const CAREERS = [
  { title: 'Engineering', stream: 'Science (PCM)', exams: 'JEE Main, JEE Advanced, MHT-CET', courses: 'B.E. / B.Tech — 4 years',
    roles: 'Software engineer, civil engineer, mechanical engineer, data analyst',
    colleges: 'IITs, NITs, COEP Pune, VJTI Mumbai, government and private engineering colleges' },
  { title: 'Medical', stream: 'Science (PCB)', exams: 'NEET UG', courses: 'MBBS, BDS, BAMS, B.Sc. Nursing, B.Pharm',
    roles: 'Doctor, dentist, pharmacist, nurse, medical researcher',
    colleges: 'AIIMS, government medical colleges, B.J. Medical College Pune' },
  { title: 'Defence', stream: 'Any (PCM for some entries)', exams: 'NDA, CDS, AFCAT', courses: 'B.Sc. / B.Tech at NDA, Khadakwasla',
    roles: 'Officer in the Indian Army, Navy or Air Force',
    colleges: 'National Defence Academy, Indian Naval Academy, Air Force Academy' },
  { title: 'Commerce and Finance', stream: 'Commerce', exams: 'CA Foundation, CUET, CS Executive Entrance', courses: 'B.Com, BBA, CA, CS, CMA',
    roles: 'Chartered accountant, financial analyst, banker, company secretary',
    colleges: 'SRCC Delhi, Symbiosis Pune, ICAI for CA' },
  { title: 'Arts and Humanities', stream: 'Arts', exams: 'CUET, state law entrance, CLAT', courses: 'B.A., B.A. LL.B., Journalism, Design',
    roles: 'Lawyer, journalist, civil servant, designer, teacher',
    colleges: 'Fergusson College Pune, ILS Law College, NLUs' },
  { title: 'Pure Science and Research', stream: 'Science (PCM / PCB)', exams: 'IISER Aptitude Test, NEST, CUET', courses: 'B.Sc., Integrated M.Sc.',
    roles: 'Research scientist, lecturer, lab analyst, data scientist',
    colleges: 'IISER Pune, IISc Bangalore, University of Pune' }
];

/* Scholarships */
const SCHOLARSHIPS = [
  { name: 'National Scholarship Portal — Pre-Matric and Post-Matric', category: 'Government', amount: '₹10,000 – ₹20,000 per year',
    eligibility: 'Family income below ₹2.5 lakh per year; minimum 50% marks', deadline: '31 October 2026', link: 'https://scholarships.gov.in' },
  { name: 'Maharashtra EBC Scholarship', category: 'State', amount: 'Full or partial tuition fee waiver',
    eligibility: 'Maharashtra domicile; family income below ₹8 lakh', deadline: '30 November 2026', link: 'https://mahadbt.maharashtra.gov.in' },
  { name: 'National Talent Search Examination (NTSE)', category: 'Merit', amount: '₹1,250 per month',
    eligibility: 'Class 10 students who qualify both stages', deadline: '15 September 2026', link: 'https://ncert.nic.in' },
  { name: 'Rajarshi Chhatrapati Shahu Maharaj Fee Reimbursement', category: 'State', amount: '50% tuition fee',
    eligibility: 'Maharashtra students in professional courses; income below ₹8 lakh', deadline: '31 December 2026', link: 'https://mahadbt.maharashtra.gov.in' },
  { name: 'INSPIRE Scholarship (SHE)', category: 'Merit', amount: '₹80,000 per year',
    eligibility: 'Top 1% in Class 12 board pursuing B.Sc. in basic sciences', deadline: '31 July 2026', link: 'https://online-inspire.gov.in' },
  { name: 'Pragati Scholarship for Girls (AICTE)', category: 'Girls', amount: '₹50,000 per year',
    eligibility: 'Girl students in the first year of an AICTE-approved course', deadline: '30 September 2026', link: 'https://www.aicte-india.org' },
  { name: 'Post-Matric Scholarship for SC / ST Students', category: 'Government', amount: 'Fee reimbursement and maintenance allowance',
    eligibility: 'SC/ST students; family income below ₹2.5 lakh', deadline: '31 October 2026', link: 'https://scholarships.gov.in' },
  { name: 'Lila Poonawalla Foundation Scholarship', category: 'Private', amount: '₹35,000 per year',
    eligibility: 'Girl students from Maharashtra with 60% or more in Class 12', deadline: '31 August 2026', link: 'https://lilapoonawallafoundation.com' }
];

/* Subject-wise attendance for the logged-in demo student */
const ATTENDANCE = [
  { subject: 'Physics',   held: 62, attended: 55 },
  { subject: 'Chemistry', held: 60, attended: 51 },
  { subject: 'Maths',     held: 66, attended: 60 },
  { subject: 'Biology',   held: 58, attended: 41 },
  { subject: 'English',   held: 40, attended: 36 }
];

/* Fee payment history */
const FEES = [
  { receipt: 'SM/2026/0431', date: '12 Jun 2026', head: 'Admission fee',        mode: 'UPI',          amount: 5000, status: 'Paid' },
  { receipt: 'SM/2026/0612', date: '05 Aug 2026', head: 'Term 1 tuition fee',   mode: 'Net banking',  amount: 12000, status: 'Paid' },
  { receipt: 'SM/2026/0788', date: '02 Sep 2026', head: 'Study material fee',   mode: 'Cash',         amount: 3000, status: 'Paid' },
  { receipt: '—',            date: 'Due 15 Nov 2026', head: 'Term 2 tuition fee', mode: '—',          amount: 12000, status: 'Pending' },
  { receipt: '—',            date: 'Due 10 Jan 2027', head: 'Examination fee',    mode: '—',          amount: 2500, status: 'Pending' }
];

/* Notifications shown on the dashboards */
const NOTIFICATIONS = [
  { title: 'MHT-CET 2027 registration opens on 5 October', date: '18 Sep 2026', tag: 'Exam' },
  { title: 'Unit Test 2 timetable uploaded for Class 12', date: '16 Sep 2026', tag: 'College' },
  { title: 'New Organic Chemistry notes added under Class 12', date: '14 Sep 2026', tag: 'Material' },
  { title: 'Term 2 tuition fee is due on 15 November', date: '12 Sep 2026', tag: 'Fees' },
  { title: 'NEET 2027 syllabus released by the NTA', date: '09 Sep 2026', tag: 'Exam' }
];

/* Student roll for faculty and admin dashboards */
const STUDENTS = [
  { roll: '11A-04', name: 'Aarti Deshmukh',  cls: '11', stream: 'PCB', exam: 'NEET',    att: 91, score: 78, fees: 'Paid' },
  { roll: '11A-09', name: 'Rohit Kulkarni',  cls: '11', stream: 'PCM', exam: 'JEE',     att: 84, score: 66, fees: 'Pending' },
  { roll: '11B-02', name: 'Sanika Pawar',    cls: '11', stream: 'PCM', exam: 'MHT-CET', att: 76, score: 71, fees: 'Paid' },
  { roll: '12A-01', name: 'Nikhil Jadhav',   cls: '12', stream: 'PCM', exam: 'JEE',     att: 88, score: 83, fees: 'Paid' },
  { roll: '12A-07', name: 'Prerna Shinde',   cls: '12', stream: 'PCB', exam: 'NEET',    att: 94, score: 89, fees: 'Paid' },
  { roll: '12A-12', name: 'Omkar Bhosale',   cls: '12', stream: 'PCM', exam: 'JEE',     att: 68, score: 54, fees: 'Pending' },
  { roll: '12B-05', name: 'Shruti Gaikwad',  cls: '12', stream: 'PCB', exam: 'NEET',    att: 81, score: 74, fees: 'Paid' },
  { roll: '12B-11', name: 'Aditya Wagh',     cls: '12', stream: 'PCM', exam: 'MHT-CET', att: 72, score: 61, fees: 'Pending' }
];

/* Faculty list for the admin dashboard */
const FACULTY = [
  { id: 'F-01', name: 'Mrs. S. R. Patil',   subject: 'Physics',   classes: '11, 12', phone: '98XXXXXX21', status: 'Active' },
  { id: 'F-02', name: 'Mr. A. V. Kale',     subject: 'Chemistry', classes: '11, 12', phone: '98XXXXXX47', status: 'Active' },
  { id: 'F-03', name: 'Mrs. P. D. Joshi',   subject: 'Maths',     classes: '12',     phone: '97XXXXXX08', status: 'Active' },
  { id: 'F-04', name: 'Dr. M. K. Sable',    subject: 'Biology',   classes: '11, 12', phone: '94XXXXXX33', status: 'On leave' }
];

/* Latest five test scores, used by the CSS bar chart */
const SCORES = [
  { label: 'Test 1', value: 58 },
  { label: 'Test 2', value: 64 },
  { label: 'Test 3', value: 71 },
  { label: 'Test 4', value: 69 },
  { label: 'Test 5', value: 82 }
];


/* ============================================================
   SECTION 1B — LOCAL STORAGE-BACKED DATA
   This is a frontend-only demo: there is no server, so anything a
   faculty or admin user "saves" is written to this ONE browser's
   localStorage. It survives a refresh, but a quiz created here is
   NOT visible to a student on a different device or browser — a real
   backend (a server + database) would replace every loadJSON/saveJSON
   call below with an API request.
   ============================================================ */

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (e) { /* storage full or blocked — fail quietly */ }
}

/* Quizzes a faculty member has built. Each question is
   { q, opts: [4 strings], answer: index of the correct option }. */
let QUIZZES = loadJSON('mc_quizzes', []);

/* One row per finished (or auto-submitted) quiz attempt. */
let ATTEMPTS = loadJSON('mc_attempts', []);

/* Material uploaded through the faculty "Upload material" form. Kept
   separate from the seeded MATERIALS array and merged when rendering,
   so a fresh page load always has the seed data even before anyone
   uploads anything. */
let EXTRA_MATERIALS = loadJSON('mc_materials_extra', []);
function allMaterials() { return [...MATERIALS, ...EXTRA_MATERIALS]; }

/* Notice board — admin can post, everyone signed in sees it. Seeded
   with two examples so the panel isn't empty on first load. */
let NOTICES = loadJSON('mc_notices', [
  { title: 'Diwali break: 8–12 November, classes resume 13 Nov.', date: '18 Sep 2026', postedBy: 'Owner' },
  { title: 'Term 2 fee due 15 November — pay early to avoid a late charge.', date: '12 Sep 2026', postedBy: 'Owner' }
]);

function persistQuizzes()  { saveJSON('mc_quizzes', QUIZZES); }
function persistAttempts() { saveJSON('mc_attempts', ATTEMPTS); }
function persistMaterials(){ saveJSON('mc_materials_extra', EXTRA_MATERIALS); }
function persistNotices()  { saveJSON('mc_notices', NOTICES); }


/* ============================================================
   SECTION 2 — SMALL HELPERS
   ============================================================ */

/* Shorthand for document.querySelector / querySelectorAll */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* Escape text before putting it into innerHTML */
function esc(str) {
  return String(str).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/* Format a number as Indian rupees, e.g. 12000 -> ₹12,000 */
function rupees(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}

/* Pick a colour class for a percentage bar */
function barClass(pct) {
  if (pct < 60) return 'low';
  if (pct < 75) return 'mid';
  return '';
}


/* ============================================================
   SECTION 3 — LOGIN SIMULATION (localStorage only)
   ============================================================ */

const Auth = {
  /* Save the signed-in user */
  login(role, name, email) {
    localStorage.setItem('mc_user', JSON.stringify({ role, name, email }));
  },
  /* Read the signed-in user, or null */
  user() {
    try { return JSON.parse(localStorage.getItem('mc_user')); }
    catch (e) { return null; }
  },
  /* Clear the session and go back to the home page */
  logout() {
    localStorage.removeItem('mc_user');
    window.location.href = 'index.html';
  },
  /* Dashboard page that belongs to each role */
  home(role) {
    if (role === 'faculty') return 'faculty-dashboard.html';
    if (role === 'admin')   return 'admin-dashboard.html';
    return 'student-dashboard.html';
  }
};

/* Fill any element marked data-user-name / data-user-role with the
   signed-in user's details. Falls back to a demo student so that the
   dashboards can still be opened directly during a demonstration. */
function paintUser() {
  const u = Auth.user();
  /* Nobody has signed in — leave the placeholder names in the HTML so the
     dashboards can still be opened directly during a demonstration. */
  if (!u) return;

  $$('[data-user-name]').forEach(el => el.textContent = u.name);
  $$('[data-user-role]').forEach(el => el.textContent = ({
    student: 'Student · Class 12 (PCB)',
    faculty: 'Faculty · Physics',
    admin:   'Owner / Admin'
  })[u.role] || 'Student');
  $$('[data-first-name]').forEach(el => el.textContent = u.name.split(' ')[0]);
}


/* ============================================================
   SECTION 4 — THINGS EVERY PAGE NEEDS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile navigation toggle --- */
  const toggle = $('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const nav = $('.nav');
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  /* --- Mark the current page in the navigation --- */
  const here = location.pathname.split('/').pop() || 'index.html';
  $$('.nav a, .sidebar a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });

  /* --- Log out buttons --- */
  $$('[data-logout]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    Auth.logout();
  }));

  /* --- Show the signed-in user's name where needed --- */
  paintUser();

  /* --- Tab panels (used on the faculty and admin dashboards) --- */
  $$('.tabs').forEach(bar => {
    bar.addEventListener('click', e => {
      const btn = e.target.closest('button[data-tab]');
      if (!btn) return;
      $$('button', bar).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      $$('.tab-panel').forEach(p => p.classList.toggle('active', p.id === btn.dataset.tab));
    });
  });

  /* --- Any button that only exists for the prototype --- */
  $$('[data-demo]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    alert(b.dataset.demo || 'This is a prototype. The action is not connected to a server yet.');
  }));

  /* --- Counting animation for the home page statistics --- */
  $$('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = target.toLocaleString('en-IN') + suffix;
      return;
    }
    let n = 0;
    const step = Math.ceil(target / 45);
    const tick = setInterval(() => {
      n = Math.min(n + step, target);
      el.textContent = n.toLocaleString('en-IN') + suffix;
      if (n >= target) clearInterval(tick);
    }, 22);
  });

  /* --- Run the builder belonging to this page, if there is one --- */
  const page = document.body.dataset.page;
  if (page && typeof Pages[page] === 'function') Pages[page]();
});


/* ============================================================
   SECTION 5 — PER-PAGE CODE
   Each key matches the data-page attribute on <body>.
   ============================================================ */

const Pages = {};

/* ---------- login.html ---------- */
Pages.login = function () {
  const form = $('#loginForm');

  /* If the home page sent a role in the address bar, preselect it */
  const wanted = new URLSearchParams(location.search).get('role');
  if (wanted && $(`#role-${wanted}`)) $(`#role-${wanted}`).checked = true;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = $('#email').value.trim();
    const pass  = $('#password').value;
    const role  = $('input[name=role]:checked').value;
    let ok = true;

    /* Simple client-side validation */
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    $('#emailError').classList.toggle('show', !emailOk);
    if (!emailOk) ok = false;

    const passOk = pass.length >= 6;
    $('#passError').classList.toggle('show', !passOk);
    if (!passOk) ok = false;

    if (!ok) return;

    /* Build a display name out of the email, then "sign in" */
    const guess = email.split('@')[0].replace(/[._]/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
    Auth.login(role, guess || 'Student', email);
    window.location.href = Auth.home(role);
  });

  /* Register button — the prototype has no sign-up flow yet */
  $('#registerBtn').addEventListener('click', () => {
    alert('Registration is not part of the prototype. Use any email address and a password of six or more characters to sign in.');
  });
};

/* ---------- student-dashboard.html ---------- */
Pages.studentDashboard = function () {
  /* Attendance percentage across all subjects */
  const held = ATTENDANCE.reduce((s, r) => s + r.held, 0);
  const att  = ATTENDANCE.reduce((s, r) => s + r.attended, 0);
  const pct  = Math.round(att / held * 100);
  $('#attValue').textContent = pct + '%';

  const pending = FEES.filter(f => f.status === 'Pending')
                      .reduce((s, f) => s + f.amount, 0);
  $('#feeValue').textContent = pending ? rupees(pending) : 'Cleared';
  $('#feeCaption').textContent = pending ? 'Pending, next due 15 Nov' : 'All dues cleared';

  $('#scoreValue').textContent = SCORES[SCORES.length - 1].value + '%';
  $('#notifValue').textContent = NOTIFICATIONS.length;

  /* Bar chart of the last five test scores, drawn with plain CSS */
  $('#scoreChart').innerHTML = SCORES.map(s => `
    <div class="chart-col">
      <div class="chart-bar" style="height:${s.value}%"><b>${s.value}</b></div>
      <small>${esc(s.label)}</small>
    </div>`).join('');

  /* Notification list */
  $('#notifList').innerHTML = NOTIFICATIONS.map(n => `
    <li class="flex between" style="padding:11px 0;border-bottom:1px solid var(--line)">
      <span>
        <span class="chip ${n.tag === 'Fees' ? 'amber' : n.tag === 'Exam' ? '' : 'teal'}">${esc(n.tag)}</span>
        <span style="margin-left:8px">${esc(n.title)}</span>
      </span>
      <small class="text-muted">${esc(n.date)}</small>
    </li>`).join('');
};

/* ---------- study-material.html ---------- */
Pages.material = function () {
  const out = $('#materialList');
  const count = $('#materialCount');

  function render() {
    const cls  = $('#fClass').value;
    const sub  = $('#fSubject').value;
    const type = $('#fType').value;
    const exam = $('#fExam').value;
    const q    = $('#fSearch').value.trim().toLowerCase();

    const rows = allMaterials().filter(m =>
      (!cls  || m.cls === cls) &&
      (!sub  || m.subject === sub) &&
      (!type || m.type === type) &&
      (!exam || m.exam === exam) &&
      (!q    || m.title.toLowerCase().includes(q) || m.chapter.toLowerCase().includes(q))
    );

    count.textContent = `${rows.length} of ${allMaterials().length} resources`;

    out.innerHTML = rows.length ? rows.map(m => `
      <article class="card">
        <div class="flex between mb-16">
          <span class="chip ${m.type === 'MCQs' ? 'amber' : m.type === 'Formula Sheet' ? 'teal' : ''}">${esc(m.type)}</span>
          <small class="text-muted">${esc(m.size)}</small>
        </div>
        <h3>${esc(m.title)}</h3>
        <p>Class ${esc(m.cls)} · ${esc(m.subject)} · ${esc(m.chapter)} · useful for ${esc(m.exam)} · ${m.pages} pages</p>
        <div class="flex mt-16">
          <button class="btn btn-primary btn-sm" data-demo="No PDF viewer yet — this demo isn't hooked up to a file server.">View</button>
          <button class="btn btn-ghost btn-sm" data-demo="Can't download from here yet, there's no storage behind this demo.">Download</button>
        </div>
      </article>`).join('')
      : `<div class="card text-center"><h3>No matching material</h3>
         <p class="text-muted" style="margin-inline:auto">Try a different subject or clear the filters to see everything.</p></div>`;

    /* The cards were just created, so attach their demo handlers now */
    $$('[data-demo]', out).forEach(b =>
      b.addEventListener('click', () => alert(b.dataset.demo)));
  }

  $$('#filterBar select, #fSearch').forEach(el => {
    el.addEventListener('input', render);
    el.addEventListener('change', render);
  });
  $('#clearFilters').addEventListener('click', () => {
    $$('#filterBar select').forEach(s => s.value = '');
    $('#fSearch').value = '';
    render();
  });

  render();
};

/* ---------- pyq.html ---------- */
Pages.pyq = function () {
  const body = $('#pyqBody');

  function render() {
    const exam = $('#pExam').value;
    const year = $('#pYear').value;
    const rows = PYQS.filter(p =>
      (!exam || p.exam === exam) && (!year || String(p.year) === year));

    $('#pyqCount').textContent = `${rows.length} paper${rows.length === 1 ? '' : 's'} found`;

    body.innerHTML = rows.length ? rows.map(p => `
      <tr>
        <td><strong>${esc(p.paper)}</strong></td>
        <td><span class="chip">${esc(p.exam)}</span></td>
        <td>${p.year}</td>
        <td>${esc(p.subject)}</td>
        <td>${p.solution ? '<span class="chip teal">Included</span>' : '<span class="chip red">Not yet</span>'}</td>
        <td>${esc(p.size)}</td>
        <td><button class="btn btn-ghost btn-sm" data-demo="Downloads aren't wired up in this build.">Download</button></td>
      </tr>`).join('')
      : `<tr><td colspan="7" class="text-center text-muted" style="padding:28px">No papers match these filters.</td></tr>`;

    $$('[data-demo]', body).forEach(b =>
      b.addEventListener('click', () => alert(b.dataset.demo)));
  }

  /* Fill the year dropdown from the data itself */
  const years = [...new Set(PYQS.map(p => p.year))].sort((a, b) => b - a);
  $('#pYear').innerHTML = '<option value="">All years</option>' +
    years.map(y => `<option>${y}</option>`).join('');

  $('#pExam').addEventListener('change', render);
  $('#pYear').addEventListener('change', render);
  render();
};

/* ---------- mock-test.html ---------- */
Pages.mockTest = function () {
  let order = [];      // question order for this attempt
  let given = [];      // the option the student picked for each question
  let at = 0;          // current question index
  let left = 0;        // seconds remaining
  let ticker = null;

  const setup  = $('#setupView');
  const test   = $('#testView');
  const result = $('#resultView');

  /* --- Start the test --- */
  $('#startBtn').addEventListener('click', () => {
    const n = Math.min(parseInt($('#tCount').value, 10), QUESTIONS.length);
    order = QUESTIONS.map((_, i) => i).sort(() => Math.random() - 0.5).slice(0, n);
    given = new Array(n).fill(null);
    at = 0;
    left = n * 60;                       // one minute per question

    setup.classList.add('hidden');
    result.classList.add('hidden');
    test.classList.remove('hidden');

    $('#testLabel').textContent =
      `${$('#tExam').value} · ${$('#tSubject').value} · ${$('#tLevel').value}`;

    buildPalette();
    showQuestion();
    clearInterval(ticker);
    ticker = setInterval(tick, 1000);
    tick();
  });

  /* --- Countdown --- */
  function tick() {
    const m = String(Math.floor(left / 60)).padStart(2, '0');
    const s = String(left % 60).padStart(2, '0');
    const t = $('#timer');
    t.textContent = `${m}:${s}`;
    t.classList.toggle('warning', left <= 60);
    if (left <= 0) { clearInterval(ticker); finish(); return; }
    left--;
  }

  /* --- Question palette on the right --- */
  function buildPalette() {
    $('#palette').innerHTML = order
      .map((_, i) => `<button type="button" data-go="${i}">${i + 1}</button>`).join('');
  }

  /* One delegated handler, attached once, works for every attempt */
  $('#palette').addEventListener('click', e => {
    const b = e.target.closest('button[data-go]');
    if (!b) return;
    at = parseInt(b.dataset.go, 10);
    showQuestion();
  });

  function paintPalette() {
    $$('#palette button').forEach((b, i) => {
      b.classList.toggle('answered', given[i] !== null);
      b.classList.toggle('current', i === at);
    });
  }

  /* --- Draw the current question --- */
  function showQuestion() {
    const q = QUESTIONS[order[at]];
    $('#qNumber').textContent = `Question ${at + 1} of ${order.length}`;
    $('#qText').textContent = q.q;
    $('#options').innerHTML = q.opts.map((o, i) => `
      <label class="option${given[at] === i ? ' selected' : ''}">
        <input type="radio" name="opt" value="${i}"${given[at] === i ? ' checked' : ''}>
        <span>${esc(o)}</span>
      </label>`).join('');

    $$('#options input').forEach(inp => inp.addEventListener('change', () => {
      given[at] = parseInt(inp.value, 10);
      $$('#options .option').forEach((l, i) => l.classList.toggle('selected', i === given[at]));
      paintPalette();
    }));

    $('#prevBtn').disabled = at === 0;
    $('#nextBtn').textContent = at === order.length - 1 ? 'Last question' : 'Next';
    $('#nextBtn').disabled = at === order.length - 1;
    paintPalette();
  }

  $('#nextBtn').addEventListener('click', () => { if (at < order.length - 1) { at++; showQuestion(); } });
  $('#prevBtn').addEventListener('click', () => { if (at > 0) { at--; showQuestion(); } });
  $('#clearBtn').addEventListener('click', () => { given[at] = null; showQuestion(); });

  $('#submitBtn').addEventListener('click', () => {
    const blank = given.filter(g => g === null).length;
    const msg = blank
      ? `${blank} question${blank === 1 ? ' is' : 's are'} still unanswered. Submit anyway?`
      : 'Submit the test and see your score?';
    if (confirm(msg)) finish();
  });

  /* --- Score the attempt --- */
  function finish() {
    clearInterval(ticker);
    let right = 0;
    order.forEach((qi, i) => { if (given[i] === QUESTIONS[qi].answer) right++; });

    const total = order.length;
    const wrong = given.filter((g, i) => g !== null && g !== QUESTIONS[order[i]].answer).length;
    const skipped = given.filter(g => g === null).length;
    const pct = Math.round(right / total * 100);

    test.classList.add('hidden');
    result.classList.remove('hidden');

    $('#scoreRing').style.setProperty('--pct', pct + '%');
    $('#scorePct').textContent = pct + '%';
    $('#rRight').textContent = right;
    $('#rWrong').textContent = wrong;
    $('#rSkip').textContent = skipped;
    $('#rVerdict').textContent =
      pct >= 80 ? 'Strong result. Move on to a harder difficulty level.' :
      pct >= 60 ? 'A good attempt. Revise the questions you missed and try again.' :
      pct >= 40 ? 'Keep practising. Read the explanations below before your next attempt.' :
                  'Go back to the notes for this chapter, then attempt an easier test first.';

    /* Answer key with a short explanation for each question */
    $('#review').innerHTML = order.map((qi, i) => {
      const q = QUESTIONS[qi];
      const mine = given[i];
      const correct = mine === q.answer;
      return `
        <div class="card mb-16">
          <div class="flex between mb-16">
            <span class="chip ${correct ? 'teal' : mine === null ? 'amber' : 'red'}">
              ${correct ? 'Correct' : mine === null ? 'Not attempted' : 'Incorrect'}
            </span>
            <small class="text-muted">Question ${i + 1}</small>
          </div>
          <h3 style="font-size:1rem">${esc(q.q)}</h3>
          <p class="mt-16"><strong>Correct answer:</strong> ${esc(q.opts[q.answer])}</p>
          ${mine !== null && !correct ? `<p><strong>You chose:</strong> ${esc(q.opts[mine])}</p>` : ''}
          <p class="small">${esc(q.why)}</p>
        </div>`;
    }).join('');
  }

  $('#retryBtn').addEventListener('click', () => {
    result.classList.add('hidden');
    setup.classList.remove('hidden');
  });
};

/* ---------- quizzes.html (student side) ----------
   Three views: the list of published quizzes, the timed attempt screen
   (with the anti-cheat deterrents described below), and the result +
   leaderboard screen.

   IMPORTANT — what the anti-cheat code below can and cannot do:
   It can tell when this browser tab loses focus or visibility, and when
   the page leaves fullscreen, because those are real browser events.
   It CANNOT see the screen from outside the browser, so it cannot detect
   or block someone photographing the monitor with a phone, using a
   second device to look up answers, or asking an AI tool to read a
   photo of the screen. The watermark exists only so that IF a
   screenshot leaks, it can be traced back to who took it — it is a
   deterrent after the fact, not a way to prevent the photo itself.
   Nothing client-side can close that gap; only invigilation can. */
Pages.quizzes = function () {
  const listView = $('#listView'), attemptView = $('#attemptView'), resultView = $('#resultView');
  const me = Auth.user() || { name: 'Prerna Shinde' };
  const meRoll = (STUDENTS.find(s => s.name === me.name) || { roll: 'Guest' }).roll;

  let activeQuiz = null, order = [], given = [], at = 0, left = 0;
  let ticker = null, wmInterval = null, startTime = 0, tabSwitches = 0;
  let warned = false, finished = false;

  /* ---------- View 1: list ---------- */
  function renderList() {
    const published = QUIZZES.filter(q => q.status === 'published');
    $('#quizCards').innerHTML = published.length ? published.map(q => `
      <div class="card">
        <span class="chip">${esc(q.subject)}</span>
        <h3 class="mt-16">${esc(q.title)}</h3>
        <p class="mt-16">${q.questions.length} questions &middot; ${q.durationMinutes} minutes &middot; Class ${esc(q.class)}</p>
        <button class="btn btn-primary btn-sm mt-16" data-start="${q.id}">Start quiz</button>
      </div>`).join('')
      : `<div class="card text-center"><h3>No quizzes yet</h3><p class="text-muted" style="margin-inline:auto">Check back once your faculty publishes one.</p></div>`;

    $$('[data-start]').forEach(b => b.addEventListener('click', () => startQuiz(b.dataset.start)));
  }

  /* ---------- View 2: taking the quiz ---------- */
  function requestFS() {
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen;
    if (!req) return;
    req.call(el).catch(() => { $('#atFsRetry').classList.remove('hidden'); });
    setTimeout(() => {
      $('#atFsRetry').classList.toggle('hidden', !!document.fullscreenElement);
    }, 400);
  }
  $('#atFsRetry').addEventListener('click', requestFS);

  function startQuiz(id) {
    activeQuiz = QUIZZES.find(q => q.id === id);
    if (!activeQuiz) return;
    order = activeQuiz.questions.map((_, i) => i);
    given = new Array(order.length).fill(null);
    at = 0; tabSwitches = 0; warned = false; finished = false;
    left = activeQuiz.durationMinutes * 60;
    startTime = Date.now();

    listView.classList.add('hidden');
    resultView.classList.add('hidden');
    attemptView.classList.remove('hidden');
    $('#atTitle').textContent = activeQuiz.title;
    $('#atMeta').textContent = `${activeQuiz.subject} · Class ${activeQuiz.class} · ${activeQuiz.questions.length} questions`;

    document.body.classList.add('quiz-armed');
    requestFS();
    buildPalette();
    buildWatermark();
    showQuestion();
    clearInterval(ticker);
    ticker = setInterval(tick, 1000);
    tick();
    armAntiCheat();
  }

  function tick() {
    const m = String(Math.floor(left / 60)).padStart(2, '0');
    const s = String(left % 60).padStart(2, '0');
    const t = $('#atTimer');
    t.textContent = `${m}:${s}`;
    t.classList.toggle('warning', left <= 60);
    if (left <= 0) { clearInterval(ticker); finish(true, 'Time ran out.'); return; }
    left--;
  }

  function buildPalette() {
    $('#atPalette').innerHTML = order.map((_, i) => `<button type="button" data-go="${i}">${i + 1}</button>`).join('');
  }
  $('#atPalette').addEventListener('click', e => {
    const b = e.target.closest('button[data-go]');
    if (!b) return;
    at = parseInt(b.dataset.go, 10);
    showQuestion();
  });
  function paintPalette() {
    $$('#atPalette button').forEach((b, i) => {
      b.classList.toggle('answered', given[i] !== null);
      b.classList.toggle('current', i === at);
    });
  }

  function showQuestion() {
    const q = activeQuiz.questions[order[at]];
    $('#atQNumber').textContent = `Question ${at + 1} of ${order.length}`;
    $('#atQText').textContent = q.q;
    $('#atOptions').innerHTML = q.opts.map((o, i) => `
      <label class="option${given[at] === i ? ' selected' : ''}">
        <input type="radio" name="atopt" value="${i}"${given[at] === i ? ' checked' : ''}>
        <span>${esc(o)}</span>
      </label>`).join('');
    $$('#atOptions input').forEach(inp => inp.addEventListener('change', () => {
      given[at] = parseInt(inp.value, 10);
      $$('#atOptions .option').forEach((l, i) => l.classList.toggle('selected', i === given[at]));
      paintPalette();
    }));
    $('#atPrev').disabled = at === 0;
    $('#atNext').textContent = at === order.length - 1 ? 'Last question' : 'Next';
    $('#atNext').disabled = at === order.length - 1;
    paintPalette();
  }
  $('#atNext').addEventListener('click', () => { if (at < order.length - 1) { at++; showQuestion(); } });
  $('#atPrev').addEventListener('click', () => { if (at > 0) { at--; showQuestion(); } });
  $('#atClear').addEventListener('click', () => { given[at] = null; showQuestion(); });
  $('#atSubmit').addEventListener('click', () => {
    const blank = given.filter(g => g === null).length;
    const msg = blank
      ? `${blank} question${blank === 1 ? ' is' : 's are'} still unanswered. Submit anyway?`
      : 'Submit the quiz?';
    if (confirm(msg)) finish(false, null);
  });

  /* Watermark: redrawn every 30s so a screenshot carries a fresh
     timestamp. This identifies a leak after the fact — see the note
     at the top of this function for what it cannot do. */
  function buildWatermark() {
    const layer = $('#atWatermark');
    function paint() {
      const label = `${me.name} · ${meRoll} · ${new Date().toLocaleTimeString()}`;
      let html = '';
      for (let r = 0; r < 7; r++) for (let c = 0; c < 3; c++) {
        html += `<span style="top:${r * 64}px;left:${c * 230 - 60}px">${esc(label)}</span>`;
      }
      layer.innerHTML = html;
    }
    paint();
    clearInterval(wmInterval);
    wmInterval = setInterval(paint, 30000);
  }

  /* Real, verifiable deterrents: tab/window visibility and fullscreen
     exit. First occurrence warns, second auto-submits. */
  function armAntiCheat() {
    document.addEventListener('visibilitychange', onLeave);
    window.addEventListener('blur', onLeave);
    document.addEventListener('fullscreenchange', onFsChange);
    $('#atCard').addEventListener('contextmenu', blockEvent);
    $('#atCard').addEventListener('copy', blockEvent);
    $('#atCard').addEventListener('cut', blockEvent);
  }
  function disarmAntiCheat() {
    document.removeEventListener('visibilitychange', onLeave);
    window.removeEventListener('blur', onLeave);
    document.removeEventListener('fullscreenchange', onFsChange);
    document.body.classList.remove('quiz-armed');
    clearInterval(wmInterval);
    if (document.fullscreenElement) { try { document.exitFullscreen(); } catch (e) {} }
  }
  function blockEvent(e) { e.preventDefault(); }
  function onLeave() {
    if (finished) return;
    if (document.hidden || !document.hasFocus()) registerViolation('You switched away from the quiz tab or window.');
  }
  function onFsChange() {
    if (finished) return;
    if (!document.fullscreenElement) registerViolation('You exited fullscreen.');
  }
  function registerViolation(reason) {
    tabSwitches++;
    if (!warned) { warned = true; showWarning(reason); }
    else finish(true, reason);
  }
  function showWarning(reason) {
    const div = document.createElement('div');
    div.className = 'cheat-warning';
    div.innerHTML = `
      <h2>You left the quiz</h2>
      <p>${esc(reason)} One more time and it submits automatically.</p>
      <button class="btn btn-primary mt-24" id="cheatReturn">Return to the quiz</button>`;
    document.body.appendChild(div);
    $('#cheatReturn').addEventListener('click', () => { div.remove(); requestFS(); });
  }

  /* ---------- View 3: result + leaderboard ---------- */
  function finish(auto, reason) {
    if (finished) return;
    finished = true;
    clearInterval(ticker);
    disarmAntiCheat();

    let right = 0;
    order.forEach((qi, i) => { if (given[i] === activeQuiz.questions[qi].answer) right++; });
    const total = order.length;
    const pct = Math.round(right / total * 100);
    const timeTaken = Math.max(1, Math.round((Date.now() - startTime) / 1000));

    ATTEMPTS.push({
      quizId: activeQuiz.id, studentName: me.name, score: pct, correctCount: right,
      timeTakenSeconds: timeTaken, tabSwitches, submittedAt: new Date().toISOString(),
      autoSubmitted: auto, autoSubmitReason: auto ? reason : null
    });
    persistAttempts();

    attemptView.classList.add('hidden');
    resultView.classList.remove('hidden');
    $('#rsRing').style.setProperty('--pct', pct + '%');
    $('#rsPct').textContent = pct + '%';
    $('#rsRight').textContent = `${right} / ${total}`;
    $('#rsTime').textContent = `${Math.floor(timeTaken / 60)}m ${timeTaken % 60}s`;
    $('#rsSwitches').textContent = tabSwitches;
    $('#rsVerdict').textContent = auto
      ? `Submitted automatically — ${reason}`
      : (pct >= 80 ? 'Strong result.' : pct >= 60 ? 'Good attempt.' : 'Keep practising this topic.');

    const rows = ATTEMPTS.filter(a => a.quizId === activeQuiz.id)
      .sort((a, b) => b.score - a.score || a.timeTakenSeconds - b.timeTakenSeconds);
    const myRank = rows.findIndex(a => a.submittedAt === ATTEMPTS[ATTEMPTS.length - 1].submittedAt) + 1;
    $('#rsRank').textContent = `${myRank} of ${rows.length}`;
    $('#rsBoard').innerHTML = rows.map((a, i) => `
      <tr style="${a.studentName === me.name ? 'background:var(--primary-lt)' : ''}">
        <td>${i + 1}</td><td>${esc(a.studentName)}</td><td><strong>${a.score}%</strong></td>
        <td>${Math.floor(a.timeTakenSeconds / 60)}m ${a.timeTakenSeconds % 60}s</td>
      </tr>`).join('');
  }

  renderList();
};

/* ---------- chatbot.html ---------- */
Pages.chatbot = function () {
  const win = $('#chatWindow');

  function add(text, who) {
    const d = document.createElement('div');
    d.className = 'msg ' + who;
    d.textContent = text;
    win.appendChild(d);
    win.scrollTop = win.scrollHeight;
    return d;
  }

  /* Find the first canned reply whose keywords appear in the question */
  function reply(question) {
    const q = question.toLowerCase();
    const hit = BOT_REPLIES.find(r => r.keys.some(k => q.includes(k)));
    return hit ? hit.text
      : 'I do not have a prepared answer for that yet. In the finished platform this question will go to the AI service. For now, try asking about Newton\'s laws, the mole concept, JEE, NEET, MHT-CET, scholarships or a study plan.';
  }

  function ask(text) {
    if (!text.trim()) return;
    add(text, 'user');
    $('#chatInput').value = '';

    /* Typing indicator while the "assistant" thinks */
    const dots = add('', 'bot');
    dots.classList.add('typing');
    dots.innerHTML = '<span></span><span></span><span></span>';

    setTimeout(() => {
      dots.remove();
      add(reply(text), 'bot');
    }, 750);
  }

  $('#chatForm').addEventListener('submit', e => {
    e.preventDefault();
    ask($('#chatInput').value);
  });

  $$('.suggestions button').forEach(b =>
    b.addEventListener('click', () => ask(b.textContent)));

  add('Hello! I am the Moungiri Coaching Classes assistant. Ask me about a topic, an exam, or where to find study material.', 'bot');
};

/* ---------- attendance.html ---------- */
Pages.attendance = function () {
  const held = ATTENDANCE.reduce((s, r) => s + r.held, 0);
  const att  = ATTENDANCE.reduce((s, r) => s + r.attended, 0);
  const pct  = Math.round(att / held * 100);

  $('#overallPct').textContent = pct + '%';
  $('#overallBar').style.width = pct + '%';
  $('#overallBar').className = barClass(pct);
  $('#heldTotal').textContent = held;
  $('#attTotal').textContent = att;
  $('#missedTotal').textContent = held - att;
  $('#attNote').textContent = pct >= 75
    ? 'You are above the 75% requirement.'
    : `You need ${Math.ceil((0.75 * held - att) / 0.25)} more lectures to reach 75%.`;

  $('#attBody').innerHTML = ATTENDANCE.map(r => {
    const p = Math.round(r.attended / r.held * 100);
    return `
      <tr>
        <td><strong>${esc(r.subject)}</strong></td>
        <td>${r.held}</td>
        <td>${r.attended}</td>
        <td>${r.held - r.attended}</td>
        <td>
          <div class="flex" style="gap:10px">
            <div class="bar"><span class="${barClass(p)}" style="width:${p}%"></span></div>
            <strong style="font-size:.88rem">${p}%</strong>
          </div>
        </td>
        <td>${p >= 75 ? '<span class="chip teal">Safe</span>' : '<span class="chip red">Short</span>'}</td>
      </tr>`;
  }).join('');
};

/* ---------- fees.html ---------- */
Pages.fees = function () {
  const total   = FEES.reduce((s, f) => s + f.amount, 0);
  const paid    = FEES.filter(f => f.status === 'Paid').reduce((s, f) => s + f.amount, 0);
  const pending = total - paid;

  $('#feeTotal').textContent   = rupees(total);
  $('#feePaid').textContent    = rupees(paid);
  $('#feePending').textContent = rupees(pending);

  $('#feeBody').innerHTML = FEES.map(f => `
    <tr>
      <td>${esc(f.receipt)}</td>
      <td>${esc(f.date)}</td>
      <td>${esc(f.head)}</td>
      <td>${esc(f.mode)}</td>
      <td><strong>${rupees(f.amount)}</strong></td>
      <td>${f.status === 'Paid'
            ? '<span class="chip teal">Paid</span>'
            : '<span class="chip amber">Pending</span>'}</td>
    </tr>`).join('');

  /* Receipt panel shows the most recent paid item */
  const last = [...FEES].reverse().find(f => f.status === 'Paid');
  $('#rNo').textContent     = last.receipt;
  $('#rDate').textContent   = last.date;
  $('#rHead').textContent   = last.head;
  $('#rMode').textContent   = last.mode;
  $('#rAmount').textContent = rupees(last.amount);
  $('#rPaidTotal').textContent = rupees(paid);
  $('#rBalance').textContent   = rupees(pending);

  $('#printBtn').addEventListener('click', () => window.print());
};

/* ---------- career.html ---------- */
Pages.career = function () {
  $('#careerList').innerHTML = CAREERS.map(c => `
    <article class="card">
      <span class="chip">${esc(c.stream)}</span>
      <h3 class="mt-16">${esc(c.title)}</h3>
      <dl style="margin-top:12px;font-size:.92rem">
        <dt style="font-weight:600;color:var(--ink)">Entrance exams</dt>
        <dd style="margin-bottom:10px">${esc(c.exams)}</dd>
        <dt style="font-weight:600;color:var(--ink)">Courses</dt>
        <dd style="margin-bottom:10px">${esc(c.courses)}</dd>
        <dt style="font-weight:600;color:var(--ink)">Where it leads</dt>
        <dd style="margin-bottom:10px">${esc(c.roles)}</dd>
        <dt style="font-weight:600;color:var(--ink)">Well-known colleges</dt>
        <dd>${esc(c.colleges)}</dd>
      </dl>
    </article>`).join('');
};

/* ---------- scholarships.html ---------- */
Pages.scholarships = function () {
  const out = $('#schList');

  function render() {
    const cat = $('#sCat').value;
    const rows = SCHOLARSHIPS.filter(s => !cat || s.category === cat);
    $('#schCount').textContent = `${rows.length} scholarship${rows.length === 1 ? '' : 's'}`;

    out.innerHTML = rows.map(s => `
      <article class="card">
        <div class="flex between mb-16">
          <span class="chip ${s.category === 'Merit' ? 'teal' : s.category === 'Private' ? 'amber' : ''}">${esc(s.category)}</span>
          <small class="text-muted">Closes ${esc(s.deadline)}</small>
        </div>
        <h3>${esc(s.name)}</h3>
        <p class="mt-16"><strong>Amount:</strong> ${esc(s.amount)}</p>
        <p><strong>Who can apply:</strong> ${esc(s.eligibility)}</p>
        <a class="btn btn-primary btn-sm mt-16" href="${esc(s.link)}" target="_blank" rel="noopener">Open the official site</a>
      </article>`).join('');
  }

  $('#sCat').addEventListener('change', render);
  render();
};

/* ---------- faculty-dashboard.html ---------- */
Pages.faculty = function () {
  /* Attendance marking list */
  $('#markBody').innerHTML = STUDENTS.map((s, i) => `
    <tr>
      <td>${esc(s.roll)}</td>
      <td><strong>${esc(s.name)}</strong></td>
      <td>Class ${esc(s.cls)} · ${esc(s.stream)}</td>
      <td>
        <label class="small" style="margin-right:14px">
          <input type="radio" name="att${i}" value="P" checked> Present
        </label>
        <label class="small">
          <input type="radio" name="att${i}" value="A"> Absent
        </label>
      </td>
    </tr>`).join('');

  /* Performance table */
  $('#perfBody').innerHTML = STUDENTS.map(s => `
    <tr>
      <td>${esc(s.roll)}</td>
      <td><strong>${esc(s.name)}</strong></td>
      <td>${esc(s.exam)}</td>
      <td>
        <div class="flex" style="gap:10px">
          <div class="bar"><span class="${barClass(s.att)}" style="width:${s.att}%"></span></div>
          <span class="small">${s.att}%</span>
        </div>
      </td>
      <td><strong>${s.score}%</strong></td>
      <td>${s.score >= 75 ? '<span class="chip teal">On track</span>'
                          : s.score >= 60 ? '<span class="chip amber">Needs work</span>'
                                          : '<span class="chip red">At risk</span>'}</td>
    </tr>`).join('');

  /* Forms — the prototype only confirms, it does not save */
  $('#uploadForm').addEventListener('submit', e => {
    e.preventDefault();
    const title = $('#mTitle').value.trim();
    if (!title) return;
    EXTRA_MATERIALS.push({
      title, cls: $('#mClass').value, subject: $('#mSubject').value,
      chapter: $('#mChapter').value.trim() || '—', exam: '', type: $('#mType').value,
      pages: 1, size: $('#mFile').files[0] ? Math.max(1, Math.round($('#mFile').files[0].size / 1024)) + ' KB' : '—'
    });
    persistMaterials();
    alert(`"${title}" is now live on the Study Material page (this browser only — there's no file server behind it, so the actual file itself isn't stored).`);
    e.target.reset();
  });

  $('#notifyForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Notification sent to the selected students.');
    e.target.reset();
  });

  $('#saveAttendance').addEventListener('click', () => {
    const absent = STUDENTS.filter((_, i) =>
      $(`input[name=att${i}]:checked`).value === 'A').length;
    alert(`Attendance saved. ${STUDENTS.length - absent} present, ${absent} absent.`);
  });

  /* ---------- Quiz builder ---------- */
  const me = (Auth.user() || { name: 'Mrs. S. R. Patil' }).name;
  let qNum = 0;
  let editingId = null; // set while editing an existing quiz, cleared after saving

  function addQuestionBlock(prefill) {
    qNum++;
    const qid = 'q' + qNum;
    const div = document.createElement('div');
    div.className = 'card mb-16';
    div.dataset.qid = qid;
    div.innerHTML = `
      <div class="flex between mb-16">
        <strong>Question ${qNum}</strong>
        <button type="button" class="btn btn-danger btn-sm" data-remove-q>Remove</button>
      </div>
      <div class="field">
        <label>Question text</label>
        <input type="text" class="qz-q-text" placeholder="Type the question" value="${esc(prefill ? prefill.q : '')}">
      </div>
      <div class="grid grid-2" style="gap:10px">
        ${[0, 1, 2, 3].map(i => `
          <div class="field">
            <label class="flex" style="gap:6px;font-weight:500">
              <input type="radio" name="correct-${qid}" value="${i}" ${prefill && prefill.answer === i ? 'checked' : ''}>
              Option ${String.fromCharCode(65 + i)} (correct?)
            </label>
            <input type="text" class="qz-opt" data-i="${i}" value="${esc(prefill ? prefill.opts[i] : '')}">
          </div>`).join('')}
      </div>`;
    $('#qzQuestions').appendChild(div);
    div.querySelector('[data-remove-q]').addEventListener('click', () => div.remove());
  }

  $('#qzAddQ').addEventListener('click', () => addQuestionBlock());
  addQuestionBlock(); // start every fresh builder with one empty question

  function readBuilder() {
    const title = $('#qzTitle').value.trim();
    const blocks = $$('#qzQuestions > div');
    if (!title) { $('#qzMsg').textContent = 'Give the quiz a title first.'; return null; }
    if (!blocks.length) { $('#qzMsg').textContent = 'Add at least one question.'; return null; }

    const questions = [];
    for (const b of blocks) {
      const q = $('.qz-q-text', b).value.trim();
      const opts = $$('.qz-opt', b).map(i => i.value.trim());
      const checked = $(`input[name^=correct-]:checked`, b);
      if (!q || opts.some(o => !o) || !checked) {
        $('#qzMsg').textContent = 'Every question needs its text, all 4 options filled in, and one marked correct.';
        return null;
      }
      questions.push({ q, opts, answer: parseInt(checked.value, 10) });
    }
    $('#qzMsg').textContent = '';
    return {
      title, subject: $('#qzSubject').value, class: $('#qzClass').value,
      durationMinutes: parseInt($('#qzDuration').value, 10) || 20,
      questions, createdBy: me
    };
  }

  function resetBuilder() {
    $('#qzTitle').value = '';
    $('#qzQuestions').innerHTML = '';
    qNum = 0;
    editingId = null;
    $('#qzPublish').textContent = 'Publish to class';
    addQuestionBlock();
  }

  function loadQuizIntoBuilder(id) {
    const quiz = QUIZZES.find(q => q.id === id);
    if (!quiz) return;
    editingId = id;
    $('#qzTitle').value = quiz.title;
    $('#qzSubject').value = quiz.subject;
    $('#qzClass').value = quiz.class;
    $('#qzDuration').value = quiz.durationMinutes;
    $('#qzQuestions').innerHTML = '';
    qNum = 0;
    quiz.questions.forEach(q => addQuestionBlock(q));
    $('#qzPublish').textContent = 'Save changes';
    $('#qzMsg').textContent = `Editing "${quiz.title}" — changes overwrite this quiz when you save.`;
    $('#qzTitle').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function saveQuiz(status) {
    const draft = readBuilder();
    if (!draft) return;
    if (editingId) {
      const i = QUIZZES.findIndex(q => q.id === editingId);
      if (i > -1) QUIZZES[i] = { ...QUIZZES[i], ...draft, status };
    } else {
      QUIZZES.push({ id: 'quiz_' + Date.now(), status, createdAt: new Date().toISOString(), ...draft });
    }
    persistQuizzes();
    resetBuilder();
    renderQuizList();
    alert(status === 'published'
      ? `"${draft.title}" is published. Students in this browser can now see it on their Quizzes page.`
      : `"${draft.title}" saved as a draft — only you can see it until you publish.`);
  }

  $('#qzSaveDraft').addEventListener('click', () => saveQuiz('draft'));
  $('#qzPublish').addEventListener('click', () => saveQuiz('published'));

  function renderQuizList() {
    const mine = QUIZZES.filter(q => q.createdBy === me);
    $('#qzList').innerHTML = mine.length ? mine.map(q => {
      const attempts = ATTEMPTS.filter(a => a.quizId === q.id).length;
      return `
        <tr>
          <td><strong>${esc(q.title)}</strong></td>
          <td>${esc(q.subject)}</td>
          <td>Class ${esc(q.class)}</td>
          <td>${q.questions.length}</td>
          <td>${q.status === 'published' ? '<span class="chip teal">Published</span>' : '<span class="chip amber">Draft</span>'}</td>
          <td>${attempts}</td>
          <td class="flex">
            <button class="btn btn-ghost btn-sm" data-edit="${q.id}">Edit</button>
            ${attempts ? `<button class="btn btn-ghost btn-sm" data-board="${q.id}">Leaderboard</button>` : ''}
          </td>
        </tr>`;
    }).join('') : `<tr><td colspan="7" class="text-center text-muted" style="padding:20px">No quizzes yet — build one above.</td></tr>`;

    $$('[data-board]', $('#qzList')).forEach(b =>
      b.addEventListener('click', () => showLeaderboard(b.dataset.board, false)));
    $$('[data-edit]', $('#qzList')).forEach(b =>
      b.addEventListener('click', () => loadQuizIntoBuilder(b.dataset.edit)));
  }

  function showLeaderboard(quizId, isAdminView) {
    const quiz = QUIZZES.find(q => q.id === quizId);
    const rows = ATTEMPTS.filter(a => a.quizId === quizId)
      .sort((a, b) => b.score - a.score || a.timeTakenSeconds - b.timeTakenSeconds);

    $('#qzBoardTitle').textContent = `Leaderboard — ${quiz ? quiz.title : quizId}`;
    $('#qzBoardBody').innerHTML = rows.length ? rows.map((a, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${esc(a.studentName)}</td>
        <td><strong>${a.score}%</strong></td>
        <td>${Math.floor(a.timeTakenSeconds / 60)}m ${a.timeTakenSeconds % 60}s</td>
        <td>${a.tabSwitches}</td>
        <td>${a.autoSubmitted ? `<span class="chip red">Left early — ${esc(a.autoSubmitReason || '')}</span>` : '<span class="chip teal">Completed</span>'}</td>
      </tr>`).join('') : `<tr><td colspan="6" class="text-center text-muted" style="padding:16px">No attempts yet.</td></tr>`;

    $('#qzBoardWrap').classList.remove('hidden');
    $('#qzBoardWrap').scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    /* Score distribution — how many students landed in each 20-point band */
    const bands = ['0-20', '21-40', '41-60', '61-80', '81-100'];
    const counts = [0, 0, 0, 0, 0];
    rows.forEach(a => counts[Math.min(4, Math.floor(a.score / 20))]++);
    $('#qzChart').innerHTML = bands.map((label, i) => `
      <div class="chart-col">
        <div class="chart-bar" style="height:${rows.length ? (counts[i] / rows.length * 100) : 0}%"><b>${counts[i]}</b></div>
        <small>${label}</small>
      </div>`).join('');
  }

  renderQuizList();
};

/* ---------- admin-dashboard.html ---------- */
Pages.admin = function () {
  /* Summary cards */
  const pendingFees = STUDENTS.filter(s => s.fees === 'Pending').length;
  $('#aStudents').textContent = STUDENTS.length;
  $('#aFaculty').textContent  = FACULTY.length;
  $('#aMaterials').textContent = allMaterials().length;
  $('#aPending').textContent  = pendingFees;
  $('#aQuizzes').textContent  = QUIZZES.filter(q => q.status === 'published').length;

  /* Students present/absent "today" — this demo has no real day-by-day
     attendance log, so it's read off each student's overall attendance
     percentage as a stand-in (≥75% counts as present today). A real
     version would replace this with an actual daily register. */
  const stuPresent = STUDENTS.filter(s => s.att >= 75).length;
  $('#aStuPresent').textContent = stuPresent;
  $('#aStuAbsent').textContent  = STUDENTS.length - stuPresent;

  /* Faculty attendance IS real and persisted — marked by the owner below.
     Anyone already on leave defaults to absent; everyone else defaults
     to present until the owner changes it. */
  let facToday = loadJSON('mc_faculty_today', null);
  if (!facToday) {
    facToday = {};
    FACULTY.forEach(f => { facToday[f.id] = f.status === 'On leave' ? 'A' : 'P'; });
    saveJSON('mc_faculty_today', facToday);
  }
  function renderFacStat() {
    const present = Object.values(facToday).filter(v => v === 'P').length;
    $('#aFacPresent').textContent = present;
    $('#aFacPresentNote').textContent = `of ${FACULTY.length} faculty`;
  }
  renderFacStat();

  $('#facAttBody').innerHTML = FACULTY.map(f => `
    <tr>
      <td><strong>${esc(f.name)}</strong></td>
      <td>${esc(f.subject)}</td>
      <td>
        <label class="small" style="margin-right:14px">
          <input type="radio" name="facatt-${f.id}" value="P" ${facToday[f.id] === 'P' ? 'checked' : ''}> Present
        </label>
        <label class="small">
          <input type="radio" name="facatt-${f.id}" value="A" ${facToday[f.id] === 'A' ? 'checked' : ''}> Absent
        </label>
      </td>
    </tr>`).join('');

  $('#saveFacAttendance').addEventListener('click', () => {
    FACULTY.forEach(f => {
      const checked = $(`input[name=facatt-${f.id}]:checked`);
      if (checked) facToday[f.id] = checked.value;
    });
    saveJSON('mc_faculty_today', facToday);
    renderFacStat();
    alert('Faculty attendance saved for today.');
  });

  /* Student table */
  $('#sBody').innerHTML = STUDENTS.map(s => `
    <tr>
      <td>${esc(s.roll)}</td>
      <td><strong>${esc(s.name)}</strong></td>
      <td>Class ${esc(s.cls)}</td>
      <td>${esc(s.stream)}</td>
      <td>${esc(s.exam)}</td>
      <td>${s.fees === 'Paid' ? '<span class="chip teal">Paid</span>' : '<span class="chip amber">Pending</span>'}</td>
      <td class="flex">
        <button class="btn btn-ghost btn-sm" data-demo="Editing isn't wired up here.">Edit</button>
        <button class="btn btn-danger btn-sm" data-demo="No database behind this, so nothing actually deletes.">Delete</button>
      </td>
    </tr>`).join('');

  /* Faculty table */
  $('#fBody').innerHTML = FACULTY.map(f => `
    <tr>
      <td>${esc(f.id)}</td>
      <td><strong>${esc(f.name)}</strong></td>
      <td>${esc(f.subject)}</td>
      <td>${esc(f.classes)}</td>
      <td>${esc(f.phone)}</td>
      <td>${f.status === 'Active' ? '<span class="chip teal">Active</span>' : '<span class="chip amber">On leave</span>'}</td>
      <td class="flex">
        <button class="btn btn-ghost btn-sm" data-demo="Can't edit faculty records in this demo.">Edit</button>
        <button class="btn btn-danger btn-sm" data-demo="No database behind this, so nothing actually deletes.">Delete</button>
      </td>
    </tr>`).join('');

  /* Material table */
  $('#mBody').innerHTML = MATERIALS.slice(0, 10).map(m => `
    <tr>
      <td><strong>${esc(m.title)}</strong></td>
      <td>Class ${esc(m.cls)}</td>
      <td>${esc(m.subject)}</td>
      <td>${esc(m.type)}</td>
      <td>${esc(m.size)}</td>
      <td class="flex">
        <button class="btn btn-ghost btn-sm" data-demo="File replacement isn't hooked up yet.">Replace</button>
        <button class="btn btn-danger btn-sm" data-demo="No database behind this, so nothing actually deletes.">Delete</button>
      </td>
    </tr>`).join('');

  /* Fees table with receipt numbers */
  $('#feeBody').innerHTML = STUDENTS.map((s, i) => `
    <tr>
      <td>${esc(s.roll)}</td>
      <td><strong>${esc(s.name)}</strong></td>
      <td>${rupees(20000)}</td>
      <td>${rupees(s.fees === 'Paid' ? 20000 : 8000)}</td>
      <td>${rupees(s.fees === 'Paid' ? 0 : 12000)}</td>
      <td>${s.fees === 'Paid'
            ? `<span class="chip teal">SM/2026/0${400 + i}</span>`
            : '<span class="chip amber">Not issued</span>'}</td>
      <td><button class="btn btn-ghost btn-sm" data-demo="No online payment set up, so there's nothing to generate a receipt from yet.">Receipt</button></td>
    </tr>`).join('');

  /* Reports panel */
  const avgAtt = Math.round(STUDENTS.reduce((s, x) => s + x.att, 0) / STUDENTS.length);
  const avgScore = Math.round(STUDENTS.reduce((s, x) => s + x.score, 0) / STUDENTS.length);
  $('#repAtt').textContent = avgAtt + '%';
  $('#repScore').textContent = avgScore + '%';
  $('#repCollected').textContent = rupees(STUDENTS.filter(s => s.fees === 'Paid').length * 20000);
  $('#repDue').textContent = rupees(pendingFees * 12000);

  $('#repChart').innerHTML = STUDENTS.map(s => `
    <div class="chart-col">
      <div class="chart-bar" style="height:${s.score}%"><b>${s.score}</b></div>
      <small>${esc(s.name.split(' ')[0])}</small>
    </div>`).join('');

  const collected = STUDENTS.filter(s => s.fees === 'Paid').length * 20000;
  const due = pendingFees * 12000;
  const feeMax = Math.max(collected, due, 1);
  $('#repFeeChart').innerHTML = `
    <div class="chart-col">
      <div class="chart-bar" style="height:${collected / feeMax * 100}%;background:linear-gradient(180deg,var(--teal),#5a9a76)"><b>${rupees(collected)}</b></div>
      <small>Collected</small>
    </div>
    <div class="chart-col">
      <div class="chart-bar" style="height:${due / feeMax * 100}%;background:linear-gradient(180deg,var(--amber),#a06a1a)"><b>${rupees(due)}</b></div>
      <small>Outstanding</small>
    </div>`;

  /* The rows above were created after the page loaded, so their buttons still
     need a handler. Only the table bodies are scanned — the static buttons on
     this page were already wired up when the page loaded. */
  ['#sBody', '#fBody', '#mBody', '#feeBody'].forEach(sel =>
    $$('[data-demo]', $(sel)).forEach(b =>
      b.addEventListener('click', () => alert(b.dataset.demo))));

  $('#addStudentForm').addEventListener('submit', e => {
    e.preventDefault();
    alert(`${$('#nsName').value} would go into Class ${$('#nsClass').value} — but this demo has no database, so it won't stick around.`);
    e.target.reset();
  });

  /* ---------- Quizzes tab: every quiz, across every faculty member ---------- */
  $('#qAdminBody').innerHTML = QUIZZES.length ? QUIZZES.map(q => {
    const attempts = ATTEMPTS.filter(a => a.quizId === q.id).length;
    return `
      <tr>
        <td><strong>${esc(q.title)}</strong></td>
        <td>${esc(q.createdBy)}</td>
        <td>${esc(q.subject)}</td>
        <td>Class ${esc(q.class)}</td>
        <td>${q.status === 'published' ? '<span class="chip teal">Published</span>' : '<span class="chip amber">Draft</span>'}</td>
        <td>${attempts}</td>
        <td>${attempts ? `<button class="btn btn-ghost btn-sm" data-aboard="${q.id}">Leaderboard</button>` : '<span class="text-muted small">—</span>'}</td>
      </tr>`;
  }).join('') : `<tr><td colspan="7" class="text-center text-muted" style="padding:20px">No quizzes have been created yet.</td></tr>`;

  $$('[data-aboard]', $('#qAdminBody')).forEach(b => b.addEventListener('click', () => {
    const quiz = QUIZZES.find(q => q.id === b.dataset.aboard);
    const rows = ATTEMPTS.filter(a => a.quizId === b.dataset.aboard)
      .sort((a, c) => c.score - a.score || a.timeTakenSeconds - c.timeTakenSeconds);
    $('#qAdminBoardTitle').textContent = `Leaderboard — ${quiz ? quiz.title : ''}`;
    $('#qAdminBoardBody').innerHTML = rows.map((a, i) => `
      <tr>
        <td>${i + 1}</td><td>${esc(a.studentName)}</td><td><strong>${a.score}%</strong></td>
        <td>${Math.floor(a.timeTakenSeconds / 60)}m ${a.timeTakenSeconds % 60}s</td>
        <td>${a.tabSwitches}</td>
        <td>${a.autoSubmitted ? `<span class="chip red">Left early</span>` : '<span class="chip teal">Completed</span>'}</td>
      </tr>`).join('');
    $('#qAdminBoardWrap').classList.remove('hidden');
    $('#qAdminBoardWrap').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }));
};

/* ---------- feedback.html ---------- */
Pages.feedback = function () {
  $('#feedbackForm').addEventListener('submit', e => {
    e.preventDefault();
    const answered = $$('.stars').filter(g => $('input:checked', g)).length;
    const totalQ = $$('.stars').length;

    if (answered < totalQ) {
      $('#fbError').textContent = `Please rate all ${totalQ} statements. ${totalQ - answered} left.`;
      $('#fbError').classList.add('show');
      return;
    }
    $('#fbError').classList.remove('show');

    /* Work out the average rating and show a thank-you panel */
    const sum = $$('.stars').reduce((s, g) => s + Number($('input:checked', g).value), 0);
    $('#avgScore').textContent = (sum / totalQ).toFixed(1) + ' / 5';
    $('#feedbackForm').classList.add('hidden');
    $('#thanks').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};
