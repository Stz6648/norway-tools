import Head from "next/head";

export default function OmOss() {
  return (
    <>
      <Head>
        <title>Om Norway Tools – Norske kalkulatorer og verktøy</title>
        <meta
          name="description"
          content="Norway Tools tilbyr enkle og gratis kalkulatorer for lønn, MVA, feriepenger, lån, renter, prosent og drivstoffkostnader i Norge."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://norway-tools.vercel.app/om-oss"
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
        <h1>Om Norway Tools</h1>

        <p>
          Norway Tools er en norsk nettside med enkle og gratis kalkulatorer
          og verktøy for hverdagsøkonomi.
        </p>

        <p>
          Målet vårt er å gjøre det enkelt å beregne ting som lønn, MVA,
          feriepenger, lån, renter, prosent og drivstoffkostnader i Norge.
        </p>

        <h2>Enkle og praktiske verktøy</h2>

        <p>
          Kalkulatorene er laget for å være raske, forståelige og enkle å
          bruke på både mobil og datamaskin.
        </p>

        <h2>Kontakt</h2>

        <p>
          Har du spørsmål, forslag eller oppdager en feil, er du velkommen til
          å kontakte oss.
        </p>
      </main>
    </>
  );
}
