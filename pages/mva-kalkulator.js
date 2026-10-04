import Head from "next/head";
import { useState } from "react";

export default function MvaKalkulator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("25");
  const [mode, setMode] = useState("excluding");

  const value = Number(amount) || 0;
  const mvaRate = Number(rate) / 100;

  let net = 0;
  let mva = 0;
  let total = 0;

  if (mode === "excluding") {
    net = value;
    mva = value * mvaRate;
    total = value + mva;
  } else {
    total = value;
    net = value / (1 + mvaRate);
    mva = value - net;
  }

  const formatNOK = (number) =>
    new Intl.NumberFormat("no-NO", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);

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
  <title>MVA-kalkulator – Beregn MVA i Norge</title>

  <meta
    name="description"
    content="Gratis MVA-kalkulator for Norge. Beregn MVA med 25 %, 15 % eller 12 %, og finn beløp med eller uten MVA."
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <link
    rel="canonical"
    href="https://norway-tools.vercel.app/mva-kalkulator"
  />
</Head>
      <h1>MVA-kalkulator</h1>

      <p>
        Beregn merverdiavgift (MVA) enkelt i Norge. Velg MVA-sats og om
        beløpet er med eller uten MVA.
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
          <strong>Beløp</strong>
        </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="For eksempel 1000"
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
          <strong>MVA-sats</strong>
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
          <option value="25">25 % – vanlig sats</option>
          <option value="15">15 % – næringsmidler</option>
          <option value="12">12 % – enkelte tjenester</option>
        </select>

        <label style={{ display: "block", marginTop: "20px" }}>
          <strong>Beløpet er:</strong>
        </label>

        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          style={{
            padding: "12px",
            marginTop: "8px",
            fontSize: "16px",
          }}
        >
          <option value="excluding">Uten MVA</option>
          <option value="including">Med MVA</option>
        </select>

        {value > 0 && (
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
              <strong>Beløp uten MVA:</strong>{" "}
              {formatNOK(net)} kr
            </p>

            <p>
              <strong>MVA:</strong>{" "}
              {formatNOK(mva)} kr
            </p>

            <p>
              <strong>Beløp med MVA:</strong>{" "}
              {formatNOK(total)} kr
            </p>
          </div>
        )}
      </section>

      <section style={{ marginTop: "45px" }}>
        <h2>Hva er MVA?</h2>

        <p>
          Merverdiavgift (MVA) er en avgift som normalt legges på varer og
          tjenester som selges i Norge.
        </p>

        <h2>Vanlige MVA-satser i Norge</h2>

        <ul>
          <li>25 % – vanlig MVA-sats</li>
          <li>15 % – blant annet næringsmidler</li>
          <li>12 % – blant annet persontransport og overnatting</li>
        </ul>

        <h2>Eksempel</h2>

        <p>
          Hvis en vare koster 1 000 kr uten MVA og MVA-satsen er 25 %,
          blir MVA 250 kr og totalprisen 1 250 kr.
        </p>

        <h2>Vanlige spørsmål</h2>

        <h3>Hvordan regner man ut MVA?</h3>

        <p>
          Ved 25 % MVA kan du multiplisere beløpet uten MVA med 0,25 for å
          finne MVA-beløpet.
        </p>

        <h3>Hvordan finner jeg pris uten MVA?</h3>

        <p>
          Hvis du kjenner prisen med MVA, deler du beløpet på 1 + MVA-satsen.
        </p>
      </section>

      <hr style={{ margin: "50px 0 20px" }} />

      <p style={{ fontSize: "14px", color: "#666" }}>
        Norway Tools – enkle kalkulatorer og nyttige verktøy for Norge.
      </p>
    </main>
  );
}
