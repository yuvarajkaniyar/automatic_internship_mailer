# 📧 Automatic Internship Mailer – User Guide

This guide is for users of the GitHub project:

**Automatic Internship Mailer**
by Yuvaraj K

Before using this project, please read the following precautions carefully.

## ⚠️ Important Email & Postmaster Guidelines

This tool automates internship outreach emails. Improper usage may result in:

* Emails being marked as spam
* Reduced Gmail sender reputation
* Temporary Gmail sending restrictions
* Postmaster warnings
* Lower recruiter response rates

### Recommended Best Practices

✅ Send only to relevant recruiters, HRs, and hiring managers

✅ Personalize your emails whenever possible

✅ Verify email addresses before sending

✅ Start with small batches (10–20 emails)

✅ Review generated emails before mass sending

✅ Ensure your resume matches the target role

✅ Respect company recruitment policies

❌ Do not send hundreds of emails at once

❌ Do not repeatedly email the same recruiter

❌ Do not use misleading subject lines

❌ Do not attach unnecessary files

Following these practices improves inbox delivery and reduces the chance of spam filtering.

---

# 1. Get the Project

Clone or download the repository:

```bash
git clone https://github.com/yuvarajkaniyar/automatic_internship_mailer.git
```

Or download the ZIP and extract it.

---

# 2. Create Your Google Sheet

Make a copy of the internship tracker sheet provided with the project.

The sheet stores:

* Company Name
* Recruiter Name
* Email
* Job Role
* Industry
* Skills
* Resume Selection
* Scheduled Date
* Send? (Yes/No)
* Status

---

# 3. Open Google Apps Script

Inside the copied spreadsheet:

1. Open **Extensions → Apps Script**
2. Remove existing code
3. Paste the project App Script code
4. Save the project

---

# 4. Customize the Email Template

Replace:

* Name
* College
* Degree
* Graduation Year
* Skills
* Projects
* Contact Details

You can upload your resume to ChatGPT and ask:

> Update internship mail content based on my resume

Then replace the email template section with the generated content.

---

# 5. Configure Resume Files

Upload your resumes to Google Drive.

For each resume:

1. Open the file
2. Click Share
3. Copy Link
4. Extract the file ID

Example:

```text
https://drive.google.com/file/d/1ABCDEF123456789/view
```

File ID:

```text
1ABCDEF123456789
```

Update:

```javascript
const resumeMap = {
  ...
};

const defaultResumeId = "...";
```

---

# 6. Save & Authorize

After saving:

1. Run the setup function once
2. Grant Google permissions
3. Accept required authorization prompts

This allows the script to:

* Read spreadsheet data
* Access Drive files
* Send emails through Gmail

---

# 7. Reload the Spreadsheet

Refresh the sheet.

You should now see:

```text
📧 Internship Mailer
```

in the menu bar.

---

# 8. Send Emails

Open:

```text
📧 Internship Mailer
→ Open Email Sender
```

Click:

```text
Refresh & Send Emails
```

The system automatically sends emails only when:

* Send? = Yes
* Scheduled Date ≤ Today
* Status ≠ Sent

---

# 9. Monitor Results

After sending:

* Status column is updated
* Sent timestamp is recorded
* Failed emails can be reviewed and retried

---

# 10. Recommended Workflow

1. Collect recruiter emails
2. Verify email validity
3. Upload resumes
4. Customize templates
5. Test with 1–2 emails
6. Send small batches
7. Track responses
8. Follow up professionally

---

## Disclaimer

This project is intended for educational and professional internship outreach purposes. Users are responsible for complying with Gmail policies, company recruitment guidelines, and applicable anti-spam regulations. Excessive or irrelevant bulk emailing may affect account reputation and email deliverability.

## Need Help?

If you have any questions, encounter any issues while setting up the project, or have suggestions for improvements, feel free to connect with me on LinkedIn.

🔗 LinkedIn: (https://www.linkedin.com/in/yuvaraj-kaniyar/)
I will try my best to help and respond whenever possible.
