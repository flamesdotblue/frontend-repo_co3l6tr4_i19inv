import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="agir" className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400" />
              <span className="font-semibold tracking-tight text-slate-800">Les Orchidées Blanches</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
              Ensemble, construisons une société plus inclusive où chaque personne peut apprendre, grandir et s’épanouir.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Nous contacter</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3"><Mail size={18} className="text-emerald-600" /> contact@orchidees-blanches.org</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-emerald-600" /> +225 00 00 00 00</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-emerald-600" /> Abidjan, Côte d’Ivoire</li>
              <li className="flex items-center gap-3"><Globe size={18} className="text-emerald-600" /> www.lesorchideesblanches.org</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Agir avec nous</h4>
            <p className="mt-4 text-sm text-slate-700">Votre soutien change des vies : faites un don, devenez bénévole ou parrainez un programme.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#don"
                className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-white text-sm font-medium shadow hover:bg-emerald-500"
              >
                Faire un don
              </a>
              <a
                href="#benevolat"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Devenir bénévole
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Les Orchidées Blanches. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700">Mentions légales</a>
            <a href="#" className="hover:text-slate-700">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
