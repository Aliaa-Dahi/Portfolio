const API_URL =
  "https://aliaa-dahi-profile-api.vercel.app/admin/aliaamohamaddahi@gmail.com";

export type Admin = {
  _id: string;
  name: string;
  email: string;
  title: string;
  skills: string[];
  description: string;
  profileImage: string;
  github: string;
  linkedIn: string;
  resumeUrl: string;
};

type AdminResponse = {
  state: number;
  status: string;
  data: Admin[];
};

export async function getAdmin(): Promise<Admin> {
  const response = await fetch(API_URL, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch admin profile: ${response.status}`);
  }

  const result: AdminResponse = await response.json();

  if (result.state !== 200 || !result.data?.[0]) {
    throw new Error("Invalid admin profile response");
  }

  return result.data[0];
}
