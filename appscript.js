/*******************************************************
*  Internship Email Automation — Chandrashekharaiah B H
*  Features:
*  ✅ Reads rows from Sheet
*  ✅ Sends email only if "Send?" = Yes
*  ✅ Respects "Scheduled Date" (sends only if date ≤ now)
*  ✅ Supports "default" or custom resume
*  ✅ Marks as "Sent" once delivered
*  ✅ Includes sidebar GUI with Refresh button
*******************************************************/

function sendInternshipEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  // Resume ID mapping by job role
  var resumeMap = {
    "Embedded Sys": "1fgXV2yKbbvejyzetdbMbk0FdaIfBEkm7",
    "IoT Devices": "1fgXV2yKbbvejyzetdbMbk0FdaIfBEkm7",
    "Robotics": "1fgXV2yKbbvejyzetdbMbk0FdaIfBEkm7",
    "AI Solutions": "1fgXV2yKbbvejyzetdbMbk0FdaIfBEkm7",
    "Data Science": "1fgXV2yKbbvejyzetdbMbk0FdaIfBEkm7",
    "Datascience": "1fgXV2yKbbvejyzetdbMbk0FdaIfBEkm7"
  };

  // Default resume ID (for 'default' or blank)
  var defaultResumeId = "1fgXV2yKbbvejyzetdbMbk0FdaIfBEkm7";

  var sentCount = 0;
  var sentCompanies = [];

  for (var i = 1; i < data.length; i++) {
    var sendStatus = data[i][11] ? data[i][11].toString().trim().toLowerCase() : ""; // Column L: "Send?"
    if (sendStatus !== "yes") continue;

    // Scheduled date check (Column M: index 12)
    var scheduleRaw = data[i][12];
    if (scheduleRaw) {
      var scheduleDate = new Date(scheduleRaw);
      var now = new Date();
      if (scheduleDate > now) {
        Logger.log(`⏳ Skipping row ${i + 1}: scheduled for future (${scheduleDate})`);
        continue;
      }
    }

    var recipientName = data[i][0];
    var email = data[i][1];
    var jobRole = data[i][2];
    var companyName = data[i][3];
    var industry = data[i][4];
    var skill1 = data[i][5];
    var skill2 = data[i][6];
    var skill3 = data[i][7];
    var cc = data[i][8] ? data[i][8].toString().trim() : "";
    var bcc = data[i][9] ? data[i][9].toString().trim() : "";
    var resumeChoice = data[i][10] ? data[i][10].toString().trim().toLowerCase() : ""; // Column K: Resume

    if (!email) continue; // skip empty email rows

    // === Select resume ===
    var resumeId = defaultResumeId;
    if (resumeChoice && resumeChoice !== "default") {
      // If user pasted a specific resume file ID
      resumeId = resumeChoice;
    } else if (resumeMap[jobRole]) {
      // Use mapped resume based on job role
      resumeId = resumeMap[jobRole];
    }

    // Try to get the file
    var file;
    try {
      file = DriveApp.getFileById(resumeId);
    } catch (err) {
      Logger.log(`❌ Resume not found for ${jobRole} or invalid ID: ${resumeId}`);
      continue;
    }

    // === Email details ===
    var subject = `Application for ${jobRole} Internship at ${companyName}`;

    var plainBody =
`Dear ${recipientName},

I hope this message finds you well.

I am writing to express my interest in the ${jobRole} internship opportunity at ${companyName}. Your work in the ${industry} domain truly inspires me, and I believe my skills and enthusiasm in Electrical and Electronics Engineering would align well with your team’s goals.

As a B.Tech student in EEE at UVCE, I have gained practical experience through internships at MGIRED (Solar PV Technology) and KPTCL (Substation Equipment and Maintenance).

Some of my notable projects include:
• Variable Frequency Inverter (Atmega328P, Proteus, MATLAB)
• Simple Farmer – IoT Based Farm Control (ESP32, Firebase)
• Vasco da Gama – WiFi Portable Oscilloscope (STM32, Python GUI)

I’m confident my skills in ${skill1}, ${skill2}, and ${skill3} will help support your ongoing work at ${companyName}.

Please find my resume attached.

Warm regards,
Chandrashekharaiah B H
+91 89045 64198
chandrashekharaiah_22eeu009@uvce.ac.in`;

    var htmlBody = `
      <p>Dear <strong>${recipientName}</strong>,</p>
      <p>I hope this message finds you well.</p>
      <p>I am writing to express my interest in the <strong>${jobRole}</strong> internship opportunity at <strong>${companyName}</strong>. Your work in the <em>${industry}</em> field truly inspires me, and I believe my background aligns well with your team's goals.</p>
      <p><strong>Notable projects:</strong></p>
      <ul>
        <li>Variable Frequency Inverter – Atmega328P, Proteus, MATLAB</li>
        <li>Simple Farmer – IoT Based Farm Control – ESP32, Firebase</li>
        <li>Vasco da Gama – WiFi Portable Oscilloscope – STM32, Python GUI</li>
      </ul>
      <p>Technical strengths: ${skill1}, ${skill2}, ${skill3}</p>
      <p>Warm regards,<br>
      <strong>Chandrashekharaiah B H</strong><br>
      +91 89045 64198<br>
      <a href="mailto:chandrashekharaiah_22eeu009@uvce.ac.in">chandrashekharaiah_22eeu009@uvce.ac.in</a></p>`;

    // === Send email ===
    GmailApp.sendEmail(email, subject, plainBody, {
      attachments: [file],
      name: "Chandrashekharaiah B H",
      cc: cc || undefined,
      bcc: bcc || undefined,
      htmlBody: htmlBody
    });

    // === Update Send? column to "Sent"
    sheet.getRange(i + 1, 12).setValue("Sent"); // Column L

    sentCompanies.push(companyName);
    sentCount++;
    Logger.log(`✅ Email sent to ${email} (${companyName})`);
  }

  return { count: sentCount, companies: sentCompanies };
}

/*******************************************************
*   Sidebar UI (Menu + Button)
*******************************************************/
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("📧 Internship Mailer")
    .addItem("Open Email Sender", "showSidebar")
    .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutput(`
    <div style="font-family: Arial; padding: 15px;">
      <h2 style="color:#3367d6;">Internship Email Sender</h2>
      <p>Click below to send all pending emails marked as <b>"Yes"</b> and not yet <b>"Sent"</b>.</p>
      <button 
        style="background-color:#3367d6;color:white;border:none;
               padding:10px 20px;border-radius:6px;cursor:pointer;"
        onclick="sendPending()">🔄 Refresh & Send Emails</button>
      <p id="status" style="margin-top:10px;color:green;"></p>
      <script>
        function sendPending() {
          document.getElementById('status').innerText = 'Sending... please wait';
          google.script.run
            .withSuccessHandler(function(result) {
              var msg = '✅ ' + result.count + ' email(s) sent successfully.';
              if (result.companies.length > 0) {
                msg += '\\nCompanies: ' + result.companies.join(', ');
              }
              document.getElementById('status').innerText = msg;
            })
            .withFailureHandler(function(err) {
              document.getElementById('status').innerText = '❌ Error: ' + err.message;
            })
            .sendInternshipEmails();
        }
      </script>
    </div>
  `).setTitle("Internship Mailer");
  SpreadsheetApp.getUi().showSidebar(html);
}
