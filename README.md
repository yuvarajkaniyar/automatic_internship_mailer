# 📧 **Internship Email Automation – How to Customize for Your Own Use**

This guide explains **how any user can copy the script, edit the Google Sheet, replace personal details, and make this automatic internship mailer work for themselves.**


# **Steps to Use This Automatic Internship Mailer**

## **1. Make a Copy of the Google Sheet**

Copy the template sheet:
👉 [https://docs.google.com/spreadsheets/d/15Tktvk5ce0y8D3vPN74iD-ZavJzTyTGyJiaXbbSPJSc/edit?gid=0#gid=0](https://docs.google.com/spreadsheets/d/15Tktvk5ce0y8D3vPN74iD-ZavJzTyTGyJiaXbbSPJSc/edit?gid=0#gid=0)

---

## **2. Open Apps Script**

Inside your copied Google Sheet:

* Go to **Extensions → Apps Script**
* Copy everything
* Paste the complete AppScript you receive from ChatGPT
* Now paste on appscript and save it

---

## **3. Customize the Email Content**

* Upload **your resume file** to the chat
* Tell ChatGPT: **“Update email content based on my resume”**
* ChatGPT will rewrite:

  * Your introduction
  * Skills
  * Projects
  * Signature (Name, Phone, Email)
* Copy the updated script back into Apps Script.

---

## **4. Update Resume File IDs**

In your Drive:

* Open your resume
* Click **Share → Copy link**
* Extract the **file ID** (the long text after `/d/`)
* Replace the resume IDs in the script under:

```js
resumeMap = { ... };
defaultResumeId = "FILE_ID";
```

---

## **5. Save the Script**

Click **Save** in Apps Script.

---

## **6. Reload the Google Sheet**

After saving the script:

* Reload the sheet
* A new menu will appear at the top:
  **📧 Internship Mailer**

---

## **7. Use the Mail Sender**

* Click **📧 Internship Mailer → Open Email Sender**
* A sidebar will open
* Click **“Refresh & Send Emails”**

Emails will be sent automatically for rows where:

* **Send? = Yes**
* **Scheduled Date ≤ today**
* Email is not yet marked as “Sent”

---

