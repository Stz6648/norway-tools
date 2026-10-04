import Head from "next/head";
import { useState } from "react";

export default function Drivstoffkostnad() {
  const [distance, setDistance] = useState("");
  const [consumption, setConsumption] = useState("");
  const [price, setPrice] = useState("");

  const km = Number(distance) || 0;
  const litersPer100Km = Number(consumption) || 0;
  const pricePerLiter = Number(price) || 0;

  const litersUsed = (km / 100) * litersPer100Km;
  const totalCost = litersUsed * pricePerLiter;
  const costPerKm = km > 0 ? totalCost / km : 0;

  const formatNumber = (value) =>
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
  <title>Drivstoffkalkulator – Beregn drivstoffkostnad</title>
  <meta
    name="description"
    content="Gratis drivstoffkalkulator. Beregn drivstoffkostnad, forbruk og kostnad per kilometer for bilen din."
  />
  <meta name="robots" content="index, follow" />
  <link
    rel="canonical"
    href="https://norway-tools.vercel.app/drivstoffkostnad"
  />
</Head>
      <h1>Drivstoffkostnad-kalkulator</h1>

      <p>
        Beregn drivstofforbruk og kostnaden for en kjøretur basert på
        avstand, bilens forbruk og drivstoffpris.
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
          <strong>Avstand (km)</strong>
        </label>

        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
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
          <strong>Drivstofforbruk (liter per 100 km)</strong>
        </label>

        <input
          type="number"
          step="0.1"
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
          placeholder="For eksempel 6.5"
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
          <strong>Drivstoffpris (kr per liter)</strong>
        </label>

        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="For eksempel 20"
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

        {km > 0 && litersPer100Km > 0 && pricePerLiter > 0 && (
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
              <strong>Drivstofforbruk:</strong>{" "}
              {formatNumber(litersUsed)} liter
            </p>

            <p>
              <strong>Total kostnad:</strong>{" "}
              {formatNumber(totalCost)} kr
            </p>

            <p>
              <strong>Kostnad per kilometer:</strong>{" "}
              {formatNumber(costPerKm)} kr/km
            </p>
          </div>
        )}
      </section>

      <section style={{ marginTop: "45px" }}>
        <h2>Hvordan beregnes drivstoffkostnad?</h2>

        <p>
          Først beregnes hvor mange liter drivstoff bilen bruker. Deretter
          multipliseres antall liter med drivstoffprisen.
        </p>

        <p>
          Formel: Avstand ÷ 100 × liter per 100 km = totalt drivstofforbruk.
        </p>

        <h2>Eksempel</h2>

        <p>
          Hvis du kjører 250 km, bilen bruker 6,5 liter per 100 km og
          drivstoffet koster 20 kr per liter, bruker bilen 16,25 liter.
          Kostnaden blir da 325 kr.
        </p>

        <h2>Vanlige spørsmål</h2>

        <h3>Hva betyr liter per 100 km?</h3>

        <p>
          Det viser hvor mange liter drivstoff bilen bruker for å kjøre
          100 kilometer.
        </p>

        <h3>Hvordan finner jeg kostnad per kilometer?</h3>

        <p>
          Del den totale drivstoffkostnaden på antall kilometer.
        </p>

        <h3>Kan kalkulatoren brukes for diesel og bensin?</h3>

        <p>
          Ja. Skriv inn riktig drivstoffpris per liter.
        </p>
      </section>

      <hr style={{ margin: "50px 0 20px" }} />

      <p style={{ fontSize: "14px", color: "#666" }}>
        Norway Tools – enkle kalkulatorer og nyttige verktøy for Norge.
      </p>
    </main>
  );
}
