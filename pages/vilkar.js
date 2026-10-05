import Head from "next/head";

export default function Vilkar() {
  return (
    <>
      <Head>
        <title>Vilkår – Norway Tools</title>
        <meta
          name="description"
          content="Vilkår for bruk av Norway Tools og nettstedets kalkulatorer og verktøy."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://norway-tools.vercel.app/vilkar"
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
        <h1>Vilkår for bruk</h1>

        <p>
          Ved å bruke Norway Tools godtar du disse vilkårene for bruk av
          nettstedet og våre kalkulatorer og verktøy.
        </p>

        <h2>Bruk av kalkulatorene</h2>

        <p>
          Kalkulatorene på Norway Tools er laget for å gi enkle og praktiske
          beregninger. Resultatene er ment som informasjon og bør ikke
          oppfattes som profesjonell økonomisk, juridisk eller skattemessig
          rådgivning.
        </p>

        <h2>Nøyaktighet</h2>

        <p>
          Vi forsøker å holde kalkulatorene korrekte og oppdaterte, men vi kan
          ikke garantere at alle beregninger eller opplysninger alltid er
          fullstendige eller feilfrie.
        </p>

        <p>
          Du er selv ansvarlig for hvordan du bruker resultatene fra
          kalkulatorene.
        </p>

        <h2>Endringer i tjenesten</h2>

        <p>
          Norway Tools kan endre, oppdatere eller fjerne funksjoner og innhold
          på nettstedet uten forhåndsvarsel.
        </p>

        <h2>Ansvarsbegrensning</h2>

        <p>
          Norway Tools er ikke ansvarlig for økonomiske tap eller andre
          konsekvenser som oppstår som følge av bruk av informasjon eller
          beregninger fra nettstedet.
        </p>

        <h2>Tredjepartstjenester</h2>

        <p>
          Nettstedet kan inneholde lenker til eller bruke tjenester fra
          tredjeparter. Slike tjenester kan ha egne vilkår og
          personvernregler.
        </p>

        <h2>Kontakt</h2>

        <p>
          Hvis du har spørsmål om disse vilkårene, kan du kontakte oss via
          kontaktsiden.
        </p>

        <p>
          <a href="/kontakt">Kontakt Norway Tools</a>
        </p>
      </main>
    </>
  );
}
