import Head from "next/head";
import { useState } from "react";

export default function ProsentKalkulator() {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");

  const value = Number(amount) || 0;
  const pct = Number(percent) || 0;
  const oldNum = Number(oldValue) || 0;
  const newNum = Number(newValue) || 0;

  const percentOf = value * (pct / 100);

  const increased = value * (1 + pct / 100);
  const decreased = value * (1 - pct / 100);

  const percentChange =
    oldNum !== 0 ? ((newNum - oldNum) / oldNum) * 100 : 0;

  const formatNumber = (number) =>
    new Intl.NumberFormat("no-NO", {
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
  <title>Prosentkalkulator – Beregn prosent i Norge</title>

  <meta
    name="description"
    content="Gratis prosentkalkulator. Beregn prosent, prosentøkning, prosentnedgang og prosentvis endring enkelt."
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <link
    rel="canonical"
    href="https://norway-tools.vercel.app/prosent-kalkulator"
  />
</Head>
      <h1>Prosentkalkulator</h1>

      <p>
        Beregn prosent, prosentøkning, prosentnedgang og prosentvis endring
        enkelt.
      </p>

      <section
        style={{
          marginTop: "30px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <h2>Hvor mye er X % av et tall?</h2>

        <label>
          <strong>Tall</strong>
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
            marginBottom: "15px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <label>
          <strong>Prosent</strong>
        </label>

        <input
          type="number"
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
          placeholder="For eksempel 25"
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

        {value > 0 && pct > 0 && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "10px",
            }}
          >
            <strong>
              {formatNumber(pct)} % av {formatNumber(value)} ={" "}
              {formatNumber(percentOf)}
            </strong>
          </div>
        )}
      </section>

      <section
        style={{
          marginTop: "30px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <h2>Prosentøkning og prosentnedgang</h2>

        <p>
          Skriv inn et tall og en prosent for å se det nye beløpet.
        </p>

        {value > 0 && pct > 0 && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "10px",
            }}
          >
            <p>
              <strong>Økning:</strong> {formatNumber(increased)}
            </p>

            <p>
              <strong>Nedgang:</strong> {formatNumber(decreased)}
            </p>
          </div>
        )}
      </section>

      <section
        style={{
          marginTop: "30px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <h2>Prosentvis endring</h2>

        <label>
          <strong>Gammel verdi</strong>
        </label>

        <input
          type="number"
          value={oldValue}
          onChange={(e) => setOldValue(e.target.value)}
          placeholder="For eksempel 100"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "450px",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "15px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <label>
          <strong>Ny verdi</strong>
        </label>

        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="For eksempel 120"
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

        {oldNum !== 0 && newNum !== 0 && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "10px",
            }}
          >
            <strong>
              Prosentvis endring: {formatNumber(percentChange)} %
            </strong>
          </div>
        )}
      </section>

      <section style={{ marginTop: "45px" }}>
        <h2>Hvordan regner man prosent?</h2>

        <p>
          For å finne en prosentandel multipliserer du tallet med prosenttallet
          delt på 100.
        </p>

        <p>
          Eksempel: 25 % av 1 000 er 1 000 × 25 / 100 = 250.
        </p>

        <h2>Vanlige spørsmål</h2>

        <h3>Hvordan regner man ut prosentøkning?</h3>

        <p>
          Prosentøkning beregnes ved å sammenligne forskjellen med den
          opprinnelige verdien.
        </p>

        <h3>Hvordan regner man ut prosentnedgang?</h3>

        <p>
          Trekk prosentandelen fra 100 % av den opprinnelige verdien.
        </p>

        <h3>Hvordan finner man prosentvis endring?</h3>

        <p>
          Formelen er: (ny verdi − gammel verdi) ÷ gammel verdi × 100.
        </p>
      </section>

      <hr style={{ margin: "50px 0 20px" }} />

      <p style={{ fontSize: "14px", color: "#666" }}>
        Norway Tools – enkle kalkulatorer og nyttige verktøy for Norge.
      </p>
    </main>
  );
}
