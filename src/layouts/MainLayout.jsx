import React, { useState, useRef } from "react";
import Button from "../components/Button";
import html2pdf from "html2pdf.js";
import { defaultTemplate } from "../templates/DefaultTemplate";

const MainLayout = () => {
  const [html, setHtml] = useState(defaultTemplate);

  const previewRef = useRef();

  // 🔹 Print (Chrome's built-in print → Save as PDF)
  const handlePrint = () => {
    if (previewRef.current) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`
        <html>
          <head><title>Print PDF</title></head>
          <body>${previewRef.current.innerHTML}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  // 🔹 Download PDF (html2pdf.js)
  const handleDownload = () => {
    if (previewRef.current) {
      html2pdf()
        .from(previewRef.current)
        .set({ margin: 10, filename: "output.pdf" })
        .save();
    }
  };

  return (
    <div className="h-100 p-5 text-bg-white rounded-3">
      {/* Button Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Button isConvert={true} btnName={"Print"} onClick={handlePrint} />
        <Button btnName={"Download"} onClick={handleDownload} />

        {/* <Button btnName={"Settings"} /> */}
      </div>

      {/* PDF Preview */}
      <div
        ref={previewRef}
        className="p-4 border mt-4 bg-white text-dark"
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ minHeight: "300px", border: "1px solid red" }}
      />

      {/* Optional: textarea to edit HTML */}
      <textarea
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        className="w-full mt-3 p-2"
        rows={6}
        placeholder="Paste or edit HTML here..."
      />
    </div>
  );
};

export default MainLayout;
