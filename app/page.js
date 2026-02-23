const perks = [
  'Söt landing page med e-girl neon + pastell stil',
  'Statisk Next.js-export för enkel Bunny.net deployment',
  'Guidad setup för att använda Bunny Storage + CDN'
];

const budget = [
  { item: 'Storage Zone (50 GB)', cost: '€1-2/mån' },
  { item: 'CDN trafik (Europa)', cost: 'ca €0.01/GB' },
  { item: 'Custom domän + SSL', cost: 'Ingår i Bunny CDN' }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero card glow">
        <p className="eyebrow">☁️ CutieCloud</p>
        <h1>Din dreamy cloud-hemsida på Bunny.net</h1>
        <p>
          En snabb, billig och supersöt startsida du kan hosta statiskt via Bunny
          Storage + CDN. Perfekt när du vill maxa dina €20 credits.
        </p>
        <div className="actions">
          <a href="#deploy" className="btn primary">
            Deploy-guide
          </a>
          <a href="https://bunny.net" className="btn ghost" target="_blank" rel="noreferrer">
            Bunny.net
          </a>
        </div>
      </section>

      <section className="card">
        <h2>Vad du får</h2>
        <ul>
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Budget med €20 credits</h2>
        <div className="budget-grid">
          {budget.map((row) => (
            <article key={row.item} className="budget-card">
              <p>{row.item}</p>
              <strong>{row.cost}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="deploy" className="card deploy">
        <h2>Snabb deploy till Bunny Storage</h2>
        <ol>
          <li>Skapa en ny Storage Zone i Bunny dashboard.</li>
          <li>Kör <code>npm install</code> och <code>npm run build</code>.</li>
          <li>Ladda upp innehållet i <code>out/</code> till din Storage Zone.</li>
          <li>Koppla zonen till en Pull Zone och aktivera Edge Rules för SPA fallback vid behov.</li>
          <li>Peka din domän mot Bunny Pull Zone hostname.</li>
        </ol>
      </section>
    </main>
  );
}
