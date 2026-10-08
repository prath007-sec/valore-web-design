import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, website, projectType, budget, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // Access key is kept securely on the server only, never exposed to clients
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
      "94fc2fd5-4066-49f4-b618-58e6512698a8";

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("subject", `[VALORE ARCHITECTURE SPEC] New inquiry from ${name}`);
    formData.append("from_name", name);
    formData.append("email", email);
    formData.append("brand_website", website || "N/A");
    formData.append("project_scope", projectType || "General Web Architecture");
    formData.append("budget_range", budget || "Not specified");
    formData.append("message", message || "No additional notes provided.");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Specification successfully received.",
      });
    }

    return NextResponse.json(
      { success: false, message: data.message || "Failed to submit inquiry." },
      { status: 500 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please email contact@valorewebdesign.com directly." },
      { status: 500 }
    );
  }
}
