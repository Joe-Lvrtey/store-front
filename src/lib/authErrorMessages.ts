const authErrorMap: Record<string, string> = {
  "auth/invalid-credential": "The email or password you entered is incorrect.",
  "auth/user-not-found": "No account was found for that email.",
  "auth/wrong-password": "The password you entered is incorrect.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/email-already-in-use": "An account with that email already exists.",
  "auth/weak-password": "Your password should be at least 6 characters long.",
  "auth/too-many-requests":
    "Too many attempts. Please wait a moment before trying again.",
  "auth/network-request-failed":
    "Network error. Please check your connection and try again.",
  "auth/operation-not-allowed":
    "This sign-in method is not available right now.",
};

export function getAuthErrorMessage(error: unknown): string {
  if (typeof error === "object" && error !== null && "code" in error) {
    const code = (error as { code?: unknown }).code;
    if (typeof code === "string" && authErrorMap[code]) {
      return authErrorMap[code];
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
}
