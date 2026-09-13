import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="container-x py-32 md:py-48 min-h-screen">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-8">Mentions légales</h1>
          
          <h2 className="text-xl font-semibold text-white mt-12 mb-4">1. Éditeur du site</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Le présent site, accessible à l'URL reflexrent.fr, est édité par :<br />
            <strong>Reflex Rent Boulogne</strong>, société à responsabilité limitée (SARL)<br />
            Au capital social de 100 000,00 €<br />
            Inscrite au R.C.S. de Paris sous le numéro 788 498 350<br />
            SIRET : 788 498 350 00024<br />
            Siège social : 2 Avenue de la Porte de Saint-Cloud, 75016 Paris.
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">2. Hébergement</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Le site est hébergé par Vercel Inc.<br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            États-Unis
          </p>

          <h2 className="text-xl font-semibold text-white mt-12 mb-4">3. Nous contacter</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Par téléphone : +33 6 12 29 29 06<br />
            Par email : contact@reflexrent.fr<br />
            Par courrier : 2 Avenue de la Porte de Saint-Cloud, 75016 Paris
          </p>
          
          <div className="mt-20 p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-sm text-white/50 italic">
              Note : Ces mentions légales sont fournies à titre fictif dans le cadre d'une démonstration de reproduction de site web.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
