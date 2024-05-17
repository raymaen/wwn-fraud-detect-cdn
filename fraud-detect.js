!(function () {
  var e;
  if (
    "true" ===
    ((e = "wwn_ppc_fraud_detector"),
    new URLSearchParams(window.location.search).get(e))
  ) {
    const e = window.location.hostname.replace(/^www\./, "");
    fetch(
      `https://ppc-fraud-detector.vercel.app/api/v1/detector?domain=${encodeURIComponent(
        e
      )}`
    )
      .then((e) => e.json())
      .then((e) => console.log("Response from fraud detector:", e))
      .catch((e) =>
        console.error("Error sending request to fraud detector:", e)
      );
  }
})();
