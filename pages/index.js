import { useState } from "react";

export default function Home() {
  const [salary, setSalary] = useState("");
  const [hours, setHours] = useState("37.5");

  const annualSalary = Number(salary) || 0;
  const weeklyHours = Number(hours) || 0;

  const monthlySalary = annualSalary / 12;
  const hourlySalary =
    weeklyHours > 0 ? annualSalary / (weeklyHours * 52) : 0;

  const formatNOK = (value) =>
    new Intl.NumberFormat("no-NO", {
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
      <h1>Lønnskalkulator</h1>

      <p>
        Beregn månedslønn og timelønn basert på årslønn og arbeidstid i Norge.
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
          <strong>Årslønn</strong>
        </label>

        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="For eksempel 600000"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "450px",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <label>
          <strong>Arbeidstid per uke</strong>
        </label>

        <input
          type="number"
          step="0.5"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
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

        {annualSalary > 0 && weeklyHours > 0 && (
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
              <strong>Månedslønn:</strong>{" "}
              {formatNOK(monthlySalary)} kr
            </p>

            <p>
              <strong>Timelønn:</strong>{" "}
              {formatNOK(hourlySalary)} kr
            </p>

            <p>
              <strong>Årslønn:</strong>{" "}
              {formatNOK(annualSalary)} kr
            </p>
          </div>
        )}
      </section>

      <section style={{ marginTop: "45px" }}>
        <h2>Hvordan beregnes timelønn?</h2>

        <p>
          Timelønn beregnes ved å dele årslønn på antall arbeidstimer per år.
        </p>

        <p>
          Eksempel: Ved 600 000 kr i årslønn og 37,5 timer per uke blir
          beregningen basert på 37,5 × 52 arbeidstimer per år.
        </p>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Vanlige spørsmål</h2>

        <h3>Hva er timelønn?</h3>
        <p>
          Timelønn er lønnen du tjener per arbeidstime.
        </p>

        <h3>Hvordan regner man ut månedslønn?</h3>
        <p>
          Årslønn deles normalt på 12 for å finne gjennomsnittlig månedslønn.
        </p>

        <h3>Kan jeg bruke kalkulatoren ved deltidsjobb?</h3>
        <p>
          Ja. Skriv inn din faktiske arbeidstid per uke.
        </p>
      </section>

      <hr style={{ margin: "50px 0 20px" }} />

      <p style={{ fontSize: "14px", color: "#666" }}>
        Norway Tools – enkle kalkulatorer og nyttige verktøy for Norge.
      </p>
    </main>
  );
}
