import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. Fetch external API
    const res = await fetch(
      "https://backend.engineerhub.in/api/v1/getHiringByOpportunityType/?search=&opportunityType=Job&pageNo=1&limit=100"
    );
    if (!res.ok) throw new Error("Failed to fetch external API");

    const data = await res.json();

    // Return response in correct format
    return NextResponse.json(
      {
        success: true,
        message: "Updated 100 job records in Firestore",
        data: data.data, // sending the fetched data
      },
      { status: 200 } // correct way to set status
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
