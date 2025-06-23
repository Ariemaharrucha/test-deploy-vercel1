import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });

export async function POST(request: Request) {
  const { cvText, jobData, language } = await request.json();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-04-17",
    contents: [
      {
        role: "user",
        parts: [{
          text:
`Generate an **output in valid JSON format** with the following structure:

{
  "coverLetter": "", 
  "compatibility": {
    "percentage": "", 
    "strong_match": "", 
    "experience_level": "", 
    "minor_gap": ""
  }
}

⚠️ Rules:
- "coverLetter": A job application letter written in ${language}, formal but conversational, based on the CV and job listing provided below.
- "percentage": Overall compatibility score between the CV and the job listing (as a number, no % symbol).
- "strong_match": A short paragraph in ${language}, using a formal yet friendly tone and the word "you", explaining the strongest matches between you and the role.
- "experience_level": A short paragraph in ${language}, formal yet friendly, explaining how well your experience aligns with the job requirements.
- "minor_gap": A short paragraph in ${language}, formal yet friendly, mentioning minor gaps or areas you can improve to better fit the position.

📌 The **cover letter** must follow this structure:

<p><strong>[Full Name]</strong><br>
📞 [Phone Number]<br>
📧 [Active Email]</p>

<p>[Location, date/month/year]</p>

<p><strong>To: HR Department of [Company Name]</strong></p>

<p>Dear Hiring Manager, <br>
Paragraph 1: A short introduction, mention the role you’re applying for, and why you're interested.</p>

<p>Paragraph 2: Describe relevant skills and experiences (internships, projects, bootcamps, etc.).</p>

<p>Paragraph 3: Closing paragraph with expectations for interview opportunity and thank you.</p>

<p>Sincerely,<br>
<strong>[Full Name]</strong></p>

📎 Use the following data:

- CV:
${cvText}

- Job Listing:
${JSON.stringify(jobData, null, 2)}

⚠️ Important
- Do not include placeholders like [Company Name] or [Job Title] in the final output.
- Output must be valid JSON as per the structure above.
- Do not use HTML tags such as <strong>, <em>, etc., in the compatibility section (strong_match, experience_level, minor_gap).`
        }]
      }
    ],
  });

  const result = response.text;
  let responseJson = result?.replace(/```json|```/g, "").trim();

  return new Response(responseJson, {
    headers: { "Content-Type": "application/json" },
  });
}
