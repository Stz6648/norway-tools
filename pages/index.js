import { useState } from "react";

const tools = [
  {
    title: "MVA-kalkulator",
    description: "Beregn MVA med og uten merverdiavgift.",
    link: "/mva-kalkulator",
    icon: "🧾",
  },
  {
    title: "Prosentkalkulator",
    description: "Beregn prosent, økning, nedgang og endring.",
    link: "/prosent-kalkulator",
    icon: "📊",
  },
  {
    title: "Feriepengekalkulator",
    description: "Beregn feriepenger basert på feriepengegrunnlag.",
    link: "/feriepenger-kalkulator",
    icon: "🏖️",
  },
  {
    title: "Overtidskalkulator",
    description: "Beregn overtidslønn og total overtidsbetaling.",
    link: "/overtidskalkulator",
    icon: "⏱️",
  },
  {
    title: "Lånekalkulator",
    description: "Beregn månedlig betaling og totale renter.",
    link: "/lanekalkulator",
    icon: "🏦",
  },
  {
    title: "Rentes rente",
    description: "Se hvordan sparing kan vokse over tid.",
    link: "/rentes-rente-kalkulator",
    icon: "📈",
  },
  {
    title: "Drivstoffkostnad",
    description: "Beregn drivstofforbruk og kostnad per kilometer.",
    link: "/drivstoffkostnad",
    icon: "🚗",
  },
];

export default function Home() {
  const [salary, setSalary] = useState("");
  const [hours, setHours] = useState("37.5");

  const annualSalary = Number(salary) || 0;
  const weeklyHours = Number(hours) || 0;

  const monthlySalary = annualSalary / 12;

  const hourlySalary =
    weeklyHours > 0
      ? annualSalary / (weeklyHours * 52)
      : 0;

  const formatNOK = (value) =>
    new Intl.NumberFormat("no-NO", {
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <header style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>
          Norway Tools
        </h1>

        <p style={{ fontSize: "18px", color: "#555" }}>
          Enkle og nyttige kalkulatorer for Norge
        </p>
      </header>

      <section
        style={{
          marginTop: "35px",
          padding: "25px",
          background: "#f5f5f5",
          borderRadius: "14px",
        }}
      >
        <h2>🧮 Lønnskalkulator</h2>

        <p>
          Beregn månedslønn og timelønn basert på årslønn og arbeidstid.
        </p>

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
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <label
          style={{
            display: "block",
            marginTop: "18px",
          }}
        >
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
              marginTop: "20px",
              padding: "18px",
              background: "white",
              borderRadius: "10px",
            }}
          >
            <p>
              <strong>Månedslønn:</strong>{" "}
              {formatNOK(monthlySalary)} kr
            </p>

            <p>
              <strong>Timelønn:</strong>{" "}
              {formatNOK(hourlySalary)} kr
            </p>
          </div>
        )}
      </section>

      <section style={{ marginTop: "45px" }}>
        <h2>Alle kalkulatorer</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          {tools.map((tool) => (
            <a
              key={tool.link}
              href={tool.link}
              style={{
                display: "block",
                padding: "22px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                textDecoration: "none",
                color: "#111",
                background: "white",
              }}
            >
              <div style={{ fontSize: "30px" }}>
                {tool.icon}
              </div>

              <h3 style={{ marginBottom: "8px" }}>
                {tool.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#666",
                }}
              >
                {tool.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>Nyttige kalkulatorer for Norge</h2>

        <p>
          Norway Tools samler enkle og praktiske kalkulatorer for lønn,
          MVA, feriepenger, overtid, lån, sparing, prosent og
          drivstoffkostnader.
        </p>

        <p>
          Kalkulatorene er laget for å gjøre vanlige beregninger raskere
          og enklere.
        </p>
      </section>

      <hr style={{ margin: "50px 0 20px" }} />

      <p
        style={{
          fontSize: "14px",
          color: "#666",
          textAlign: "center",
        }}
      >
        Norway Tools – enkle kalkulatorer og nyttige verktøy for Norge.
      </p>
    </main>
  );
}
