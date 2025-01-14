"use client";

import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

const PrintButton = () => {
  const handlePrint = () => {
    if (typeof window === 'undefined') return;

    const content = document.getElementById('letterContent');

    if (!content) {
      alert('Unable to find letter content. Please ensure the letter is loaded.');
      return;
    }

    const printWindow = window.open('', '_blank');

    if (!printWindow) {
      alert('Please allow pop-ups to print the letter');
      return;
    }

    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Business Letter</title>
          <meta charset="utf-8">
          <style>
            @page {
              size: A4;
              margin: 10mm;
            }

            body {
              font-family: Arial, sans-serif;
              font-size: 12px;
              line-height: 1.5;
              color: #000;
              margin: 0;
              padding: 0;
              width: 210mm;
              height: 297mm;
              overflow: hidden;
            }

            .container {
              max-width: 190mm;
              margin: 0 auto;
              background: white;
            }

            .header {
              background-color: #cce7ff !important;
              padding: 1rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 1rem;
            }

            .logo {
              width: 48px;
              height: 48px;
              background: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 20px;
            }

            .title {
              font-size: 20px;
              font-weight: 600;
              letter-spacing: 0.05em;
            }

            .content {
              padding: 1rem;
            }

            .address {
              display: flex;
              justify-content: space-between;
              margin-bottom: 1rem;
            }

            .contact-details {
              margin-bottom: 0.75rem;
            }

            .letter-body {
              margin-bottom: 1rem;
              page-break-inside: avoid;
            }

            .signature-block {
              display: flex;
              justify-content: space-between;
              margin-top: 1rem;
              page-break-inside: avoid;
            }

            .signature {
              font-family: serif;
              font-style: italic;
              font-size: 14px;
              color: #4B5563;
              margin-top: 0.5rem;
            }

            p {
              margin-bottom: 0.5rem;
              word-wrap: break-word;
            }

            @media print {
              body {
                width: 210mm;
                height: 297mm;
              }

              .header {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                background-color: #cce7ff !important;
              }

              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">ED</div>
              <div class="title">EXPERIENCE INDEX</div>
              <div class="logo" style="color: #0D9488;">LS</div>
            </div>
            
            <div class="content">
              <div class="address">
                <div class="contact-details">
                  <h2 style="margin: 0 0 0.5rem 0; font-size: 1rem;">Helene Paquet</h2>
                  <p style="margin: 0.25rem 0;">HR Manager</p>
                  <p style="margin: 0.25rem 0;">123 Anywhere St., Any City</p>
                  <p style="margin: 0.25rem 0;">123-456-7890</p>
                </div>
                <div>15 Dec 2030</div>
              </div>

              <div class="letter-body">
                <p>Dear Helena,</p>
                ${
                  content.querySelector('.space-y-6')
                    ?.innerHTML || '' // Ensure only the dynamic letter body content is fetched
                }
              </div>

              <div class="signature-block">
                <div>
                  <p style="margin-bottom: 0.25rem;">Sincerely,</p>
                  <div class="signature">Estelle</div>
                  <p style="margin: 0; font-weight: 500;">Estelle Darcy</p>
                </div>
                <div style="text-align: right;">
                  <p style="margin: 0.25rem 0;">s: @reallygreatsite</p>
                  <p style="margin: 0.25rem 0;">e: hello@reallygreatsite.com</p>
                  <p style="margin: 0.25rem 0;">w: reallygreatsite.com</p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();

    setTimeout(() => {
      printWindow.focus();
      printWindow.print();

      printWindow.onafterprint = () => {
        printWindow.close();
      };
    }, 1000);
  };

  return (
    <Button
      onClick={handlePrint}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700"
    >
      <Printer className="w-4 h-4 mr-2" />
      Print Letter
    </Button>
  );
};

export default PrintButton;
