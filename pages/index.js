import { useState } from "react";

export default function Home() {
  const [salary, setSalary] = useState("");

  const hourly =
    salary && Number(salary) > 0
      ? (Number(salary) / 1950).toFixed(2)
      : "";

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Norway Tools</h1>

      <p style={{ fontSize: "20px" }}>
        Enkle kalkulatorer og nyttige verktøy for Norge
      </p>

      <hr />

      <section
        style={{
          marginTop: "40px",
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <h2>Lønn til timelønn kalkulator</h2>

        <p>Beregn omtrent timelønn fra årslønn.</p>

        <input
          type="number"
          placeholder="Årslønn i NOK"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          style={{
            padding: "12px",
            fontSize: "16px",
            width: "100%",
            maxWidth: "400px",
          }}
        />

        {hourly && (
          <div style={{ marginTop: "20px", fontSize: "24px" }}>
            Timelønn: <strong>{hourly} kr</strong>
          </div>
        )}
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>Flere kalkulatorer kommer snart</h2>

        <ul>
          <li>Feriepenger kalkulator</li>
          <li>MVA kalkulator</li>
          <li>Overtidskalkulator</li>
          <li>Prosent kalkulator</li>
          <li>Lånekalkulator</li>
          <li>Drivstoffkostnad kalkulator</li>
        </ul>
      </section>
    </main>
  );
}
