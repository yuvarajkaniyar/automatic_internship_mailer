# 📧 Automatic Internship Mailer – User Guide

This guide explains how to set up and use the **Automatic Internship Mailer** project.

## ⚠️ Important Email & Postmaster Guidelines

This tool automates internship outreach emails. Improper usage may result in:

* Emails being marked as spam
* Reduced Gmail sender reputation
* Temporary Gmail sending restrictions
* Postmaster warnings
* Lower recruiter response rates

### Recommended Best Practices

✅ Send emails only to relevant recruiters, HRs, and hiring managers

✅ Personalize emails whenever possible

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

# 1. Make a Copy of the Google Sheet Template

**Do NOT create a new spreadsheet manually.**

This project is designed to work with the provided Google Sheet template, which already contains the required columns, formatting, formulas, and structure expected by the Apps Script.

### Steps

1. Open the template sheet:

   https://docs.google.com/spreadsheets/d/15Tktvk5ce0y8D3vPN74iD-ZavJzTyTGyJiaXbbSPJSc/edit?gid=0#gid=0

2. Click:

   **File → Make a Copy**

3. Give the spreadsheet a name of your choice.

4. Save the copied spreadsheet to your Google Drive.

5. Use this copied spreadsheet for the remaining setup process.

### Important

The Apps Script expects the exact column structure provided in the template. Modifying, deleting, or renaming columns may cause the mailer to malfunction.

Always start by making a copy of the provided template instead of creating a new spreadsheet from scratch.

---

# 2. Open Google Apps Script

Inside your copied spreadsheet:

1. Open **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Copy the complete Apps Script code from this repository
4. Paste it into the Apps Script editor
5. Save the project

---

# 3. Customize the Email Content

The default email template is provided as an example and should be customized before sending emails.

You can:

* Update your introduction
* Add your skills
* Add your projects
* Update your education details
* Update your contact information
* Update your signature

A simple way is to upload your resume to ChatGPT and ask:

> "Update the internship email template based on my resume."

Then replace the email template section in the script with the generated content.

---

# 4. Configure Resume File IDs

Upload your resume(s) to Google Drive.

For each resume:

1. Open the file in Google Drive
2. Click **Share**
3. Click **Copy Link**
4. Extract the File ID

Example:

https://drive.google.com/file/d/1ABCDEF123456789/view

File ID:

1ABCDEF123456789

Replace the IDs in the script:

```javascript
const resumeMap = {
  ...
};

const defaultResumeId = "YOUR_FILE_ID";
```

If you use multiple resumes for different roles, update the `resumeMap` accordingly.

---

# 5. Save and Authorize the Script

After updating the script:

1. Click **Save**
2. Run the setup function once
3. Review the requested permissions
4. Grant authorization

The script requires permission to:

* Read spreadsheet data
* Access Google Drive files
* Send emails through Gmail

Without authorization, emails cannot be sent.

---

# 6. Reload the Spreadsheet

After saving and authorizing:

1. Refresh the Google Sheet
2. Wait a few seconds

A new menu should appear:

**📧 Internship Mailer**

If the menu does not appear, refresh the page again.

---

# 7. Prepare Your Email List

Fill the spreadsheet with recruiter information.

Typical fields include:

* Recruiter Name
* Company Name
* Email Address
* Job Role
* Industry
* Skills
* Resume Selection
* Scheduled Date
* Send? (Yes/No)

Before sending:

* Verify email addresses
* Check spelling
* Confirm recruiter relevance
* Ensure resumes are correctly mapped

---

# 8. Send Emails

Open:

**📧 Internship Mailer → Open Email Sender**

The sidebar will appear.

Click:

**Refresh & Send Emails**

The script automatically sends emails only when:

* Send? = Yes
* Scheduled Date ≤ Today
* Email Address is valid
* Status is not already marked as Sent

This prevents accidental duplicate emails.

---

# 9. Monitor Results

After sending:

* Status is updated automatically
* Sent emails are marked
* Failed emails are recorded
* Timestamps are stored for tracking

You can review the sheet anytime to see what has already been sent.

---

# 10. Recommended Workflow

1. Collect recruiter information
2. Verify email addresses
3. Upload resumes
4. Configure resume IDs
5. Customize email templates
6. Test with 1–2 emails
7. Send small batches
8. Monitor responses
9. Follow up professionally when necessary

---

# Need Help?

If you have any questions, setup issues, bug reports, feature requests, or suggestions regarding this project, feel free to connect with me on LinkedIn.

I will try my best to help and respond whenever possible.

LinkedIn:
https://www.linkedin.com/in/yuvaraj-kaniyar/

GitHub Repository:
https://github.com/yuvarajkaniyar/automatic_internship_mailer

---

# Disclaimer

This project is intended for educational and professional internship outreach purposes only.

Users are responsible for complying with:

* Gmail sending policies
* Company recruitment guidelines
* Applicable anti-spam regulations
* Professional communication standards

Excessive, irrelevant, or abusive bulk emailing may affect account reputation and email deliverability.

Use this tool responsibly.
