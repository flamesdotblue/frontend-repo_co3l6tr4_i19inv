import { Heart, BookOpen, Users, Shield } from 'lucide-react';

const PROGRAMS = [
  {
    icon: Heart,
    title: 'Accompagnement thérapeutique',
    desc: 'Suivi pluridisciplinaire pour le développement moteur, cognitif et émotionnel.',
  },
  {
    icon: BookOpen,
    title: 'Éducation inclusive',
    desc: "Soutien scolaire, formation des enseignants et classes adaptées pour l'inclusion.",
  },
  {
    icon: Users,
    title: 'Soutien aux familles',
    desc: 'Groupes de parole, ateliers de sensibilisation et aides sociales dédiées.',
  },
  {
    icon: Shield,
    title: 'Protection & plaidoyer',
    desc: "Actions de sensibilisation et défense des droits des personnes en situation de handicap.",
  },
];

export default function Programs() {
  return (
    <section id="programmes" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Nos programmes</h2>
          <p className="mt-3 text-slate-600">
            Des actions concrètes pour répondre aux besoins éducatifs, sociaux et thérapeutiques.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-100 opacity-0 blur-2xl transition group-hover:opacity-80" />
            </div>
          ))}
        </div>

        <div id="mission" className="mt-16 grid items-center gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Notre mission</h3>
            <p className="mt-3 text-slate-600">
              Promouvoir l’inclusion, l’autonomie et la dignité des personnes en situation de handicap,
              à travers un accompagnement global, des programmes éducatifs adaptés et une mobilisation communautaire.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Accès aux soins et à la rééducation</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Parcours scolaires inclusifs</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Autonomisation des familles</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 shadow-sm">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { kpi: '95%', label: 'Satisfaction des familles' },
                { kpi: '800+', label: 'Séances réalisées / an' },
                { kpi: '25', label: 'Partenaires actifs' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-4 shadow ring-1 ring-slate-200">
                  <div className="text-2xl font-bold text-slate-900">{s.kpi}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
