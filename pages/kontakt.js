import Head from "next/head";

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Kontakt Norway Tools – Ta kontakt</title>
        <meta
          name="description"
          content="Kontakt Norway Tools for spørsmål, forslag, tilbakemeldinger eller feil på våre kalkulatorer og verktøy."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://norway-tools.vercel.app/kontakt"
        />
      </Head>

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.6,
        }}
      >
        <h1>Kontakt Norway Tools</h1>

        <p>
          Har du spørsmål, forslag eller tilbakemeldinger om Norway Tools?
          Vi setter pris på å høre fra deg.
        </p>

        <h2>Spørsmål og forslag</h2>

        <p>
          Hvis du oppdager en feil i en kalkulator eller har forslag til et
          nytt verktøy, kan du ta kontakt med oss.
        </p>

        <p>
          Vi jobber kontinuerlig med å forbedre nettstedet og gjøre
          kalkulatorene enklere og mer nyttige.
        </p>

        <h2>Tilbakemeldinger</h2>

        <p>
          Tilbakemeldinger om funksjoner, brukervennlighet og innhold er
          velkomne.
        </p>
      </main>
    </>
  );
}
