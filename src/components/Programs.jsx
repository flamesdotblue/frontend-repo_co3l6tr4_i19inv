import { Heart, BookOpen, Users, Shield, Newspaper } from 'lucide-react';

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
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* À propos */}
        <div id="apropos" className="grid items-start gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Qui sommes-nous</h2>
            <p className="mt-3 text-slate-600">
              Les Orchidées Blanches est une organisation engagée pour l’inclusion des personnes en situation de
              handicap. Nous œuvrons chaque jour pour promouvoir l’autonomie, la dignité et l’accès aux droits,
              à travers des actions de terrain, des programmes éducatifs et un accompagnement global des familles.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Mission: inclusion et autonomisation</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Vision: une société où chacun trouve sa place</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Valeurs: respect, solidarité, excellence</li>
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

        {/* Programmes */}
        <div id="programmes" className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Nos actions</h2>
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
        </div>

        {/* Actualités */}
        <div id="actualites" className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Actualités</h2>
            <a href="#" className="text-emerald-700 hover:text-emerald-600 text-sm font-medium">Voir toutes</a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="aspect-[16/9] w-full overflow-hidden bg-emerald-50">
                  <div className="h-full w-full bg-gradient-to-tr from-emerald-100 to-teal-100" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Newspaper size={14} /> <span>Communiqué</span> • <span>Récemment</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">Titre de l’actualité {i}</h3>
                  <p className="mt-1 text-sm text-slate-600">Bref résumé de l’information publiée par l’association.</p>
                  <a href="#" className="mt-3 inline-flex text-sm font-medium text-emerald-700 hover:text-emerald-600">Lire la suite →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
