import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Offrir un avenir inclusif et lumineux
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              Nous accompagnons les enfants et jeunes adultes en situation de handicap
              pour qu’ils s’épanouissent à l’école, à la maison et dans la société.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#don"
                className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-500"
              >
                Faire un don
              </a>
              <a
                href="#apropos"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-slate-700 font-medium hover:bg-slate-50"
              >
                Découvrir notre mission
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {[
                { label: 'Bénéficiaires', value: '1,200+' },
                { label: 'Programmes', value: '12' },
                { label: 'Bénévoles', value: '150+' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/40 via-emerald-100/30 to-teal-100/30" />
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop"
                alt="Jeunes participants souriants lors d'une activité inclusive"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-emerald-200 blur-3xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
