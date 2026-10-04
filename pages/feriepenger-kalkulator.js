import Head from "next/head";
import { useState } from "react";

export default function FeriepengerKalkulator() {
  const [grunnlag, setGrunnlag] = useState("");
  const [rate, setRate] = useState("10.2");

  const amount = Number(grunnlag) || 0;
  const feriepenger = amount * (Number(rate) / 100);

  const formatNOK = (value) =>
    new Intl.NumberFormat("no-NO", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <Head>
  <title>Feriepengekalkulator – Beregn feriepenger i Norge</title>

  <meta
    name="description"
    content="Gratis feriepenger kalkulator. Beregn feriepenger basert på feriepengegrunnlag og feriepengesats."
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <link
    rel="canonical"
    href="https://norway-tools.vercel.app/feriepenger-kalkulator"
  />
</Head>
      <h1>Feriepengekalkulator</h1>

      <p>
        Beregn feriepenger enkelt basert på feriepengegrunnlag og
        feriepengesats i Norge.
      </p>

      <section
        style={{
          marginTop: "30px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <label>
          <strong>Feriepengegrunnlag</strong>
        </label>

        <input
          type="number"
          value={grunnlag}
          onChange={(e) => setGrunnlag(e.target.value)}
          placeholder="For eksempel 600000"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "450px",
            padding: "12px",
            marginTop: "8px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <label style={{ display: "block", marginTop: "20px" }}>
          <strong>Feriepengesats</strong>
        </label>

        <select
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          style={{
            padding: "12px",
            marginTop: "8px",
            fontSize: "16px",
          }}
        >
          <option value="10.2">10,2 % – vanlig sats</option>
          <option value="12">12 % – ekstra ferieuke</option>
          <option value="12.5">12,5 % – arbeidstakere over 60 år</option>
        </select>

        {amount > 0 && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#f5f5f5",
              borderRadius: "10px",
            }}
          >
            <h2>Resultat</h2>

            <p>
              <strong>Feriepengegrunnlag:</strong>{" "}
              {formatNOK(amount)} kr
            </p>

            <p>
              <strong>Feriepengesats:</strong> {rate} %
            </p>

            <p>
              <strong>Feriepenger:</strong>{" "}
              {formatNOK(feriepenger)} kr
            </p>
          </div>
        )}
      </section>

      <section style={{ marginTop: "45px" }}>
        <h2>Hva er feriepenger?</h2>

        <p>
          Feriepenger er penger som opptjenes året før ferien tas ut.
          Feriepengene skal normalt erstatte lønn som faller bort når
          arbeidstakeren har ferie.
        </p>

        <h2>Hvordan beregnes feriepenger?</h2>

        <p>
          Feriepenger beregnes vanligvis ved å multiplisere
          feriepengegrunnlaget med den aktuelle feriepengesatsen.
        </p>

        <p>
          Eksempel: Hvis feriepengegrunnlaget er 600 000 kr og satsen er
          10,2 %, blir feriepengene 61 200 kr.
        </p>

        <h2>Vanlige spørsmål</h2>

        <h3>Hva er vanlig feriepengesats?</h3>

        <p>
          Den vanlige satsen er 10,2 %. Arbeidstakere med rett til ekstra
          ferie kan ha en høyere sats.
        </p>

        <h3>Hva er feriepengegrunnlaget?</h3>

        <p>
          Feriepengegrunnlaget er grunnlaget som brukes for å beregne
          feriepengene.
        </p>

        <h3>Kan jeg bruke kalkulatoren med 12 %?</h3>

        <p>
          Ja. Velg 12 % i kalkulatoren dersom det gjelder din situasjon.
        </p>
      </section>

      <hr style={{ margin: "50px 0 20px" }} />

      <p style={{ fontSize: "14px", color: "#666" }}>
        Norway Tools – enkle kalkulatorer og nyttige verktøy for Norge.
      </p>
    </main>
  );
}
