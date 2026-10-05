import Head from "next/head";

export default function Personvern() {
  return (
    <>
      <Head>
        <title>Personvern – Norway Tools</title>
        <meta
          name="description"
          content="Personvernerklæring for Norway Tools. Les om hvordan vi behandler personopplysninger og bruker informasjonskapsler."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://norway-tools.vercel.app/personvern"
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
        <h1>Personvern</h1>

        <p>
          Norway Tools respekterer personvernet ditt. Denne siden forklarer
          hvordan nettstedet kan behandle informasjon når du bruker våre
          kalkulatorer og verktøy.
        </p>

        <h2>Bruk av kalkulatorene</h2>

        <p>
          Norway Tools tilbyr kalkulatorer og verktøy for blant annet lønn,
          MVA, feriepenger, lån, renter, prosent og drivstoffkostnader.
        </p>

        <p>
          Informasjon du skriver inn i kalkulatorene brukes for å utføre
          beregningene. Vi har ikke behov for at du oppretter en konto for å
          bruke kalkulatorene.
        </p>

        <h2>Personopplysninger</h2>

        <p>
          Vi ber ikke om personopplysninger som fødselsnummer, bankinformasjon
          eller passord for å bruke de grunnleggende kalkulatorene på
          nettstedet.
        </p>

        <h2>Informasjonskapsler</h2>

        <p>
          Nettstedet kan bruke informasjonskapsler og lignende teknologier for
          tekniske formål, statistikk og eventuelle tredjepartstjenester.
        </p>

        <p>
          Dersom vi senere bruker tjenester som Google Analytics eller Google
          AdSense, kan disse tjenestene bruke informasjonskapsler i henhold til
          sine egne personvernregler.
        </p>

        <h2>Tredjepartstjenester</h2>

        <p>
          Norway Tools kan senere benytte tredjepartstjenester for analyse,
          annonsering eller andre funksjoner. Slike tjenester kan behandle
          informasjon i henhold til sine egne vilkår og personvernregler.
        </p>

        <h2>Dine rettigheter</h2>

        <p>
          Etter gjeldende personvernregler kan du ha rett til informasjon om
          hvordan personopplysninger behandles, samt rettigheter knyttet til
          innsyn, retting og sletting der dette er relevant.
        </p>

        <h2>Endringer</h2>

        <p>
          Denne personvernerklæringen kan bli oppdatert dersom nettstedet får
          nye funksjoner eller tjenester.
        </p>

        <h2>Kontakt</h2>

        <p>
          Hvis du har spørsmål om personvern eller hvordan Norway Tools
          behandler informasjon, kan du kontakte oss via kontaktsiden.
        </p>

        <p>
          <a href="/kontakt">Kontakt Norway Tools</a>
        </p>
      </main>
    </>
  );
}
