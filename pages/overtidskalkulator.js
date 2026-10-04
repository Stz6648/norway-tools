import Head from "next/head";
import { useState } from "react";

export default function Overtidskalkulator() {
  const [hourlyRate, setHourlyRate] = useState("");
  const [overtimeRate, setOvertimeRate] = useState("40");
  const [hours, setHours] = useState("");

  const rate = Number(hourlyRate) || 0;
  const supplement = Number(overtimeRate) || 0;
  const overtimeHours = Number(hours) || 0;

  const supplementAmount = rate * (supplement / 100);
  const overtimeHourlyRate = rate + supplementAmount;
  const totalPay = overtimeHourlyRate * overtimeHours;

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
  <title>Overtidskalkulator – Beregn overtidslønn i Norge</title>

  <meta
    name="description"
    content="Gratis overtidskalkulator for Norge. Beregn overtidslønn basert på timelønn, overtidstillegg og antall overtidstimer."
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <link
    rel="canonical"
    href="https://norway-tools.vercel.app/overtidskalkulator"
  />
</Head>
      <h1>Overtidskalkulator</h1>

      <p>
        Beregn overtidslønn basert på timelønn, overtidstillegg og antall
        overtidstimer.
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
          <strong>Timelønn</strong>
        </label>

        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          placeholder="For eksempel 250"
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
          <strong>Overtidstillegg</strong>
        </label>

        <select
          value={overtimeRate}
          onChange={(e) => setOvertimeRate(e.target.value)}
          style={{
            padding: "12px",
            marginTop: "8px",
            fontSize: "16px",
          }}
        >
          <option value="40">40 %</option>
          <option value="50">50 %</option>
          <option value="100">100 %</option>
        </select>

        <label style={{ display: "block", marginTop: "20px" }}>
          <strong>Antall overtidstimer</strong>
        </label>

        <input
          type="number"
          step="0.5"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="For eksempel 10"
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

        {rate > 0 && overtimeHours > 0 && (
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
              <strong>Timelønn:</strong> {formatNOK(rate)} kr
            </p>

            <p>
              <strong>Overtidstillegg:</strong> {formatNOK(supplementAmount)} kr
            </p>

            <p>
              <strong>Overtidslønn per time:</strong>{" "}
              {formatNOK(overtimeHourlyRate)} kr
            </p>

            <p>
              <strong>Antall overtidstimer:</strong> {overtimeHours}
            </p>

            <p>
              <strong>Total overtidslønn:</strong>{" "}
              {formatNOK(totalPay)} kr
            </p>
          </div>
        )}
      </section>

      <section style={{ marginTop: "45px" }}>
        <h2>Hvordan beregnes overtidslønn?</h2>

        <p>
          Overtidslønn beregnes ved å legge overtidstillegget til den
          ordinære timelønnen.
        </p>

        <p>
          Eksempel: Med 250 kr i timelønn og 40 % overtidstillegg blir
          overtidslønn per time 350 kr.
        </p>

        <h2>Vanlige spørsmål</h2>

        <h3>Hva er overtidstillegg?</h3>

        <p>
          Overtidstillegg er et tillegg til den ordinære lønnen for arbeid
          som regnes som overtid.
        </p>

        <h3>Kan jeg velge forskjellige tillegg?</h3>

        <p>
          Ja. Kalkulatoren lar deg velge 40 %, 50 % eller 100 %.
        </p>

        <h3>Er overtidstillegget alltid det samme?</h3>

        <p>
          Det kan variere etter lov, arbeidsavtale og eventuell tariffavtale.
          Sjekk derfor hva som gjelder for din arbeidsplass.
        </p>
      </section>

      <hr style={{ margin: "50px 0 20px" }} />

      <p style={{ fontSize: "14px", color: "#666" }}>
        Norway Tools – enkle kalkulatorer og nyttige verktøy for Norge.
      </p>
    </main>
  );
}
